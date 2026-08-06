import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDataContext } from "../../Context/DataContext";
import { Button } from "@material-tailwind/react";
import SignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";
import LoadingOverlay from "../LoadingOverlay";
import { useParams } from "react-router-dom";

const Mandate = () => {
  const { submitMandate, loading } = useDataContext();

  const { name } = useParams(); // Get the name from the URL (if available)

  const [formData, setFormData] = useState({
    organization_name: "",
    contact_person_name: "",
    to: name ? decodeURIComponent(name) : "", // Autofill if name exists
    subject: "Appointment as Exclusive Insurance Consultant and Broker",
    email: "",
    address: "",
    contact: "",
    sign: null,
  });

  const [isCanvasOpen, setIsCanvasOpen] = useState(false); // To toggle the signature canvas visibility
  const [isSignatureSaved, setIsSignatureSaved] = useState(false); // To check if signature is saved
  const fileInputRef = useRef(null); // Ref for file input
  const signaturePadRef = useRef(null); // Ref for signature pad (SignatureCanvas)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, sign: file });
      updateFileInput(file);
    }
  };

  const handleSignatureToggle = () => {
    setIsCanvasOpen(!isCanvasOpen); // Toggle the canvas visibility
  };

  const handleSignatureSave = () => {
    if (signaturePadRef.current.isEmpty()) {
      alert("Please draw your signature first!");
      return;
    }

    // Convert the drawn signature into a file or Data URL
    const signatureDataURL = signaturePadRef.current
      .getTrimmedCanvas()
      .toDataURL();
    const signatureFile = dataURLToFile(signatureDataURL, "signature.png");
    setFormData({ ...formData, sign: signatureFile });

    // Manually trigger the file input change event
    updateFileInput(signatureFile);

    setIsSignatureSaved(true); // Mark signature as saved

    // Close the signature canvas after saving
    setIsCanvasOpen(false);
  };

  const updateFileInput = (file) => {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInputRef.current.files = dataTransfer.files;
  };

  const dataURLToFile = (dataURL, filename) => {
    const [metadata, base64Data] = dataURL.split(",");
    const mimeType = metadata.match(/:(.*?);/)[1];
    const binaryData = atob(base64Data);
    const byteArray = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      byteArray[i] = binaryData.charCodeAt(i);
    }
    return new File([byteArray], filename, { type: mimeType });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.sign) {
      toast.error("Please upload or draw your signature before submitting.");
      return;
    }

    // Prepare FormData
    const form = new FormData();
    form.append("organization_name", formData.organization_name);
    form.append("contact_person_name", formData.contact_person_name);
    form.append("email", formData.email);
    form.append("address", formData.address);
    form.append("mobile_number", formData.contact);

    if (formData.sign instanceof File) {
      form.append("signature_file", formData.sign);
    } else if (typeof formData.sign === "string") {
      form.append("signature_data", formData.sign);
    }

    form.append("to", formData.to);
    form.append("subject", formData.subject);

    try {
      // Call submitMandate and handle success
      const result = await submitMandate(form);

      if (result) {
        // If validation errors exist (result is an array), show them in Toastify
        result.forEach((msg) => toast.error(msg)); // Display each error
      } else {
        toast.success("Mandate created successfully!");
        setFormData({
          organization_name: "",
          contact_person_name: "",
          email: "",
          address: "",
          contact: "",
          sign: null,
          to: "", // Add this
        });

        // Reset the signature pad and file input after submission
        if (signaturePadRef.current) {
          signaturePadRef.current.clear();
        }

        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }

        setIsSignatureSaved(false); // Reset the signature saved state
      }
    } catch (error) {
      // Handle any other errors if needed
      toast.error(error.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 bg-white border border-gray-300 shadow-lg">
      <LoadingOverlay loading={loading} />

      <img
        src="https://www.notioninsurance.in/assets/images/header/logo_nib.png"
        alt="Company logo"
        className="w-full  mx-auto"
      />

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="mt-8 px-4 w-full"
      >
        <h2 className="text-xl text-center font-bold mb-4 underline">
          MANDATE LETTER
        </h2>

        <h6 className=" text-right ">
          {" "}
          Date :{" "}
          {(() => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
          })()}
        </h6>

        <p className="text-left mb-4">
          <label className="text-base">TO , </label> <br />
          {/* TO,<br /> */}
          <select
            name="to"
            className="pt-4 border-b-2 border-black pb-4  ml-[-5px] "
            value={formData.to}
            onChange={handleChange}
            disabled={!!name}
          >
            <option value=" ">Select a recipient </option>
            <option value="Arun Gupta">Arun Gupta</option>
            <option value="Avinash Gupta">Avinash Gupta</option>
            <option value="Bharat Bhushan Shrivastava">
              Bharat Bhushan Shrivastava
            </option>
            <option value="Rajan Singh Baghel">Rajan Singh Baghel</option>
            <option value="Manoj Rathod">Manoj Rathod</option>
          </select>
        </p>

        <p className="text-left flex w-full justify-between mb-4">
          <label className="text-base font-bold w-1/4 md:w-[14%] lg:w-[15%] xl:w-[10%]">
            Subject:{" "}
          </label>
          <input
            type="text"
            name="subject"
            required
            className="border-b-2 font-bold border-black w-full ml-0 focus:outline-none focus:border-b-blue-500 text-sm"
            value={formData.subject}
            onChange={handleChange}
            // placeholder="APPOINTMENT AS INSURANCE EXCLUSIVE CONSULTANT AND BROKER"
          />
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            Dear Sir , <br />
            We are pleased to formally confirm your appointment as our exclusive
            insurance consultant and broker, effective immediately. This
            appointment applies to all our insurance needs and underscores the
            trust we place in your expertise.
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            As our representative, you have full authority to negotiate with
            insurers and secure our insurance program with the most suitable
            companies, ensuring we receive optimal coverage under the best
            possible terms.
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            This letter serves as your official mandate to gather any necessary
            information, including but not limited to data prior to the
            effective date of your appointment, claims statistics, policy
            coverage details, and relevant surveys.
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            Please note that we will not hold you accountable for any errors or
            omissions related to our previous insurance program or the
            information we provided. Furthermore, this letter nullifies any
            prior broker appointments made before this date, solidifying your
            role with us.
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            We hereby authorize all relevant parties to promptly release any
            information concerning our insurance program to Notion Insurance
            Broker, recognizing the importance of transparency and collaboration
            in our partnership
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">
            Thank you for your anticipated support and cooperation. We look
            forward to a successful relationship.
          </label>
        </p>

        <p className="text-left mb-4">
          <label className="text-base">Sincerely,</label>
        </p>

        <p className="text-left flex md:w-[60vw] justify-between w-full xl:w-[30vw] mb-4 ">
          <label className="text-base min-w-[170px] md:w-1/5 lg:w-[20%] xl:w-[25%] whitespace-nowrap">
            Organization Name{" "}
          </label>

          <input
            type="text"
            name="organization_name"
            required
            className="border-b-2 w-full border-black ml-2 focus:outline-none focus:border-b-blue-500 xl:w-[85%] text-sm"
            value={formData.organization_name}
            onChange={handleChange}
          />
        </p>

        <p className="text-left flex md:w-[60vw] justify-between w-full xl:w-[30vw] mb-4">
          <label className="text-base min-w-[170px] md:w-1/5 lg:w-[20%] xl:w-[25%] whitespace-nowrap">
            Contact Person Name{" "}
          </label>

          <input
            type="text"
            name="contact_person_name"
            required
            className="border-b-2 w-full border-black ml-2 focus:outline-none focus:border-b-blue-500 xl:w-[85%] text-sm"
            value={formData.contact_person_name}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 md:w-[60vw] xl:w-[30vw] flex justify-between">
          <label className="text-base min-w-[170px] md:w-1/5 lg:w-[20%] xl:w-[25%] whitespace-nowrap">
            Address{" "}
          </label>
          {/* <label className="text-base md:w-1/6 w-1/4 lg:w-[15%] xl:w-[20%]">
            Address:{" "}
          </label> */}
          <input
            type="text"
            name="address"
            required
            className="border-b-2 border-black focus:outline-none focus:border-b-blue-500 ml-2 w-full xl:w-[85%] text-sm"
            value={formData.address}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 w-full md:w-[60vw] xl:w-[30vw] flex justify-between">
          <label className="text-base min-w-[170px] md:w-1/5 lg:w-[20%] xl:w-[25%] whitespace-nowrap">
            Mobile Number{" "}
          </label>

          <input
            type="text"
            name="contact"
            required
            className="border-b-2 border-black focus:outline-none focus:border-b-blue-500 ml-2 w-full xl:w-[85%] text-sm"
            value={formData.contact}
            onChange={handleChange}
          />
        </p>

        <p className="text-left mb-4 w-full md:w-[60vw] xl:w-[30vw] flex justify-between">
          <label className="text-base min-w-[170px] md:w-1/5 lg:w-[20%] xl:w-[25%] whitespace-nowrap">
            Email{" "}
          </label>

          <input
            type="email"
            name="email"
            required
            className="border-b-2 border-black focus:outline-none focus:border-b-blue-500 ml-2 w-full xl:w-[85%] text-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </p>

        <div className="flex flex-col">
          
          <div className="mb-4 text-left flex md:w-[60vw] items-start lg:justify-between w-full xl:w-[30vw]">
            <label className="text-base min-w-[170px] md:w-1/5 lg:w-[20%] xl:w-[25%] whitespace-nowrap">
              Signature
            </label>

            <div className="flex flex-col ">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="ml-2 w-full lg:block hidden mt-2"
                placeholder="Take a clear photo of your signature and upload it here"
              />
              <p className="text-sm w-96 text-red-600 font-bold mt-1  hidden md:block">
                Take a clear photo of your signature and Upload it , or <br />{" "}
                Use your mobile device to sign manually.
              </p>
            </div>

            <Button
              type="button"
              className="px-4 py-2 flex lg:hidden border w-fit bg-blue-600 text-white"
              onClick={handleSignatureToggle}
            >
              {isCanvasOpen ? "Close" : "Make Signature"}
            </Button>
          </div>
          
          {/* Signature Pad - Visible only when isCanvasOpen is true */}
          {isCanvasOpen && (
            <div className="mt-4">
              {/* SignaturePad.js */}
              <SignatureCanvas
                ref={signaturePadRef}
                canvasProps={{
                  className: "signature-canvas border-2 mb-2  border-gray-400",
                  willReadFrequently: true, // Set the willReadFrequently attribute for performance optimization
                }}
              />
              {/* Save Signature Button */}
              <div className="flex md:w-full justify-between pb-5">
                <div>
                  <Button
                    type="button"
                    onClick={() => signaturePadRef.current.clear()}
                    className="mt-2 text-sm py-2 px-4"
                  >
                    Clear
                  </Button>
                </div>
                {isCanvasOpen && (
                  <Button
                    type="button"
                    className="mt-2 bg-green-600 text-white py-2 px-4"
                    onClick={handleSignatureSave}
                  >
                    Save Signature
                  </Button>
                )}
              </div>
            </div>
          )}
          {/* Show uploaded signature info */}
          {formData.sign && (
            <div className="my-2">
              <p className="text-base {text-green-500}">
                {isSignatureSaved
                  ? "Signature saved successfully!"
                  : "Signature uploaded!"}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="bg-blue-600">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Mandate;

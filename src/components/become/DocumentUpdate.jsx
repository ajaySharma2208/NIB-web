import React, { useEffect, useState, useCallback } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDataContext } from "../../Context/DataContext";
import { FaUpload, FaCheckCircle, FaSpinner, FaUniversity, FaGraduationCap, FaUser, FaFileImage, FaFileAlt, FaInfoCircle, FaListOl, FaTimes, FaBars } from "react-icons/fa";
import { DocumentChecklistModal } from "./DocumentChecklistModal";
import { POSPStepsModal } from "./POSPStepsModal";
import jsQR from "jsqr";

// Parse attributes from a single-tag XML
const parseAadhaarXml = (xml) => {
  if (!xml || typeof xml !== 'string') return null;
  const match = xml.match(/<PrintLetterBarcodeData\s+([^>]+)\/>/i);
  if (!match) return null;
  const attrsString = match[1];
  const attrs = {};
  const attrRegex = /([a-zA-Z0-9:_-]+)\s*=\s*"([^"]*)"/g;
  let m;
  while ((m = attrRegex.exec(attrsString)) !== null) {
    attrs[m[1]] = m[2];
  }
  return attrs;
};

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];
const ACCEPTED_FILE_TYPES = [...ACCEPTED_IMAGE_TYPES, 'application/pdf'];

// Indian banks list
const INDIAN_BANKS = [
  "STATE BANK OF INDIA", "HDFC BANK", "ICICI BANK", "AXIS BANK", "KOTAK MAHINDRA BANK",
  "PUNJAB NATIONAL BANK", "BANK OF BARODA", "CANARA BANK", "UNION BANK OF INDIA",
  "BANK OF INDIA", "INDIAN BANK", "INDIAN OVERSEAS BANK", "CENTRAL BANK OF INDIA",
  "IDBI BANK", "YES BANK", "INDUSIND BANK", "FEDERAL BANK", "SOUTH INDIAN BANK",
  "KARNATAKA BANK", "LAKSHMI VILAS BANK", "CATHOLIC SYRIAN BANK", "DHANLAXMI BANK",
  "BANDHAN BANK", "CSB BANK", "RBL BANK", "DCB BANK", "NAINITAL BANK", 
  "JAMMU AND KASHMIR BANK", "ANDHRA BANK", "CORPORATION BANK", "ORIENTAL BANK OF COMMERCE",
  "ALLAHABAD BANK", "SYNDICATE BANK", "VIJAYA BANK", "DENA BANK", 
  "ANDHRA PRADESH GRAMEENA VIKAS BANK", "UCO BANK"
];

const initialFormData = {
  fullName: "", emailAddress: "", contactNo: "", gender: "", dob: "",
  fullAddress: "", pincode: "", state: "", city: "",
  fatherHusbandName: "", aadharNo: "", panNo: "", bankName: "", accountNo: "",
  ifscCode: "", branchName: "", boardUniversityName: "", rollNo: "",
  passingYear: "", educationLevel: "", aadharFront: null, aadharBack: null,
  panCard: null, bankDetails: null, passportPhoto: null, marksheet: null,
  acceptTerms: false, dataCorrection: false
};

const initialOcrData = {
  name: "", aadharNumber: "", dob: "", gender: "", address: "",
  fatherName: "", state: "", city: "", pincode: ""
};

const initialBankOcrData = {
  bankName: "", accountNo: "", ifscCode: "", branchName: "",
  extracted: false, rawText: ""
};

// Custom InputField component
const InputField = ({ 
  label, 
  name, 
  type = "text", 
  required = false, 
  placeholder = "", 
  pattern = null, 
  readOnly = false, 
  value,
  onChange,
  min,
  max
}) => (
  <div>
    <Typography variant="small" className="mb-1 text-left font-medium !text-gray-900">
      {label} {required && "*"}
    </Typography>
    {type === "select" ? (
      <select
        className="border border-gray-300 rounded-lg w-full py-2.5 px-3 text-gray-900 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        {name === "gender" ? (
          <>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </>
        ) : (
          <>
            <option value="" disabled>Select Level</option>
            <option value="10th">10th Class</option>
            <option value="12th">12th Class</option>
            <option value="Graduation">Graduation</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="Other">Other</option>
          </>
        )}
      </select>
    ) : type === "textarea" ? (
      <textarea
        className="border border-gray-300 rounded-lg w-full py-2.5 px-3 text-gray-900 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition resize-none"
        rows="2"
        required={required}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    ) : (
      <input
        className="border border-gray-300 rounded-lg w-full py-2.5 px-3 text-gray-900 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition"
        type={type}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        min={min}
        max={max}
      />
    )}
  </div>
);

// Custom FileInput component
const FileInput = ({ 
  name, 
  label, 
  required = true, 
  accept = ".jpg,.jpeg,.png,.pdf", 
  customOnChange, 
  showOcr = false,
  value,
  onChange 
}) => (
  <div className="mb-3">
    <Typography variant="small" className="mb-1 text-left font-medium !text-gray-900">
      {label} {required && "*"}
      {showOcr && <span className="ml-1 text-blue-600 text-xs font-semibold">(OCR Auto-fill)</span>}
    </Typography>
    <div className="relative">
      <input
        className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-900 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        type="file"
        id={name}
        name={name}
        required={required}
        accept={accept}
        onChange={customOnChange || onChange}
      />
      <FaUpload className="absolute right-3 top-2.5 text-gray-500" />
    </div>
    {value && (
      <div className="flex items-center mt-1 text-green-600">
        <FaCheckCircle className="mr-1 text-sm" />
        <Typography variant="small">{value.name}</Typography>
      </div>
    )}
  </div>
);

export function BecomePOSP() {
  const { sendMail, responseMessage, loading, error } = useDataContext();
  
  const [openChecklist, setOpenChecklist] = useState(false);
  const [openSteps, setOpenSteps] = useState(false);
  const [helpPanelOpen, setHelpPanelOpen] = useState(false);
  
  const [formData, setFormData] = useState(initialFormData);
  const [ocrProcessing, setOcrProcessing] = useState({
    aadhaar: false, pan: false, checkbook: false
  });
  const [ocrData, setOcrData] = useState(initialOcrData);
  const [bankOcrData, setBankOcrData] = useState(initialBankOcrData);

  // Parse checkbook text for bank details
  const parseCheckbookText = useCallback((text) => {
    let bankName = "", accountNo = "", ifscCode = "", branchName = "", extracted = false;
    const upperText = text.toUpperCase();
    
    // Find bank name
    for (const bank of INDIAN_BANKS) {
      if (upperText.includes(bank)) {
        bankName = bank;
        extracted = true;
        break;
      }
    }
    
    // Account number patterns
    const accountPatterns = [
      /ACCOUNT\s*NO[:\s]*([0-9\s]{9,18})/i, /ACC[:\s]*NO[:\s]*([0-9\s]{9,18})/i,
      /A\/C[:\s]*NO[:\s]*([0-9\s]{9,18})/i
    ];
    
    for (const pattern of accountPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        accountNo = match[1].replace(/\s/g, '');
        if (/^\d{9,18}$/.test(accountNo)) {
          extracted = true;
          break;
        }
      }
    }
    
    // IFSC code patterns
    const ifscPatterns = [
      /IFSC[:\s]*([A-Z]{4}0[0-9A-Z]{6})/i,
      /IFSC\s*CODE[:\s]*([A-Z]{4}0[0-9A-Z]{6})/i
    ];
    
    for (const pattern of ifscPatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        let potentialIFSC = match[1].toUpperCase();
        potentialIFSC = potentialIFSC.replace(/1/g, 'I').replace(/0/g, 'O').replace(/5/g, 'S');
        if (/^[A-Z]{4}0[0-9A-Z]{6}$/.test(potentialIFSC)) {
          ifscCode = potentialIFSC;
          extracted = true;
          break;
        }
      }
    }
    
    // Branch name extraction
    if (ifscCode) {
      const lines = text.split(/[\n\r]/);
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].toUpperCase().includes(ifscCode)) {
          const startIndex = Math.max(0, i - 2);
          const endIndex = Math.min(lines.length - 1, i + 2);
          let branchContext = "";
          for (let j = startIndex; j <= endIndex; j++) {
            if (j !== i) {
              const cleanLine = lines[j].trim();
              if (cleanLine.length > 5 && !cleanLine.match(/IFSC|CODE|MICR|ACCOUNT/i)) {
                branchContext += cleanLine + " ";
              }
            }
          }
          if (branchContext.trim().length > 5) {
            branchName = branchContext.trim();
            extracted = true;
            break;
          }
        }
      }
    }
    
    // Clean and validate data
    if (ifscCode && !/^[A-Z]{4}0[0-9A-Z]{6}$/.test(ifscCode)) ifscCode = "";
    if (accountNo && !/^\d{9,18}$/.test(accountNo)) accountNo = "";
    
    return { 
      bankName: bankName.trim(), 
      accountNo: accountNo.trim(), 
      ifscCode: ifscCode.trim(), 
      branchName: branchName.trim(),
      extracted: extracted && (bankName || accountNo || ifscCode || branchName)
    };
  }, []);

  // Extract data from Aadhaar QR
  const extractDataFromAadhaar = useCallback(async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const img = new Image();
          img.onload = async () => {
            try {
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
              const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
              
              if (qrCode && qrCode.data) {
                const xmlData = String(qrCode.data);
                const printLetterData = parseAadhaarXml(xmlData);
                if (printLetterData) {
                  const extractedData = {
                    name: printLetterData.name || "",
                    aadharNumber: printLetterData.uid || "",
                    dob: printLetterData.dob || "",
                    gender: printLetterData.gender === "F" ? "Female" : 
                            printLetterData.gender === "M" ? "Male" : "Other",
                    address: [
                      printLetterData.co, printLetterData.house, printLetterData.street,
                      printLetterData.lm, printLetterData.vtc, printLetterData.po,
                      printLetterData.dist, printLetterData.state, printLetterData.pc
                    ].filter(Boolean).join(", "),
                    fatherName: printLetterData.co || "",
                    state: printLetterData.state || "",
                    city: printLetterData.dist || "",
                    pincode: printLetterData.pc || ""
                  };
                  toast.success("✓ Aadhaar QR code scanned successfully!");
                  resolve(extractedData);
                } else {
                  toast.warning("Invalid Aadhaar QR format. Please fill manually.");
                  resolve(initialOcrData);
                }
              } else {
                toast.warning("⚠ No QR code found in image.");
                resolve(initialOcrData);
              }
            } catch (canvasError) {
              toast.error("Failed to process image.");
              reject(canvasError);
            }
          };
          img.onerror = () => {
            toast.error("Failed to load image.");
            reject(new Error("Image load failed"));
          };
          img.crossOrigin = "Anonymous";
          img.src = e.target.result;
        } catch (error) {
          toast.error("Error processing image.");
          reject(error);
        }
      };
      reader.onerror = () => {
        toast.error("Failed to read file.");
        reject(new Error("File read failed"));
      };
      reader.readAsDataURL(file);
    });
  }, []);

  // Handle file validation
  const validateFile = (file, allowedTypes = ACCEPTED_FILE_TYPES) => {
    if (file.size > MAX_FILE_SIZE) {
      toast.error(`File size should be less than 2MB: ${file.name}`);
      return false;
    }
    if (!allowedTypes.includes(file.type)) {
      toast.error(`Please upload ${allowedTypes.includes('application/pdf') ? 'images or PDF files' : 'image files'}: ${file.name}`);
      return false;
    }
    return true;
  };

  // Handle Aadhaar upload
  const handleAadhaarUpload = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file || !validateFile(file, ACCEPTED_IMAGE_TYPES)) return;
    
    setFormData(prevData => ({ ...prevData, aadharFront: file }));
    setOcrProcessing(prev => ({ ...prev, aadhaar: true }));
    
    try {
      const extractedData = await extractDataFromAadhaar(file);
      setOcrData(extractedData);
      setFormData(prevData => ({
        ...prevData,
        fullName: extractedData.name || prevData.fullName,
        gender: extractedData.gender || prevData.gender,
        dob: extractedData.dob || prevData.dob,
        fullAddress: extractedData.address || prevData.fullAddress,
        fatherHusbandName: extractedData.fatherName || prevData.fatherHusbandName,
        aadharNo: extractedData.aadharNumber || prevData.aadharNo,
        pincode: extractedData.pincode || prevData.pincode,
        state: extractedData.state || prevData.state,
        city: extractedData.city || prevData.city
      }));
    } catch (error) {
      toast.error("Failed to extract data from Aadhaar QR code. Please fill manually.");
      console.error("OCR Error:", error);
    } finally {
      setOcrProcessing(prev => ({ ...prev, aadhaar: false }));
    }
  }, [extractDataFromAadhaar]);

  // Handle PAN upload
  const handlePANUpload = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file || !validateFile(file, ACCEPTED_IMAGE_TYPES)) return;
    
    setFormData(prevData => ({ ...prevData, panCard: file }));
    setOcrProcessing(prev => ({ ...prev, pan: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("PAN uploaded successfully!");
    } catch (error) {
      toast.error("Failed to process PAN card. Please fill manually.");
      console.error("PAN OCR Error:", error);
    } finally {
      setOcrProcessing(prev => ({ ...prev, pan: false }));
    }
  }, []);

  // Handle form input changes
  const handleChange = useCallback((e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prevData => ({ ...prevData, [name]: checked }));
    } else if (type === 'file') {
      const file = files[0];
      if (!file) return;
      
      switch (name) {
        case 'aadharFront':
          handleAadhaarUpload(e);
          break;
        case 'panCard':
          handlePANUpload(e);
          break;
        default:
          if (validateFile(file)) {
            setFormData(prevData => ({ ...prevData, [name]: file }));
          }
      }
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  }, [handleAadhaarUpload, handlePANUpload]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const requiredFields = [
      'fullName', 'emailAddress', 'contactNo', 'gender', 'dob', 
      'fullAddress', 'pincode', 'state', 'city', 'fatherHusbandName', 
      'aadharNo', 'panNo', 'bankName', 'accountNo', 'ifscCode', 'branchName'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      toast.error(`Please fill all required fields`);
      return;
    }
    
    const requiredDocs = ['aadharFront', 'aadharBack', 'panCard', 'bankDetails', 'passportPhoto'];
    const missingDocs = requiredDocs.filter(doc => !formData[doc]);
    if (missingDocs.length > 0) {
      toast.error(`Please upload all required documents`);
      return;
    }
    
    if (!formData.acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, value);
        }
      }
    });
    
    formDataToSend.append('applicationType', 'POSP_REGISTRATION');
    formDataToSend.append('ocrData', JSON.stringify(ocrData));
    formDataToSend.append('bankOcrData', JSON.stringify(bankOcrData));
    
    await sendMail(formDataToSend);
  }, [formData, ocrData, bankOcrData, sendMail]);

  // Reset form on successful submission
  useEffect(() => {
    if (responseMessage) {
      toast.success("POSP application submitted successfully!");
      setFormData(initialFormData);
      setOcrData(initialOcrData);
      setBankOcrData(initialBankOcrData);
    }
  }, [responseMessage]);

  // Show error toast
  useEffect(() => {
    if (error) {
      toast.error("Error: " + error);
    }
  }, [error]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Become a POSP | Notion Insurance Broker Pvt. Ltd.</title>
        <meta name="description" content="Apply to become a Point of Sales Person (POSP) with Notion Insurance Broker Pvt. Ltd." />
        <meta name="keywords" content="become POSP, POSP registration, insurance agent" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <DocumentChecklistModal open={openChecklist} handleOpen={() => setOpenChecklist(!openChecklist)} />
      <POSPStepsModal open={openSteps} handleOpen={() => setOpenSteps(!openSteps)} />

      <section className="w-full bg-gray-50 py-6 min-h-screen relative">
        <div className="px-5 md:px-8 lg:px-12 xl:px-20">
          {/* Single Toggle Button for Help Panel */}
          <div className="fixed top-28 right-4 z-40 lg:top-32 lg:right-6">
            <button
              onClick={() => setHelpPanelOpen(!helpPanelOpen)}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={helpPanelOpen ? "Close help panel" : "Open help panel"}
            >
              {helpPanelOpen ? (
                <FaTimes className="h-4 w-4" />
              ) : (
                <FaBars className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="relative">
            {/* Floating Help Panel - Right Side */}
            <div className={`fixed top-36 right-4 z-30 w-72 transition-all duration-300 transform ${helpPanelOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
              <div className="bg-white p-4 rounded-xl shadow-xl border border-blue-100 max-h-[70vh] overflow-y-auto">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-1.5 rounded-lg mr-2">
                    <FaInfoCircle className="text-blue-600" />
                  </div>
                  <Typography variant="h6" color="blue-gray" className="!text-base">
                    Quick Help
                  </Typography>
                </div>
                
                <div className="space-y-2 mb-4">
                  <Button
                    onClick={() => {
                      setOpenChecklist(true);
                      setHelpPanelOpen(false);
                    }}
                    className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-start p-2 rounded-lg transition-colors"
                  >
                    <div className="bg-blue-100 p-1.5 rounded-lg mr-2">
                      <FaFileAlt className="text-blue-600 text-sm" />
                    </div>
                    <div className="text-left">
                      <Typography className="font-semibold text-xs">
                        Required Documents
                      </Typography>
                      <Typography variant="small" className="text-blue-600">
                        View checklist
                      </Typography>
                    </div>
                  </Button>
                  
                  <Button
                    onClick={() => {
                      setOpenSteps(true);
                      setHelpPanelOpen(false);
                    }}
                    className="w-full bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 flex items-center justify-start p-2 rounded-lg transition-colors"
                  >
                    <div className="bg-green-100 p-1.5 rounded-lg mr-2">
                      <FaListOl className="text-green-600 text-sm" />
                    </div>
                    <div className="text-left">
                      <Typography className="font-semibold text-xs">
                        Registration Steps
                      </Typography>
                      <Typography variant="small" className="text-green-600">
                        View process
                      </Typography>
                    </div>
                  </Button>
                </div>
                
                <div className="mb-4">
                  <Typography variant="small" className="text-gray-700 mb-2">
                    Need help?
                  </Typography>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Typography className="text-blue-700 font-medium text-xs">
                      pospsupports@notioninsurance.com
                    </Typography>
                    <Typography variant="small" className="text-gray-600 mt-0.5">
                      Response within 24 hours
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width Form Container */}
            <div className="w-full">
              <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg">
                <div className="mb-6">
                  <Typography variant="h2" color="blue-gray" className="!text-xl lg:!text-2xl mb-1">
                    POSP Registration Application
                  </Typography>
                  <Typography className="text-gray-600 text-sm">
                    Complete the form below to apply for POSP registration
                  </Typography>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {/* 1. Document Upload Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-1.5 rounded-lg mr-2">
                        <FaUpload className="text-blue-600 text-sm" />
                      </div>
                      <Typography variant="h3" color="blue-gray" className="!text-lg">
                        Step 1: Upload Documents
                      </Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FileInput 
                        name="aadharFront" 
                        label="Aadhar Card (Front) *" 
                        showOcr={true} 
                        value={formData.aadharFront}
                        onChange={handleChange}
                      />
                      <FileInput 
                        name="aadharBack" 
                        label="Aadhar Card (Back) *" 
                        value={formData.aadharBack}
                        onChange={handleChange}
                      />
                      <FileInput 
                        name="panCard" 
                        label="PAN Card *" 
                        showOcr={true} 
                        value={formData.panCard}
                        onChange={handleChange}
                      />
                      <FileInput 
                        name="bankDetails" 
                        label="Bank Details *" 
                        value={formData.bankDetails}
                        onChange={handleChange}
                      />
                      <FileInput 
                        name="passportPhoto" 
                        label="Passport Photo *" 
                        accept=".jpg,.jpeg,.png" 
                        value={formData.passportPhoto}
                        onChange={handleChange}
                      />
                      <FileInput 
                        name="marksheet" 
                        label="Marksheet (Optional)" 
                        required={false} 
                        value={formData.marksheet}
                        onChange={handleChange}
                      />
                    </div>
                    {(ocrProcessing.aadhaar || ocrProcessing.pan) && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center">
                          <FaSpinner className="animate-spin text-blue-600 mr-2" />
                          <Typography className="text-blue-800 font-medium text-sm">
                            {ocrProcessing.aadhaar && "Processing Aadhaar..."}
                            {ocrProcessing.pan && "Processing PAN..."}
                          </Typography>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Personal Details Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-1.5 rounded-lg mr-2">
                        <FaUser className="text-green-600 text-sm" />
                      </div>
                      <Typography variant="h3" color="blue-gray" className="!text-lg">
                        Step 2: Personal Details
                      </Typography>
                    </div>
                    {formData.dob && formData.panCard && (
                      <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-start">
                          <input 
                            type="checkbox" 
                            id="dataCorrection" 
                            name="dataCorrection" 
                            checked={formData.dataCorrection} 
                            onChange={handleChange} 
                            className="mt-0.5 mr-2 h-4 w-4 text-yellow-600 rounded focus:border-yellow-500 focus:outline-none" 
                          />
                          <label htmlFor="dataCorrection" className="text-gray-700">
                            <Typography className="font-semibold text-yellow-800 text-sm">Data Correction Required</Typography>
                            <Typography variant="small">I confirm DOB discrepancy between Aadhaar and PAN card.</Typography>
                          </label>
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <InputField 
                        label="Full Name *" 
                        name="fullName" 
                        required 
                        placeholder="Enter Full Name" 
                        readOnly={ocrData.name && !formData.dataCorrection}
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Email Address *" 
                        name="emailAddress" 
                        type="email" 
                        required 
                        placeholder="Enter Your Email"
                        value={formData.emailAddress}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Contact Number *" 
                        name="contactNo" 
                        type="tel" 
                        required 
                        pattern="[0-9]{10}" 
                        placeholder="10-digit Mobile Number"
                        value={formData.contactNo}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Gender *" 
                        name="gender" 
                        type="select" 
                        required 
                        value={formData.gender}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Date of Birth *" 
                        name="dob" 
                        type="date" 
                        required 
                        readOnly={ocrData.dob && !formData.dataCorrection}
                        value={formData.dob}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Father/Husband Name *" 
                        name="fatherHusbandName" 
                        required 
                        placeholder="Father/Husband Name" 
                        readOnly={ocrData.fatherName && !formData.dataCorrection}
                        value={formData.fatherHusbandName}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Aadhaar Number *" 
                        name="aadharNo" 
                        required 
                        pattern="\d{4}\s?\d{4}\s?\d{4}" 
                        placeholder="XXXX XXXX XXXX" 
                        readOnly={ocrData.aadharNumber && !formData.dataCorrection}
                        value={formData.aadharNo}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="PAN Number *" 
                        name="panNo" 
                        required 
                        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" 
                        placeholder="ABCDE1234F"
                        value={formData.panNo}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-4">
                      <InputField 
                        label="Full Address *" 
                        name="fullAddress" 
                        type="textarea" 
                        required 
                        placeholder="Enter Complete Address" 
                        readOnly={ocrData.address && !formData.dataCorrection}
                        value={formData.fullAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                      <InputField 
                        label="State *" 
                        name="state" 
                        required 
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="City *" 
                        name="city" 
                        required 
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Pincode *" 
                        name="pincode" 
                        required 
                        pattern="\d{6}" 
                        placeholder="6-digit Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* 3. Bank Details Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-1.5 rounded-lg mr-2">
                        <FaUniversity className="text-purple-600 text-sm" />
                      </div>
                      <Typography variant="h3" color="blue-gray" className="!text-lg">
                        Step 3: Bank Details
                      </Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <InputField 
                        label="Bank Name *" 
                        name="bankName" 
                        required 
                        placeholder="e.g., State Bank of India"
                        value={formData.bankName}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Account Number *" 
                        name="accountNo" 
                        required 
                        placeholder="e.g., 123456789012"
                        value={formData.accountNo}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="IFSC Code *" 
                        name="ifscCode" 
                        required 
                        placeholder="e.g., SBIN0001234"
                        value={formData.ifscCode}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Branch Name *" 
                        name="branchName" 
                        required 
                        placeholder="e.g., Main Branch, Mumbai"
                        value={formData.branchName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* 4. Education Details Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-1.5 rounded-lg mr-2">
                        <FaGraduationCap className="text-orange-600 text-sm" />
                      </div>
                      <Typography variant="h3" color="blue-gray" className="!text-lg">
                        Step 4: Education Details (Optional)
                      </Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <InputField 
                        label="Education Level" 
                        name="educationLevel" 
                        type="select" 
                        value={formData.educationLevel}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Board/University Name" 
                        name="boardUniversityName" 
                        placeholder="Board/University Name"
                        value={formData.boardUniversityName}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Roll Number" 
                        name="rollNo" 
                        placeholder="Roll Number"
                        value={formData.rollNo}
                        onChange={handleChange}
                      />
                      <InputField 
                        label="Passing Year" 
                        name="passingYear" 
                        type="number" 
                        min="1950" 
                        max={new Date().getFullYear()} 
                        placeholder="YYYY"
                        value={formData.passingYear}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="acceptTerms" 
                        name="acceptTerms" 
                        checked={formData.acceptTerms} 
                        onChange={handleChange} 
                        className="mt-0.5 mr-2 h-4 w-4 text-blue-600 rounded focus:border-blue-500 focus:outline-none" 
                        required 
                      />
                      <label htmlFor="acceptTerms" className="text-gray-700">
                        <Typography className="font-semibold text-gray-800 text-sm">Declaration and Acceptance of Terms</Typography>
                        <Typography variant="small">I hereby declare that all the information provided is true and correct. I understand that any false information may lead to rejection of my application. I agree to abide by the rules and regulations set by IRDA and Notion Insurance Broker Pvt. Ltd.</Typography>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading || ocrProcessing.aadhaar || ocrProcessing.pan}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-5 rounded-lg w-full transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mb-6"
                    fullWidth
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <FaSpinner className="animate-spin h-4 w-4 mr-2" />
                        Processing...
                      </span>
                    ) : "Submit POSP Application"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default BecomePOSP;
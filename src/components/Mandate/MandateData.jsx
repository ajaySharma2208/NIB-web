import React, { useEffect, useState } from 'react';
import { useDataContext } from '../../Context/DataContext';
import { Button, Card, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography } from '@material-tailwind/react';
import LoadingOverlay from '../LoadingOverlay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
const MandateData = () => {
  const location = useLocation();
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
const apiUrl = import.meta.env.VITE_API_BASE_URL_image;
  const { mandates,handleSendEmail, fetchMandates,deleteMandate, loading } = useDataContext(); // Access context values
  const handleEmailClick = async (id) => {
    try {
      const response = await handleSendEmail(id);
      toast.success(response.data.message);  // Show success toast
    } catch (error) {
      toast.error('Failed to send email. Please check the logs.');  // Show error toast
    } 
  };
  const SECURITY_CODE = "Notion@123";
  const handleVerify = () => {
    if (code === SECURITY_CODE) {
      setIsVerified(true);
      setOpen(false);
    } else {
      alert("Incorrect Code! Redirecting...");
      navigate("/"); // Redirect to homepage on failure
    }
  };
  const TABLE_HEAD = [
    "Actions",
    "To",
    "Subject",
    "Orgnization Name",

    "Contact Person Name",

    "Email",
    "Address",
    "Date",
    "Mobile Number",
    "Signature",
  ];
  
  useEffect(() => {
    // Function to determine if we should fetch mandates
    const checkAndFetchMandates = () => {
      if (document.visibilityState === "visible" && location.pathname === "/mandatedata") {
        fetchMandates();
      }
    };

    // Fetch mandates when component first mounts if it's the current route
    if (location.pathname === "/mandatedata") {
      fetchMandates();
    }

    // Add visibility change listener to detect tab switches
    document.addEventListener("visibilitychange", checkAndFetchMandates);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("visibilitychange", checkAndFetchMandates);
    };
  }, [location.pathname]);
// useEffect(() => {
//   if (mandates.length === 0) {
//     fetchMandates();
//   }
// }, []);
if (!isVerified) {
  return (
    <Dialog open={open} handler={() => setOpen(!open)} size="sm">
      <DialogHeader>Enter Access Code</DialogHeader>
      <DialogBody>
        <Input
          type="text"
          label="Security Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Code"
        />
      </DialogBody>
      <DialogFooter>
        <Button color="blue" onClick={handleVerify}>
          Verify
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
  return (
    <div className="w-full px-5 md:px-8 lg:px-12 xl:px-20 py-6">
    <h2 className="text-2xl font-semibold mb-4 text-center">Mandates</h2>
    <LoadingOverlay loading={loading} />
    <Card className="h-full w-full">
      <div className="overflow-auto max-h-[500px]"> {/* Scrollable table wrapper */}
        <table className="w-full min-w-max table-auto text-left">
          <thead className="sticky top-0 bg-blue-gray-50 z-10"> {/* Fixed header */}
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mandates.length > 0 ? (
              mandates.map((mandate, index) => {
                const isLast = index === mandates.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  
                return (
                  <tr key={mandate.id}>
                 
                 <td className={classes}>
                      {/* <button
                        onClick={() => deleteMandate(mandate.id)}
                        className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                      >
                        Delete
                      </button> */}
                      <button
                        onClick={() => handleEmailClick(mandate.id)}
                        className="bg-blue-600 text-white py-1 px-4 rounded-lg ml-2 hover:bg-blue-700 transition-colors duration-200"
                      >
                        Send Email
                      </button>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.to}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.subject}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.organization_name}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.contact_person_name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.address}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {mandate.mobile_number}
                      </Typography>
                    </td>
                    {/* <td className={classes}>
                      <img
                        src={`${apiUrl}/public/${mandate.signature_file}`}
                        alt="Signature"
                        className="w-24 h-20"
                      />
                    </td> */}
                    
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    No mandates available.
                  </Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
    <ToastContainer />
  </div>
  
  );
};
export default MandateData;

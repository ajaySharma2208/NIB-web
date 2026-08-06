import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
// Create the context
const DataContext = createContext();

// Create the provider
export const DataProvider = ({ children }) => {
  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mandates, setMandates] = useState([]);
  // Function to send mail via API

  /**
   * Function to send mail via API
   * @param {Object} mailData
   */
  const sendMail = async (mailData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/contact/mail`, mailData);
      setResponseMessage(response.data); // Assume API returns a "message" field in the response
      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
   /**
   * Function to submit a mandate via API
   * @param {FormData} mandateData
   */
   const submitMandate = async (mandateData) => {
    setLoading(true);
    setError(null);
  
    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const response = await axios.post(`${apiUrl}/mandates`, mandateData, config);
      setResponseMessage(response.data); // Handle API response
      return null; // No errors, mandate created successfully
    } catch (err) {
      const status = err.response?.status;
    const errorMessages = err.response?.data.errors || "An error occurred while submitting the mandate";

    // Handle validation errors
    if (status === 422 && typeof errorMessages === "object") {
      const errors = [];

      for (let field in errorMessages) {
        const fieldErrors = errorMessages[field];

        // Ensure it's always an array before using forEach
        if (Array.isArray(fieldErrors)) {
          fieldErrors.forEach((msg) => errors.push(`${msg}`));
        } else {
          errors.push(`${String(fieldErrors)}`); // Convert any non-array value to string
        }
      }

      setError(errors.join(" "));
      return errors; // Return the errors
    }


    // Handle other server errors
    setError(errorMessages);
    return Array.isArray(errorMessages) ? errorMessages : [errorMessages];
  } finally {
    setLoading(false);
  }
};
  
  
  //  const submitMandate = async (mandateData) => {
  //   setLoading(true);
  //   setError(null);
  
  //   try {
  //     const config = {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     };
  //     const response = await axios.post(`${apiUrl}/mandates`, mandateData, config);
  //     setResponseMessage(response.data); // Handle API response
  //     return null; // No errors
  //   } catch (err) {
  //     const status = err.response?.status;
  //     const errorMessages = err.response?.data?.message || "An error occurred while submitting the mandate";
  //     console.log(errorMessages)
  //     // Handle validation errors
  //     if (status === 422 && errorMessages) {
  //       const errors = [];
  //       for (let field in errorMessages) {
  //         errorMessages[field].forEach(msg => errors.push(msg));
  //       }
  //       setError(errors.join(" "));
  //       return errors;
  //     }
  
  //     // Handle other server errors
  //     setError(errorMessages);
  //     return Array.isArray(errorMessages) ? errorMessages : [errorMessages];
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Fetch mandates from API
  const fetchMandates = async () => {
    setLoading(true);
    try {
      
      const response = await axios.get(`${apiUrl}/mandates/getalldata`);
      setMandates(response.data); // Save data to state
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while fetching mandates");
    } finally {
      setLoading(false);
    }
  };
  const handleSendEmail = async (id) => {
    setLoading(true); // Set loading state to true while email is being sent
    try {
      const response = await axios.get(`${apiUrl}/mandates/send/${id}`);
      setError(null);
      return response;
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while fetching mandates");
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  // Function to delete a mandate
  const deleteMandate = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${apiUrl}/mandates/${id}`);
      setMandates((prevMandates) => prevMandates.filter((mandate) => mandate.id !== id));
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while deleting the mandate");
    } finally {
      setLoading(false);
    }
  };
  return (
    <DataContext.Provider
      value={{
        handleSendEmail,
        sendMail,
        mandates,
        submitMandate,
        deleteMandate,
        fetchMandates,
        responseMessage,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the ContactContext
export const useDataContext = () => {
  return useContext(DataContext);
};

export default DataContext;

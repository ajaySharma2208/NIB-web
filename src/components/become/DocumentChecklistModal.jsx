import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { FaFileAlt, FaTimes, FaCheckCircle } from "react-icons/fa";

export function DocumentChecklistModal({ open, handleOpen }) {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="lg"
      className="max-h-[90vh] overflow-y-auto"
    >
      <DialogHeader className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <FaFileAlt className="text-blue-600 text-xl" />
          </div>
          <Typography variant="h4" color="blue-gray">
            Required Documents Checklist
          </Typography>
        </div>
        <Button
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="hover:bg-gray-100 rounded-full p-2"
        >
          <FaTimes className="text-xl" />
        </Button>
      </DialogHeader>
      
      <DialogBody className="p-6">
        {/* Document List */}
        <div className="space-y-4 mb-6">
          {[
            { num: "1", title: "Aadhar Card", desc: "Front (with QR) and Back sides" },
            { num: "2", title: "PAN Card", desc: "Clear copy with DOB matching" },
            { num: "3", title: "Bank Details", desc: "Checkbook/Cancelled Cheque front page" },
            { num: "4", title: "Passport Photo", desc: "Recent white background" },
            { num: "5", title: "Marksheet", desc: "10th/12th/Graduation marksheet" }
          ].map((item) => (
            <div key={item.num} className="flex items-start p-3 bg-gray-50 rounded-lg">
              <div className="bg-blue-50 rounded-full p-2 mr-3">
                <span className="text-blue-700 font-bold">{item.num}</span>
              </div>
              <div>
                <Typography className="font-semibold text-gray-800">
                  {item.title}
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Smart Autofill */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <Typography variant="h6" className="font-semibold text-blue-800 mb-2">
            📝 Smart Auto-fill Feature:
          </Typography>
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>Upload Aadhaar front to auto-fill Name, DOB, Gender & Address</li>
            <li>Upload PAN to auto-fill PAN number with DOB verification</li>
            <li className="font-semibold text-green-700">NEW: Upload Checkbook to auto-fill Bank Details</li>
            <li>OCR technology extracts data automatically from images</li>
            <li>DOB matching verification between Aadhaar & PAN</li>
            <li>Manually fill details if auto-fill fails</li>
            <li>Maximum file size: 2MB per document</li>
            <li>Accepted formats: JPG, JPEG, PNG, PDF</li>
          </ul>
        </div>

        {/* Tips Section */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
          <Typography className="font-semibold text-gray-800 mb-3">
            Quick Tips for a Smooth Application
          </Typography>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-600 mr-2 mt-0.5" />
              <span>Ensure Aadhaar and PAN details match (Name & DOB).</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-600 mr-2 mt-0.5" />
              <span>For checkbook, upload clear image of the front page with account details.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-600 mr-2 mt-0.5" />
              <span>Upload clear, uncropped, non-blurry documents.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-600 mr-2 mt-0.5" />
              <span>Keep your phone number & email active.</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-600 mr-2 mt-0.5" />
              <span>Check your email regularly for updates.</span>
            </li>
          </ul>
        </div>
      </DialogBody>
      
      <DialogFooter className="pt-4 border-t border-gray-200">
        <Button
          color="blue"
          onClick={handleOpen}
          className="ml-2"
        >
          Got it, I'm ready
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
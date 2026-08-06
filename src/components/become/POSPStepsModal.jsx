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
import { FaInfoCircle, FaTimes, FaCheckCircle, FaGraduationCap, FaCertificate, FaUserShield, FaChartLine } from "react-icons/fa";

export function POSPStepsModal({ open, handleOpen }) {
  const steps = [
    {
      title: "Step 1: Submit Application",
      desc: "Provide your basic personal details and upload Aadhaar, PAN, and a recent photograph. Ensure all documents are clear and readable. After submission, check your email inbox and verify your email to complete the application process.",
      icon: <FaCheckCircle />,
      color: "green"
    },
    {
      title: "Step 2: Document Verification",
      desc: "Documents are verified as per IRDAI standards. Verification takes 1–2 working days.",
      icon: <FaInfoCircle />,
      color: "yellow"
    },
    {
      title: "Step 3: Complete Mandatory POSP Training",
      desc: "Complete the IRDAI-prescribed 25-hour POSP training including product & compliance training.",
      icon: <FaGraduationCap />,
      color: "blue"
    },
    {
      title: "Step 4: Appear for the POSP Exam",
      desc: "Attend the online POSP Exam. If you pass, you can move to the next step. If you do not pass, you can reschedule and retake the exam.",
      icon: <FaCertificate />,
      color: "purple"
    },
    {
      title: "Step 5: Receive POSP Certificate",
      desc: "Your official POSP Certificate will be issued after passing the exam.",
      icon: <FaCheckCircle />,
      color: "rose"
    },
    {
      title: "Step 6: Activation & Login Access",
      desc: "Your POSP login will be activated and credentials shared with you.",
      icon: <FaUserShield />,
      color: "indigo"
    },
    {
      title: "Step 7: Start Selling Insurance",
      desc: "Start generating quotes, issuing policies & managing customers.",
      icon: <FaChartLine />,
      color: "teal"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'green': return 'bg-green-50 border-green-200 text-green-600';
      case 'yellow': return 'bg-yellow-50 border-yellow-200 text-yellow-600';
      case 'blue': return 'bg-blue-50 border-blue-200 text-blue-600';
      case 'purple': return 'bg-purple-50 border-purple-200 text-purple-600';
      case 'rose': return 'bg-rose-50 border-rose-200 text-rose-600';
      case 'indigo': return 'bg-indigo-50 border-indigo-200 text-indigo-600';
      case 'teal': return 'bg-teal-50 border-teal-200 text-teal-600';
      default: return 'bg-gray-50 border-gray-200 text-gray-600';
    }
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="lg"
      className="max-h-[90vh] overflow-y-auto"
    >
      <DialogHeader className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-green-100 p-2 rounded-lg mr-3">
            <FaInfoCircle className="text-green-600 text-xl" />
          </div>
          <Typography variant="h4" color="blue-gray">
            POSP Registration Steps
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
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <Typography className="font-semibold text-gray-800 mb-2">
            Complete Registration Process:
          </Typography>
          <Typography variant="small" className="text-gray-600">
            Follow these 7 steps to become a certified POSP and start your insurance sales career.
            Estimated completion time: 7-10 working days.
          </Typography>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-start p-4 rounded-lg border ${getColorClasses(step.color)}`}
            >
              <div className="mr-3 mt-1 text-xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <Typography className="font-bold text-gray-800 text-lg">
                  {step.title}
                </Typography>
                <Typography variant="small" className="text-gray-600 leading-relaxed mt-1">
                  {step.desc}
                </Typography>
              </div>
              <div className="ml-3">
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                  <span className="font-bold text-gray-700">{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <Typography className="font-semibold text-gray-800 mb-3">
            📅 Estimated Timeline:
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-white rounded-lg border">
              <Typography variant="h6" className="text-blue-600 font-bold">Step 1-2</Typography>
              <Typography variant="small" className="text-gray-600">1-2 Days</Typography>
              <Typography variant="small" className="text-gray-500">Application & Verification</Typography>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border">
              <Typography variant="h6" className="text-blue-600 font-bold">Step 3-5</Typography>
              <Typography variant="small" className="text-gray-600">3-5 Days</Typography>
              <Typography variant="small" className="text-gray-500">Training & Certification</Typography>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border">
              <Typography variant="h6" className="text-blue-600 font-bold">Step 6-7</Typography>
              <Typography variant="small" className="text-gray-600">1-2 Days</Typography>
              <Typography variant="small" className="text-gray-500">Activation & Onboarding</Typography>
            </div>
          </div>
        </div>
      </DialogBody>
      
      <DialogFooter className="pt-4 border-t border-gray-200">
        <Typography variant="small" className="text-gray-600 mr-auto">
          Need help? Contact: pospsupports@notioninsurance.com
        </Typography>
        <Button
          color="green"
          onClick={handleOpen}
          className="ml-2"
        >
          Understand the process
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
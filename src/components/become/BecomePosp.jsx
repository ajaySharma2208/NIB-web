
// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../../redux/actions/PospSignUpAction';
// import { resetSignupState } from '../../redux/reducers/PospSignUpInSlice';
// import { CheckCircle, XCircle, AlertCircle, Eye, EyeOff, User, Mail, Phone, Lock, ArrowRight } from 'lucide-react';
// import { Link } from "react-router-dom";

// const BecomePosp = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, success, signupError, fieldErrors, message } = useSelector((state) => state.register);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirm_password: '',
//   });
  
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [backendErrors, setBackendErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [animateSuccess, setAnimateSuccess] = useState(false);
//   const [countdown, setCountdown] = useState(5);
//   const [acceptedTerms, setAcceptedTerms] = useState(false); // Added terms state
  
//   const redirectTimerRef = useRef(null);
//   const countdownTimerRef = useRef(null);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     if (name === 'terms') {
//       setAcceptedTerms(e.target.checked);
//       return;
//     }
    
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: '',
//       });
//     }
    
//     // Clear backend errors when user starts typing in that field
//     if (backendErrors[name]) {
//       setBackendErrors({
//         ...backendErrors,
//         [name]: '',
//       });
//     }
//   };

//   // Handle input blur for validation
//   const handleBlur = (e) => {
//     const { name } = e.target;
//     if (name === 'terms') return;
    
//     setTouched({
//       ...touched,
//       [name]: true,
//     });
//     validateField(name, formData[name]);
//   };

//   // Validate individual field
//   const validateField = (name, value) => {
//     let error = '';
    
//     switch (name) {
//       case 'name':
//         if (!value.trim()) error = 'Name is required';
//         else if (value.length < 2) error = 'Name must be at least 2 characters';
//         break;

//         case 'panno':
//         if (!value.trim()) error = 'Pan No. is required';
//         else if (value.length < 2) error = 'Pan No. must be at least 2 characters';
//         break;

//       case 'email':
//         if (!value) error = 'Email is required';
//         else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid';
//         break;
      
//       case 'mobile':
//         if (!value) error = 'Mobile number is required';
//         else if (!/^\d{10}$/.test(value)) error = 'Mobile number must be 10 digits';
//         break;
      
//       case 'password':
//         if (!value) error = 'Password is required';
//         else if (value.length < 6) error = 'Password must be at least 6 characters';
//         else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) error = 'Include upper, lower case and number';
//         break;
      
//       case 'confirm_password':
//         if (!value) error = 'Please confirm your password';
//         else if (value !== formData.password) error = 'Passwords do not match';
//         break;
      
//       default:
//         break;
//     }
    
//     setErrors({
//       ...errors,
//       [name]: error,
//     });
//   };

//   // Update backend errors when Redux state changes
//   useEffect(() => {
//     if (fieldErrors && Object.keys(fieldErrors).length > 0) {
//       const formattedErrors = {};
//       Object.keys(fieldErrors).forEach(key => {
//         if (Array.isArray(fieldErrors[key]) && fieldErrors[key].length > 0) {
//           formattedErrors[key] = fieldErrors[key][0];
//         } else {
//           formattedErrors[key] = fieldErrors[key];
//         }
//       });
//       setBackendErrors(formattedErrors);
//     } else {
//       setBackendErrors({});
//     }
//   }, [fieldErrors]);

//   // Show success popup and start countdown when registration is successful
//   useEffect(() => {
//     if (success) {
//       // Reset form first
//       handleReset();
      
//       // Show success popup
//       setShowSuccessPopup(true);
      
//       // Start animation
//       setTimeout(() => {
//         setAnimateSuccess(true);
//       }, 100);
      
//       // Reset countdown
//       setCountdown(5);
      
//       // Start countdown timer
//       countdownTimerRef.current = setInterval(() => {
//         setCountdown(prev => {
//           if (prev <= 1) {
//             clearInterval(countdownTimerRef.current);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
      
//       // Set up redirect after 5 seconds
//       redirectTimerRef.current = setTimeout(() => {
//         closeSuccessPopup();
//         navigate('/login');
//       }, 5000);
      
//       // Clean up on unmount
//       return () => {
//         if (redirectTimerRef.current) {
//           clearTimeout(redirectTimerRef.current);
//         }
//         if (countdownTimerRef.current) {
//           clearInterval(countdownTimerRef.current);
//         }
//       };
//     }
//   }, [success, navigate]);

//   // Clean up timers on unmount
//   useEffect(() => {
//     return () => {
//       if (redirectTimerRef.current) {
//         clearTimeout(redirectTimerRef.current);
//       }
//       if (countdownTimerRef.current) {
//         clearInterval(countdownTimerRef.current);
//       }
//     };
//   }, []);

//   // Validate all fields including terms
//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.panno) newErrors.panno = 'Pan No. is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (!formData.confirm_password) newErrors.confirm_password = 'Please confirm your password';
//     if (!acceptedTerms) newErrors.terms = 'You must accept the terms and conditions';
    
//     if (formData.panno && !/\S+@\S+\.\S+/.test(formData.panno)) {
//       newErrors.panno = 'Pan No. is invalid';
//     }

//     if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
//       newErrors.mobile = 'Mobile number must be 10 digits';
//     }
    
//     if (formData.password && formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     if (formData.confirm_password && formData.confirm_password !== formData.password) {
//       newErrors.confirm_password = 'Passwords do not match';
//     }
    
//     setErrors(newErrors);
//     setBackendErrors({});
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     dispatch(registerUser(formData));
//   };

//   // Reset form and state
//   const handleReset = () => {
//     setFormData({
//       name: '',
//       panno: '',
//       email: '',
//       mobile: '',
//       password: '',
//       confirm_password: '',
//     });
//     setAcceptedTerms(false);
//     setErrors({});
//     setBackendErrors({});
//     setTouched({});
//     dispatch(resetSignupState());
//   };

//   // Close success popup
//   const closeSuccessPopup = () => {
//     setShowSuccessPopup(false);
//     setAnimateSuccess(false);
    
//     // Clear timers
//     if (redirectTimerRef.current) {
//       clearTimeout(redirectTimerRef.current);
//     }
//     if (countdownTimerRef.current) {
//       clearInterval(countdownTimerRef.current);
//     }
    
//     // Redirect immediately
//     navigate('/login');
//   };

//   // Helper function to get combined errors for a field
//   const getFieldError = (fieldName) => {
//     return backendErrors[fieldName] || errors[fieldName] || '';
//   };

//   // Helper function to check if field has error
//   const hasFieldError = (fieldName) => {
//     return !!(backendErrors[fieldName] || errors[fieldName]);
//   };

//   // Helper to check if field is valid
//   const isValidField = (fieldName) => {
//     return touched[fieldName] && formData[fieldName] && !hasFieldError(fieldName);
//   };

//   // Calculate password strength
//   const getPasswordStrength = (password) => {
//     if (!password) return 0;
//     let strength = 0;
//     if (password.length >= 6) strength += 25;
//     if (/[a-z]/.test(password)) strength += 25;
//     if (/[A-Z]/.test(password)) strength += 25;
//     if (/\d/.test(password)) strength += 25;
//     return strength;
//   };

//   const passwordStrength = getPasswordStrength(formData.password);

//   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-6 px-4 sm:px-6 lg:px-8">
// //       {/* Success Popup Modal */}
// //       {showSuccessPopup && (
// //         <div className="fixed inset-0 z-50 overflow-y-auto">
// //           <div className="flex min-h-full items-center justify-center p-4 text-center">
// //             {/* Backdrop */}
// //             <div 
// //               className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
// //               onClick={closeSuccessPopup}
// //             />
            
// //             {/* Modal Content */}
// //             <div className={`relative transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all ${
// //               animateSuccess ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
// //             }`}>
// //               <div className="flex flex-col items-center text-center">
// //                 {/* Animated Success Circle */}
// //                 <div className="relative">
// //                   <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
// //                     <div className="absolute inset-0 animate-ping bg-green-200 rounded-full opacity-75"></div>
// //                     <CheckCircle className="w-12 h-12 text-green-600" />
// //                   </div>
                  
// //                   {/* Confetti Animation */}
// //                   <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-75 animate-bounce"></div>
// //                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-75 animate-bounce delay-100"></div>
// //                   <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full opacity-75 animate-bounce delay-200"></div>
// //                 </div>
                
// //                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
// //                   Registration Successful! 🎉
// //                 </h3>
                
// //                 <div className="mt-4 space-y-3">
// //                   {/* <p className="text-2xl text-gray-700 font-bold">{message || "Welcome aboard!"}</p> */}
// //                   <p className="text-2xl text-light-blue-900 font-bold ">
// //              Please check your email to verify your account. 📩
// //                   </p>
                  
                  
// //                 </div>
                
// //                 <div className="mt-8 flex gap-4">
// //                   <button
// //                     type="button"
// //                     onClick={closeSuccessPopup}
// //                     className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
// //                   >
// //                     Go to Login Now
// //                   </button>
// //                   <button
// //                     type="button"
// //                     onClick={() => {
// //                       setShowSuccessPopup(false);
// //                       setAnimateSuccess(false);
// //                       // Clear timers
// //                       if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
// //                       if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
// //                     }}
// //                     className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
// //                   >
// //                     Stay on Page
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="flex flex-col lg:flex-row gap-8">
// //         {/* Left Side - Hero/Info */}
// //         <div className="lg:w-1/2 flex flex-col justify-center">
// //           <div className="bg-gradient-to-br from-blue-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
// //             <div className="flex items-center mb-6">
// //               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
// //                 <User className="w-6 h-6" />
// //               </div>
// //               <div>
// //                 <h2 className="text-2xl font-bold">Join Our POSP Network</h2>
// //                 <p className="text-blue-100">Start your financial journey today</p>
// //               </div>
// //             </div>
            
// //             <div className="space-y-6 mb-8">
// //               <div className="flex items-start">
// //                 <div className="bg-white/20 p-2 rounded-lg mr-4">
// //                   <CheckCircle className="w-5 h-5" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold">Earn Commissions</h4>
// //                   <p className="text-sm text-blue-100">Attractive commissions on every policy</p>
// //                 </div>
// //               </div>
              
// //               <div className="flex items-start">
// //                 <div className="bg-white/20 p-2 rounded-lg mr-4">
// //                   <CheckCircle className="w-5 h-5" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold">Digital Tools</h4>
// //                   <p className="text-sm text-blue-100">Access to premium sales tools</p>
// //                 </div>
// //               </div>
              
// //               <div className="flex items-start">
// //                 <div className="bg-white/20 p-2 rounded-lg mr-4">
// //                   <CheckCircle className="w-5 h-5" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold">Training & Support</h4>
// //                   <p className="text-sm text-blue-100">Comprehensive training program</p>
// //                 </div>
// //               </div>
// //             </div>
            
      
// //             <div className="border-t border-white/20 pt-6">
// //   <p className="text-sm">
// //     <span className="font-semibold">Already have an account?</span>{" "}
// //     <Link
// //       to="/login"
// //       className="underline hover:text-white transition-colors"
// //     >
// //       Sign in to your dashboard
// //     </Link>
// //   </p>
// // </div>
// //           </div>
          
// //           {/* Stats */}
// //           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
// //               <div className="text-2xl font-bold text-blue-600">500+</div>
// //               <div className="text-sm text-gray-600">Active POSPs</div>
// //             </div>

// //             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
// //               <div className="text-2xl font-bold text-blue-600">₹2.5Cr+</div>
// //               <div className="text-sm text-gray-600">Commissions Paid</div>
// //             </div>

// //             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
// //               <div className="text-2xl font-bold text-blue-600">98%</div>
// //               <div className="text-sm text-gray-600">Satisfaction Rate</div>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Right Side - Form */}
// //         <div className="lg:w-1/2"> 
// //           <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
// //             <div className="text-center mb-8">
// //               <h2 className="text-3xl font-bold text-gray-900 mb-2">
// //                 Create POSP Account
// //               </h2>
// //             </div>
            
// //             {/* Error Display */}
// //             {signupError && !success && Object.keys(backendErrors).length === 0 && (
// //               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
// //                 <div className="flex items-center">
// //                   <XCircle className="w-5 h-5 text-red-500 mr-3" />
// //                   <p className="text-red-800 font-medium">{signupError}</p>
// //                 </div>
// //               </div>
// //             )}
            
// //             <form className="space-y-6" onSubmit={handleSubmit}>
// //               {/* Name Field */}
// //               <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
// //                 <div>
// //                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
// //                     <User className="inline w-4 h-4 mr-2" />
// //                     Full Name
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       id="name"
// //                       name="name"
// //                       type="text"
// //                       autoComplete="name"
// //                       required
// //                       value={formData.name}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
// //                         hasFieldError('name') 
// //                           ? 'border-red-300 focus:ring-red-500' 
// //                           : isValidField('name')
// //                           ? 'border-green-300 focus:ring-green-500'
// //                           : 'border-gray-300 focus:ring-blue-500'
// //                       }`}
// //                       placeholder="Enter your full name"
// //                     />
// //                     <User className={`absolute left-3 top-3.5 w-5 h-5 ${
// //                       hasFieldError('name') ? 'text-red-400' : isValidField('name') ? 'text-green-500' : 'text-gray-400'
// //                     }`} />
// //                     {isValidField('name') && (
// //                       <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
// //                     )}
// //                   </div>
// //                   {(touched.name || backendErrors.name) && getFieldError('name') && (
// //                     <div className="mt-2 flex items-center text-red-600 text-sm">
// //                       <AlertCircle className="w-4 h-4 mr-1" />
// //                       {getFieldError('name')}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
              
// //               {/* Email and Mobile Fields */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {/* Email Field */}
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
// //                     <Mail className="inline w-4 h-4 mr-2" />
// //                     Email Address
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       id="email"
// //                       name="email"
// //                       type="email"
// //                       autoComplete="email"
// //                       required
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
// //                         hasFieldError('email') 
// //                           ? 'border-red-300 focus:ring-red-500' 
// //                           : isValidField('email')
// //                           ? 'border-green-300 focus:ring-green-500'
// //                           : 'border-gray-300 focus:ring-blue-500'
// //                       }`}
// //                       placeholder="you@example.com"
// //                     />
// //                     <Mail className={`absolute left-3 top-3.5 w-5 h-5 ${
// //                       hasFieldError('email') ? 'text-red-400' : isValidField('email') ? 'text-green-500' : 'text-gray-400'
// //                     }`} />
// //                     {isValidField('email') && (
// //                       <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
// //                     )}
// //                   </div>
// //                   {(touched.email || backendErrors.email) && getFieldError('email') && (
// //                     <div className="mt-2 flex items-center text-red-600 text-sm">
// //                       <AlertCircle className="w-4 h-4 mr-1" />
// //                       {getFieldError('email')}
// //                     </div>
// //                   )}
// //                 </div>
                
// //                 {/* Mobile Field */}
// //                 <div>
// //                   <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
// //                     <Phone className="inline w-4 h-4 mr-2" />
// //                     Mobile Number
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       id="mobile"
// //                       name="mobile"
// //                       type="tel"
// //                       autoComplete="tel"
// //                       required
// //                       value={formData.mobile}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
// //                         hasFieldError('mobile') 
// //                           ? 'border-red-300 focus:ring-red-500' 
// //                           : isValidField('mobile')
// //                           ? 'border-green-300 focus:ring-green-500'
// //                           : 'border-gray-300 focus:ring-blue-500'
// //                       }`}
// //                       placeholder="9876543210"
// //                       maxLength="10"
// //                     />
// //                     <Phone className={`absolute left-3 top-3.5 w-5 h-5 ${
// //                       hasFieldError('mobile') ? 'text-red-400' : isValidField('mobile') ? 'text-green-500' : 'text-gray-400'
// //                     }`} />
// //                     {isValidField('mobile') && (
// //                       <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
// //                     )}
// //                   </div>
// //                   {(touched.mobile || backendErrors.mobile) && getFieldError('mobile') && (
// //                     <div className="mt-2 flex items-center text-red-600 text-sm">
// //                       <AlertCircle className="w-4 h-4 mr-1" />
// //                       {getFieldError('mobile')}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
              
// //               {/* Password Fields */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {/* Password Field */}
// //                 <div>
// //                   <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
// //                     <Lock className="inline w-4 h-4 mr-2" />
// //                     Password
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       id="password"
// //                       name="password"
// //                       type={showPassword ? "text" : "password"}
// //                       autoComplete="new-password"
// //                       required
// //                       value={formData.password}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
// //                         hasFieldError('password') 
// //                           ? 'border-red-300 focus:ring-red-500' 
// //                           : isValidField('password')
// //                           ? 'border-green-300 focus:ring-green-500'
// //                           : 'border-gray-300 focus:ring-blue-500'
// //                       }`}
// //                       placeholder="Create a strong password"
// //                     />
// //                     <Lock className={`absolute left-3 top-3.5 w-5 h-5 ${
// //                       hasFieldError('password') ? 'text-red-400' : isValidField('password') ? 'text-green-500' : 'text-gray-400'
// //                     }`} />
// //                     <button
// //                       type="button"
// //                       onClick={() => setShowPassword(!showPassword)}
// //                       className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
// //                     >
// //                       {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
// //                     </button>
// //                   </div>
                  
// //                   {/* Password Strength Meter */}
// //                   {formData.password && (
// //                     <div className="mt-2">
// //                       <div className="flex justify-between mb-1">
// //                         <span className="text-xs text-gray-600">Password strength</span>
// //                         <span className={`text-xs font-medium ${
// //                           passwordStrength < 50 ? 'text-red-500' :
// //                           passwordStrength < 75 ? 'text-yellow-500' : 'text-green-500'
// //                         }`}>
// //                           {passwordStrength < 50 ? 'Weak' : passwordStrength < 75 ? 'Fair' : 'Strong'}
// //                         </span>
// //                       </div>
// //                       <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
// //                         <div 
// //                           className={`h-full transition-all duration-300 ${
// //                             passwordStrength < 50 ? 'bg-red-500' :
// //                             passwordStrength < 75 ? 'bg-yellow-500' : 'bg-green-500'
// //                           }`}
// //                           style={{ width: `${passwordStrength}%` }}
// //                         />
// //                       </div>
// //                     </div>
// //                   )}
                  
// //                   {(touched.password || backendErrors.password) && getFieldError('password') && (
// //                     <div className="mt-2 flex items-center text-red-600 text-sm">
// //                       <AlertCircle className="w-4 h-4 mr-1" />
// //                       {getFieldError('password')}
// //                     </div>
// //                   )}
// //                 </div>
                
// //                 {/* Confirm Password Field */}
// //                 <div>
// //                   <label htmlFor="confirm_password" className="block text-sm font-semibold text-gray-700 mb-2">
// //                     <Lock className="inline w-4 h-4 mr-2" />
// //                     Confirm Password
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       id="confirm_password"
// //                       name="confirm_password"
// //                       type={showConfirmPassword ? "text" : "password"}
// //                       autoComplete="new-password"
// //                       required
// //                       value={formData.confirm_password}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
// //                         hasFieldError('confirm_password') 
// //                           ? 'border-red-300 focus:ring-red-500' 
// //                           : isValidField('confirm_password')
// //                           ? 'border-green-300 focus:ring-green-500'
// //                           : 'border-gray-300 focus:ring-blue-500'
// //                       }`}
// //                       placeholder="Re-enter your password"
// //                     />
// //                     <Lock className={`absolute left-3 top-3.5 w-5 h-5 ${
// //                       hasFieldError('confirm_password') ? 'text-red-400' : isValidField('confirm_password') ? 'text-green-500' : 'text-gray-400'
// //                     }`} />
// //                     <button
// //                       type="button"
// //                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                       className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
// //                     >
// //                       {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
// //                     </button>
// //                   </div>
// //                   {(touched.confirm_password || backendErrors.confirm_password) && getFieldError('confirm_password') && (
// //                     <div className="mt-2 flex items-center text-red-600 text-sm">
// //                       <AlertCircle className="w-4 h-4 mr-1" />
// //                       {getFieldError('confirm_password')}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
              
// //               {/* Terms and Conditions - FIXED: Added back */}
// //               <div className="flex items-start">
// //                 <input
// //                   id="terms"
// //                   name="terms"
// //                   type="checkbox"
// //                   checked={acceptedTerms}
// //                   onChange={handleChange}
// //                   className="h-5 w-5 mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //                 />
// //                 <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
// //                   I agree to the{' '}
// //                   <a href="/terms" className="text-blue-600 hover:text-blue-500 font-medium">
// //                     Terms of Service
// //                   </a>{' '}
// //                   and{' '}
// //                   <a href="/privacy" className="text-blue-600 hover:text-blue-500 font-medium">
// //                     Privacy Policy
// //                   </a>
// //                 </label>
// //               </div>
// //               {errors.terms && (
// //                 <div className="mt-1 flex items-center text-red-600 text-sm">
// //                   <AlertCircle className="w-4 h-4 mr-1" />
// //                   {errors.terms}
// //                 </div>
// //               )}
              
// //               {/* Submit Button */}
// //               <div>
// //                 <button
// //                   type="submit"
// //                   disabled={loading}
// //                   className={`group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-lg font-semibold rounded-xl text-white shadow-lg transition-all duration-300 ${
// //                     loading 
// //                       ? 'bg-blue-400 cursor-not-allowed' 
// //                       : 'bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
// //                   }`}
// //                 >
// //                   {loading ? (
// //                     <>
// //                       <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// //                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// //                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// //                       </svg>
// //                       Creating Account...
// //                     </>
// //                   ) : (
// //                     <>
// //                       Get Started
// //                       <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //                     </>
// //                   )}
// //                 </button>
                
// //                 <div className="mt-6 text-center">
// //                   <p className="text-gray-600">
// //                     Already registered?{' '}
// //                     <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
// //                       Sign in to your account
// //                     </Link>
// //                   </p>
// //                 </div>
                  
                  




// //               </div>
// //             </form>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-6 px-4 sm:px-6 lg:px-8">
//   {/* Success Popup Modal */}
//   {showSuccessPopup && (
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       <div className="flex min-h-full items-center justify-center p-4 text-center">
//         {/* Backdrop */}
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
//           onClick={closeSuccessPopup}
//         />
        
//         {/* Modal Content */}
//         <div className={`relative transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all ${
//           animateSuccess ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//         }`}>
//           <div className="flex flex-col items-center text-center">
//             {/* Animated Success Circle */}
//             <div className="relative">
//               <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
//                 <div className="absolute inset-0 animate-ping bg-green-200 rounded-full opacity-75"></div>
//                 <CheckCircle className="w-12 h-12 text-green-600" />
//               </div>
              
//               {/* Confetti Animation */}
//               <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-75 animate-bounce"></div>
//               <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-75 animate-bounce delay-100"></div>
//               <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full opacity-75 animate-bounce delay-200"></div>
//             </div>
            
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">
//               Registration Successful! 🎉
//             </h3>
            
//             <div className="mt-4 space-y-3">
//               {/* <p className="text-2xl text-gray-700 font-bold">{message || "Welcome aboard!"}</p> */}
//               <p className="text-2xl text-light-blue-900 font-bold ">
//          Please check your email to verify your account. 📩
//               </p>
              
              
//             </div>
            
//             <div className="mt-8 flex gap-4">
//               <button
//                 type="button"
//                 onClick={closeSuccessPopup}
//                 className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
//               >
//                 Go to Login Now
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setShowSuccessPopup(false);
//                   setAnimateSuccess(false);
//                   // Clear timers
//                   if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
//                   if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
//                 }}
//                 className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
//               >
//                 Stay on Page
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )}

//   <div className="flex flex-col lg:flex-row gap-8 w-full">
//     {/* Form Section - Shows FIRST on mobile, SECOND on desktop (right side) */}
//     <div className="lg:w-1/2 order-1 lg:order-2">
//       <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             Create POSP Account
//           </h2>
//         </div>
        
//         {/* Error Display */}
//         {signupError && !success && Object.keys(backendErrors).length === 0 && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
//             <div className="flex items-center">
//               <XCircle className="w-5 h-5 text-red-500 mr-3" />
//               <p className="text-red-800 font-medium">{signupError}</p>
//             </div>
//           </div>
//         )}
        
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                 <User className="inline w-4 h-4 mr-2" />
//                 Full Name
//               </label>
//               <div className="relative">
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   autoComplete="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
//                     hasFieldError('name') 
//                       ? 'border-red-300 focus:ring-red-500' 
//                       : isValidField('name')
//                       ? 'border-green-300 focus:ring-green-500'
//                       : 'border-gray-300 focus:ring-blue-500'
//                   }`}
//                   placeholder="Enter your full name"
//                 />
//                 <User className={`absolute left-3 top-3.5 w-5 h-5 ${
//                   hasFieldError('name') ? 'text-red-400' : isValidField('name') ? 'text-green-500' : 'text-gray-400'
//                 }`} />
//                 {isValidField('name') && (
//                   <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
//                 )}
//               </div>
//               {(touched.name || backendErrors.name) && getFieldError('name') && (
//                 <div className="mt-2 flex items-center text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {getFieldError('name')}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Email and Mobile Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 <Mail className="inline w-4 h-4 mr-2" />
//                 Email Address
//               </label>
//               <div className="relative">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
//                     hasFieldError('email') 
//                       ? 'border-red-300 focus:ring-red-500' 
//                       : isValidField('email')
//                       ? 'border-green-300 focus:ring-green-500'
//                       : 'border-gray-300 focus:ring-blue-500'
//                   }`}
//                   placeholder="you@example.com"
//                 />
//                 <Mail className={`absolute left-3 top-3.5 w-5 h-5 ${
//                   hasFieldError('email') ? 'text-red-400' : isValidField('email') ? 'text-green-500' : 'text-gray-400'
//                 }`} />
//                 {isValidField('email') && (
//                   <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
//                 )}
//               </div>
//               {(touched.email || backendErrors.email) && getFieldError('email') && (
//                 <div className="mt-2 flex items-center text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {getFieldError('email')}
//                 </div>
//               )}
//             </div>
            
//             {/* Mobile Field */}
//             <div>
//               <label htmlFor="panno" className="block text-sm font-semibold text-gray-700 mb-2">
//                 <Phone className="inline w-4 h-4 mr-2" />
//                 Pan Number
//               </label>
//               <div className="relative">
//                 <input
//                   id="panno"
//                   name="panno"
//                   type="text"
//                   autoComplete="text"
//                   required
//                   value={formData.panno}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
//                     hasFieldError('panno') 
//                       ? 'border-red-300 focus:ring-red-500' 
//                       : isValidField('panno')
//                       ? 'border-green-300 focus:ring-green-500'
//                       : 'border-gray-300 focus:ring-blue-500'
//                   }`}
//                   placeholder="ABCDE1234F"
//                   maxLength="10"
//                 />
//                 <Phone className={`absolute left-3 top-3.5 w-5 h-5 ${
//                   hasFieldError('panno') ? 'text-red-400' : isValidField('panno') ? 'text-green-500' : 'text-gray-400'
//                 }`} />
//                 {isValidField('panno') && (
//                   <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
//                 )}
//               </div>
//               {(touched.panno || backendErrors.panno) && getFieldError('panno') && (
//                 <div className="mt-2 flex items-center text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {getFieldError('panno')}
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Email and Mobile Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 <Mail className="inline w-4 h-4 mr-2" />
//                 Email Address
//               </label>
//               <div className="relative">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
//                     hasFieldError('email') 
//                       ? 'border-red-300 focus:ring-red-500' 
//                       : isValidField('email')
//                       ? 'border-green-300 focus:ring-green-500'
//                       : 'border-gray-300 focus:ring-blue-500'
//                   }`}
//                   placeholder="you@example.com"
//                 />
//                 <Mail className={`absolute left-3 top-3.5 w-5 h-5 ${
//                   hasFieldError('email') ? 'text-red-400' : isValidField('email') ? 'text-green-500' : 'text-gray-400'
//                 }`} />
//                 {isValidField('email') && (
//                   <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
//                 )}
//               </div>
//               {(touched.email || backendErrors.email) && getFieldError('email') && (
//                 <div className="mt-2 flex items-center text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {getFieldError('email')}
//                 </div>
//               )}
//             </div>
            
//             {/* Mobile Field */}
//             <div>
//               <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
//                 <Phone className="inline w-4 h-4 mr-2" />
//                 Mobile Number
//               </label>
//               <div className="relative">
//                 <input
//                   id="mobile"
//                   name="mobile"
//                   type="tel"
//                   autoComplete="tel"
//                   required
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
//                     hasFieldError('mobile') 
//                       ? 'border-red-300 focus:ring-red-500' 
//                       : isValidField('mobile')
//                       ? 'border-green-300 focus:ring-green-500'
//                       : 'border-gray-300 focus:ring-blue-500'
//                   }`}
//                   placeholder="9876543210"
//                   maxLength="10"
//                 />
//                 <Phone className={`absolute left-3 top-3.5 w-5 h-5 ${
//                   hasFieldError('mobile') ? 'text-red-400' : isValidField('mobile') ? 'text-green-500' : 'text-gray-400'
//                 }`} />
//                 {isValidField('mobile') && (
//                   <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
//                 )}
//               </div>
//               {(touched.mobile || backendErrors.mobile) && getFieldError('mobile') && (
//                 <div className="mt-2 flex items-center text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {getFieldError('mobile')}
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Password Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 <Lock className="inline w-4 h-4 mr-2" />
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="new-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
//                     hasFieldError('password') 
//                       ? 'border-red-300 focus:ring-red-500' 
//                       : isValidField('password')
//                       ? 'border-green-300 focus:ring-green-500'
//                       : 'border-gray-300 focus:ring-blue-500'
//                   }`}
//                   placeholder="Create a strong password"
//                 />
//                 <Lock className={`absolute left-3 top-3.5 w-5 h-5 ${
//                   hasFieldError('password') ? 'text-red-400' : isValidField('password') ? 'text-green-500' : 'text-gray-400'
//                 }`} />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
              
//               {/* Password Strength Meter */}
//               {formData.password && (
//                 <div className="mt-2">
//                   <div className="flex justify-between mb-1">
//                     <span className="text-xs text-gray-600">Password strength</span>
//                     <span className={`text-xs font-medium ${
//                       passwordStrength < 50 ? 'text-red-500' :
//                       passwordStrength < 75 ? 'text-yellow-500' : 'text-green-500'
//                     }`}>
//                       {passwordStrength < 50 ? 'Weak' : passwordStrength < 75 ? 'Fair' : 'Strong'}
//                     </span>
//                   </div>
//                   <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                     <div 
//                       className={`h-full transition-all duration-300 ${
//                         passwordStrength < 50 ? 'bg-red-500' :
//                         passwordStrength < 75 ? 'bg-yellow-500' : 'bg-green-500'
//                       }`}
//                       style={{ width: `${passwordStrength}%` }}
//                     />
//                   </div>
//                 </div>
//               )}
              
//               {(touched.password || backendErrors.password) && getFieldError('password') && (
//                 <div className="mt-2 flex items-center text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {getFieldError('password')}
//                 </div>
//               )}
//             </div>
            
//             {/* Confirm Password Field */}
//             <div>
//               <label htmlFor="confirm_password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 <Lock className="inline w-4 h-4 mr-2" />
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="confirm_password"
//                   name="confirm_password"
//                   type={showConfirmPassword ? "text" : "password"}
//                   autoComplete="new-password"
//                   required
//                   value={formData.confirm_password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 ${
//                     hasFieldError('confirm_password') 
//                       ? 'border-red-300 focus:ring-red-500' 
//                       : isValidField('confirm_password')
//                       ? 'border-green-300 focus:ring-green-500'
//                       : 'border-gray-300 focus:ring-blue-500'
//                   }`}
//                   placeholder="Re-enter your password"
//                 />
//                 <Lock className={`absolute left-3 top-3.5 w-5 h-5 ${
//                   hasFieldError('confirm_password') ? 'text-red-400' : isValidField('confirm_password') ? 'text-green-500' : 'text-gray-400'
//                 }`} />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
//                 >
//                   {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {(touched.confirm_password || backendErrors.confirm_password) && getFieldError('confirm_password') && (
//                 <div className="mt-2 flex items-center text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {getFieldError('confirm_password')}
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Terms and Conditions */}
//           <div className="flex items-start">
//             <input
//               id="terms"
//               name="terms"
//               type="checkbox"
//               checked={acceptedTerms}
//               onChange={handleChange}
//               className="h-5 w-5 mt-0.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//             />
//             <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
//               I agree to the{' '}
//               <a href="/terms" className="text-blue-600 hover:text-blue-500 font-medium">
//                 Terms of Service
//               </a>{' '}
//               and{' '}
//               <a href="/privacy" className="text-blue-600 hover:text-blue-500 font-medium">
//                 Privacy Policy
//               </a>
//             </label>
//           </div>
//           {errors.terms && (
//             <div className="mt-1 flex items-center text-red-600 text-sm">
//               <AlertCircle className="w-4 h-4 mr-1" />
//               {errors.terms}
//             </div>
//           )}
          
//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`group relative w-full flex justify-center items-center py-4 px-4 border border-transparent text-lg font-semibold rounded-xl text-white shadow-lg transition-all duration-300 ${
//                 loading 
//                   ? 'bg-blue-400 cursor-not-allowed' 
//                   : 'bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
//               }`}
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Creating Account...
//                 </>
//               ) : (
//                 <>
//                   Get Started
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </>
//               )}
//             </button>
            
//             <div className="mt-6 text-center">
//               <p className="text-gray-600">
//                 Already registered?{' '}
//                 <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
//                   Sign in to your account
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
    
//     {/* Info/Hero Section - Shows SECOND on mobile, FIRST on desktop (left side) */}
//     <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
//       <div className="bg-gradient-to-br from-blue-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
//         <div className="flex items-center mb-6">
//           <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
//             <User className="w-6 h-6" />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">Join Our POSP Network</h2>
//             <p className="text-blue-100">Start your financial journey today</p>
//           </div>
//         </div>
        
//         <div className="space-y-6 mb-8">
//           <div className="flex items-start">
//             <div className="bg-white/20 p-2 rounded-lg mr-4">
//               <CheckCircle className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="font-semibold">Earn Commissions</h4>
//               <p className="text-sm text-blue-100">Attractive commissions on every policy</p>
//             </div>
//           </div>
          
//           <div className="flex items-start">
//             <div className="bg-white/20 p-2 rounded-lg mr-4">
//               <CheckCircle className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="font-semibold">Digital Tools</h4>
//               <p className="text-sm text-blue-100">Access to premium sales tools</p>
//             </div>
//           </div>
          
//           <div className="flex items-start">
//             <div className="bg-white/20 p-2 rounded-lg mr-4">
//               <CheckCircle className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="font-semibold">Training & Support</h4>
//               <p className="text-sm text-blue-100">Comprehensive training program</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-white/20 pt-6">
//           <p className="text-sm">
//             <span className="font-semibold">Already have an account?</span>{" "}
//             <Link
//               to="/login"
//               className="underline hover:text-white transition-colors"
//             >
//               Sign in to your dashboard
//             </Link>
//           </p>
//         </div>
//       </div>
      
//       {/* Stats */}
//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-blue-600">500+</div>
//           <div className="text-sm text-gray-600">Active POSPs</div>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-blue-600">₹2.5Cr+</div>
//           <div className="text-sm text-gray-600">Commissions Paid</div>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
//           <div className="text-2xl font-bold text-blue-600">98%</div>
//           <div className="text-sm text-gray-600">Satisfaction Rate</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default BecomePosp;

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/actions/PospSignUpAction';
import { resetSignupState } from '../../redux/reducers/PospSignUpInSlice';
import { CheckCircle, XCircle, AlertCircle, Eye, EyeOff, User, Mail, Phone, Lock, ArrowRight, CreditCard } from 'lucide-react';
import { Link } from "react-router-dom";

const BecomePosp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, signupError, fieldErrors, message } = useSelector((state) => state.register);

  const [formData, setFormData] = useState({
    name: '',
    panno: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const redirectTimerRef = useRef(null);
  const countdownTimerRef = useRef(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'terms') {
      setAcceptedTerms(e.target.checked);
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }

    if (backendErrors[name]) {
      setBackendErrors({ ...backendErrors, [name]: '' });
    }
  };

  // Handle input blur for validation
  const handleBlur = (e) => {
    const { name } = e.target;
    if (name === 'terms') return;

    setTouched({ ...touched, [name]: true });
    validateField(name, formData[name]);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        break;

      case 'panno':
        if (!value.trim()) error = 'PAN number is required';
        else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value.toUpperCase()))
          error = 'PAN must be in format ABCDE1234F';
        break;

      case 'email':
        if (!value) error = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid';
        break;

      case 'mobile':
        if (!value) error = 'Mobile number is required';
        else if (!/^\d{10}$/.test(value)) error = 'Mobile number must be 10 digits';
        break;

      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 6) error = 'Password must be at least 6 characters';
        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
          error = 'Include upper, lower case and number';
        break;

      case 'confirm_password':
        if (!value) error = 'Please confirm your password';
        else if (value !== formData.password) error = 'Passwords do not match';
        break;

      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
  };

  // Update backend errors when Redux state changes
  useEffect(() => {
    if (fieldErrors && Object.keys(fieldErrors).length > 0) {
      const formattedErrors = {};
      Object.keys(fieldErrors).forEach(key => {
        if (Array.isArray(fieldErrors[key]) && fieldErrors[key].length > 0) {
          formattedErrors[key] = fieldErrors[key][0];
        } else {
          formattedErrors[key] = fieldErrors[key];
        }
      });
      setBackendErrors(formattedErrors);
    } else {
      setBackendErrors({});
    }
  }, [fieldErrors]);

  // Show success popup and start countdown when registration is successful
  useEffect(() => {
    if (success) {
      handleReset();

      setShowSuccessPopup(true);
      setTimeout(() => {
        setAnimateSuccess(true);
      }, 100);

      setCountdown(5);

      countdownTimerRef.current = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownTimerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      redirectTimerRef.current = setTimeout(() => {
        closeSuccessPopup();
        navigate('/login');
      }, 5000);

      return () => {
        if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
        if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
      };
    }
  }, [success, navigate]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    };
  }, []);

  // Validate all fields including terms
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.panno) newErrors.panno = 'PAN number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirm_password) newErrors.confirm_password = 'Please confirm your password';
    if (!acceptedTerms) newErrors.terms = 'You must accept the terms and conditions';

    if (formData.panno && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panno.toUpperCase())) {
      newErrors.panno = 'PAN must be in format ABCDE1234F';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.confirm_password && formData.confirm_password !== formData.password) {
      newErrors.confirm_password = 'Passwords do not match';
    }

    setErrors(newErrors);
    setBackendErrors({});
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch(registerUser(formData));
  };

  // Reset form and state
  const handleReset = () => {
    setFormData({
      name: '',
      panno: '',
      email: '',
      mobile: '',
      password: '',
      confirm_password: '',
    });
    setAcceptedTerms(false);
    setErrors({});
    setBackendErrors({});
    setTouched({});
    dispatch(resetSignupState());
  };

  // Close success popup
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setAnimateSuccess(false);

    if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);

    navigate('/login');
  };

  // Helper functions
  const getFieldError = (fieldName) => backendErrors[fieldName] || errors[fieldName] || '';
  const hasFieldError = (fieldName) => !!(backendErrors[fieldName] || errors[fieldName]);
  const isValidField = (fieldName) => touched[fieldName] && formData[fieldName] && !hasFieldError(fieldName);

  // Password strength
  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    return strength;
  };
  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-6 pb-20 md:pt-10 md:pb-24 px-5 md:px-8 lg:px-12 xl:px-20 font-sans flex items-start justify-center">
      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={closeSuccessPopup}
            />
            <div className={`relative transform overflow-hidden rounded-none bg-white p-8 md:p-10 shadow-2xl transition-all ${
              animateSuccess ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-green-100 rounded-none flex items-center justify-center mb-6">
                    <div className="absolute inset-0 bg-green-200 rounded-none opacity-20"></div>
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sora">
                  Registration Successful! 🎉
                </h3>
                <div className="mt-4 space-y-3">
                  <p className="text-xl text-primary-blue font-bold">
                    Please check your email to verify your account. 📩
                  </p>
                </div>
                <div className="mt-8 flex gap-4 justify-center">
                  <button
                    type="button"
                    onClick={closeSuccessPopup}
                    className="px-6 py-3 bg-primary-blue hover:bg-[#0f2a52] text-white font-semibold rounded-none shadow-md transition-all duration-200 cursor-pointer"
                  >
                    Go to Login Now
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSuccessPopup(false);
                      setAnimateSuccess(false);
                      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
                      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-none hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                  >
                    Stay on Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Container Wrapper with Gap */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full max-w-[1280px] mx-auto items-stretch">
        
        {/* LEFT COLUMN: Deep blue gradient info panel */}
        <div className="lg:w-[42%] bg-gradient-to-br from-primary-blue to-[#0f2a52] p-8 md:p-10 text-white flex flex-col justify-between shadow-2xl rounded-none border border-primary-blue/20">
          
          {/* Header */}
          <div>
            <div className="flex items-center mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center mr-4 border border-white/10 shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black font-sora tracking-tight leading-tight">Join Our POSP Network</h2>
                <p className="text-white/70 text-xs font-semibold">Start your financial journey today</p>
              </div>
            </div>

            {/* Original Bullet Details with CheckCircle */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-none mr-4 border border-white/10 shrink-0">
                  <CheckCircle className="w-4 h-4 text-white/90" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-sora leading-tight mb-1">Earn Commissions</h4>
                  <p className="text-xs text-white/80 font-medium">Attractive commissions on every policy</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-none mr-4 border border-white/10 shrink-0">
                  <CheckCircle className="w-4 h-4 text-white/90" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-sora leading-tight mb-1">Digital Tools</h4>
                  <p className="text-xs text-white/80 font-medium">Access to premium sales tools</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-none mr-4 border border-white/10 shrink-0">
                  <CheckCircle className="w-4 h-4 text-white/90" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white font-sora leading-tight mb-1">Training & Support</h4>
                  <p className="text-xs text-white/80 font-medium">Comprehensive training program</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Trust Details Footer */}
          <div className="mt-10">
            {/* Already have an account link inside the card */}
            <div className="border-t border-white/10 pt-4 mb-6">
              <p className="text-xs text-white/80 font-semibold">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline hover:text-white transition-colors font-bold text-white"
                >
                  Sign in to your dashboard
                </Link>
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-6 mb-6">
              <div className="text-center">
                <div className="text-lg font-black text-white font-sora">500+</div>
                <div className="text-[8px] font-extrabold text-white/50 uppercase tracking-widest">Active POSPs</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-lg font-black text-white font-sora">₹2.5Cr+</div>
                <div className="text-[8px] font-extrabold text-white/50 uppercase tracking-widest">Commissions Paid</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-white font-sora">98%</div>
                <div className="text-[8px] font-extrabold text-white/50 uppercase tracking-widest">Satisfaction Rate</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-white/40 font-bold uppercase tracking-widest">
              <span>IRDAI License No. 619</span>
              <span>100% Compliant</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Clean white form panel */}
        <div className="lg:w-[58%] bg-white border border-slate-100 rounded-none shadow-2xl p-8 md:p-10 flex flex-col justify-center">
          
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900 mb-1 font-sora tracking-tight">
              Create POSP Account
            </h2>
            <p className="text-gray-500 text-xs font-semibold">Register as a Point of Sales Person (POSP) today</p>
          </div>

          {/* Error Display */}
          {signupError && !success && Object.keys(backendErrors).length === 0 && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-none">
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-red-500 mr-3 shrink-0" />
                <p className="text-red-800 font-semibold text-xs">{signupError}</p>
              </div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 pl-10 pr-10 border rounded-none focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-xs ${
                      hasFieldError('name')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('name')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                    placeholder="Enter your full name"
                  />
                  <User className={`absolute left-3.5 top-3 w-4 h-4 ${
                    hasFieldError('name') ? 'text-red-400' : isValidField('name') ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  {isValidField('name') && (
                    <CheckCircle className="absolute right-3.5 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>
                {(touched.name || backendErrors.name) && getFieldError('name') && (
                  <div className="mt-1.5 flex items-center text-red-600 text-[10px] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {getFieldError('name')}
                  </div>
                )}
              </div>

              {/* PAN Number */}
              <div>
                <label htmlFor="panno" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">
                  PAN Number
                </label>
                <div className="relative">
                  <input
                    id="panno"
                    name="panno"
                    type="text"
                    autoComplete="off"
                    required
                    value={formData.panno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 pl-10 pr-10 border rounded-none focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-xs ${
                      hasFieldError('panno')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('panno')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                    placeholder="ABCDE1234F"
                    maxLength="10"
                  />
                  <CreditCard className={`absolute left-3.5 top-3 w-4 h-4 ${
                    hasFieldError('panno') ? 'text-red-400' : isValidField('panno') ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  {isValidField('panno') && (
                    <CheckCircle className="absolute right-3.5 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>
                {(touched.panno || backendErrors.panno) && getFieldError('panno') && (
                  <div className="mt-1.5 flex items-center text-red-600 text-[10px] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {getFieldError('panno')}
                  </div>
                )}
              </div>
            </div>

            {/* Email and Mobile in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 pl-10 pr-10 border rounded-none focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-xs ${
                      hasFieldError('email')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('email')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                    placeholder="you@example.com"
                  />
                  <Mail className={`absolute left-3.5 top-3 w-4 h-4 ${
                    hasFieldError('email') ? 'text-red-400' : isValidField('email') ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  {isValidField('email') && (
                    <CheckCircle className="absolute right-3.5 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>
                {(touched.email || backendErrors.email) && getFieldError('email') && (
                  <div className="mt-1.5 flex items-center text-red-600 text-[10px] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {getFieldError('email')}
                  </div>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 pl-10 pr-10 border rounded-none focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-xs ${
                      hasFieldError('mobile')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('mobile')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                    placeholder="9876543210"
                    maxLength="10"
                  />
                  <Phone className={`absolute left-3.5 top-3 w-4 h-4 ${
                    hasFieldError('mobile') ? 'text-red-400' : isValidField('mobile') ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  {isValidField('mobile') && (
                    <CheckCircle className="absolute right-3.5 top-3 w-4 h-4 text-green-500" />
                  )}
                </div>
                {(touched.mobile || backendErrors.mobile) && getFieldError('mobile') && (
                  <div className="mt-1.5 flex items-center text-red-600 text-[10px] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {getFieldError('mobile')}
                  </div>
                )}
              </div>
            </div>

            {/* Password and Confirm Password in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 pl-10 pr-10 border rounded-none focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-xs ${
                      hasFieldError('password')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('password')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                    placeholder="Create a strong password"
                  />
                  <Lock className={`absolute left-3.5 top-3 w-4 h-4 ${
                    hasFieldError('password') ? 'text-red-400' : isValidField('password') ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Strength</span>
                      <span className={`text-[10px] font-bold ${
                        passwordStrength < 50 ? 'text-red-500' :
                        passwordStrength < 75 ? 'text-yellow-600' : 'text-green-500'
                      }`}>
                        {passwordStrength < 50 ? 'Weak' : passwordStrength < 75 ? 'Fair' : 'Strong'}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-none overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          passwordStrength < 50 ? 'bg-red-500' :
                          passwordStrength < 75 ? 'bg-yellow-600' : 'bg-green-500'
                        }`}
                        style={{ width: `${passwordStrength}%` }}
                      />
                    </div>
                  </div>
                )}
                {(touched.password || backendErrors.password) && getFieldError('password') && (
                  <div className="mt-1.5 flex items-center text-red-600 text-[10px] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {getFieldError('password')}
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirm_password" className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2.5 pl-10 pr-10 border rounded-none focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-xs ${
                      hasFieldError('confirm_password')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('confirm_password')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                    placeholder="Re-enter your password"
                  />
                  <Lock className={`absolute left-3.5 top-3 w-4 h-4 ${
                    hasFieldError('confirm_password') ? 'text-red-400' : isValidField('confirm_password') ? 'text-green-500' : 'text-gray-400'
                  }`} />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {(touched.confirm_password || backendErrors.confirm_password) && getFieldError('confirm_password') && (
                  <div className="mt-1.5 flex items-center text-red-600 text-[10px] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {getFieldError('confirm_password')}
                  </div>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start pt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={handleChange}
                className="h-4 w-4 mt-0.5 text-primary-blue focus:ring-primary-blue border-gray-305 border-gray-300 rounded-none cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2.5 block text-xs font-semibold text-gray-500 leading-normal select-none">
                I agree to the{' '}
                <a href="/terms" className="text-primary-blue hover:text-primary-blue/80 font-bold transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-primary-blue hover:text-primary-blue/80 font-bold transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && (
              <div className="mt-1 flex items-center text-red-600 text-[10px] font-bold">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                {errors.terms}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full flex justify-center items-center py-3.5 px-4 text-sm font-black rounded-none text-white shadow-lg transition-all duration-300 cursor-pointer ${
                  loading
                    ? 'bg-orange-300 cursor-not-allowed shadow-none'
                    : 'bg-accent-orange hover:bg-orange-600 hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="mt-5 text-center">
                <p className="text-gray-500 text-xs font-semibold">
                  Already registered?{' '}
                  <Link to="/login" className="font-black text-primary-blue hover:text-primary-blue/80 transition-colors">
                    Sign in to your account
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default BecomePosp;
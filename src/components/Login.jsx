
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAuth } from '../redux/actions/authActions';
import { CheckCircle, XCircle, AlertCircle, Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';




const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    login: '',
    password: '',
    
  });

  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [requiresVerification, setRequiresVerification] = useState(false);

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'login' && !value.trim()) error = 'Email or mobile number is required';
    if (name === 'password' && !value) error = 'Password is required';

    setErrors({ ...errors, [name]: error });
  };

  const showSuccessMessagePopup = (message) => {
    setSuccessMessage(message);
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
      setSuccessMessage('');
    }, 5000);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.login.trim()) newErrors.login = 'Email or mobile number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ login: true, password: true });

    if (!validateForm()) return;

    const response = await dispatch(loginAuth(formData));

    if (response.success) {
      if (response.role === 'POSP') {
       
      window.location.href = "https://posp.notioninsurance.in/";
      // window.location.href = "http://localhost:3000/";

      return;
        
      }
        
      if (response.role === 'Admin') {
       
      window.location.href = "https://grid.notioninsurance.in/";

      //  window.location.href = "http://localhost:4000/";
       
       return;
        
      }

      if (response.redirect_url) {
        window.location.href = response.redirect_url;
      }
    } else {
      if (response.action === 'verify_email') {
        setRequiresVerification(true);
        showSuccessMessagePopup(
          'Your email is not verified. A verification link has been sent to your inbox.'
        );
      } else {
        setErrors({ ...errors, login: response.message || 'Login failed' });
      }
    }
  };

  const hasFieldError = (fieldName) => !!errors[fieldName];

  const isValidField = (fieldName) =>
    touched[fieldName] && formData[fieldName] && !hasFieldError(fieldName);

  const getLoginIcon = () => {
    const loginValue = formData.login.trim();
    if (!loginValue) return Mail;
    if (/^\d+$/.test(loginValue)) return Phone;
    if (loginValue.includes('@')) return Mail;
    return User;
  };

  const LoginIcon = getLoginIcon();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-20 px-5 md:px-8 lg:px-12 xl:px-20 font-sans flex items-center justify-center">

      {/* SUCCESS POPUP (unchanged) */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setShowSuccessPopup(false)} />
            <div className="relative transform overflow-hidden rounded-[32px] bg-white p-8 md:p-10 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  {requiresVerification ? (
                    <AlertCircle className="w-12 h-12 text-yellow-600" />
                  ) : (
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sora">
                  {requiresVerification ? 'Verification Required' : 'Important Notice'}
                </h3>

                <p className="text-lg text-gray-705 font-medium mt-4">{successMessage}</p>
                <div className="mt-8">
                  <button
                    className="px-6 py-3 bg-primary-blue hover:bg-[#0f2a52] text-white font-semibold rounded-xl shadow-md cursor-pointer transition-all duration-200"
                    onClick={() => setShowSuccessPopup(false)}
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ----------- MAIN CONTENT WRAPPER ----------- */}
      {/* MOBILE → form first, video second / DESKTOP → video first, form second */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full max-w-[1280px] mx-auto items-stretch">

        {/* LEFT: VIDEO SECTION (unchanged UI) */}
        <div className="lg:w-1/2 flex flex-col justify-between h-full">

          <div className="mb-8 relative overflow-hidden rounded-[32px] shadow-2xl group flex-grow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover rounded-[32px]"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>

            {/* Controls */}
            <div className="absolute bottom-4 right-4 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={togglePlay}
                className="bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <button
                onClick={toggleMute}
                className="bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            <div className="absolute bottom-8 left-8 z-20 text-white">
              <h2 className="text-2xl font-black font-sora mb-1 tracking-tight leading-tight">Welcome Back POSP!</h2>
              <p className="text-sm text-white/90 font-medium">Access your dashboard and manage policies</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[24px] shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl font-black text-primary-blue leading-none mb-1 font-sora">500+</div>
              <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">Active POSPs</div>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl font-black text-accent-orange leading-none mb-1 font-sora">₹2.5Cr+</div>
              <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">Commissions Paid</div>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl font-black text-green-500 leading-none mb-1 font-sora">98%</div>
              <div className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* RIGHT: LOGIN FORM */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="bg-white rounded-[32px] shadow-2xl p-8 md:p-10 border border-slate-100 flex-grow">

            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2 font-sora tracking-tight">Login to Your Account</h2>
              <p className="text-gray-500 text-sm font-semibold">Enter your credentials to access the dashboard</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* LOGIN FIELD */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                  <LoginIcon className="inline w-3.5 h-3.5 mr-1.5 align-text-top" /> Email or Mobile Number
                </label>

                <div className="relative">
                  <input
                    id="login"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    type="text"
                    placeholder="Enter email or mobile number"
                    className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-sm ${
                      hasFieldError('login')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('login')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                  />

                  <LoginIcon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                </div>

                {touched.login && errors.login && (
                  <div className="mt-2 text-red-600 text-xs font-semibold flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 shrink-0" /> {errors.login}
                  </div>
                )}
              </div>

              {/* PASSWORD FIELD */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                  <Lock className="inline w-3.5 h-3.5 mr-1.5 align-text-top" /> Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your password"
                    className={`w-full px-4 py-3 pl-11 pr-11 border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 text-sm ${
                      hasFieldError('password')
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/20'
                        : isValidField('password')
                        ? 'border-green-300 focus:ring-green-500 bg-green-50/10'
                        : 'border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-primary-blue/20 focus:bg-white'
                    }`}
                  />

                  <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {touched.password && errors.password && (
                  <div className="mt-2 text-red-600 text-xs font-semibold flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1 shrink-0" /> {errors.password}
                  </div>
                )}
              </div>

              {/* REMEMBER + FORGOT */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-600 font-semibold select-none cursor-pointer">
                  <input type="checkbox" className="mr-2 h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded" /> Remember me
                </label>

                <a href="mailto:hr@notioninsurance.com" className="text-sm font-bold text-primary-blue hover:text-primary-blue/80 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full flex justify-center items-center py-4 px-4 text-base font-black rounded-xl text-white shadow-lg transition-all duration-300 cursor-pointer ${
                  loading
                    ? 'bg-orange-300 cursor-not-allowed shadow-none'
                    : 'bg-accent-orange hover:bg-orange-600 hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                }`}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              <p className="text-center mt-6 text-gray-500 text-sm font-semibold">
                Don't have an account?{" "}
                <Link to="/become-a-posp" className="font-black text-primary-blue hover:text-primary-blue/80 transition-colors">
                  Become a POSP
                </Link>
              </p>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
// // Register.jsx
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiUserPlus, FiCheck } from 'react-icons/fi';
// import { BsGithub, BsGoogle } from 'react-icons/bs';
// import axios from 'axios';
// import { URL } from '../url';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     businessName: '', // Default value
//     country: '' // Default value
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [step, setStep] = useState(1); // 1: Account Creation, 2: Verification, 3: Success

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear specific error when field is updated
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // Validate first name
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }

//     // Validate last name
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email || !emailRegex.test(formData.email)) {
//       newErrors.email = 'Valid email is required';
//     }

//     // Validate password
//     if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }

//     // Validate password confirmation
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     // Validate terms agreement
//     if (!agreeTerms) {
//       newErrors.terms = 'You must agree to the terms and conditions';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const signUp = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       // Create API payload (excluding confirmPassword as it's not needed in the API)
//       const apiPayload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//         businessName: formData.businessName,
//         country: formData.country
//       };
      
//       const res = await axios.post(`${URL}/api/merchants/register`, apiPayload);
      
//       if (res.status === 201) {
//         setIsLoading(false);
//         // Use the step system if you want to show verification screen
//         // otherwise, directly navigate to dashboard
//         // setStep(2);
//         navigate('/login');
//       }
//     } catch (err) {
//       console.log(err);
      
//       // Handle API error responses
//       if (err.response && err.response.data) {
//         const apiErrors = {};
        
//         // Map backend errors to form fields
//         if (err.response.data.message) {
//           if (err.response.data.message.includes('email')) {
//             apiErrors.email = 'Email already exists';
//           } else {
//             // General error
//             apiErrors.general = err.response.data.message;
//           }
//         }
        
//         setErrors(prev => ({
//           ...prev,
//           ...apiErrors
//         }));
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle verification step if needed
//   const handleVerificationComplete = () => {
//     // Simulate verification completion
//     setTimeout(() => {
//       setStep(3);
//     }, 1000);
//   };

//   // Password strength checker
//   const getPasswordStrength = (password) => {
//     if (!password) return { strength: 0, text: '', color: 'bg-gray-200' };

//     let strength = 0;
//     if (password.length >= 8) strength += 1;
//     if (password.match(/[A-Z]/)) strength += 1;
//     if (password.match(/[0-9]/)) strength += 1;
//     if (password.match(/[^A-Za-z0-9]/)) strength += 1;

//     const strengthMap = {
//       0: { text: 'Very Weak', color: 'bg-red-500' },
//       1: { text: 'Weak', color: 'bg-red-400' },
//       2: { text: 'Fair', color: 'bg-yellow-400' },
//       3: { text: 'Good', color: 'bg-green-400' },
//       4: { text: 'Strong', color: 'bg-green-500' }
//     };

//     return {
//       strength,
//       text: strengthMap[strength].text,
//       color: strengthMap[strength].color
//     };
//   };

//   const passwordStrength = getPasswordStrength(formData.password);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="container mx-auto max-w-6xl px-4 pt-32 pb-20">
//         <div className="max-w-md mx-auto">
//           {step === 1 && (
//             <>
//               <div className="text-center mb-10">
//                 <h1 className="text-3xl font-bold text-black mb-2">Create your account</h1>
//                 <p className="text-gray-600">Start sending emails with PaperSignal</p>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
//                 {errors.general && (
//                   <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded">
//                     {errors.general}
//                   </div>
//                 )}
                
//                 <form onSubmit={signUp}>
//                   <div className="mb-5">
//                     <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
//                       First Name
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiUser className="text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         className={`w-full pl-10 px-4 py-2 border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                         placeholder="John"
//                         required
//                       />
//                     </div>
//                     {errors.firstName && (
//                       <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
//                     )}
//                   </div>

//                   <div className="mb-5">
//                     <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
//                       Last Name
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiUser className="text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         className={`w-full pl-10 px-4 py-2 border ${errors.lastName ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                         placeholder="Doe"
//                         required
//                       />
//                     </div>
//                     {errors.lastName && (
//                       <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
//                     )}
//                   </div>

//                   <div className="mb-5">
//                     <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiMail className="text-gray-400" />
//                       </div>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className={`w-full pl-10 px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                         placeholder="your.email@example.com"
//                         required
//                       />
//                     </div>
//                     {errors.email && (
//                       <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                     )}
//                   </div>

//                   <div className="mb-5">
//                     <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiLock className="text-gray-400" />
//                       </div>
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className={`w-full pl-10 px-4 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                         placeholder="Create a strong password"
//                         required
//                         minLength={8}
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {showPassword ? (
//                           <FiEyeOff className="text-gray-400 hover:text-gray-600" />
//                         ) : (
//                           <FiEye className="text-gray-400 hover:text-gray-600" />
//                         )}
//                       </button>
//                     </div>
//                     {errors.password && (
//                       <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//                     )}

//                     {/* Password strength meter */}
//                     {formData.password && (
//                       <div className="mt-2">
//                         <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
//                           <div
//                             className={`h-full ${passwordStrength.color}`}
//                             style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
//                           ></div>
//                         </div>
//                         <p className="mt-1 text-xs text-gray-600">
//                           Password strength: <span className="font-medium">{passwordStrength.text}</span>
//                         </p>
//                       </div>
//                     )}
//                   </div>

//                   <div className="mb-5">
//                     <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
//                       Confirm Password
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiLock className="text-gray-400" />
//                       </div>
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         className={`w-full pl-10 px-4 py-2 border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                         placeholder="Confirm your password"
//                         required
//                       />
//                     </div>
//                     {errors.confirmPassword && (
//                       <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
//                     )}
//                   </div>

//                   <div className="flex items-start mb-6">
//                     <div className="flex items-center h-5">
//                       <input
//                         type="checkbox"
//                         id="terms"
//                         checked={agreeTerms}
//                         onChange={() => setAgreeTerms(!agreeTerms)}
//                         className="h-4 w-4 border border-gray-300 rounded text-black focus:ring-0 focus:ring-offset-0"
//                         required
//                       />
//                     </div>
//                     <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
//                       I agree to the <a href="#" className="text-black hover:underline">Terms of Service</a> and <a href="#" className="text-black hover:underline">Privacy Policy</a>
//                     </label>
//                   </div>
//                   {errors.terms && (
//                     <p className="mt-1 mb-4 text-sm text-red-600">{errors.terms}</p>
//                   )}

//                   <button
//                     type="submit"
//                     className="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                     ) : (
//                       <FiUserPlus className="mr-2" />
//                     )}
//                     {isLoading ? 'Creating Account...' : 'Create Account'}
//                   </button>
//                 </form>

//                 <div className="relative my-6">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-gray-200"></div>
//                   </div>
//                   <div className="relative flex justify-center text-sm">
//                     <span className="px-2 bg-white text-gray-500">
//                       Or sign up with
//                     </span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <button 
//                     type="button"
//                     className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//                   >
//                     <BsGoogle className="mr-2" />
//                     Google
//                   </button>
//                   <button 
//                     type="button"
//                     className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//                   >
//                     <BsGithub className="mr-2" />
//                     GitHub
//                   </button>
//                 </div>
//               </div>

//               <div className="text-center mt-8">
//                 <p className="text-gray-600">
//                   Already have an account?
//                   <Link to="/login" className="text-black font-medium ml-1 hover:underline">
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <div className="text-center mb-10">
//                 <h1 className="text-3xl font-bold text-black mb-2">Verify your email</h1>
//                 <p className="text-gray-600">We've sent a verification code to {formData.email}</p>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
//                 <div className="mb-6">
//                   <div className="flex justify-center space-x-3 mb-6">
//                     {[1, 2, 3, 4, 5, 6].map((_, index) => (
//                       <input
//                         key={index}
//                         type="text"
//                         maxLength="1"
//                         className="w-10 h-12 border border-gray-300 rounded-md text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//                       />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 text-sm mb-4">
//                     Enter the 6-digit code sent to your email
//                   </p>
//                   <button
//                     onClick={handleVerificationComplete}
//                     className="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
//                   >
//                     Verify Email
//                   </button>
//                 </div>

//                 <div className="border-t border-gray-100 pt-6">
//                   <p className="text-gray-600 text-sm mb-2">
//                     Didn't receive a code?
//                   </p>
//                   <button className="text-black font-medium hover:underline">
//                     Resend Code
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <div className="text-center mb-10">
//                 <h1 className="text-3xl font-bold text-black mb-2">Account created successfully!</h1>
//                 <p className="text-gray-600">You're all set to start using PaperSignal</p>
//               </div>

//               <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
//                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <FiCheck className="text-green-500 text-3xl" />
//                 </div>

//                 <h2 className="text-xl font-semibold text-black mb-2">Welcome to PaperSignal!</h2>
//                 <p className="text-gray-600 mb-8">
//                   Your account has been successfully created and verified. You can now access all features of the platform.
//                 </p>

//                 <Link
//                   to="/dashboard"
//                   className="block w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
//                 >
//                   Go to Dashboard
//                 </Link>

//                 <div className="mt-6">
//                   <p className="text-gray-600 text-sm">
//                     Need help getting started? Check out our <a href="#" className="text-black hover:underline">quick start guide</a>
//                   </p>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Simple Footer */}
//       <footer className="py-8 bg-white border-t border-gray-100">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="flex items-center mb-4 md:mb-0">
//               <FiMail className="text-black text-xl mr-2" />
//               <span className="font-bold text-lg text-black">PaperSignal</span>
//             </div>

//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
//                 Help Center
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Register;




import React, { useState } from 'react';
import { 
  SparklesIcon,
  EyeIcon,
  EyeSlashIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UserIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/solid';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('individual');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companySize: '',
    agreeToTerms: false,
    subscribeToUpdates: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', { ...formData, accountType });
  };

  const socialProviders = [
    { name: 'Google', icon: '🔗' },
    { name: 'GitHub', icon: '⚡' },
    { name: 'Microsoft', icon: '🏢' }
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains number', met: /\d/.test(formData.password) },
    { text: 'Passwords match', met: formData.password === formData.confirmPassword && formData.confirmPassword !== '' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c4e6ff]/20 via-white to-[#c4e6ff]/10" style={{fontFamily: 'Bricolage Grotesque, system-ui, -apple-system, sans-serif'}}>
      <div className="flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-2/5 bg-[#27214e] relative overflow-hidden">
          <div className="flex items-center justify-center w-full px-12">
            <div className="text-center max-w-lg">
              <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-8 mx-auto">
                <SparklesIcon className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                Start building today
              </h2>
              
              <p className="text-[#c4e6ff] text-lg leading-relaxed mb-8">
                Join thousands of developers and companies using Papersignal to power their customer communications.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-left">
                  <h3 className="text-white font-semibold mb-2">Free to start</h3>
                  <p className="text-[#c4e6ff] text-sm">Get started with our generous free tier, no credit card required.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-left">
                  <h3 className="text-white font-semibold mb-2">Enterprise ready</h3>
                  <p className="text-[#c4e6ff] text-sm">Scale to millions of messages with enterprise-grade infrastructure.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-left">
                  <h3 className="text-white font-semibold mb-2">Developer first</h3>
                  <p className="text-[#c4e6ff] text-sm">Built by developers, for developers with comprehensive APIs and docs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-md w-full">
            {/* Back to Home */}
            <div className="mb-8">
              <button className="flex items-center text-gray-600 hover:text-[#27214e] transition-colors">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Back to Home</span>
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-6 lg:hidden">
                <div className="w-10 h-10 bg-[#27214e] rounded-xl flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-[#27214e]">Papersignal</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h1>
              <p className="text-gray-600">Start building better customer experiences today</p>
            </div>

            {/* Account Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Account type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setAccountType('individual')}
                  className={`flex items-center p-4 border-2 rounded-lg transition-all ${
                    accountType === 'individual' 
                      ? 'border-[#27214e] bg-[#c4e6ff]/10' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <UserIcon className="w-5 h-5 mr-3 text-[#27214e]" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Individual</div>
                    <div className="text-xs text-gray-600">Personal projects</div>
                  </div>
                </button>
                <button
                  onClick={() => setAccountType('business')}
                  className={`flex items-center p-4 border-2 rounded-lg transition-all ${
                    accountType === 'business' 
                      ? 'border-[#27214e] bg-[#c4e6ff]/10' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <BuildingOfficeIcon className="w-5 h-5 mr-3 text-[#27214e]" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Business</div>
                    <div className="text-xs text-gray-600">Team & company</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Social Registration Options */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {socialProviders.map((provider, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all duration-200"
                >
                  <span className="text-lg mr-2">{provider.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{provider.name}</span>
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">or register with email</span>
              </div>
            </div>

            {/* Registration Form */}
            <div className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company Fields - Show only for business accounts */}
              {accountType === 'business' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors text-sm"
                      placeholder="Acme Inc"
                    />
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors text-sm"
                    >
                      <option value="">Select size</option>
                      {companySizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors"
                    placeholder="Create a secure password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-2">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              {formData.password && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Password requirements:</p>
                  <div className="space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircleIcon className={`w-4 h-4 mr-2 ${req.met ? 'text-green-500' : 'text-gray-300'}`} />
                        <span className={req.met ? 'text-green-700' : 'text-gray-600'}>{req.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Terms and Privacy */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#27214e] focus:ring-[#27214e] border-gray-300 rounded mt-0.5"
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-900">
                    I agree to the{' '}
                    <a href="#" className="font-medium text-[#27214e] hover:text-[#1a1735]">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="font-medium text-[#27214e] hover:text-[#1a1735]">Privacy Policy</a>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="subscribeToUpdates"
                    name="subscribeToUpdates"
                    type="checkbox"
                    checked={formData.subscribeToUpdates}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#27214e] focus:ring-[#27214e] border-gray-300 rounded mt-0.5"
                  />
                  <label htmlFor="subscribeToUpdates" className="ml-3 text-sm text-gray-900">
                    Send me product updates and developer news
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!formData.agreeToTerms}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#27214e] hover:bg-[#1a1735] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27214e] font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create account
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <a href="#" className="font-semibold text-[#27214e] hover:text-[#1a1735] transition-colors">
                  Sign in
                </a>
              </p>
            </div>

            {/* Security Notice */}
            <div className="mt-6 bg-[#c4e6ff]/20 rounded-lg p-4 border border-[#c4e6ff]/50">
              <div className="flex items-start">
                <ShieldCheckIcon className="w-5 h-5 text-[#27214e] mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-1">Your data is secure</p>
                  <p className="text-xs text-gray-600">We use enterprise-grade encryption and never share your personal information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
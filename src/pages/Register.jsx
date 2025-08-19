// // Register.jsx
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiUserPlus, FiCheck } from 'react-icons/fi';
// import { BsGithub, BsGoogle } from 'react-icons/bs';
// import axios from 'axios'
// import { URL } from '../url'
// import { data } from 'autoprefixer';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName:'',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [step, setStep] = useState(1); // 1: Account Creation, 2: Verification, 3: Success

//   const navigate = useNavigate()

//   const signUp = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try{
//     const res = await axios.post(`${URL}/api/merchants/register`, formData)
//     if (res.status === 201) {
//       setIsLoading(false)
//       navigate('/dashboard')
//     }
//   }
//   catch(err) {
//     console.log(err)
//   } finally {
//     setIsLoading(false)
//   }
// }




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

//     // Validate name
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full name is required';
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

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       // Move to verification step
//       setStep(2);
//     }, 1500);
//   };

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
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-5">
//                     <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
//                       First Name
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiUser className="text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         id="fullName"
//                         name="fullName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         className={`w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                         placeholder="John"
//                         required
//                       />
//                     </div>
                   
//                   </div>


//                   <div className="mb-5">
//                     <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
//                       Last Name
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FiUser className="text-gray-400" />
//                       </div>
//                       <input
//                         type="text"
//                         id="fullName"
//                         name="fullName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         className={`w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                         placeholder="Doe"
//                         required
//                       />
//                     </div>
                 
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
//                     onClick={signUp}
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
//                   <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//                     <BsGoogle className="mr-2" />
//                     Google
//                   </button>
//                   <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
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


// Register.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiUserPlus, FiCheck } from 'react-icons/fi';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from 'axios';
import { URL } from '../url';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '', // Default value
    country: '' // Default value
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1: Account Creation, 2: Verification, 3: Success

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when field is updated
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Validate password
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Validate terms agreement
    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signUp = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Create API payload (excluding confirmPassword as it's not needed in the API)
      const apiPayload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        businessName: formData.businessName,
        country: formData.country
      };
      
      const res = await axios.post(`${URL}/api/merchants/register`, apiPayload);
      
      if (res.status === 201) {
        setIsLoading(false);
        // Use the step system if you want to show verification screen
        // otherwise, directly navigate to dashboard
        // setStep(2);
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
      
      // Handle API error responses
      if (err.response && err.response.data) {
        const apiErrors = {};
        
        // Map backend errors to form fields
        if (err.response.data.message) {
          if (err.response.data.message.includes('email')) {
            apiErrors.email = 'Email already exists';
          } else {
            // General error
            apiErrors.general = err.response.data.message;
          }
        }
        
        setErrors(prev => ({
          ...prev,
          ...apiErrors
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle verification step if needed
  const handleVerificationComplete = () => {
    // Simulate verification completion
    setTimeout(() => {
      setStep(3);
    }, 1000);
  };

  // Password strength checker
  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: '', color: 'bg-gray-200' };

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;

    const strengthMap = {
      0: { text: 'Very Weak', color: 'bg-red-500' },
      1: { text: 'Weak', color: 'bg-red-400' },
      2: { text: 'Fair', color: 'bg-yellow-400' },
      3: { text: 'Good', color: 'bg-green-400' },
      4: { text: 'Strong', color: 'bg-green-500' }
    };

    return {
      strength,
      text: strengthMap[strength].text,
      color: strengthMap[strength].color
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto max-w-6xl px-4 pt-32 pb-20">
        <div className="max-w-md mx-auto">
          {step === 1 && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-black mb-2">Create your account</h1>
                <p className="text-gray-600">Start sending emails with PaperSignal</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                {errors.general && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded">
                    {errors.general}
                  </div>
                )}
                
                <form onSubmit={signUp}>
                  <div className="mb-5">
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-2 border ${errors.firstName ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                        placeholder="John"
                        required
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="mb-5">
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-2 border ${errors.lastName ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                        placeholder="Doe"
                        required
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div className="mb-5">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                        placeholder="Create a strong password"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FiEyeOff className="text-gray-400 hover:text-gray-600" />
                        ) : (
                          <FiEye className="text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}

                    {/* Password strength meter */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${passwordStrength.color}`}
                            style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                          ></div>
                        </div>
                        <p className="mt-1 text-xs text-gray-600">
                          Password strength: <span className="font-medium">{passwordStrength.text}</span>
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mb-5">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full pl-10 px-4 py-2 border ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                    )}
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreeTerms}
                        onChange={() => setAgreeTerms(!agreeTerms)}
                        className="h-4 w-4 border border-gray-300 rounded text-black focus:ring-0 focus:ring-offset-0"
                        required
                      />
                    </div>
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-black hover:underline">Terms of Service</a> and <a href="#" className="text-black hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="mt-1 mb-4 text-sm text-red-600">{errors.terms}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <FiUserPlus className="mr-2" />
                    )}
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <BsGoogle className="mr-2" />
                    Google
                  </button>
                  <button 
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <BsGithub className="mr-2" />
                    GitHub
                  </button>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Already have an account?
                  <Link to="/login" className="text-black font-medium ml-1 hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-black mb-2">Verify your email</h1>
                <p className="text-gray-600">We've sent a verification code to {formData.email}</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="mb-6">
                  <div className="flex justify-center space-x-3 mb-6">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="w-10 h-12 border border-gray-300 rounded-md text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Enter the 6-digit code sent to your email
                  </p>
                  <button
                    onClick={handleVerificationComplete}
                    className="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    Verify Email
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-600 text-sm mb-2">
                    Didn't receive a code?
                  </p>
                  <button className="text-black font-medium hover:underline">
                    Resend Code
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-black mb-2">Account created successfully!</h1>
                <p className="text-gray-600">You're all set to start using PaperSignal</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="text-green-500 text-3xl" />
                </div>

                <h2 className="text-xl font-semibold text-black mb-2">Welcome to PaperSignal!</h2>
                <p className="text-gray-600 mb-8">
                  Your account has been successfully created and verified. You can now access all features of the platform.
                </p>

                <Link
                  to="/dashboard"
                  className="block w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Go to Dashboard
                </Link>

                <div className="mt-6">
                  <p className="text-gray-600 text-sm">
                    Need help getting started? Check out our <a href="#" className="text-black hover:underline">quick start guide</a>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FiMail className="text-black text-xl mr-2" />
              <span className="font-bold text-lg text-black">PaperSignal</span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
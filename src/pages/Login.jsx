// // Login.jsx
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';
// import { BsGithub, BsGoogle } from 'react-icons/bs';
// import axios from 'axios';
// import { URL } from '../url';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//     general: ''
//   });

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
    
//     // Clear general error when user starts typing again
//     if (error) setError('');
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email || !emailRegex.test(formData.email)) {
//       newErrors.email = 'Valid email is required';
//     }
    
//     // Validate password
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }
    
//     setErrors(prev => ({
//       ...prev,
//       ...newErrors
//     }));
    
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
    
//     try {
//       const apiPayload = {
//         email: formData.email,
//         password: formData.password
//       };
      
//       // Notice the corrected endpoint: /login instead of /register
//       const res = await axios.post(`${URL}/api/merchants/login`, apiPayload);
      
//       // Handle successful login
//       if (res.status === 200) {
//         const { accessToken, refreshToken, user } = res.data;
        
//         // Store tokens and user object in localStorage
//         localStorage.setItem("access_token", accessToken);
//         if (refreshToken) {
//           localStorage.setItem("refresh_token", refreshToken);
//         }
        
//         // Store user object in localStorage
//         localStorage.setItem("user", JSON.stringify(user));
        
//         // Update auth context with user data
//         login(user);
        
//         // Navigate to dashboard
//         navigate('/dashboard');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
      
//       // Handle API error responses
//       if (err.response) {
//         const { status, data } = err.response;
        
//         if (status === 401) {
//           // Authentication error (wrong credentials)
//           setError('Invalid email or password. Please try again.');
//         } else if (status === 404) {
//           // User not found
//           setErrors(prev => ({
//             ...prev,
//             email: 'Account not found with this email'
//           }));
//         } else if (data && data.message) {
//           // Generic error message from API
//           setError(data.message);
//         } else {
//           // Default error message
//           setError('An error occurred during login. Please try again.');
//         }
//       } else {
//         // Network error or other issues
//         setError('Unable to connect to the server. Please check your internet connection.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="container mx-auto max-w-6xl px-4 pt-32 pb-20">
//         <div className="max-w-md mx-auto">
//           <div className="text-center mb-10">
//             <h1 className="text-3xl font-bold text-black mb-2">Welcome back</h1>
//             <p className="text-gray-600">Sign in to your PaperSignal account</p>
//           </div>
          
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
//               {error}
//             </div>
//           )}
          
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
//             <form onSubmit={handleLogin}>
//               <div className="mb-5">
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiMail className="text-gray-400" />
//                   </div>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full pl-10 px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>
              
//               <div className="mb-5">
//                 <div className="flex justify-between items-center mb-2">
//                   <label htmlFor="password" className="block text-gray-700 font-medium">
//                     Password
//                   </label>
//                   <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-black">
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiLock className="text-gray-400" />
//                   </div>
//                   <input 
//                     type={showPassword ? "text" : "password"} 
//                     id="password" 
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className={`w-full pl-10 px-4 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
//                     placeholder="••••••••"
//                     required
//                   />
//                   <button 
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? (
//                       <FiEyeOff className="text-gray-400 hover:text-gray-600" />
//                     ) : (
//                       <FiEye className="text-gray-400 hover:text-gray-600" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//                 )}
//               </div>
              
//               <div className="flex items-center mb-6">
//                 <input 
//                   type="checkbox" 
//                   id="remember" 
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                   className="h-4 w-4 border border-gray-300 rounded text-black focus:ring-0 focus:ring-offset-0"
//                 />
//                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//                   Remember me on this device
//                 </label>
//               </div>
              
//               <button 
//                 type="submit" 
//                 className="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                 ) : (
//                   <FiLogIn className="mr-2" />
//                 )}
//                 {isLoading ? 'Signing In...' : 'Sign In'}
//               </button>
//             </form>
            
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <button 
//                 type="button"
//                 className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//               >
//                 <BsGoogle className="mr-2" />
//                 Google
//               </button>
//               <button 
//                 type="button"
//                 className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//               >
//                 <BsGithub className="mr-2" />
//                 GitHub
//               </button>
//             </div>
//           </div>
          
//           <div className="text-center mt-8">
//             <p className="text-gray-600">
//               Don't have an account? 
//               <Link to="/register" className="text-black font-medium ml-1 hover:underline">
//                 Sign up for free
//               </Link>
//             </p>
//           </div>
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

// export default Login;




import React, { useState } from 'react';
import { 
  SparklesIcon,
  EyeIcon,
  EyeSlashIcon,
  ChevronRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/solid';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  const socialProviders = [
    { name: 'Google', icon: '🔗', color: 'border-gray-300 hover:border-gray-400' },
    { name: 'GitHub', icon: '⚡', color: 'border-gray-300 hover:border-gray-400' },
    { name: 'Microsoft', icon: '🏢', color: 'border-gray-300 hover:border-gray-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c4e6ff]/20 via-white to-[#c4e6ff]/10 flex" style={{fontFamily: 'Bricolage Grotesque, system-ui, -apple-system, sans-serif'}}>
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#27214e] rounded-xl flex items-center justify-center">
                <SparklesIcon className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-[#27214e]">Papersignal</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to your account to continue building</p>
          </div>

          {/* Social Login Options */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {socialProviders.map((provider, index) => (
              <button
                key={index}
                className={`flex items-center justify-center px-4 py-3 border rounded-lg transition-all duration-200 ${provider.color} hover:shadow-sm`}
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
              <span className="px-4 bg-white text-gray-500 font-medium">or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#27214e] focus:border-[#27214e] transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-[#27214e] focus:ring-[#27214e] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-semibold text-[#27214e] hover:text-[#1a1735] transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#27214e] hover:bg-[#1a1735] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27214e] font-semibold transition-all duration-200"
            >
              Sign in to your account
              <ChevronRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-[#27214e] hover:text-[#1a1735] transition-colors">
                Sign up for free
              </a>
            </p>
          </div>

          {/* Security Notice */}
          <div className="mt-8 bg-[#c4e6ff]/20 rounded-lg p-4 border border-[#c4e6ff]/50">
            <div className="flex items-center">
              <ShieldCheckIcon className="w-5 h-5 text-[#27214e] mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Your data is protected with enterprise-grade security and encryption.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration/Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-[#27214e] relative overflow-hidden">
        <div className="flex items-center justify-center w-full px-12">
          <div className="text-center max-w-lg">
            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-8 mx-auto">
              <SparklesIcon className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Build better customer experiences
            </h2>
            
            <p className="text-[#c4e6ff] text-lg leading-relaxed mb-8">
              Join thousands of developers using Papersignal to create seamless customer communication workflows.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-white">
                <div className="w-2 h-2 bg-[#c4e6ff] rounded-full mr-3"></div>
                <span>99.9% uptime SLA</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-2 h-2 bg-[#c4e6ff] rounded-full mr-3"></div>
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-2 h-2 bg-[#c4e6ff] rounded-full mr-3"></div>
                <span>24/7 developer support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
      </div>
    </div>
  );
};

export default Login;
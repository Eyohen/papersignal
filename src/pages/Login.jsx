// // Login.jsx
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';
// import { BsGithub, BsGoogle } from 'react-icons/bs';
// import axios from 'axios';
// import { URL } from '../url';
// import {useAuth} from '../context/AuthContext'

// const Login = () => {
//   const navigate = useNavigate();
//   const {login} = useAuth()
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing again
//     if (error) setError('');
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
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
//         password: formData.password,

//       };
      
//       const res = await axios.post(`${URL}/api/merchants/register`, apiPayload);
//       const {accessToken, user } = res.data
      
//       if (res.status === 200) {
//         localStorage.setItem("access_token", accessToken)
//         login(user)
//         setIsLoading(false);
//         // Use the step system if you want to show verification screen
//         // otherwise, directly navigate to dashboard
//         // setStep(2);
//         console.log('Login successful', formData);
//         alert('Login successful! Redirecting to dashboard...');
//         navigate('/dashboard');
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
//                     className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>
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
//                     className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
//               <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//                 <BsGoogle className="mr-2" />
//                 Google
//               </button>
//               <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//                 <BsGithub className="mr-2" />
//                 GitHub
//               </button>
//             </div>
//           </div>
          
//           <div className="text-center mt-8">
//             <p className="text-gray-600">
//               Don't have an account? 
//               <Link to="/signup" className="text-black font-medium ml-1 hover:underline">
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


// Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from 'react-icons/fi';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });

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
    
    // Clear general error when user starts typing again
    if (error) setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(prev => ({
      ...prev,
      ...newErrors
    }));
    
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const apiPayload = {
        email: formData.email,
        password: formData.password
      };
      
      // Notice the corrected endpoint: /login instead of /register
      const res = await axios.post(`${URL}/api/merchants/login`, apiPayload);
      
      // Handle successful login
      if (res.status === 200) {
        const { accessToken, refreshToken, user } = res.data;
        
        // Store tokens and user object in localStorage
        localStorage.setItem("access_token", accessToken);
        if (refreshToken) {
          localStorage.setItem("refresh_token", refreshToken);
        }
        
        // Store user object in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        
        // Update auth context with user data
        login(user);
        
        // Navigate to dashboard
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      
      // Handle API error responses
      if (err.response) {
        const { status, data } = err.response;
        
        if (status === 401) {
          // Authentication error (wrong credentials)
          setError('Invalid email or password. Please try again.');
        } else if (status === 404) {
          // User not found
          setErrors(prev => ({
            ...prev,
            email: 'Account not found with this email'
          }));
        } else if (data && data.message) {
          // Generic error message from API
          setError(data.message);
        } else {
          // Default error message
          setError('An error occurred during login. Please try again.');
        }
      } else {
        // Network error or other issues
        setError('Unable to connect to the server. Please check your internet connection.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto max-w-6xl px-4 pt-32 pb-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-black mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to your PaperSignal account</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleLogin}>
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
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-gray-700 font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-black">
                    Forgot password?
                  </Link>
                </div>
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
                    placeholder="••••••••"
                    required
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
              </div>
              
              <div className="flex items-center mb-6">
                <input 
                  type="checkbox" 
                  id="remember" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 border border-gray-300 rounded text-black focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me on this device
                </label>
              </div>
              
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
                  <FiLogIn className="mr-2" />
                )}
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
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
              Don't have an account? 
              <Link to="/register" className="text-black font-medium ml-1 hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
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

export default Login;
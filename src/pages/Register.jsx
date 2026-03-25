//pages/Register.jsx
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";
import { URL } from '../url';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('individual');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    country: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${URL}/api/merchant/register`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        businessName: accountType === 'business' ? formData.businessName : `${formData.firstName} ${formData.lastName}`,
        country: formData.country,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.merchant) {
        alert('Registration successful! Please check your email to verify your account.');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains number', met: /\d/.test(formData.password) },
    { text: 'Passwords match', met: formData.password === formData.confirmPassword && formData.confirmPassword !== '' }
  ];

  return (
    <div className="min-h-screen bg-white flex" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Left Side - Branding panel */}
      <div className="hidden lg:flex lg:w-[400px] bg-[#f9fafb] border-r border-gray-200 items-center justify-center px-12">
        <div className="max-w-[280px]">
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">
            Start building today
          </h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed mb-8">
            Join thousands of developers using Papersignal to power their customer communications.
          </p>

          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Free to start</h3>
              <p className="text-[12px] text-[#9ca3af]">No credit card required. Generous free tier.</p>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Enterprise ready</h3>
              <p className="text-[12px] text-[#9ca3af]">Scale to millions of messages.</p>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-1">Developer first</h3>
              <p className="text-[12px] text-[#9ca3af]">Comprehensive APIs and documentation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-[400px]">
          {/* Back to Home */}
          <div className="mb-8">
            <Link to="/" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a] font-medium">
              &larr; Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6 lg:hidden">
              <IoMailOutline color='#1a1a1a' size={18}/>
              <span className="text-[15px] font-semibold text-[#1a1a1a]">Papersignal</span>
            </div>
            <h1 className="text-[24px] font-semibold text-[#1a1a1a] mb-1">Create your account</h1>
            <p className="text-[14px] text-[#6b7280]">Start building better customer experiences</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-[#fef2f2] border border-[#fecaca] rounded-md text-[#dc2626] text-[13px]">
              {error}
            </div>
          )}

          {/* Account Type Selection */}
          <div className="mb-5">
            <label className="block text-[13px] font-medium text-[#1a1a1a] mb-2">Account type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAccountType('individual')}
                className={`p-3 border rounded-md text-left ${
                  accountType === 'individual'
                    ? 'border-[#1a1a1a]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-[13px] font-medium text-[#1a1a1a]">Individual</div>
                <div className="text-[11px] text-[#9ca3af]">Personal projects</div>
              </button>
              <button
                type="button"
                onClick={() => setAccountType('business')}
                className={`p-3 border rounded-md text-left ${
                  accountType === 'business'
                    ? 'border-[#1a1a1a]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-[13px] font-medium text-[#1a1a1a]">Business</div>
                <div className="text-[11px] text-[#9ca3af]">Team & company</div>
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                placeholder="john@company.com"
              />
            </div>

            {accountType === 'business' && (
              <div>
                <label htmlFor="businessName" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
                  Business name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required={accountType === 'business'}
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                  placeholder="Acme Inc"
                />
              </div>
            )}

            <div>
              <label htmlFor="country" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                placeholder="United States"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
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
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                  placeholder="Create a secure password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-4 w-4 text-[#9ca3af]" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-[#9ca3af]" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
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
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-4 w-4 text-[#9ca3af]" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-[#9ca3af]" />
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div className="bg-[#f9fafb] rounded-md p-3 border border-gray-200">
                <p className="text-[12px] font-medium text-[#6b7280] mb-2">Password requirements</p>
                <div className="flex flex-col gap-1">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-[12px]">
                      <CheckCircleIcon className={`w-3.5 h-3.5 ${req.met ? 'text-[#10b981]' : 'text-[#d1d5db]'}`} />
                      <span className={req.met ? 'text-[#1a1a1a]' : 'text-[#9ca3af]'}>{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-3.5 w-3.5 rounded border-gray-300 mt-0.5"
              />
              <label htmlFor="agreeToTerms" className="text-[12px] text-[#6b7280]">
                I agree to the{' '}
                <a href="#" className="font-medium text-[#1a1a1a] hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="font-medium text-[#1a1a1a] hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !formData.agreeToTerms}
              className="w-full py-2.5 bg-[#1a1a1a] text-white rounded-md text-[14px] font-medium hover:bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-[13px] text-[#6b7280] text-center">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#1a1a1a] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

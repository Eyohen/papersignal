//pages/Login.jsx
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";
import { URL } from '../url';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${URL}/api/merchant/login`, {
        email,
        password,
      });

      if (response.data.accessToken) {
        login(response.data.user, response.data.accessToken, response.data.refreshToken);
        navigate('/dashboard');
      }
    } catch (err) {
      if (err.response?.data?.verified === false) {
        setError('Please verify your email before logging in. Check your inbox for the verification link.');
      } else {
        setError(err.response?.data?.msg || 'Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-[360px]">
          {/* Back to Home */}
          <div className="mb-10">
            <Link to="/" className="text-[13px] text-[#6b7280] hover:text-[#1a1a1a] font-medium">
              &larr; Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <IoMailOutline color='#1a1a1a' size={18}/>
              <span className="text-[15px] font-semibold text-[#1a1a1a]">Papersignal</span>
            </div>
            <h1 className="text-[24px] font-semibold text-[#1a1a1a] mb-1">Welcome back</h1>
            <p className="text-[14px] text-[#6b7280]">Sign in to your account to continue</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-[#fef2f2] border border-[#fecaca] rounded-md text-[#dc2626] text-[13px]">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-[#1a1a1a] mb-1.5">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                placeholder="you@company.com"
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
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent"
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-gray-300"
                />
                <label htmlFor="remember-me" className="text-[13px] text-[#4b5563]">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-[13px] font-medium text-[#1a1a1a] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-[#1a1a1a] text-white rounded-md text-[14px] font-medium hover:bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-[13px] text-[#6b7280] text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-[#1a1a1a] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Clean branding panel */}
      <div className="hidden lg:flex lg:flex-1 bg-[#f9fafb] border-l border-gray-200 items-center justify-center px-12">
        <div className="max-w-[320px]">
          <h2 className="text-[22px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">
            Build better customer experiences
          </h2>
          <p className="text-[14px] text-[#6b7280] leading-relaxed mb-8">
            Join thousands of developers using Papersignal to create seamless customer communication workflows.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-[13px] text-[#4b5563]">
              <div className="w-1 h-1 bg-[#1a1a1a] rounded-full"></div>
              99.9% uptime SLA
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-[#4b5563]">
              <div className="w-1 h-1 bg-[#1a1a1a] rounded-full"></div>
              Enterprise-grade security
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-[#4b5563]">
              <div className="w-1 h-1 bg-[#1a1a1a] rounded-full"></div>
              24/7 developer support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

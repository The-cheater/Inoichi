import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Smartphone, ArrowRight, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignInSignUpPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const floatingPills = Array(12).fill(null);

  // Custom SVG Icons
  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const MicrosoftIcon = () => (
    <svg viewBox="0 0 23 23" className="w-6 h-6">
      <path fill="#F35325" d="M1 1h10v10H1z"/>
      <path fill="#81BC06" d="M12 1h10v10H12z"/>
      <path fill="#05A6F0" d="M1 12h10v10H1z"/>
      <path fill="#FFBA08" d="M12 12h10v10H12z"/>
    </svg>
  );

  const AppleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const PillIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
      <path fill="currentColor" d="M18.5 3.5L20 5l-2 2-1.5-1.5-1.42 1.42L16.08 8.5 13 5.92l1.42-1.42L13 3.5 15 1.5l1.5 1.5 1.42-1.42L18.5 3.5m-3.42 4.08L17.5 8.5 21 5l-1.5-1.5-3.92 3.92M10 4a6 6 0 0 0-6 6v6c0 1.66 1.34 3 3 3h1v-2H7c-.55 0-1-.45-1-1v-6c0-2.76 2.24-5 5-5h1V4h-1z"/>
    </svg>
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col md:flex-row overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Medical Background Panel */}
      <div className="md:w-1/2 bg-gradient-to-br from-blue-700 to-teal-600 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
        
        {/* Floating Pills Animation */}
        <AnimatePresence>
          {floatingPills.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 text-white/20 pointer-events-none"
              initial={{
                x: Math.random() * 500 - 250,
                y: Math.random() * 500 - 250,
                scale: 0,
                rotate: Math.random() * 360
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [0.8, 1.2],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <PillIcon />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Pulsating Heart Logo */}
        <motion.div
          className="relative mb-16"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            rotate: { duration: 6, repeat: Infinity }
          }}
        >
          <HeartPulse className="w-40 h-40 text-teal-300" />
          <motion.div
            className="absolute inset-0 border-4 border-teal-300/50 rounded-full"
            animate={{
              scale: [1, 1.8],
              opacity: [0.3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />
        </motion.div>

        {/* Animated Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-6 text-center"
            animate={{
              textShadow: [
                '0 0 8px rgba(255,255,255,0.3)',
                '0 0 16px rgba(255,255,255,0.4)',
                '0 0 8px rgba(255,255,255,0.3)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            INOICHI
          </motion.h1>
          <motion.p
            className="text-2xl text-teal-200 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isSignIn ? 'Your Health Revolution' : 'Join the Medical Future'}
          </motion.p>
        </motion.div>
      </div>

      {/* Interactive Form Panel */}
      <div className="md:w-1/2 p-12 flex flex-col justify-center relative">
        <motion.div
          className="max-w-md w-full mx-auto bg-white/95 backdrop-blur-lg rounded-[40px] p-10 shadow-2xl border-2 border-white/20 relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {/* Dynamic Tabs */}
          <motion.div className="flex gap-8 mb-10 relative">
            <motion.div
              className="absolute bottom-0 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
              animate={{
                width: isSignIn ? '100px' : '110px',
                x: isSignIn ? 0 : 120
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <button
              onClick={() => setIsSignIn(true)}
              className={`text-3xl font-bold pb-2 ${
                isSignIn ? 'text-blue-700' : 'text-gray-400 hover:text-blue-500'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`text-3xl font-bold pb-2 ${
                !isSignIn ? 'text-blue-700' : 'text-gray-400 hover:text-blue-500'
              }`}
            >
              Sign Up
            </button>
          </motion.div>

          <form className="space-y-6">
            <AnimatePresence mode="wait">
              {!isSignIn && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="relative"
                >
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 animate-pulse" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all"
              />
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all"
              />
            </motion.div>

            <AnimatePresence>
              {!isSignIn && (
                <motion.div
                  key="phone"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative"
                >
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Plasma Button */}
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 25px rgba(29, 78, 216, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-700 to-teal-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 relative overflow-hidden"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10">
                {isSignIn ? 'Access Portal' : 'Begin Journey'}
              </span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: 'spring' }}
              >
                <ArrowRight className="w-6 h-6 relative z-10" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '100%' : '-100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.button>
          </form>

          {/* Molecular Switch */}
          <motion.div 
            className="mt-8 text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isSignIn ? "New to INOICHI?" : "Already a member?"}
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="ml-2 text-blue-700 hover:text-teal-600 font-semibold underline underline-offset-4"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                {isSignIn ? 'Create Account' : 'Sign In'}
              </motion.span>
            </button>
          </motion.div>

          {/* Animated Divider */}
          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex-1 border-t border-blue-100" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <PillIcon />
            </motion.div>
            <div className="flex-1 border-t border-blue-100" />
          </motion.div>

          {/* Social Login */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-200 flex justify-center items-center transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GoogleIcon />
            </motion.button>
            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-200 flex justify-center items-center transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MicrosoftIcon />
            </motion.button>
            <motion.button
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-200 flex justify-center items-center transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <AppleIcon />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignInSignUpPage;
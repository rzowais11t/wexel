import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-white pt-32 sm:pt-40 pb-16 sm:pb-20 relative z-10 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-8 sm:mb-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="inline-block">
              <div className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                404
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-white/70 text-lg sm:text-xl mb-8 leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              Back to Home
            </motion.button>

            <motion.button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-blue-500/30 hover:border-blue-500/60 text-white font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
              Go Back
            </motion.button>
          </div>

          <motion.div
            className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-white/60 text-sm mb-6">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { label: 'AI CRM', path: '/aicrm' },
                { label: 'Voice Agent', path: '/voice' },
                { label: 'Outreach', path: '/outreach' },
                { label: 'E-Commerce', path: '/ecommerce' },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="px-4 py-2 rounded-lg border border-white/10 hover:border-blue-500/50 text-white/70 hover:text-white transition-all duration-300 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

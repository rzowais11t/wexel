import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Terms of Service - Wexel"
        description="Read Wexel's terms of service for AI automation services"
        canonical="https://wexel.ai/terms"
      />
      <div className="text-white pt-20 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 sm:mb-12 transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={20} />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms of Service</h1>
            <p className="text-white/60 mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 prose prose-invert max-w-none">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  By accessing and using the Wexel website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Wexel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-white/70 leading-relaxed">
                  The materials on Wexel's website are provided on an 'as is' basis. Wexel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                <p className="text-white/70 leading-relaxed">
                  In no event shall Wexel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Wexel's website, even if Wexel or a Wexel authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
                <p className="text-white/70 leading-relaxed">
                  The materials appearing on Wexel's website could include technical, typographical, or photographic errors. Wexel does not warrant that any of the materials on the website are accurate, complete, or current. Wexel may make changes to the materials contained on the website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Links</h2>
                <p className="text-white/70 leading-relaxed">
                  Wexel has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Wexel of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p className="text-white/70 leading-relaxed">
                  Wexel may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-white/70 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Wexel operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at business@wexel.ai
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

import { motion } from 'framer-motion';
import { 
  Brain, Pill, Thermometer, HeartPulse, 
  MessageCircle, Stethoscope, AlertTriangle, 
  ChevronRight, X, Bot, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const SymptomReportPage = () => {
  const [showChat, setShowChat] = useState(false);

  const FloatingIcon = ({ icon: Icon, position }) => (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
      transition={{ 
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute opacity-5 text-blue-100 ${position}`}
    >
      <Icon className="w-32 h-32" />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon icon={Brain} position="top-10 left-12" />
      <FloatingIcon icon={Pill} position="top-1/4 right-24" />
      <FloatingIcon icon={Thermometer} position="bottom-20 left-32" />
      <FloatingIcon icon={HeartPulse} position="bottom-40 right-44" />

      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6 mb-12 p-6 bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-blue-100"
        >
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">JD</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-900">John Doe</h1>
            <p className="text-blue-600 flex items-center gap-2 mt-1">
              <span className="text-lg">24 years</span>
              <span className="text-xl">•</span>
              <span className="text-lg">Migraine Report</span>
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Possible Causes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-100"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              Possible Causes
            </h2>
            <ul className="space-y-4 text-lg">
              {['Stress & Anxiety', 'Lack Of Sleep', 'Dehydration', 'Bright Light Exposure', 'Hormonal Changes', 'High Blood Pressure'].map((cause, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                  {cause}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Risk Factors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-100"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <Stethoscope className="w-8 h-8 text-purple-500" />
              Risk Factors
            </h2>
            <ul className="space-y-4 text-lg">
              {['Family History', 'Excessive Screen Time', 'Irregular Meals', 'Caffeine Overuse', 'Sedentary Lifestyle', 'Sleep Disorders'].map((risk, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                  {risk}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Button className="h-16 text-lg bg-blue-600 hover:bg-blue-700 rounded-2xl">
            <MessageCircle className="mr-3 w-6 h-6" />
            Consult Doctor Now
          </Button>
          <Button className="h-16 text-lg bg-green-600 hover:bg-green-700 rounded-2xl">
            <Stethoscope className="mr-3 w-6 h-6" />
            Get Treatment Suggestions
          </Button>
        </motion.div>

        {/* Chat Bot */}
        <motion.div
          className={`fixed bottom-6 right-6 ${showChat ? 'w-96' : 'w-16'}`}
        >
          <Card className="rounded-2xl border-2 border-blue-100 overflow-hidden">
            {showChat ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Bot className="w-6 h-6" />
                    <span className="font-semibold">Health Assistant</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowChat(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="h-96 p-4 bg-white">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4 overflow-y-auto">
                      <div className="text-gray-600">
                        Hello! I'm your health assistant. How can I help?
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        className="flex-1 rounded-xl"
                      />
                      <Button className="rounded-xl">
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-4 cursor-pointer"
                onClick={() => setShowChat(true)}
              >
                <Bot className="w-8 h-8 text-blue-600 mx-auto" />
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SymptomReportPage;
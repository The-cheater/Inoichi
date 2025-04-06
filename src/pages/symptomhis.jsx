import { motion } from 'framer-motion';
import { 
  Clock, Stethoscope, HeartPulse, Calendar, 
  CheckCircle, Plus, Pill, Syringe, Thermometer, Brain
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SymptomHistoryPage = () => {
  const symptoms = [
    { id: 1, name: "Migraine & Frequent Headaches", date: "2024-03-27" },
    { id: 2, name: "Acid Reflux & Heartburn", date: "2024-10-12" },
    { id: 3, name: "Skin Rashes & Irritation", date: "2024-09-11" }
  ];

  const FloatingMedicalIcon = ({ icon: Icon, position, size }) => (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: [0, -40, 0], rotate: [0, 5, -5, 0] }}
      transition={{ 
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute opacity-5 text-blue-100 ${position}`}
    >
      <Icon className={`w-${size} h-${size}`} />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Floating Medical Background Icons */}
      <FloatingMedicalIcon icon={Pill} position="top-10 left-12" size="32" />
      <FloatingMedicalIcon icon={Syringe} position="top-1/4 right-24" size="40" />
      <FloatingMedicalIcon icon={Brain} position="bottom-20 left-32" size="48" />
      <FloatingMedicalIcon icon={Thermometer} position="bottom-40 right-44" size="36" />
      <FloatingMedicalIcon icon={HeartPulse} position="top-32 left-1/3" size="44" />

      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* User Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-8 mb-16 p-8 bg-white/95 backdrop-blur-sm rounded-[2.5rem] shadow-xl border-2 border-blue-100"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">JD</span>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-blue-100 px-4 py-1.5 rounded-full text-md font-semibold">
              24
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900 mb-3">John Doe</h1>
            <p className="text-blue-600 flex items-center gap-3 text-lg">
              <CheckCircle className="w-7 h-7" />
              Premium Health Member
            </p>
          </div>
        </motion.div>

        {/* Symptom History List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 ml-3">Recent Symptom History</h2>
          
          {symptoms.map((symptom, index) => (
            <motion.div
              key={symptom.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="p-8 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all rounded-3xl border-2 border-blue-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Stethoscope className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">{symptom.name}</h3>
                      <p className="text-gray-600 flex items-center gap-3 mt-2 text-lg">
                        <Calendar className="w-6 h-6" />
                        {new Date(symptom.date).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-blue-600 text-lg p-6">
                    View Details →
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-10 right-10"
        >
          <Button className="rounded-full h-16 w-16 shadow-2xl bg-blue-600 hover:bg-blue-700">
            <Plus className="w-8 h-8" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SymptomHistoryPage;
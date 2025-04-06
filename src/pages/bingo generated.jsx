import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Stethoscope, Pulse, AlertTriangle, X, Check, Loader } from 'lucide-react';

const BingoGenerator = () => {
  const [input, setInput] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const [allSymptoms] = useState([
    'Headache', 'Dizziness', 'Fatigue', 'Numbness', 'Tremors',
    'Blurred Vision', 'Muscle Weakness', 'Joint Pain', 'Fever',
    'Shortness of Breath', 'Chest Pain', 'Nausea', 'Rapid Heartbeat',
    'Memory Problems', 'Tingling Sensation', 'Swelling', 'Rash',
    'Stiffness', 'Insomnia', 'Weight Loss'
  ]);

  const diseases = {
    'Multiple Sclerosis': ['Fatigue', 'Numbness', 'Blurred Vision', 'Muscle Weakness', 'Memory Problems'],
    'POTS': ['Dizziness', 'Rapid Heartbeat', 'Fatigue', 'Nausea', 'Shortness of Breath'],
    'Lupus': ['Joint Pain', 'Fever', 'Rash', 'Fatigue', 'Swelling']
  };

  const doctors = [
    { name: 'Dr. Sarah Smith', specialty: 'Neurology', experience: '12 years' },
    { name: 'Dr. John Doe', specialty: 'Cardiology', experience: '8 years' },
    { name: 'Dr. Emily Davis', specialty: 'Rheumatology', experience: '10 years' }
  ];

  const analyzeSymptoms = async () => {
    setLoading(true);
    const stages = [
      'Searching in medical database...',
      'Analyzing symptom patterns...',
      'Matching with known conditions...',
      'Generating results...'
    ];

    for (let i = 0; i < stages.length; i++) {
      setLoadingStage(i);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    const matchedDiseases = Object.keys(diseases).filter(disease =>
      diseases[disease].some(s => symptoms.includes(s))
    );
    
    setResults({
      matchedDiseases,
      bingoCard: [...new Set(Object.values(diseases).flat())]
    });
    setLoading(false);
  };

  const FloatingIcon = ({ icon: Icon, position }) => (
    <motion.div
      className={`absolute text-blue-100/20 ${position}`}
      animate={{
        y: [0, -40, 0],
        rotate: [0, 15, -15, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon className="w-16 h-16" />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <FloatingIcon icon={Stethoscope} position="top-10 left-12" />
      <FloatingIcon icon={Pulse} position="top-1/4 right-24" />
      <FloatingIcon icon={AlertTriangle} position="bottom-20 left-32" />

      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <motion.h1 
          className="text-4xl font-bold text-center text-blue-900 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Symptom Bingo Generator
        </motion.h1>

        <AnimatePresence>
          {!results && (
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative">
                <div className="flex items-center gap-2 border-2 border-blue-200 rounded-xl p-3">
                  <Search className="text-blue-500" />
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your symptoms..."
                    className="flex-1 bg-transparent outline-none"
                  />
                  {symptoms.length > 0 && (
                    <button 
                      onClick={() => setSymptoms([])}
                      className="text-red-500 hover:text-red-600"
                    >
                      <X />
                    </button>
                  )}
                </div>

                {input && (
                  <motion.div
                    className="absolute top-full left-0 w-full bg-white mt-1 rounded-lg shadow-lg z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {allSymptoms
                      .filter(symptom => 
                        symptom.toLowerCase().includes(input.toLowerCase()) &&
                        !symptoms.includes(symptom)
                      )
                      .map(symptom => (
                        <button
                          key={symptom}
                          onClick={() => {
                            setSymptoms([...symptoms, symptom]);
                            setInput('');
                          }}
                          className="w-full p-3 text-left hover:bg-blue-50 flex items-center gap-2"
                        >
                          <Stethoscope className="w-4 h-4 text-blue-500" />
                          {symptom}
                        </button>
                      ))}
                  </motion.div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {symptoms.map(symptom => (
                  <motion.div
                    key={symptom}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {symptom}
                    <button 
                      onClick={() => setSymptoms(symptoms.filter(s => s !== symptom))}
                      className="hover:text-blue-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={analyzeSymptoms}
                disabled={symptoms.length === 0}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: symptoms.length > 0 ? 1.02 : 1 }}
              >
                Analyze Symptoms
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {loading && (
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="space-y-4">
              {['Searching...', 'Analyzing...', 'Matching...', 'Finalizing...'].map((stage, index) => (
                <div key={stage} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                    ${loadingStage >= index ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    {loadingStage > index ? <Check size={16} /> : index + 1}
                  </div>
                  <span className={`${loadingStage >= index ? 'text-gray-800' : 'text-gray-400'}`}>
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {results && (
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Health Bingo</h2>
            
            <div className="grid grid-cols-5 gap-3 mb-8">
              {results.bingoCard.map((symptom, index) => (
                <div
                  key={index}
                  className={`aspect-square flex items-center justify-center text-center p-2 rounded-lg
                    ${symptoms.includes(symptom) ? 'bg-green-100 border-2 border-green-400' 
                     : 'bg-blue-50 border-2 border-blue-200'}`}
                >
                  {symptom}
                  {symptoms.includes(symptom) && (
                    <Check className="absolute top-1 right-1 text-green-500 w-4 h-4" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Recommended Specialists</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {doctors.map((doctor, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-xl border-2 border-blue-100"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-bold text-lg">{doctor.name}</h4>
                    <p className="text-blue-600">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600 mt-2">{doctor.experience} experience</p>
                    <button className="mt-4 w-full bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200">
                      Book Consultation
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BingoGenerator;
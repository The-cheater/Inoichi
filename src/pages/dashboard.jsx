import { motion } from 'framer-motion';
import { 
  History, 
  Users, 
  Stethoscope, 
  Pill, 
  AlertTriangle, 
  Activity,
  ScanEye,
  ArrowRight
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <ScanEye size={28} />,
      title: "DECODE SYMPTOMS",
      description: "Advanced symptom analysis with intelligent pattern recognition",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-200",
      url: "https://example.com/decode-symptoms"
    },
    {
      icon: <History size={28} />,
      title: "SYMPTOMS HISTORY",
      description: "Comprehensive tracking and visualization of your health patterns",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-200",
      url: "https://example.com/symptoms-history"
    },
    {
      icon: <Users size={28} />,
      title: "COMMUNITY INSIGHTS",
      description: "Connect with others sharing similar health journeys",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-200",
      url: "https://example.com/community-insights"
    },
    {
      icon: <Stethoscope size={28} />,
      title: "EXPERTS VALIDATION",
      description: "Professional medical insights for your symptoms",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-200",
      url: "https://example.com/experts-validation"
    },
    {
      icon: <Pill size={28} />,
      title: "TREATMENT SUGGESTIONS",
      description: "AI-powered personalized recommendations",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-200",
      url: "https://example.com/treatment-suggestions"
    },
    {
      icon: <AlertTriangle size={28} />,
      title: "S.O.S",
      description: "Instant emergency alerts to trusted contacts",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-200",
      url: "https://example.com/sos"
    },
    {
      icon: <Activity size={28} />,
      title: "ACTIVITY TRACKING",
      description: "Detailed exercise and health impact analysis",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-200",
      url: "https://example.com/activity-tracking"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 font-poppins">
      {/* Background design */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 lg:mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            HEALTH <span className="text-blue-600">DASHBOARD</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Your complete health monitoring solution with 7 powerful features
          </p>
        </motion.div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`${feature.bgColor} ${feature.borderColor} flex flex-col border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all min-h-[250px]`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                  {feature.icon}
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight">
                  {feature.title}
                </h2>
              </div>
              <p className="text-base text-gray-600 mb-6 flex-grow">
                {feature.description}
              </p>
              <a 
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 font-medium group mt-auto self-start hover:text-blue-800 transition-colors cursor-pointer"
              >
                Explore
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 lg:mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 lg:p-8 text-white shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to transform your health journey?</h2>
            <p className="text-blue-100 mb-6 lg:mb-8 text-lg">
              Get started today and access all 7 powerful health features
            </p>
            <button className="bg-white text-blue-600 px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md text-base lg:text-lg">
              Start Now - It's Free
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
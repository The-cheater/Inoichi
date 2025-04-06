import { Clock, PersonStanding, ShipWheel, Hand, Repeat } from 'lucide-react';
import { useEffect, useRef } from 'react';

const YogaFlow = () => {
  const floatingRefs = useRef([]);

  useEffect(() => {
    floatingRefs.current.forEach((el, index) => {
      if (el) {
        el.style.animationDelay = `${-index * 3}s`;
      }
    });
  }, []);

  const poses = [
    {
      id: '1',
      name: 'Warrior I',
      sanskrit: 'Virabhadrasana I',
      duration: '00:45',
      description: 'Strengthens legs and improves focus',
      icon: <PersonStanding className="w-6 h-6" />,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      id: '2',
      name: 'Boat Pose',
      sanskrit: 'Navasana',
      duration: '00:30',
      description: 'Builds core strength and balance',
      icon: <ShipWheel className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: '3',
      name: 'Forearm Stand',
      sanskrit: 'Mayurasana',
      duration: '00:40',
      description: 'Improves balance and arm strength',
      icon: <Hand className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: '4',
      name: 'Warrior I (Repeat)',
      sanskrit: 'Virabhadrasana I',
      duration: '01:00',
      description: 'Deepen your practice and focus',
      icon: <Repeat className="w-6 h-6" />,
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  const totalTime = poses.reduce((acc, pose) => {
    const [minutes, seconds] = pose.duration.split(':').map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} sec`;
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1].map((_, i) => (
          <div
            key={i}
            ref={el => floatingRefs.current[i] = el}
            className={`absolute rounded-full opacity-30 w-64 h-64 ${i === 0 ? 'bg-emerald-300 left-1/4 top-1/3' : 'bg-blue-300 right-1/4 top-1/4'}`}
            style={{
              animation: 'float 12s infinite linear',
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <main className="relative container max-w-2xl mx-auto px-4 py-12">
        <header className="mb-12 text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">Serenity Flow</h1>
          <p className="text-lg text-slate-600">Beginner Yoga Sequence</p>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm">
            <Clock className="w-5 h-5 text-slate-500" />
            <span className="text-slate-600">Total Time: {formatTime(totalTime)}</span>
          </div>
        </header>

        <div className="space-y-4">
          {poses.map((pose, index) => (
            <div
              key={pose.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div className="flex items-center gap-4">
                <div className={`${pose.color} p-3 rounded-xl`}>
                  {pose.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">{pose.name}</h3>
                  <p className="text-slate-600 text-sm">{pose.description}</p>
                  <p className="text-slate-500 text-xs mt-1">{pose.sanskrit}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-5 h-5" />
                  <span>{pose.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
            50% { transform: translateY(-40px) rotate(180deg); opacity: 0.3; }
            100% { transform: translateY(-80px) rotate(360deg); opacity: 0; }
          }
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default YogaFlow;
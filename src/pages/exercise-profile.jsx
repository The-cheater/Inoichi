import { motion } from 'framer-motion';
import { Flame, Award, Zap, Trophy, Calendar, HeartPulse, Activity, CircleDashed } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ExerciseProfile = () => {
  const userData = {
    name: "John Doe",
    activeDays: 7,
    currentStreak: 5,
    totalXP: 2450,
    weeklyGoal: 5,
    completedExercises: 3,
    badges: [
      { id: 1, name: "Starter", icon: Flame, earned: true },
      { id: 2, name: "5-Day Streak", icon: Zap, earned: true },
      { id: 3, name: "Marathoner", icon: Trophy, earned: false },
      { id: 4, name: "Consistency King", icon: Award, earned: false }
    ]
  };

  const exerciseData = [
    { name: "Yoga", xp: 300, duration: "30 min", icon: Activity, color: "bg-purple-500" },
    { name: "Stretch", xp: 150, duration: "15 min", icon: CircleDashed, color: "bg-blue-500" },
    { name: "Cardio", xp: 450, duration: "45 min", icon: HeartPulse, color: "bg-red-500" },
    { name: "Workout", xp: 600, duration: "60 min", icon: Flame, color: "bg-orange-500" }
  ];

  const weeklyData = [
    { day: "Mon", xp: 300 },
    { day: "Tue", xp: 450 },
    { day: "Wed", xp: 150 },
    { day: "Thu", xp: 600 },
    { day: "Fri", xp: 300 },
    { day: "Sat", xp: 0 },
    { day: "Sun", xp: 0 }
  ];

  const FloatingIcon = ({ icon: Icon, position, delay }) => (
    <motion.div
      className={`absolute text-blue-200/20 ${position}`}
      initial={{ y: 0, rotate: 0 }}
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{ 
        duration: 6 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay || 0
      }}
    >
      <Icon className="w-12 h-12" />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingIcon icon={Flame} position="top-10 left-10" delay={0.2} />
      <FloatingIcon icon={Award} position="top-1/4 right-20" delay={0.4} />
      <FloatingIcon icon={Zap} position="bottom-20 left-1/4" delay={0.6} />
      <FloatingIcon icon={Trophy} position="bottom-40 right-32" delay={0.8} />

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                Lvl 3
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900">{userData.name}</h1>
              <p className="text-blue-600 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {userData.activeDays} active days
              </p>
            </div>
          </div>

          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500" />
              <span className="font-bold text-gray-700">{userData.currentStreak} day streak</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold text-blue-600">{userData.totalXP}</span>
              <span className="text-gray-500 ml-1">XP</span>
            </div>
          </Card>
        </motion.div>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Weekly Activity</CardTitle>
                <div className="text-sm text-gray-600">
                  {userData.completedExercises}/{userData.weeklyGoal} workouts completed
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={(userData.completedExercises / userData.weeklyGoal) * 100} className="h-3 mb-6" />
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="xp" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Exercise Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {exerciseData.map((exercise, index) => (
            <motion.div
              key={exercise.name}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className={`h-full ${exercise.color}/10 hover:${exercise.color}/20 transition-colors`}>
                <div className="p-6 h-full flex flex-col">
                  <div className={`${exercise.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <exercise.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{exercise.name}</h3>
                  <p className="text-gray-600 mb-4">{exercise.duration}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-blue-600">{exercise.xp} XP</span>
                    <Button variant="outline" size="sm">
                      Start
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userData.badges.map((badge) => (
              <motion.div
                key={badge.id}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <Card className={`p-4 w-full flex flex-col items-center ${badge.earned ? '' : 'opacity-50'}`}>
                  <div className={`w-16 h-16 rounded-full ${badge.earned ? 'bg-yellow-100' : 'bg-gray-200'} flex items-center justify-center mb-3`}>
                    <badge.icon className={`w-8 h-8 ${badge.earned ? 'text-yellow-500' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="font-medium text-center">{badge.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {badge.earned ? 'Earned' : 'Locked'}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExerciseProfile;
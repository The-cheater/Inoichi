import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Settings, Heart, Lock, HelpCircle, LogOut,
  MessageCircle, AlertTriangle, Mail, Phone, ChevronRight,
  Ambulance, Cross, HeartPulse, Stethoscope, Edit, Save, Hospital, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [contacts, setContacts] = useState({
    hospital: '+1 234 567 8900',
    ambulance: '+1 234 567 8901',
    doctor: '+1 234 567 8902',
    guardian: '+1 234 567 8903'
  });

  const faqItems = [
    { question: 'How do I update emergency contacts?', answer: 'Go to SOS Info and click "Edit Contacts" to update numbers.' },
    { question: 'Is my data secure?', answer: 'We use military-grade encryption for all health data.' },
    { question: 'Emergency broadcast?', answer: 'Yes! You can alert all contacts simultaneously.' }
  ];

  const MedicalIconFloat = ({ icon: Icon, position }) => (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className={`absolute opacity-10 text-blue-200 ${position}`}
    >
      <Icon className="w-24 h-24" />
    </motion.div>
  );

  const NavItem = ({ icon, label, tab }) => (
    <motion.div whileHover={{ scale: 1.05 }} className="w-full">
      <Button
        variant={activeTab === tab ? 'secondary' : 'ghost'}
        className="w-full justify-start gap-3 text-lg"
        onClick={() => setActiveTab(tab)}
      >
        {icon}
        {label}
      </Button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Floating Medical Icons */}
      <MedicalIconFloat icon={Cross} position="top-20 left-10" />
      <MedicalIconFloat icon={HeartPulse} position="top-1/3 right-20" />
      <MedicalIconFloat icon={Ambulance} position="bottom-20 left-1/4" />
      <MedicalIconFloat icon={Stethoscope} position="bottom-40 right-32" />

      <div className="relative z-10 max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Navigation Sidebar */}
        <Card className="p-4 h-fit sticky top-6 bg-white/90 backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-4 p-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-bold text-xl">John Doe</h2>
                <p className="text-sm text-blue-600">Premium Member</p>
              </div>
            </div>

            <NavItem icon={<User size={20} />} label="Profile" tab="profile" />
            <NavItem icon={<AlertTriangle size={20} />} label="SOS Info" tab="sos" />
            <NavItem icon={<Heart size={20} />} label="Favorites" tab="favorites" />
            <NavItem icon={<Lock size={20} />} label="Privacy" tab="privacy" />
            <NavItem icon={<HelpCircle size={20} />} label="Help Center" tab="help" />
            
            <Dialog open={showLogoutModal} onOpenChange={setShowLogoutModal}>
              <DialogTrigger asChild>
                <Button variant="destructive" className="gap-3 mt-4 text-lg">
                  <LogOut size={20} />
                  Logout
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="text-2xl font-bold">Confirm Logout</DialogHeader>
                <p className="text-gray-600 text-lg">Are you sure you want to log out?</p>
                <div className="flex gap-3 justify-end mt-4">
                  <Button variant="outline" onClick={() => setShowLogoutModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" className="text-lg">Logout</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-8">
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <Card className="p-8 bg-white/90 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-8 text-blue-900">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-lg text-gray-600">Full Name</label>
                    <Input 
                      defaultValue="John Doe" 
                      className="text-xl h-16 border-2 border-blue-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-lg text-gray-600">Email</label>
                    <Input 
                      defaultValue="johndoe@example.com" 
                      className="text-xl h-16 border-2 border-blue-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-lg text-gray-600">Phone Number</label>
                    <Input 
                      defaultValue="+1 234 567 8900" 
                      className="text-xl h-16 border-2 border-blue-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-lg text-gray-600">Date of Birth</label>
                    <Input 
                      defaultValue="01/01/1990" 
                      className="text-xl h-16 border-2 border-blue-200"
                    />
                  </div>
                </div>
                <Button className="mt-8 gap-3 text-lg h-14">
                  <Save size={24} />
                  Save Changes
                </Button>
              </Card>
            </motion.div>
          )}

          {activeTab === 'sos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <Card className="p-8 bg-white/90 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-900">Emergency Contacts</h2>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className="gap-2 text-lg h-14"
                  >
                    {isEditing ? <Save size={24} /> : <Edit size={24} />}
                    {isEditing ? 'Save Changes' : 'Edit Contacts'}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(contacts).map(([type, number]) => (
                    <motion.div
                      key={type}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {type === 'hospital' && <Hospital className="w-12 h-12 text-blue-600" />}
                        {type === 'ambulance' && <Ambulance className="w-12 h-12 text-red-500" />}
                        {type === 'doctor' && <User className="w-12 h-12 text-green-600" />}
                        {type === 'guardian' && <Shield className="w-12 h-12 text-purple-600" />}
                        <h3 className="text-2xl font-bold capitalize text-blue-900">
                          {type}
                        </h3>
                      </div>
                      <Input
                        value={number}
                        onChange={(e) => setContacts({...contacts, [type]: e.target.value})}
                        readOnly={!isEditing}
                        className="text-xl h-14 bg-white border-2 border-blue-200"
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === 'help' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <Card className="p-8 bg-white/90 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-8 text-blue-900">Help Center</h2>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{item.question}</h3>
                        <ChevronRight className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="mt-4 text-gray-600 text-lg">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
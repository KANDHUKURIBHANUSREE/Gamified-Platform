import React, { useState, useEffect } from 'react';
import { Leaf, User, Users, GraduationCap, Award, BarChart3, Target, Gamepad2, ArrowRight, Star, Trophy, Zap, TreePine, Recycle, Droplets } from 'lucide-react';

interface User {
  id: string;
  name: string;
  role: 'student' | 'teacher' | 'parent';
  email: string;
  points?: number;
  level?: number;
  badges?: string[];
  children?: User[];
}

interface LearningModule {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  completed: boolean;
  icon: React.ReactNode;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  earned: boolean;
  date?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'parent'>('student');

  const mockUsers: User[] = [
    {
      id: '1',
      name: 'Alex Chen',
      role: 'student',
      email: 'alex@example.com',
      points: 2450,
      level: 8,
      badges: ['Water Warrior', 'Recycling Champion', 'Energy Saver']
    },
    {
      id: '2',
      name: 'Ms. Rodriguez',
      role: 'teacher',
      email: 'rodriguez@example.com'
    },
    {
      id: '3',
      name: 'John Smith',
      role: 'parent',
      email: 'john@example.com',
      children: [{
        id: '1',
        name: 'Alex Chen',
        role: 'student',
        email: 'alex@example.com',
        points: 2450,
        level: 8
      }]
    }
  ];

  const learningModules: LearningModule[] = [
    {
      id: '1',
      title: 'Water Conservation Challenge',
      description: 'Learn about water-saving techniques and complete eco-missions',
      difficulty: 'easy',
      points: 150,
      completed: false,
      icon: <Droplets className="w-6 h-6 text-blue-400" />
    },
    {
      id: '2',
      title: 'Recycling Quiz Master',
      description: 'Test your knowledge on proper recycling methods',
      difficulty: 'medium',
      points: 200,
      completed: true,
      icon: <Recycle className="w-6 h-6 text-green-400" />
    },
    {
      id: '3',
      title: 'Forest AR Explorer',
      description: 'Explore virtual forests and learn about biodiversity',
      difficulty: 'hard',
      points: 300,
      completed: false,
      icon: <TreePine className="w-6 h-6 text-emerald-400" />
    }
  ];

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first eco-challenge',
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      earned: true,
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Water Warrior',
      description: 'Save 100 liters of water through challenges',
      icon: <Droplets className="w-5 h-5 text-blue-400" />,
      earned: true,
      date: '2024-01-20'
    },
    {
      id: '3',
      title: 'Recycling Champion',
      description: 'Master all recycling quizzes with 90%+ score',
      icon: <Trophy className="w-5 h-5 text-green-400" />,
      earned: true,
      date: '2024-01-25'
    },
    {
      id: '4',
      title: 'Energy Master',
      description: 'Complete 10 energy conservation missions',
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      earned: false
    }
  ];

  const handleLogin = (role: 'student' | 'teacher' | 'parent') => {
    const user = mockUsers.find(u => u.role === role);
    if (user) {
      setCurrentUser(user);
      setCurrentPage('dashboard');
    }
  };

  const LandingPage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-md bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Leaf className="w-8 h-8 text-green-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                EcoLearn
              </h1>
            </div>
            <button
              onClick={() => setCurrentPage('login')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Gamified Environmental Education Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform environmental education through interactive gaming, AR/VR experiences, and AI-powered personalized learning paths.
          </p>
          <button
            onClick={() => setCurrentPage('login')}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            Start Learning Journey
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Learning Journey Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="w-12 h-12 text-blue-400" />,
                title: "Secure Login",
                description: "Students, Teachers & Parents access via secure web/mobile authentication",
                step: "01"
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
                title: "Personalized Dashboard",
                description: "AI recommends learning modules & games based on individual progress and interests",
                step: "02"
              },
              {
                icon: <Gamepad2 className="w-12 h-12 text-green-400" />,
                title: "Interactive Learning",
                description: "Quizzes, AR/VR simulations, challenges, and eco-missions for engaging education",
                step: "03"
              },
              {
                icon: <Award className="w-12 h-12 text-yellow-400" />,
                title: "Reward System",
                description: "Points, badges, and leaderboards motivate continuous engagement and achievement",
                step: "04"
              },
              {
                icon: <Target className="w-12 h-12 text-red-400" />,
                title: "Progress Tracking",
                description: "Central server stores student performance data and environmental impact metrics",
                step: "05"
              },
              {
                icon: <Users className="w-12 h-12 text-indigo-400" />,
                title: "Insights Dashboard",
                description: "Teachers & Parents view detailed progress reports and engagement analytics",
                step: "06"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-green-500/50 group-hover:bg-gray-900/80">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-lg">
                    {item.step}
                  </div>
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-white group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Leaf className="w-8 h-8 text-green-400" />, title: "Eco Missions", desc: "Real-world environmental challenges" },
              { icon: <Trophy className="w-8 h-8 text-yellow-400" />, title: "Achievements", desc: "Unlock badges and rewards" },
              { icon: <Users className="w-8 h-8 text-blue-400" />, title: "Community", desc: "Connect with eco-warriors globally" },
              { icon: <BarChart3 className="w-8 h-8 text-purple-400" />, title: "Analytics", desc: "Track your environmental impact" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 group cursor-pointer">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-green-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Leaf className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Welcome to EcoLearn
          </h1>
          <p className="text-gray-400">Select your role to continue</p>
        </div>

        <div className="space-y-4">
          {[
            { role: 'student' as const, icon: <GraduationCap className="w-6 h-6" />, label: 'Student', desc: 'Access learning modules and games' },
            { role: 'teacher' as const, icon: <Users className="w-6 h-6" />, label: 'Teacher', desc: 'Monitor student progress and insights' },
            { role: 'parent' as const, icon: <User className="w-6 h-6" />, label: 'Parent', desc: 'Track your child\'s learning journey' }
          ].map((option) => (
            <button
              key={option.role}
              onClick={() => {
                setSelectedRole(option.role);
                handleLogin(option.role);
              }}
              className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-left hover:border-green-500/50 hover:bg-gray-900/80 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-green-400 transition-colors">{option.label}</h3>
                  <p className="text-gray-400 text-sm">{option.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-600 group-hover:text-green-400 transition-colors" />
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage('landing')}
          className="w-full mt-6 text-gray-400 hover:text-white transition-colors"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );

  const StudentDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-800/30 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {currentUser?.name}!</h1>
            <p className="text-green-300">Ready for your next eco-adventure?</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-green-400">{currentUser?.points}</div>
            <div className="text-sm text-gray-400">Total Points</div>
            <div className="text-lg font-semibold text-white">Level {currentUser?.level}</div>
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Progress to next level</span>
            <span className="text-sm text-green-400">85%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{width: '85%'}}></div>
          </div>
        </div>
      </div>

      {/* Learning Modules */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Gamepad2 className="w-7 h-7 text-green-400 mr-3" />
          Recommended Learning Modules
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {learningModules.map((module) => (
            <div key={module.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                {module.icon}
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  module.difficulty === 'easy' ? 'bg-green-900/50 text-green-300' :
                  module.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                  'bg-red-900/50 text-red-300'
                }`}>
                  {module.difficulty.toUpperCase()}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">{module.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{module.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">{module.points} points</span>
                </div>
                {module.completed ? (
                  <span className="text-green-400 text-sm font-medium">✓ Completed</span>
                ) : (
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                    Start
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Award className="w-7 h-7 text-yellow-400 mr-3" />
          Your Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`bg-gray-900/50 backdrop-blur-sm border rounded-xl p-4 text-center transition-all duration-300 ${
              achievement.earned 
                ? 'border-yellow-500/30 bg-yellow-900/10' 
                : 'border-gray-800 opacity-50'
            }`}>
              <div className="mb-3 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="font-semibold mb-1">{achievement.title}</h3>
              <p className="text-gray-400 text-xs mb-2">{achievement.description}</p>
              {achievement.earned && achievement.date && (
                <div className="text-green-400 text-xs">Earned {achievement.date}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Trophy className="w-7 h-7 text-yellow-400 mr-3" />
          Weekly Leaderboard
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          {[
            { rank: 1, name: 'Emma Green', points: 3200, avatar: '🌱' },
            { rank: 2, name: 'Alex Chen (You)', points: 2450, avatar: '🌿', isCurrentUser: true },
            { rank: 3, name: 'Sam Rivers', points: 2100, avatar: '🌊' },
            { rank: 4, name: 'Maya Forest', points: 1850, avatar: '🌳' }
          ].map((player) => (
            <div key={player.rank} className={`flex items-center justify-between p-3 rounded-lg mb-2 ${
              player.isCurrentUser ? 'bg-green-900/30 border border-green-700/50' : 'bg-gray-800/30'
            }`}>
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  player.rank === 1 ? 'bg-yellow-500 text-black' :
                  player.rank === 2 ? 'bg-gray-400 text-black' :
                  player.rank === 3 ? 'bg-amber-600 text-white' : 'bg-gray-600 text-white'
                }`}>
                  {player.rank}
                </div>
                <div className="text-2xl">{player.avatar}</div>
                <div>
                  <div className={`font-semibold ${player.isCurrentUser ? 'text-green-400' : 'text-white'}`}>
                    {player.name}
                  </div>
                  <div className="text-gray-400 text-sm">{player.points} points</div>
                </div>
              </div>
              {player.rank <= 3 && (
                <Trophy className={`w-5 h-5 ${
                  player.rank === 1 ? 'text-yellow-500' :
                  player.rank === 2 ? 'text-gray-400' :
                  'text-amber-600'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TeacherDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Teacher Dashboard</h1>
        <p className="text-blue-300">Monitor student progress and engagement</p>
      </div>

      {/* Class Overview */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Class Overview</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Total Students', value: '24', icon: <Users className="w-6 h-6 text-blue-400" />, change: '+2 this week' },
            { title: 'Avg. Engagement', value: '87%', icon: <BarChart3 className="w-6 h-6 text-green-400" />, change: '+5% from last week' },
            { title: 'Modules Completed', value: '156', icon: <Target className="w-6 h-6 text-purple-400" />, change: '+23 this week' },
            { title: 'Total Eco-Points', value: '12.5K', icon: <Award className="w-6 h-6 text-yellow-400" />, change: '+1.2K this week' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                {stat.icon}
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <h3 className="font-medium text-gray-300 mb-1">{stat.title}</h3>
              <p className="text-green-400 text-sm">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Progress */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Student Progress</h2>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="space-y-4">
            {[
              { name: 'Alex Chen', progress: 85, points: 2450, status: 'active', lastActivity: '2 hours ago' },
              { name: 'Emma Watson', progress: 92, points: 3100, status: 'active', lastActivity: '1 hour ago' },
              { name: 'Sam Rodriguez', progress: 78, points: 1890, status: 'inactive', lastActivity: '2 days ago' },
              { name: 'Maya Patel', progress: 88, points: 2750, status: 'active', lastActivity: '30 min ago' }
            ].map((student, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${student.status === 'active' ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  <div>
                    <div className="font-semibold text-white">{student.name}</div>
                    <div className="text-gray-400 text-sm">Last active: {student.lastActivity}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="text-white font-medium">{student.points} pts</div>
                    <div className="text-gray-400 text-sm">{student.progress}% complete</div>
                  </div>
                  <div className="w-20">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{width: `${student.progress}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Module Performance */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Module Performance</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {learningModules.map((module, index) => (
            <div key={module.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                {module.icon}
                <h3 className="font-semibold text-white">{module.title}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Completion Rate</span>
                  <span className="text-white font-medium">{Math.floor(Math.random() * 30 + 70)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg. Score</span>
                  <span className="text-green-400 font-medium">{Math.floor(Math.random() * 15 + 80)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Students Enrolled</span>
                  <span className="text-white font-medium">{Math.floor(Math.random() * 10 + 15)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ParentDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-800/30 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Parent Dashboard</h1>
        <p className="text-purple-300">Track your child's learning journey and environmental impact</p>
      </div>

      {/* Child Progress Overview */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Alex's Progress Overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Current Level', value: '8', icon: <Star className="w-6 h-6 text-yellow-400" />, subtitle: 'Eco Explorer' },
            { title: 'Total Points', value: '2,450', icon: <Award className="w-6 h-6 text-green-400" />, subtitle: 'This month' },
            { title: 'Modules Completed', value: '12', icon: <Target className="w-6 h-6 text-blue-400" />, subtitle: 'Out of 15' },
            { title: 'Learning Streak', value: '7 days', icon: <Zap className="w-6 h-6 text-orange-400" />, subtitle: 'Personal best!' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                {stat.icon}
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <h3 className="font-medium text-gray-300 mb-1">{stat.title}</h3>
              <p className="text-purple-400 text-sm">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recent Activities</h2>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="space-y-4">
            {[
              { activity: 'Completed Water Conservation Challenge', points: 150, time: '2 hours ago', type: 'achievement' },
              { activity: 'Earned "Recycling Champion" badge', points: 200, time: '1 day ago', type: 'badge' },
              { activity: 'Started Forest AR Explorer module', points: 0, time: '2 days ago', type: 'start' },
              { activity: 'Quiz: "Plastic Pollution" - 95% score', points: 100, time: '3 days ago', type: 'quiz' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    item.type === 'achievement' ? 'bg-green-400' :
                    item.type === 'badge' ? 'bg-yellow-400' :
                    item.type === 'quiz' ? 'bg-blue-400' : 'bg-gray-400'
                  }`}></div>
                  <div>
                    <div className="text-white font-medium">{item.activity}</div>
                    <div className="text-gray-400 text-sm">{item.time}</div>
                  </div>
                </div>
                {item.points > 0 && (
                  <div className="text-green-400 font-medium">+{item.points} pts</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Environmental Impact This Month</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: 'Water Saved', 
              value: '250L', 
              icon: <Droplets className="w-8 h-8 text-blue-400" />,
              description: 'Through conservation challenges',
              trend: '+45L from last month'
            },
            { 
              title: 'Waste Recycled', 
              value: '15kg', 
              icon: <Recycle className="w-8 h-8 text-green-400" />,
              description: 'Properly sorted and recycled',
              trend: '+3kg from last month'
            },
            { 
              title: 'Carbon Footprint', 
              value: '-12kg', 
              icon: <TreePine className="w-8 h-8 text-emerald-400" />,
              description: 'Reduced through eco-actions',
              trend: 'Best month yet!'
            }
          ].map((impact, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                {impact.icon}
                <div>
                  <div className="text-2xl font-bold text-white">{impact.value}</div>
                  <div className="text-gray-300 font-medium">{impact.title}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-2">{impact.description}</p>
              <p className="text-green-400 text-sm font-medium">{impact.trend}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Recommendations */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recommended for Alex</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: 'Ocean Conservation VR', 
              difficulty: 'medium',
              description: 'Explore marine ecosystems and learn about ocean protection',
              estimatedTime: '30 min',
              points: 200
            },
            { 
              title: 'Solar Energy Quiz', 
              difficulty: 'easy',
              description: 'Test knowledge about renewable energy sources',
              estimatedTime: '15 min',
              points: 150
            }
          ].map((recommendation, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg text-white">{recommendation.title}</h3>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  recommendation.difficulty === 'easy' ? 'bg-green-900/50 text-green-300' :
                  recommendation.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                  'bg-red-900/50 text-red-300'
                }`}>
                  {recommendation.difficulty.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{recommendation.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">⏱ {recommendation.estimatedTime}</span>
                <span className="text-green-400 font-medium">+{recommendation.points} points</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-md bg-black/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Leaf className="w-8 h-8 text-green-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                EcoLearn
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="font-semibold">{currentUser?.name}</div>
                <div className="text-sm text-gray-400 capitalize">{currentUser?.role}</div>
              </div>
              <button
                onClick={() => {
                  setCurrentUser(null);
                  setCurrentPage('landing');
                }}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );

  if (currentPage === 'landing') return <LandingPage />;
  if (currentPage === 'login') return <LoginPage />;

  return (
    <DashboardLayout>
      {currentUser?.role === 'student' && <StudentDashboard />}
      {currentUser?.role === 'teacher' && <TeacherDashboard />}
      {currentUser?.role === 'parent' && <ParentDashboard />}
    </DashboardLayout>
  );
}

export default App;
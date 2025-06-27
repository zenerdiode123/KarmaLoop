import React from 'react';
import { 
  Home, 
  LayoutDashboard, 
  Trophy, 
  User, 
  TrendingUp, 
  Settings, 
  LogOut,
  Zap,
  X,
  Sparkles,
  Star
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: 'home', label: 'Home', icon: Home, description: 'Feed of anonymous help requests' },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, description: 'View requests you posted, proposals you made, karma balance' },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, description: 'Shows top helpers, karma scores, badges' },
  { id: 'profile', label: 'Profile', icon: User, description: 'Personal info, skills, karma history' },
  { id: 'trends', label: 'Trends', icon: TrendingUp, description: 'Show most requested help types, karma flow, skill heatmap' },
  { id: 'settings', label: 'Settings', icon: Settings, description: 'Account, privacy, allow karma loan toggle, notification prefs' },
  { id: 'logout', label: 'Logout', icon: LogOut, description: 'Sign out of your account' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeItem, onItemClick }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-screen w-72 bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out overflow-hidden relative
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:relative lg:z-auto
      `}>
        
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800 flex-shrink-0 relative group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Infinity Symbol with flame on top */}
                  <path 
                    d="M25 50C15 50 8 57 8 65C8 73 15 80 25 80C35 80 42 73 50 65C58 73 65 80 75 80C85 80 92 73 92 65C92 57 85 50 75 50C65 50 58 57 50 65C42 57 35 50 25 50ZM25 57C30 57 35 60 40 65C35 70 30 73 25 73C20 73 15 70 15 65C15 60 20 57 25 57ZM75 57C80 57 85 60 85 65C85 70 80 73 75 73C70 73 65 70 60 65C65 60 70 57 75 57Z" 
                    fill="#E63946"
                  />
                  
                  {/* Flame on top of infinity symbol */}
                  <path 
                    d="M50 20C48 25 46 30 45 35C44 33 43 31 41 29C40 31 39 33 39 36C39 39 41 41 43 42C42 43 41 45 42 47C43 46 45 45 47 46C48 44 49 42 50 40C51 38 50 33 50 20ZM55 25C54 30 53 33 52 36C51 34 50 32 49 30C48 32 47 34 47 37C47 40 49 42 51 43C50 44 49 46 50 48C51 47 53 46 55 47C56 45 57 43 58 41C59 39 58 34 55 25Z" 
                    fill="#E63946"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-red-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-150">KarmaLoop</h1>
                <p className="text-xs text-gray-400">Your karma is your currency</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-all duration-150 hover:scale-110 hover:rotate-90 group"
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-150 blur-sm"></div>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Karma */}
          <div className="p-6 border-b border-gray-800 flex-shrink-0 relative">
            <div className="bg-gray-800 rounded-lg p-4 relative group overflow-hidden transform hover:scale-105 transition-all duration-150 cursor-pointer">
              {/* Karma box backlight */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-150 blur-sm -z-10"></div>
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-lg"></div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-150">Your Karma</span>
                <Zap className="w-4 h-4 text-accent group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-150" />
              </div>
              <div className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-orange-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-150">247</div>
              <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-300 transition-colors duration-150">+15 this week</div>
              
              {/* Floating sparkles */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <Star className="w-3 h-3 text-yellow-300 animate-pulse" />
              </div>
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-100">
                <Sparkles className="w-2 h-2 text-orange-300 animate-ping" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto overscroll-contain pb-6 relative">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              const isLogout = item.id === 'logout';
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (isLogout) {
                      // Handle logout logic here
                      console.log('Logging out...');
                    } else {
                      onItemClick(item.id);
                    }
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 group transform hover:scale-105 active:scale-95 ${
                    isLogout 
                      ? 'mt-4 border-t border-gray-700 pt-6 text-gray-300 hover:bg-red-900/20 hover:text-red-500 border border-transparent hover:border-red-600/30 transition-all duration-100 relative overflow-hidden'
                      : isActive 
                        ? 'bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 border border-transparent relative overflow-hidden' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-md border border-transparent hover:border-gray-600 transition-all duration-100 relative overflow-hidden'
                    }
                  `}
                >
                  {/* Menu item backlight */}
                  {!isLogout && !isActive && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-150 blur-sm -z-10"></div>
                  )}
                  
                  {/* Active item enhanced glow */}
                  {isActive && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/60 to-red-400/60 rounded-lg opacity-60 blur-sm -z-10"></div>
                  )}
                  
                  {/* Logout item special glow */}
                  {isLogout && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 to-red-500/40 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-150 blur-sm -z-10"></div>
                  )}
                  
                  {/* Subtle background glow */}
                  <div className={`absolute inset-0 rounded-lg transition-opacity duration-100 ${
                    isLogout 
                      ? 'bg-gradient-to-r from-red-500/10 via-transparent to-red-600/15'
                      : isActive
                        ? 'bg-gradient-to-r from-red-400/20 via-red-500/15 to-red-600/20'
                        : 'bg-gradient-to-r from-red-500/8 via-transparent to-red-600/12'
                  } opacity-0 group-hover:opacity-100`}></div>
                  
                  <Icon className={`w-5 h-5 transition-all duration-150 ${
                    isLogout
                      ? 'text-gray-400 group-hover:text-red-400 group-hover:scale-105'
                      : isActive 
                        ? 'text-white group-hover:scale-105 drop-shadow-lg' 
                        : 'text-gray-400 group-hover:text-red-300 group-hover:scale-105'
                  }`} />
                  <div className="flex-1">
                    <div className={`font-medium transition-colors duration-150 ${
                      isLogout
                        ? 'text-gray-300 group-hover:text-red-400'
                        : isActive 
                          ? 'text-white drop-shadow-md' 
                          : 'text-gray-300 group-hover:text-red-100'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-xs transition-colors duration-150 ${
                      isLogout
                        ? 'text-gray-500 group-hover:text-red-300'
                        : isActive 
                          ? 'text-red-100 group-hover:text-red-50' 
                          : 'text-gray-500 group-hover:text-red-200 transition-colors'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                  
                  {/* Floating sparkles for active and hover states */}
                  {(isActive || !isLogout) && (
                    <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      <Sparkles className="w-2 h-2 text-red-300 animate-pulse" />
                    </div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
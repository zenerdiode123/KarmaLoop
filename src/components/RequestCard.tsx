import React, { useState, useRef } from 'react';
import { Clock, MapPin, Zap, User, Sparkles, Star } from 'lucide-react';
import { HelpRequest } from '../types';

interface RequestCardProps {
  request: HelpRequest;
  onProposeHelp: (id: string) => void;
}

const urgencyConfig = {
  low: { color: 'bg-green-500', label: 'Low', icon: '🟢' },
  medium: { color: 'bg-yellow-500', label: 'Medium', icon: '🟡' },
  high: { color: 'bg-orange-500', label: 'High', icon: '🟠' },
  urgent: { color: 'bg-red-500', label: 'Urgent', icon: '🔴' }
};

const genderConfig = {
  male: { icon: '👨', color: 'bg-blue-500' },
  female: { icon: '👩', color: 'bg-pink-500' },
  other: { icon: '👤', color: 'bg-purple-500' }
};

export const RequestCard: React.FC<RequestCardProps> = ({ request, onProposeHelp }) => {
  const urgencyInfo = urgencyConfig[request.urgency];
  const genderInfo = genderConfig[request.requesterGender];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-transparent transition-all duration-200 group h-full flex flex-col overflow-hidden transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/15"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-red-400/20 to-transparent rounded-tl-xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-500/15 via-red-600/10 to-transparent rounded-br-xl"></div>
      </div>
      
      {/* Enhanced multi-layered backlight system */}
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-red-600/60 via-red-500/40 to-red-600/60 opacity-0 group-hover:opacity-70 transition-opacity duration-200 -z-20 blur-2xl"></div>
      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-red-500/40 via-red-400/30 to-red-500/40 opacity-0 group-hover:opacity-60 transition-opacity duration-150 -z-10 blur-xl"></div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/20 via-red-500/15 to-red-600/20 opacity-0 group-hover:opacity-80 transition-opacity duration-100 -z-10 blur-md"></div>
      <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 z-5"></div>
      
      {/* Cursor-following red gradient circle */}
      <div 
        className="absolute opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.2) 20%, rgba(185, 28, 28, 0.15) 40%, rgba(153, 27, 27, 0.1) 60%, rgba(127, 29, 29, 0.05) 80%, transparent 100%)',
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
          filter: 'blur(20px)',
          transition: 'transform 0.3s ease-out, opacity 0.5s ease-out',
        }}
      />
      
      {/* Secondary cursor circle for enhanced depth */}
      <div 
        className="absolute opacity-0 group-hover:opacity-25 transition-opacity duration-400 pointer-events-none z-0"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.25) 30%, rgba(185, 28, 28, 0.15) 50%, rgba(153, 27, 27, 0.08) 70%, transparent 100%)',
          transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
          filter: 'blur(15px)',
          transition: 'transform 0.2s ease-out, opacity 0.4s ease-out',
        }}
      />
      
      {/* Radial glow from center */}
      <div className="absolute inset-0 rounded-xl bg-gradient-radial from-red-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-200 -z-10"></div>
      
      {/* Enhanced animated sparkle overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-150">
        <div className="absolute top-3 right-3 text-red-300 animate-bounce">
          <Star className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute top-6 left-4 text-orange-300 animate-pulse delay-300">
          <Sparkles className="w-3 h-3 animate-ping" />
        </div>
        <div className="absolute bottom-8 right-6 text-red-400 animate-bounce delay-500">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-orange-300 animate-ping delay-700">
          <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 text-red-300 animate-bounce delay-1000">
          <div className="w-1 h-1 bg-current rounded-full"></div>
        </div>
      </div>
      
      {/* Enhanced gradient sweep animation */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-200">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out"></div>
      </div>
      
      {/* Pulsing edge light */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-red-400/30 transition-all duration-150 -z-10"></div>
      
      {/* Content wrapper with enhanced glow */}
      <div className="relative z-10 h-full flex flex-col group-hover:drop-shadow-2xl transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 pr-3">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-red-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 line-clamp-2 leading-tight group-hover:drop-shadow-lg">
            {request.title}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-150">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 group-hover:text-red-300 group-hover:animate-pulse group-hover:drop-shadow-lg transition-all duration-150" />
              <span className="group-hover:drop-shadow-md">{request.timePosted}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center space-x-1">
            <div className={`w-8 h-8 rounded-full ${genderInfo.color} flex items-center justify-center text-sm group-hover:scale-115 group-hover:shadow-xl group-hover:shadow-current/40 transition-all duration-150`}>
              {genderInfo.icon}
            </div>
          </div>
          <div className={`w-4 h-4 rounded-full ${urgencyInfo.color} animate-pulse-slow group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-current/50 transition-all duration-150`} />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 group-hover:text-gray-100 mb-4 leading-relaxed text-sm line-clamp-3 flex-1 transition-all duration-150">
        {request.description}
      </p>

      {/* Skills with enhanced effects */}
      <div className="flex flex-wrap gap-2 mb-4">
        {request.skills.slice(0, 3).map((skill, index) => (
          <span
            key={skill}
            style={{ animationDelay: `${index * 150}ms` }}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-transparent group-hover:bg-gradient-to-r group-hover:from-red-600/25 group-hover:to-red-500/25 group-hover:text-red-100 group-hover:border-red-300/40 group-hover:shadow-lg group-hover:shadow-red-500/20 transition-all duration-150 ease-out transform group-hover:scale-105 group-hover:-translate-y-0.5"
          >
            {skill}
          </span>
        ))}
        {request.skills.length > 3 && (
          <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-xs group-hover:bg-gray-600 group-hover:text-gray-200 group-hover:shadow-lg transition-all duration-150">
            +{request.skills.length - 3}
          </span>
        )}
      </div>

      {/* Footer with enhanced karma box */}
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-yellow-500/25 group-hover:to-orange-500/25 px-3 py-2 rounded-lg border border-transparent group-hover:border-yellow-300/40 group-hover:shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-150 ease-out transform group-hover:scale-105 group-hover:-translate-y-0.5">
            <Zap className="w-4 h-4 text-accent group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-150 ease-out" />
            <span className="text-white font-bold text-sm group-hover:text-yellow-200 transition-all duration-150 ease-out">{request.karmaOffered}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-150">
            <Clock className="w-4 h-4 group-hover:text-red-300 transition-all duration-150" />
            <span>{request.estimatedTime}</span>
          </div>
        </div>

        <button
          onClick={() => onProposeHelp(request.id)}
          className="relative w-full bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white py-3 rounded-lg font-medium transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-red-500/40 overflow-hidden flex items-center"
        >
          {/* Enhanced button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full hover:translate-x-full transition-transform duration-600 ease-out"></div>
          
          {/* Button backlight */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/60 to-red-400/60 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-150 blur-sm -z-10"></div>
          
          <div className="flex items-center space-x-2 relative z-10 w-full justify-center" style={{ marginLeft: '-8px' }}>
            <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-150" />
            <span>Propose Help</span>
          </div>
          
          {/* Enhanced floating particles effect */}
          <div className="absolute top-1 right-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-150"></div>
          <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-red-200/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-200 delay-100"></div>
        </button>
      </div>
      </div>
    </div>
  );
};
import React from 'react';
import { X, Zap, Sparkles, Star } from 'lucide-react';
import { FilterState } from '../types';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const skillOptions = [
  'React', 'JavaScript', 'Python', 'Math', 'Statistics', 'Chemistry',
  'Spanish', 'Computer Science', 'Writing', 'Tutoring', 'Interview Prep'
];

const urgencyOptions = [
  { value: 'low', label: 'Low', color: 'bg-green-500' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
  { value: 'high', label: 'High', color: 'bg-orange-500' },
  { value: 'urgent', label: 'Urgent', color: 'bg-red-500' }
];

export const FilterPanel: React.FC<FilterPanelProps> = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFiltersChange 
}) => {
  if (!isOpen) return null;

  const handleSkillToggle = (skill: string) => {
    const newSkills = filters.skills.includes(skill)
      ? filters.skills.filter(s => s !== skill)
      : [...filters.skills, skill];
    onFiltersChange({ ...filters, skills: newSkills });
  };

  const handleUrgencyToggle = (urgency: string) => {
    const newUrgency = filters.urgency.includes(urgency)
      ? filters.urgency.filter(u => u !== urgency)
      : [...filters.urgency, urgency];
    onFiltersChange({ ...filters, urgency: newUrgency });
  };

  const clearFilters = () => {
    onFiltersChange({
      skills: [],
      urgency: [],
      minKarma: 0,
      maxKarma: 100
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-gray-900 via-gray-900 to-black border-l border-gray-700 overflow-y-auto shadow-2xl relative">
        {/* Ambient filter panel glow */}
        <div className="absolute inset-0 bg-gradient-to-bl from-red-500/4 via-transparent to-red-600/6 opacity-80"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-red-400/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-red-500/8 to-transparent"></div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-6 group">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300 cursor-default">
              Filters
            </h2>
            <button
              onClick={onClose}
              className="relative text-gray-400 hover:text-red-400 hover:scale-110 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10"></div>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6 relative z-10">
            {/* Skills Filter */}
            <div>
              <h3 className="text-lg font-medium text-white mb-3 flex items-center space-x-2 group cursor-default">
                <span>Skills</span>
                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-red-800 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3 h-3 text-red-400 animate-pulse" />
                </div>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map(skill => (
                  <button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 group overflow-hidden ${
                      filters.skills.includes(skill)
                        ? 'bg-gradient-to-r from-red-700 to-red-500 text-white shadow-lg shadow-red-600/40'
                        : 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white hover:shadow-md'
                    }`}
                  >
                    {/* Skill button backlight */}
                    {!filters.skills.includes(skill) && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm -z-10"></div>
                    )}
                    
                    {/* Enhanced active glow */}
                    {filters.skills.includes(skill) && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/60 to-red-400/60 rounded-lg opacity-60 blur-sm -z-10"></div>
                    )}
                    
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency Filter */}
            <div>
              <h3 className="text-lg font-medium text-white mb-3 flex items-center space-x-2 group cursor-default">
                <span>Urgency</span>
                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-red-800 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-3 h-3 text-red-400 animate-pulse" />
                </div>
              </h3>
              <div className="space-y-2">
                {urgencyOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleUrgencyToggle(option.value)}
                    className={`relative w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden ${
                      filters.urgency.includes(option.value)
                        ? 'bg-gradient-to-r from-red-700/20 to-red-500/20 border border-red-600/50 shadow-lg shadow-red-600/20'
                        : 'bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 border border-gray-700 hover:border-gray-600 hover:shadow-md'
                    }`}
                  >
                    {/* Urgency button backlight */}
                    {!filters.urgency.includes(option.value) && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/25 to-red-400/25 rounded-lg opacity-0 group-hover:opacity-35 transition-opacity duration-300 blur-sm -z-10"></div>
                    )}
                    
                    {/* Enhanced active glow */}
                    {filters.urgency.includes(option.value) && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/50 to-red-400/50 rounded-lg opacity-50 blur-sm -z-10"></div>
                    )}
                    
                    <div className={`w-3 h-3 rounded-full ${option.color} shadow-lg animate-pulse-slow`} />
                    <span className="text-white font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Karma Range */}
            <div>
              <h3 className="text-lg font-medium text-white mb-3 flex items-center space-x-2 group cursor-default">
                <span>Karma Range</span>
                <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-red-800 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="w-3 h-3 text-red-400 animate-pulse" />
                </div>
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Min Karma: {filters.minKarma}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.minKarma}
                    onChange={(e) => onFiltersChange({ 
                      ...filters, 
                      minKarma: parseInt(e.target.value) 
                    })}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Max Karma: {filters.maxKarma}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.maxKarma}
                    onChange={(e) => onFiltersChange({ 
                      ...filters, 
                      maxKarma: parseInt(e.target.value) 
                    })}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <button
                onClick={clearFilters}
                className="relative flex-1 py-3 px-4 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md group overflow-hidden"
              >
                {/* Clear button backlight */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/30 to-gray-400/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm -z-10"></div>
                
                Clear All
              </button>
              <button
                onClick={onClose}
                className="relative flex-1 py-3 px-4 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-red-700/40 group overflow-hidden"
              >
                {/* Apply button backlight */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/60 to-red-400/60 rounded-lg opacity-60 blur-sm -z-10"></div>
                
                {/* Floating sparkle */}
                <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3 h-3 text-red-200 animate-pulse" />
                </div>
                
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
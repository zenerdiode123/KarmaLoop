import React, { useState } from 'react';
import { X, Zap, Clock, BookOpen, GraduationCap, AlertTriangle, Sparkles, Star } from 'lucide-react';

interface CreateRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (requestData: any) => void;
}

const skillOptions = [
  'React', 'JavaScript', 'Python', 'Math', 'Statistics', 'Chemistry',
  'Spanish', 'Computer Science', 'Writing', 'Tutoring', 'Interview Prep',
  'Physics', 'Biology', 'History', 'Economics', 'Design', 'Data Science'
];

const urgencyOptions = [
  { value: 'low', label: 'Low Priority', color: 'bg-green-500', description: 'Can wait a few days' },
  { value: 'medium', label: 'Medium Priority', color: 'bg-yellow-500', description: 'Need help this week' },
  { value: 'high', label: 'High Priority', color: 'bg-orange-500', description: 'Need help today' },
  { value: 'urgent', label: 'Urgent', color: 'bg-red-500', description: 'Need help ASAP!' }
];

const branchOptions = [
  'Computer Science', 'Engineering', 'Mathematics', 'Physics', 'Chemistry',
  'Biology', 'Business', 'Economics', 'Psychology', 'Literature', 'History',
  'Art & Design', 'Medicine', 'Law', 'Other'
];

const yearOptions = [
  'First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Graduate', 'PhD'
];

export const CreateRequestModal: React.FC<CreateRequestModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: [] as string[],
    urgency: 'medium',
    karmaOffered: 25,
    branch: '',
    year: '',
    timeRequired: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (formData.skills.length === 0) newErrors.skills = 'Select at least one skill';
    if (!formData.branch) newErrors.branch = 'Branch is required';
    if (!formData.year) newErrors.year = 'Year is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      onClose();
      // Reset form
      setFormData({
        title: '',
        description: '',
        skills: [],
        urgency: 'medium',
        karmaOffered: 25,
        branch: '',
        year: '',
        timeRequired: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-2xl transform transition-all duration-300 scale-100 animate-in slide-in-from-bottom-4 overflow-hidden">
        {/* Ambient modal glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/8 opacity-80"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-gradient-to-br from-red-400/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-red-500/8 to-transparent"></div>
        
        {/* Enhanced modal backlight */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-600/30 via-red-500/20 to-red-600/30 opacity-60 transition-opacity duration-300 -z-20 blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col h-full max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700 flex-shrink-0 relative group">
            {/* Header background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-600/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300">
                Create Help Request
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="relative p-2 text-gray-400 hover:text-red-400 hover:scale-110 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10"></div>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Content - Scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300">
                  Request Title *
                </label>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 group-focus-within:opacity-60 transition-opacity duration-300 blur-sm -z-10"></div>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Need help with React hooks debugging"
                    className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 hover:border-red-700/50"
                  />
                </div>
                {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Description Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300">
                  Description *
                </label>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 group-focus-within:opacity-60 transition-opacity duration-300 blur-sm -z-10"></div>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe what you need help with in detail..."
                    rows={4}
                    className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 hover:border-red-700/50 resize-none"
                  />
                </div>
                {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* Skills Selection */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-red-300 transition-colors duration-300 flex items-center space-x-2">
                  <span>Skills/Categories *</span>
                  <Sparkles className="w-3 h-3 text-red-400 animate-pulse" />
                </label>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map(skill => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 group overflow-hidden ${
                        formData.skills.includes(skill)
                          ? 'bg-gradient-to-r from-red-700 to-red-500 text-white shadow-lg shadow-red-600/40'
                          : 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:text-white hover:shadow-md'
                      }`}
                    >
                      {!formData.skills.includes(skill) && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm -z-10"></div>
                      )}
                      {formData.skills.includes(skill) && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/60 to-red-400/60 rounded-lg opacity-60 blur-sm -z-10"></div>
                      )}
                      {skill}
                    </button>
                  ))}
                </div>
                {errors.skills && <p className="text-red-400 text-sm mt-1">{errors.skills}</p>}
              </div>

              {/* Urgency Selection */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-red-300 transition-colors duration-300 flex items-center space-x-2">
                  <span>Urgency Level</span>
                  <AlertTriangle className="w-3 h-3 text-red-400 animate-pulse" />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {urgencyOptions.map(option => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, urgency: option.value }))}
                      className={`relative flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 transform hover:scale-[1.02] group overflow-hidden ${
                        formData.urgency === option.value
                          ? 'bg-gradient-to-r from-red-700/20 to-red-500/20 border border-red-600/50 shadow-lg shadow-red-600/20'
                          : 'bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 border border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      {formData.urgency !== option.value && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/25 to-red-400/25 rounded-lg opacity-0 group-hover:opacity-35 transition-opacity duration-300 blur-sm -z-10"></div>
                      )}
                      {formData.urgency === option.value && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/50 to-red-400/50 rounded-lg opacity-50 blur-sm -z-10"></div>
                      )}
                      <div className={`w-3 h-3 rounded-full ${option.color} shadow-lg animate-pulse-slow`} />
                      <div>
                        <div className="text-white font-medium">{option.label}</div>
                        <div className="text-gray-400 text-xs">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Karma Offered */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-red-300 transition-colors duration-300 flex items-center space-x-2">
                  <span>Karma Offered: {formData.karmaOffered}</span>
                  <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={formData.karmaOffered}
                    onChange={(e) => setFormData(prev => ({ ...prev, karmaOffered: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

              {/* Branch and Year */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300 flex items-center space-x-2">
                    <span>Branch *</span>
                    <GraduationCap className="w-3 h-3 text-red-400" />
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 group-focus-within:opacity-60 transition-opacity duration-300 blur-sm -z-10"></div>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData(prev => ({ ...prev, branch: e.target.value }))}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 hover:border-red-700/50"
                    >
                      <option value="">Select Branch</option>
                      {branchOptions.map(branch => (
                        <option key={branch} value={branch}>{branch}</option>
                      ))}
                    </select>
                  </div>
                  {errors.branch && <p className="text-red-400 text-sm mt-1">{errors.branch}</p>}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300 flex items-center space-x-2">
                    <span>Year *</span>
                    <Star className="w-3 h-3 text-red-400" />
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 group-focus-within:opacity-60 transition-opacity duration-300 blur-sm -z-10"></div>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 hover:border-red-700/50"
                    >
                      <option value="">Select Year</option>
                      {yearOptions.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  {errors.year && <p className="text-red-400 text-sm mt-1">{errors.year}</p>}
                </div>
              </div>

              {/* Time Required (Optional) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300 flex items-center space-x-2">
                  <span>Estimated Time Required (Optional)</span>
                  <Clock className="w-3 h-3 text-red-400" />
                </label>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 group-focus-within:opacity-60 transition-opacity duration-300 blur-sm -z-10"></div>
                  <input
                    type="text"
                    value={formData.timeRequired}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeRequired: e.target.value }))}
                    placeholder="e.g., 30-45 minutes, 1-2 hours"
                    className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 hover:border-red-700/50"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Footer Actions */}
          <div className="flex-shrink-0 p-6 border-t border-gray-700 bg-gray-900/50">
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="relative flex-1 py-3 px-4 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md group overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/30 to-gray-400/30 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm -z-10"></div>
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="relative flex-1 py-3 px-4 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-red-700/40 group overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/60 to-red-400/60 rounded-lg opacity-60 blur-sm -z-10"></div>
                <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3 h-3 text-red-200 animate-pulse" />
                </div>
                Post Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { FilterPanel } from './components/FilterPanel';
import { RequestList } from './components/RequestList';
import { CreateRequestModal } from './components/CreateRequestModal';
import { mockRequests } from './data/mockRequests';
import { FilterState } from './types';
import { Search, Filter, Menu, User, Sparkles } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    skills: [],
    urgency: [],
    minKarma: 0,
    maxKarma: 100
  });

  const filteredRequests = useMemo(() => {
    return mockRequests.filter(request => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = request.title.toLowerCase().includes(query);
        const matchesDescription = request.description.toLowerCase().includes(query);
        const matchesSkills = request.skills.some(skill => 
          skill.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesDescription && !matchesSkills) {
          return false;
        }
      }

      // Skills filter
      if (filters.skills.length > 0) {
        const hasMatchingSkill = request.skills.some(skill => 
          filters.skills.includes(skill)
        );
        if (!hasMatchingSkill) return false;
      }

      // Urgency filter
      if (filters.urgency.length > 0) {
        if (!filters.urgency.includes(request.urgency)) return false;
      }

      // Karma range filter
      if (request.karmaOffered < filters.minKarma || request.karmaOffered > filters.maxKarma) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const handleProposeHelp = (requestId: string) => {
    console.log('Proposing help for request:', requestId);
    // In a real app, this would navigate to a proposal screen or open a modal
    alert('Feature coming soon! You would be able to propose help for this request.');
  };

  const handleCreateRequest = (requestData: any) => {
    console.log('Creating new request:', requestData);
    // In a real app, this would send the data to your backend
    // For now, we'll just log it and show a success message
    alert('Request created successfully! It would appear at the top of the feed.');
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#0A0A0A' }}>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeItem={activeMenuItem}
        onItemClick={setActiveMenuItem}
      />

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <CreateRequestModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateRequest}
      />

      <main className="flex-1 lg:ml-0 h-screen flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-700 bg-gray-900 flex-shrink-0 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="relative p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg group"
          >
            <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white hover:bg-gradient-to-r hover:from-red-300 hover:to-red-200 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
            Help Requests
          </h1>
          <button
            onClick={() => setActiveMenuItem('profile')}
            className="relative p-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg group"
          >
            <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
            <User className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-6 relative">
          {/* Header Section */}
          <div className="mb-6 flex-shrink-0 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold text-white hidden lg:block hover:bg-gradient-to-r hover:from-red-300 hover:to-red-200 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default hover:drop-shadow-lg">
                Help Requests
              </h2>
              <div className="flex items-center space-x-4">
                {/* Desktop Profile Button - moved inline with header */}
                <div className="hidden lg:flex items-center space-x-3">
                  <button
                    onClick={() => setActiveMenuItem('profile')}
                    className="relative flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition-all duration-300 group overflow-hidden transform hover:scale-105 hover:-translate-y-0.5"
                  >
                    {/* Button backlight */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/40 to-red-400/40 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm -z-10"></div>
                    
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium group-hover:text-red-100 transition-colors duration-300">Alex Chen</span>
                    
                    {/* Floating sparkle */}
                    <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-3 h-3 text-red-300 animate-pulse" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-gray-500 mb-4 hover:text-gray-300 transition-colors duration-300 cursor-default">
              Help fellow students and earn karma points. All requests are anonymous until you connect.
            </p>

            <div className="flex items-center space-x-3">
              <div className="flex-1 relative group">
                {/* Search input backlight */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-red-400/30 rounded-lg opacity-0 group-hover:opacity-40 group-focus-within:opacity-60 transition-opacity duration-300 blur-sm -z-10"></div>
                
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 group-hover:text-red-500 group-focus-within:text-red-600 transition-all duration-300 group-hover:scale-110" />
                <input
                  type="text"
                  placeholder="Search help requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white placeholder-gray-500 pl-11 pr-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:shadow-lg focus:shadow-red-600/10 transition-all duration-300 hover:shadow-md hover:border-red-700/50 hover:bg-gradient-to-r hover:from-gray-750 hover:to-gray-650 hover:placeholder-gray-400"
                />
                
                {/* Search input glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-600/8 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
              
              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="relative bg-gradient-to-r from-gray-800 to-gray-700 hover:from-red-700 hover:to-red-600 text-white p-3 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 flex-shrink-0 transform hover:scale-110 hover:shadow-lg hover:shadow-red-700/40 group overflow-hidden hover:-translate-y-0.5"
              >
                {/* Filter button backlight */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/50 to-red-400/50 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-sm -z-10"></div>
                
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-transparent to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                <Filter className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                
                {/* Floating sparkle */}
                <div className="absolute top-0.5 right-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full animate-ping"></div>
                </div>
              </button>
              
              {/* Add Request Button */}
              <button
                onClick={() => {
                  setIsCreateModalOpen(true);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-red-600/30 transform hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
                style={{ backgroundColor: '#E63946' }}
              >
                <span className="text-lg font-bold">+</span>
                <span>Add Request</span>
              </button>
            </div>
          </div>

          {/* Help Requests Content */}
          <div className="relative z-10">
            <RequestList
              requests={filteredRequests}
              onProposeHelp={handleProposeHelp}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
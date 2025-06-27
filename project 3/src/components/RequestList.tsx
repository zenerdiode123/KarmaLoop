import React from 'react';
import { RequestCard } from './RequestCard';
import { HelpRequest } from '../types';
import { Search, Sparkles } from 'lucide-react';

interface RequestListProps {
  requests: HelpRequest[];
  onProposeHelp: (id: string) => void;
}

export const RequestList: React.FC<RequestListProps> = ({ requests, onProposeHelp }) => {
  if (requests.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-16 text-center relative group">
        {/* Empty state backlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-600/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        
        <div className="relative">
          <Search className="w-16 h-16 text-gray-600 mb-4 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-300" />
          
          {/* Floating sparkles around search icon */}
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-400 mb-2 group-hover:text-gray-200 group-hover:bg-gradient-to-r group-hover:from-red-300 group-hover:to-red-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          No requests found
        </h3>
        <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
          Try adjusting your filters or search query
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 relative">
      {/* Subtle grid background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/2 via-transparent to-red-600/3 opacity-60 pointer-events-none"></div>
      
      {requests.map(request => (
        <RequestCard
          key={request.id}
          request={request}
          onProposeHelp={onProposeHelp}
        />
      ))}
    </div>
  );
};
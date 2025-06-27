export interface HelpRequest {
  id: string;
  title: string;
  description: string;
  skills: string[];
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  karmaOffered: number;
  timePosted: string;
  estimatedTime: string;
  location?: string;
  requesterGender: 'male' | 'female' | 'other';
}

export interface FilterState {
  skills: string[];
  urgency: string[];
  minKarma: number;
  maxKarma: number;
}
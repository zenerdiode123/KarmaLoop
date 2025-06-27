import { HelpRequest } from '../types';

export const mockRequests: HelpRequest[] = [
  {
    id: '1',
    title: 'Need help with React hooks debugging',
    description: 'Having trouble with useEffect dependencies causing infinite re-renders. Looking for someone experienced with React.',
    skills: ['React', 'JavaScript', 'Frontend'],
    urgency: 'high',
    karmaOffered: 25,
    timePosted: '2 hours ago',
    estimatedTime: '30-45 min',
    location: 'Remote',
    requesterGender: 'male'
  },
  {
    id: '2',
    title: 'Linear algebra tutoring session',
    description: 'Struggling with matrix operations and eigenvalues. Need someone to walk me through the concepts.',
    skills: ['Math', 'Linear Algebra', 'Tutoring'],
    urgency: 'medium',
    karmaOffered: 40,
    timePosted: '4 hours ago',
    estimatedTime: '1-2 hours',
    location: 'Library',
    requesterGender: 'female'
  },
  {
    id: '3',
    title: 'Python web scraping project help',
    description: 'Need assistance with BeautifulSoup and handling dynamic content. Have most of the code done.',
    skills: ['Python', 'Web Scraping', 'BeautifulSoup'],
    urgency: 'urgent',
    karmaOffered: 60,
    timePosted: '30 minutes ago',
    estimatedTime: '1 hour',
    location: 'Remote',
    requesterGender: 'other'
  },
  {
    id: '4',
    title: 'Spanish conversation practice',
    description: 'Looking for a native or fluent Spanish speaker to practice conversation for my upcoming oral exam.',
    skills: ['Spanish', 'Language', 'Conversation'],
    urgency: 'high',
    karmaOffered: 30,
    timePosted: '1 hour ago',
    estimatedTime: '45 min',
    location: 'Campus',
    requesterGender: 'female'
  },
  {
    id: '5',
    title: 'Data structures assignment review',
    description: 'Need someone to review my binary tree implementation and help optimize the algorithms.',
    skills: ['Computer Science', 'Data Structures', 'Algorithms'],
    urgency: 'medium',
    karmaOffered: 35,
    timePosted: '6 hours ago',
    estimatedTime: '1 hour',
    location: 'Remote',
    requesterGender: 'male'
  },
  {
    id: '6',
    title: 'Chemistry lab report proofreading',
    description: 'Looking for someone to proofread my organic chemistry lab report before submission.',
    skills: ['Chemistry', 'Writing', 'Proofreading'],
    urgency: 'low',
    karmaOffered: 15,
    timePosted: '8 hours ago',
    estimatedTime: '20-30 min',
    location: 'Remote',
    requesterGender: 'other'
  },
  {
    id: '7',
    title: 'Mock interview for software engineering role',
    description: 'Need someone to conduct a technical interview practice session with coding questions.',
    skills: ['Software Engineering', 'Interview Prep', 'Coding'],
    urgency: 'high',
    karmaOffered: 50,
    timePosted: '3 hours ago',
    estimatedTime: '1-1.5 hours',
    location: 'Remote',
    requesterGender: 'male'
  },
  {
    id: '8',
    title: 'Statistics homework explanation',
    description: 'Confused about hypothesis testing and p-values. Need clear explanation with examples.',
    skills: ['Statistics', 'Math', 'Homework Help'],
    urgency: 'medium',
    karmaOffered: 20,
    timePosted: '5 hours ago',
    estimatedTime: '30-45 min',
    location: 'Study Room',
    requesterGender: 'female'
  }
];
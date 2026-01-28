import devhubImg from '../assets/devTinderLogo.jpg';
import smartstreamImg from '../assets/SmartSTreamLogo.jpg';

export const projectsData = [
  {
    name: 'DevHub - Developer Social Platform',
    description:
      'A social platform where developers can connect, collaborate, and share resources. Features include secure user authentication, efficient state management, and optimized data loading for user feeds.',
    tags: [
      { name: 'Frontend', color: 'text-blue-500' },
      { name: 'Backend', color: 'text-green-500' },
      { name: 'Authentication', color: 'text-purple-500' },
      { name: 'State Management', color: 'text-teal-400' },
    ],
    image: devhubImg,
  },
  {
    name: 'SmartStream - Movie Streaming Application',
    description:
      'A movie streaming platform with real-time data retrieval, multilingual support, and personalized recommendations. Implements secure login and registration along with efficient frontend state management.',
    tags: [
      { name: 'Frontend', color: 'text-blue-500' },
      { name: 'Backend', color: 'text-green-500' },
      { name: 'Authentication', color: 'text-purple-500' },
      { name: 'API Integration', color: 'text-red-500' },
      { name: 'State Management', color: 'text-teal-400' },
    ],
    image: smartstreamImg,
    
  },
];

import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/pro1.jpg';
import Work2 from './assets/pro2.png';
import Work3 from './assets/pro3.jpg';
import Work4 from './assets/pro4.png';
import Work5 from './assets/pro5.jpg';
import Work6 from './assets/pro6.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Riddhi',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Sonawane',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },


  {
    id: 6,
    title: 'Location : ',
    description: 'Pune',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: <a href= 'tel:+918080247967'>+91 8080247967</a>,
  },

  {
    id: 8,
    title: 'Email : ',
    description:<a href='mailto:riddhiss19@gmail.com'>riddhiss19@gmail.com</a>,
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English, Marathi',
  },
];

export const stats = [
  
  {
    id: 2,
    no: '10+',
    title: 'Worked on 10+ Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Participated in 5+ Hackathons',
  },
  {
    id: 1,
    no: '10+',
    title: 'Aesthetics Secretery at Computer Society of India, VIT Pune',
  },

  {
    id: 4,
    no: '53+',
    title: ' Volunteerd At Social Wellfare & Devp Committee, VIT Pune',
  },
  
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'June 2023-July 2023',
    title: 'Front End Developer Intern <span> Edunet </span>',
    desc: 'Completed 6 weeks internship on Front End Development in association with Edunet Foundation and IBM Skillsbuild',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'Training & Internship on AI-DS<span> Sandip Foundation </span>',
    desc: 'Gained hands-on experience in AI and Data Science using Python programming to solve real-world challenges.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-Current',
    title: 'Bachelor of Technology <span> Vishwakarma Institute of Technology Pune </span>',
    desc: 'Currently pursuing BTech in Computer Engineering <span style="display:flex">Current CGPA: 8.76 % </span>',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2022',
    title: 'Diploma <span> Government Polytechnic, Nashik</span>',
    desc: 'Completed post SSC diploma in Computer Technology <span style="display:flex"> 95.25 % </span>',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'SSC<span> R.J.C.B Girls High School </span>',
    desc: 'Secured 4th Rank in Institution <span style="display:flex"> 94.20 % </span>',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '70',
  },

  {
    id: 2,
    title: 'JavaScript',
    percentage: '60',
  },

  {
    id: 3,
    title: 'Java',
    percentage: '85',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '75',
  },

  {
    id: 5,
    title: 'C++',
    percentage: '70',
  },

  {
    id: 6,
    title: 'CSS',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Figma',
    percentage: '80',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Bitlearn',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Bitlearn',
      },
      
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'PHP, HTML, CSS, Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Git : ',
        desc:  <a href='https://github.com/riddhiss19/BitLearn' target='__blank'>View Project</a>,
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'DS Library in C',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'DS Library in C',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://github.com/riddhiss19/DS-C-Library' target='__blank'>View Project</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'SpendWise',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'SpendWise',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: <a href='https://github.com/riddhiss19/SpendWise' target='__blank'>View Project</a>,
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Customer Churn Analysis',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Customer Churn Analysis',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'R',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc:  <a href='https://github.com/riddhiss19/customer-churn-analysis' target='__blank'>View Project</a>,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Youthera',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Youthera',
      },
      
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'HTML, CSS, PHP, JS',
      },
      
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'ChatGPT clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'ChatGPT clone',
      },
    
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'Flask, MongoDB, Tailwind CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc:  <a href='https://github.com/riddhiss19/ChatGPT_clone' target='__blank'>View Project</a>,
      },
    ],
  },
];


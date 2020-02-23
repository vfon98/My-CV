import * as types from '../constants/action.types';
// import MemoryGameImage from '../assets/images/memory-game-screenshot.png';
import MemoryGameGif from '../assets/images/memory-game-screenshot.gif';
import EducationImage from '../assets/images/education-manager-screenshot.png';

const initialState = {
  self_projects: [
    {
      id: 0,
      image: MemoryGameGif,
      name: 'Memory Game',
      description: "Simple game to test user's ability to memorize",
      techniques: 'ReactJs',
      repo: 'https://github.com/vfon98/MemoryCardGame-ReactJs',
      demo: 'https://vphong.me/MemoryCardGame-ReactJs',
    },
    {
      id: 1,
      image: null,
      name: 'Todos App',
      description: 'An app to store and manage things that need to to',
      techniques: 'ReactJs, Redux, RestfulAPI, MongoDB, etc',
      repo: 'https://github.com/vfon98/MemoryCardGame-ReactJs',
      demo: 'https://vphong.me/MemoryCardGame-ReactJs',
    },
    {
      id: 2,
      image: null,
      name: 'Shopping App',
      description:
        'An E-commerce website with payment, smart cart and pagination',
      techniques:
        'ReactJs / NextJs, Redux, RestfulAPI, Firebase, Stripe, Bootstrap, etc',
      repo: 'https://github.com/vfon98/MemoryCardGame-ReactJs',
      demo: 'https://vphong.me/MemoryCardGame-ReactJs',
    },
  ],
  academic_projects: [
    {
      id: 0,
      image: EducationImage,
      name: 'Education Management System',
      description: 'An online management system for education center',
      techniques: ' PHP, MySQL, HTML, CSS, Bootstrap 4, JQuery, etc',
      team_size: 4,
      repo: 'https://github.com/vfon98/MemoryCardGame-ReactJs',
      demo: 'https://vphong.me/MemoryCardGame-ReactJs',
    },
    {
      id: 1,
      image: null,
      name: 'Fastfood Store Manager',
      description: 'Revenues management system for small fastfood store',
      techniques: 'PHP, MySQL, HTML, CSS, Bootstrap 3, etc',
      team_size: 2,
      repo: 'https://github.com/vfon98/MemoryCardGame-ReactJs',
      demo: 'https://vphong.me/MemoryCardGame-ReactJs',
    },
  ],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECTS:
      return state;
    default:
      return state;
  }
};

export default projectsReducer;

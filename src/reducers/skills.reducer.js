import * as types from '../constants/action.types';

const initialState = {
  main: [
    {
      id: 0,
      header: 'HTML / CSS',
      percent: 75,
      color: 'brown',
    },
    {
      id: 1,
      header: 'Javascript',
      percent: 80,
      color: 'red',
    },
    {
      id: 2,
      header: 'ReactJs',
      percent: 80,
      color: 'purple',
    },
    {
      id: 3,
      header: 'ES2015 (ES6)',
      percent: 75,
      color: 'blue',
    },
    {
      id: 4,
      header: 'Bootstrap 3, 4',
      percent: 75,
      color: 'green',
    },
    {
      id: 5,
      header: 'Version Control (Git)',
      percent: 65,
      color: 'yellow',
    },
  ],
  others: [
    {
      id: 0,
      header: 'NodeJs',
      percent: 60,
      color: 'brown',
    },
    {
      id: 1,
      header: 'PHP / Laravel',
      percent: 50,
      color: 'red',
    },
    {
      id: 2,
      header: 'VueJs',
      percent: 45,
      color: 'purple',
    },
    {
      id: 3,
      header: 'MongoDB',
      percent: 65,
      color: 'blue',
    },
    {
      id: 4,
      header: 'Object Oriented Programming',
      percent: 60,
      color: 'green',
    },
    {
      id: 5,
      header: 'Linux',
      percent: 55,
      color: 'yellow',
    },
  ],
  additional: {
    database: {
      header: 'DATABASE',
      items: ['MongoDB', 'MySQL', 'Microsoft SQL Server'],
    },
    editors: {
      header: 'IDE / EDITOR',
      items: [
        'Visual Studio Code',
        'Sublime Text 3',
        'Netbeans / Eclipse',
        'Vim and Vim-like editors',
      ],
    },
    tools: {
      header: 'TOOLS',
      items: [
        'Github / Bitbucket',
        'Npm / Yarn',
        'Webpack / Grunt (Basic)',
        'ESLint / Prettier',
      ],
    },
  },
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SKILLS:
      return state;
    default:
      return state;
  }
};

export default skillsReducer;

import * as types from '../constants/action.types';

const initialState = {
  self_projects: [
    {
      id: 0,
      image: null,
      name: 'Memory Game',
      description: "Simple game to test user's ability to memorize",
      techniques: 'ReactJs',
      repo: 'github.com/vfon98/MemoryCardGame-ReactJs',
      demo: 'vphong.me/MemoryCardGame-ReactJs',
    },
    {
      id: 1,
      image: null,
      name: 'Todos App',
      description: "An app to store and manage things that need to to",
      techniques: 'ReactJs, Redux, RestfulAPI, MongoDB',
      repo: 'github.com/vfon98/MemoryCardGame-ReactJs',
      demo: 'vphong.me/MemoryCardGame-ReactJs',
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

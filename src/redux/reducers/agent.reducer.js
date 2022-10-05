import { ADD_NEW_COMMENT, FETCH_AGENTS_DATA } from '../action.types';

const initData = {
  agents: []
};

const agentReducer = (state = initData, action) => {
  switch (action.type) {
    case FETCH_AGENTS_DATA:
      return {
        ...state,
        agents: action.payload
      };

    case ADD_NEW_COMMENT:
      return {
        ...state,
        agents: state.agents.map((agent) => agent.id === action.payload.id ? {
          ...agent,
          comments: [...agent.comments, action.payload.comment],
        } : agent)
      };
    default:
      return state;
  }
}

export default agentReducer;

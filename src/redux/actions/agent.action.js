import { ADD_NEW_COMMENT, FETCH_AGENTS_DATA } from '../action.types';
import { agents } from '../../constants';

export const fetchAgents = () => (dispatch) => {
  dispatch({
    type: FETCH_AGENTS_DATA,
    payload: agents,
  });
};

export const addNewComment = (id, comment) => (dispatch) => {
  dispatch({
    type: ADD_NEW_COMMENT,
    payload: { id, comment },
  });
};

import { GET_DEVELOPERS } from './../actions/index';

export default function getDevelopers(state=[], action){
  switch(action.type){
    case GET_DEVELOPERS:
    return action.payload;
    default:
    return state;
  }
}

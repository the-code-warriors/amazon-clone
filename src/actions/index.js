
import axios from 'axios';

export const GET_DEVELOPERS = 'GET_DEVELOPERS';

export function getDevelopers(){
  return {
    type: GET_DEVELOPERS,
    payload: axios.get('/developers')
  }
}

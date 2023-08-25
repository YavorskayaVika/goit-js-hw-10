import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_mU3SNdxCHQzy1Vuwa2KAVzcMfJZ5JvURdt1ylUd57xO3bcWYtOlsSWtEv367nzD5';

 const MAIN_URL =  'https://api.thecatapi.com/v1/';

 function fetchBreeds() {
    const url = `${MAIN_URL}/breeds`;
    return axios
    .get ( url,{ 
     headers: {
        'x-api-key':
        'live_mU3SNdxCHQzy1Vuwa2KAVzcMfJZ5JvURdt1ylUd57xO3bcWYtOlsSWtEv367nzD5'
     }

    })

    .then(res => {
    return res.data
    })
    .catch(error => {
     throw new Error('Error:',error.message)   
    })
 }


 function fetchCatByBreed(breedId){
    const url = `${BASE_URL}/images/${breadId}`;
    return axios 
    .get( url,{
    headers: {
    'x-api-key':
    'live_mU3SNdxCHQzy1Vuwa2KAVzcMfJZ5JvURdt1ylUd57xO3bcWYtOlsSWtEv367nzD5'
    }
    })
    .then(res => {
        return res.data;
      })
      .catch(error => {
        throw new Error('Error:', error.message);
      });
 }

 export { fetchBreeds, fetchCatByBreed };
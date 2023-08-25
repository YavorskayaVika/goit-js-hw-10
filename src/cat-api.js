import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_o4zqJWTSNZGzKhGcNui0WmpTH62VSyGlqXsLC2K7ittSvtnBEGNAn2ZcbH1d0Nge';

 const MAIN_URL =   'https://api.thecatapi.com/v1';

 function fetchBreeds() {
    const url = `${MAIN_URL}/breeds`;
    return axios
    .get ( url,{ 
     headers: {
        'x-api-key':
        'live_o4zqJWTSNZGzKhGcNui0WmpTH62VSyGlqXsLC2K7ittSvtnBEGNAn2ZcbH1d0Nge'
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
    const url = `${MAIN_URL}/images/${breedId}`;
    return axios 
    .get( url,{
    headers: {
    'x-api-key':
    'live_o4zqJWTSNZGzKhGcNui0WmpTH62VSyGlqXsLC2K7ittSvtnBEGNAn2ZcbH1d0Nge'
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
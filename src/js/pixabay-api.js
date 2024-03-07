
'use strict';

import axios from 'axios';

export async function searchImages(query, page) {

    const API_KEY = '42540057-2630f4048f1d19f54e4f29ae2';
    
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;

 
        const response = await axios.get(url);


       
        return response.data;
    }
   

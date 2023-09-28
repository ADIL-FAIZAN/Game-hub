import axios from 'axios';

export default axios.create({

baseURL:"https://api.rawg.io/api",

params:{
    
    key:'9376a5cfcacc4415b6a500a3da70ae3d',
}



})
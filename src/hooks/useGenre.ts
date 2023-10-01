import {useState,useEffect} from 'react';
import ApiClient from '../Services/Api-Client';

    
    interface FetchGenresResponse{
    count:number;
    results:Genres[]
    }

   export interface Genres{
        id:number;
        name:string;
        image_background:string;
    }

const useGenres = () => {


    const [genres,setGenres]=useState<Genres[]>([]);
    const[error,setError]=useState('');
    const [isLoading,setLoading]=useState(false);
    

    useEffect(() => {
        setLoading(true);
        ApiClient.get<FetchGenresResponse>('/genres')
        .then(res=>{
        setGenres(res.data.results)
        setLoading(false);
        })
        .catch((err)=>{
        setError(err.message)
        setLoading(false);
        })
      
        
    },[]);

  return {genres,error,isLoading};
}

export default useGenres;

import {useState,useEffect} from 'react';
import ApiClient from '../Services/Api-Client';


export interface Platform{
id:number;
name:string;

}


export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:platform}[];
    metacritic:number;
   
    }
    
    interface FetchGamesResponse{
    count:number,
    results:Game[]
    }

const useGame = () => {


const [game,setGame]=useState<Game[]>([]);
const[error,setError]=useState('');
const [isLoading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        ApiClient.get<FetchGamesResponse>('/games')
        .then(res=>{
        setGame(res.data.results)
        setLoading(false);
        })
        .catch((err)=>{
            setError(err.message)
        setLoading(false);
        })
      
        
    },[]);

  return {game,error,isLoading}
}

export default useGame;

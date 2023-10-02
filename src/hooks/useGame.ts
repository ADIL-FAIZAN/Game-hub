import {useState,useEffect} from 'react';
import ApiClient from '../Services/Api-Client';
import { AxiosRequestConfig } from 'axios';
import { GameQuery } from '../App';
export interface Platform{
id:number;
name:string;
}
export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
   }
    interface FetchGamesResponse{
    count:number,
    results:Game[]
    }
    
const useGame =(gameQuery:GameQuery,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
const [game,setGame]=useState<Game[]>([]);
const[error,setError]=useState('');
const [isLoading,setLoading]=useState(false);

const dependencyArray = deps ? [...deps, gameQuery] : [gameQuery];

useEffect(() => {
       setLoading(true);
       ApiClient.get<FetchGamesResponse>('/games',
        { params:{
            genres:gameQuery.genre?.id,
            platforms:gameQuery.platform?.id,
            ordering:gameQuery.sortOrder,
            search:gameQuery.SearchText,
            ...requestConfig
            }})
        .then(res=>{
        setGame(res.data.results)
        setLoading(false);
        })
        .catch((err)=>{
        setError(err.message)
        setLoading(false);
        });
     
        },dependencyArray);

    return {game,error,isLoading}
}
export default useGame;

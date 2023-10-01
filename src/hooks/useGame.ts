import {useState,useEffect} from 'react';
import ApiClient from '../Services/Api-Client';
import { AxiosRequestConfig } from 'axios';
import { Genres } from './useGenre';
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
    
const useGame =(SelectedGenre:Genres|null,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
const [game,setGame]=useState<Game[]>([]);
const[error,setError]=useState('');
const [isLoading,setLoading]=useState(false);

const dependencyArray = deps ? [...deps, SelectedGenre?.id]:[SelectedGenre?.id];
useEffect(() => {
       setLoading(true);
       ApiClient.get<FetchGamesResponse>('/games',
        { params:{
            genres:SelectedGenre?.id,
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

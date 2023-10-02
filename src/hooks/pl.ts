import {useState,useEffect} from 'react';
import ApiClient from '../Services/Api-Client';


interface Platform{
    id:number;
    name:string;
    slug:string;
}

const usePlatform = () => {
    
    const [Platform,setPlatform]=useState<Platform[]>([]);
    const[error,setError]=useState('');

    useEffect(() => {
         
             ApiClient.get('/platforms/lists/parents')
            .then(res=>{
            setPlatform(res.data.results)
            
           })
            .catch((err)=>{
            setError(err.message)
           
            });
        },[])

        return {Platform,error}

}

export default usePlatform;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaPhoto from './NasaPhoto';



export default function Main(){
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {console.error(error)})
    }, [])

    return(
        <div className='App'>
            {data && <NasaPhoto photo={data} />}
        </div>
    )
    
}
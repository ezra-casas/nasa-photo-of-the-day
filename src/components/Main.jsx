import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaPhoto from './NasaPhoto';
import styled from "styled-components";

const StyleApp = styled.div`
    display: flex;
    justify-content: center;
`

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
        <StyleApp className='App'>
            {data && <NasaPhoto photo={data} />}
        </StyleApp>
    )
    
}
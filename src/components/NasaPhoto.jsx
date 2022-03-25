import React from "react";
import styled from 'styled-components';

const StylePhotoContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
`

const StyleImage = styled.img`
    border-radius: 15px;
    height: 500px;
`
const NasaPhoto = (props) => {
    return (
        <StylePhotoContainer className="photo-container">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <StyleImage src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </StylePhotoContainer>
    )
}

export default NasaPhoto;
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
const StyleExplanation = styled.p`
    text-align: left;
`
const StyleDate = styled.p`
    font-size: small;
    padding: 0;
    margin: 0;
`
const NasaPhoto = (props) => {
    return (
        <StylePhotoContainer className="photo-container">
            <h3>{props.photo.title}</h3>
            <StyleDate>{props.photo.date}</StyleDate>
            <StyleImage src={props.photo.hdurl} />
            <StyleExplanation>{props.photo.explanation}</StyleExplanation>
        </StylePhotoContainer>
    )
}

export default NasaPhoto;
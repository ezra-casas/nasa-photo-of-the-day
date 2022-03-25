import styled from 'styled-components';

const StyleFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2em;
    background-color: gray;
    align-items: center;
`
export default function Footer(){
    return (
    <StyleFooter>
        <p>Large Footer here</p>
    </StyleFooter>)
}
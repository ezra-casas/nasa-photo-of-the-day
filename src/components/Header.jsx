import styled from 'styled-components';

const StyledPhoto = styled.div`
    background-color: #848484;
    color: white;
    display: flex;
    justify-content: center;
    height: 5rem;
`
export default function Header(){
    return (
        <StyledPhoto>
            <h1>PHOTO OF THE DAY</h1>
        </StyledPhoto>
    )
}
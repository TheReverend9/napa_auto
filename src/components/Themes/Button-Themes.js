import styled from 'styled-components';

const Button = styled.button`
    font-size: 20px;
    color: white;
    background: #0E860C;
    border: 3px solid #73b971;
    border-radius: 10px;
    padding: 3px 5px;
    cursor: pointer;
    transition: .25s;
    max-width: 250px;
    
    &:hover {
        background-color: #93DF91;
        border-color:#0E860C;
        color: rgb(30 30 30);
    }
    `;


export default Button;
import styled from 'styled-components';

const Button = styled.button`
    font-size: 20px;
    font-weight: 500;
    background: #43a742;
    box-shadow: 5px 5px 5px rgb(24 24 24);
    border: 2px solid #97c996;
    border-radius: 10px;
    padding: 3px 5px;
    cursor: pointer;
    transition: .25s;
    max-width: 250px;
    
    &:hover {
        background-color: #97c996;
        border-color:#43a742;
        color: rgb(30 30 30);
        box-shadow: none;
    }
    `;


export default Button;
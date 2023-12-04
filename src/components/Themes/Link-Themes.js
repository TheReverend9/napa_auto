import styled from 'styled-components';

const Link = styled.a`
    color: rgb(30 30 30);
    font-weight: 500;
    list-style-type: none;
    text-decoration: none;
    margin: 0;
    text-align: center;
    padding: 5px 0 5px 0;
    transition: .5s;
    
    &:hover {
        background-color: #93DF91;
        color: rgb(30 30 30);
    }
    `;

export default Link;

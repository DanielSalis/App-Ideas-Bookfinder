import styled from 'styled-components';

export const BookContainer = styled.div`
    width:350px;
    height:300px;
    padding: 5px;
    display: flex;
    flex-direction:row;
    align-items:center;
    background-color: #00cec9;
    color: #fff;
    border-radius: 8px;
    box-shadow: 20px 24px 56px -28px rgba(0,0,0,0.75);
    cursor: pointer;

    margin: 50px 50px;

`;

export const BookInfo = styled.div`
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-content:center;
    justify-content:center;
    margin:0 10px;
`;
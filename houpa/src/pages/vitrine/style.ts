import styled from "styled-components";


const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        color: #000000;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        margin-top: 14px;
        text-transform: uppercase;
    }
    h3{
        color: #3F0B6D;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        margin-top: 16px;
        text-transform: uppercase;
    }
    
`;

const Containerinput = styled.div`
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0 auto;
    width: 415.95px;
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 10%;
        img{
            width: 16px;
        }
    }
    input{
        background-color: none;
        border: none;
        padding: 14px 10px;
        width: 90%;
        &:focus{
            outline: 0;
        }
    }
`;

export{
    Card,
    Containerinput
}
import styled from "styled-components";

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
    Containerinput
}
import styled from "styled-components";

const Containercard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div{
        width: 75%;
        &:first-child{
        width: 50px;
            img{
                margin-left: 10px;
                width: 35.4px;
            }
        }
        &:last-child{
            width: 120px;
            button{
                background-color: transparent; 
                border: none;
                cursor: pointer;
                &:last-child{
                    margin-left: 31px;
                }
            }
        }
    }
`;

export{
    Containercard
}
import styled from "styled-components"

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    background-color: #c7c7c7;
    padding: 10px;
    max-width: 400px;
    box-shadow: 5px 5px 6px 0px #221F1F;
    border-radius: 15px;

    div {
        display: flex;
        justify-content: space-between;
        
        button {
            border: none;
            width: 30px;
            border-radius: 15px;
        }
    }

    button {
        cursor: pointer;
    }

    .modal {
        border: none;
        height: 50px;
        margin-top: 20px;
        border-radius: 15px;
        font-size: 18px;
    }
`

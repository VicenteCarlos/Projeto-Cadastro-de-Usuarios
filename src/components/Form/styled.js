import styled from "styled-components";

export const DivForm = styled.div`
  height: 160px;
  margin-top: 10px;
  border-radius: 15px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 150px;
    width: 200px;
    margin-left: 20px;

    label {
      font-family: ;
    }

    input {
      padding: 5px;
      border: none;
      outline: none;
      border-radius: 15px;
      padding-left: 12px;
      font-size: 13px;
    }

    input[id="name"] {
      margin-bottom: 20px;
    }

    button {
      margin-top: 15px;
      padding: 5px;
      width: 120px;
    }
  }
`;

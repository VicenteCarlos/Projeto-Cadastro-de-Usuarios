import { DivForm } from "./styled";
import { useState } from "react";
import api from "../../services/api";

const Form = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    await api
      .post("/users", { name, email })
      .then((response) => {
        console.log("Cadastrou", response.data);
        addUser({ name, email });
      })
      .catch((err) => {
        throw err;
      });
  };

  const prevent = (evt) => {
    evt.preventDefault();
  };

  return (
    <DivForm>
      <form onSubmit={prevent}>
        <label for="name">Nome:</label>
        <input
          id="name"
          placeholder="Digite o nome..."
          onChange={(e) => setName(e.target.value)}
        />
        <label for="e-mail">Email:</label>
        <input
          id="e-mail"
          placeholder="Digite o e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={getUser}>
          Cadastrar
        </button>
      </form>
    </DivForm>
  );
};

export default Form;

import { Section } from "./styled";
import api from "../../services/api";

const CardUser = ({ user, filterUsers }) => {
  const deleteUser = async () => {
    await api
      .delete(`/users/${user.id}`)
      .then((response) => {
        console.log("Deletado", response.status);
        filterUsers(user);
      })
      .catch((err) => {
        throw `Erroou: ${err}`;
      });
  };

  return (
    <Section>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={deleteUser}>x</button>
    </Section>
  );
};

export default CardUser;

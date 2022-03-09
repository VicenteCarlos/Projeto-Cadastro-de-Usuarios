import HeaderUsers from "../HeaderUsers";
import { DivMain } from "./styled";
import CardUser from "../CardUser";
import Form from "../Form";
import { useState, useEffect } from "react";
import api from "../../services/api";

const MainUsers = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        console.log("Dados:", response.data);
        setUsers(response.data);
      })
      .catch((e) => {
        throw e;
      });
  }, [modal]);

  const filterUsers = (user) => {
    setUsers(users.filter((item) => item.id !== user.id));
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <HeaderUsers />
      <main className="content">
        <DivMain>
          <div>
            <h2>Cadastro de Usuários</h2>
            <button onClick={() => setModal(false)}>X</button>
          </div>
          {modal ? (
            <Form addUser={addUser} />
          ) : (
            <button className="modal" onClick={() => setModal(true)}>
              Iniciar
            </button>
          )}
        </DivMain>
        {users.map((user) => (
          <CardUser key={user.id} user={user} filterUsers={filterUsers} />
        ))}
      </main>
    </>
  );
};

export default MainUsers;

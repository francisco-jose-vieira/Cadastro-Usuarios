import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "sdasdsadas",
      name: "José",
      age: 23,
      email: "jose@gmail.com",
    },
    {
      id: "sdssdsdsddssdsdsd",
      name: "Maria",
      age: 90,
      email: "maria@gmail.com",
    },
    {
      id: "sdssdoposdsddssdsdsd",
      name: "Pedro",
      age: 50,
      email: "pedro@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form className="vidro">
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="nome" />
        <input placeholder="Idade" type="number" name="idade" />
        <input placeholder="E-mail" type="email" name="email" />
        <button type="submit">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="vidro card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;

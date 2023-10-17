const gerenciadorArquivos = require("../01/fs");
// const fs = require("fs");

interface IEndereco {
  cep: number;
  rua: string;
  complemento?: string;
  bairro: string;
  cidade: string;
}

interface IUsuario {
  nome: string;
  email: string;
  cpf: string;
  profissao?: string;
  endereco: IEndereco | null;
}

// const leituraBD = (): unknown => {
//   return JSON.parse(fs.readFileSync("../01/db.json"));
// };

// const escritaDB = (dados: unknown): void => {
//   return JSON.parse(fs.writeFileSync("../01/db.json", JSON.stringify(dados)));
// };

const cadastrarUsuario = (usuario: IUsuario): IUsuario => {
  const db = gerenciadorArquivos.leituraBD() as IUsuario[];

  db.push(usuario);
  gerenciadorArquivos.escritaDB(db);

  return usuario;
};

const listarUsuarios = (): IUsuario[] => {
  return gerenciadorArquivos.leituraBD() as IUsuario[];
};

console.log(
  cadastrarUsuario({
    nome: "Josóe",
    email: "teste@teste.com",
    cpf: "380168.338-96",
    endereco: null,
  })
);

import fsUsuario = require("../01/fs");

// interface IUsuario {
//     nome: string;
//     email: string;
//     cpf: string;
//     profissao?: string;
//     endereco: IEndereco | null;
//   }

const detalhaUsuario = (cpf: string): IUsuario => {
  const bd = fsUsuario.leituraBD() as IUsuario[];

  const usuario = bd.find((usuario: IUsuario) => {
    return usuario.cpf === cpf;
  });

  if (!usuario) {
    throw new Error("Usuario não encontrado!");
  }

  return usuario;
};

const atualizaUsuario = (cpf: string, dados: IUsuario): IUsuario => {
  const bd = fsUsuario.leituraBD() as IUsuario[];

  const usuario = bd.find((usuario: IUsuario) => {
    return usuario.cpf === cpf;
  });

  if (!usuario) {
    throw new Error("Usuario não encontrado!");
  }

  Object.assign(usuario, dados); // substituindo os dados do objeto do usuario

  return usuario;
};

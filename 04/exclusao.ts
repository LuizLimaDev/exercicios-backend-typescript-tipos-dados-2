const excluirUsuario = (cpf: string): Usuario => {
  const bd = lerArquivo() as Usuario[];
  const usuario = bd.find((usuario) => {
    return usuario.cpf === cpf;
  });

  if (!usuario) {
    throw new Error("Usuario nao encontrado!");
  }

  const exclusao = bd.filter((usuario) => {
    return usuario.cpf !== cpf;
  });

  escreverArquivo(exclusao);

  return usuario;
};

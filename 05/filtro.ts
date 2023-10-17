const listarUsuarios = (filtro?: string): IUsuario[] => {
  return gerenciadorArquivos.leituraBD() as IUsuario[];

  const usuarios = bd.filter((usuario) => {
    if (filtro) {
      return usuario.profissao === filtro;
    }

    return usuario;
  });

  return usuarios;
};

const fs = require("fs");

const leituraBD = (): unknown => {
  return JSON.parse(fs.readFileSync("../db.json"));
};

const escritaDB = (dados: unknown): void => {
  return JSON.parse(fs.writeFileSync("../db.json", JSON.stringify(dados)));
};

console.log(leituraBD());

module.exports = {
  leituraBD,
  escritaDB,
};

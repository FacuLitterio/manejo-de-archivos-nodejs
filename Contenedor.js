const fs = require("fs");

class Contenedor {
  constructor(filename) {
    this.filename = filename;
  }

  // Lee el archivo
  read = async () => {
    try {
      const products = await fs.promises.readFile(this.filename, "utf-8");
      return JSON.parse(products);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Escribe en el archivo. La variable content va a contener todo el string que se va a
  // reemplazar en el archivo
  write = async (content) => {
    try {
      await fs.promises.writeFile(this.filename, content, "utf-8");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Guarda un nuevo producto en el archivo
  save = async (newProduct) => {
    try {
      const products = await this.read();

      const lastId = products.at(-1).id;

      products.push({ id: lastId + 1, ...newProduct });

      await this.write(JSON.stringify(products, null, 2));

      return lastId + 1;
    } catch (error) {
      console.error(error.message);
    }
  };
}

module.exports = Contenedor;

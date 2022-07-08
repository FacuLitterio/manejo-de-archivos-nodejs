const Contenedor = require("./Contenedor");

const FILENAME = "./products.txt";

const contenedorProducts = new Contenedor(FILENAME);

(async () => {
  //Leemos los productos
  console.log(await contenedorProducts.read());

  //Agregamos un producto
  await contenedorProducts.save({
    title: "test",
    thumbnail: "http://test.com",
    price: 100,
  });

  //Leemos nuevamente los productos
  console.log(await contenedorProducts.read());
})();

const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllProducts = () => {
      const data = Products.findAll(); //? Traer todas las peliculas
      //? Select * from movies;
      return data;
};
// getAllMovies()
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));

const createProduct = async (data) => {
      const newMovie = await Products.create({
            id: uuid.v4(),
            name: data.name,
            category: data.category,
            price: data.price,
            isAvailable: data.isAvailable,
      });

      return newMovie;
};
// createProduct({
//       name: "Iphone",
//       category: "Cellphone",
//       price: 120,
//       isAvailable: true,
// })
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));

const getProductById = async (id) => {
      const data = await Products.findOne({
            where: {
                  id,
            },
      });

      return data;
};
// getProductById("8cc1c47a-73fa-4dc1-b381-7d0fe8633dd9")
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));

const editProduct = async (id, data) => {
      const response = await Products.update(data, {
            where: {
                  id: id,
            },
      });
      return response;
};
// editProduct("c7301948-55cd-480f-9e35-c5cce59b6969", {
//   duration: "test",
//   name:""
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteProduct = async (id) => {
      const data = await Products.destroy({
            where: {
                  id: id,
            },
      });
      return data;
};

module.exports = {
      getAllProducts,
      getProductById,
      createProduct,
      editProduct,
      deleteProduct,
};

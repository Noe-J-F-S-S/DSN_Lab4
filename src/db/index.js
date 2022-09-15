// const data = [
//   {
//     id: 1,
//     name: "Pepe",
//     last_name: "Perez",
//   },
// ];
const data =[
    {
        id: 1,
        name: "Laptop",
        Marca: "Asus",
        precio:450
        },
    {
        id: 2,
        name: "Laptop",
        Marca: "Asus",
        precio:450
        },
    
    {
        id: 3,
        name: "Laptop",
        Marca: "Asus",
        precio:450
        },

]

 let ultimoId = 0;

//listar todo
export const findAll = () => {
  return data;
};


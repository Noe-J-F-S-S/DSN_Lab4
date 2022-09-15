const data =[
    {
        id: 1,
        name: "Juan",
        apellido: "Sierra",
        dni:"74313901"
        },
    {
        id: 2,
        name: "Noe",
        apellido: "Sotelo",
        dni:"74313901"
        },
    
    {
        id: 3,
        name: "Abril",
        apellido: "Vega",
        dni:"74313901"
        },

]

 let ultimoId = 0;

//listar todo
export const findAll = () => {
  return data;
};


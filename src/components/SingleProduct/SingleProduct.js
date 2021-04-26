const singleProducts = [
   {   
       id:"1", 
       categoria: "ropa",
       title: "Remera",
       price:"1000",
       imgURL:'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
       itemDetail:'Remera 80% algodón 70% poliester'
   },
   { 
       id:"2", 
       categoria: "ropa",
       title: "Campera", 
       price:"4500", 
       imgURL:'https://images.unsplash.com/photo-1616360706118-9468e6616211?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=642&q=80', 
       itemDetail:'Campera 100% Ecocuero negro'
   },
   {
       id:"3" , 
       categoria: "ropa",
       title: "Pantalon", 
       price:"1900", 
       imgURL:'https://images.unsplash.com/photo-1614251056216-f748f76cd228?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
       itemDetail:'Pantalon beige gabardina'
   },
   {    id:"4" ,
        categoria: "calzado",
        title: "Zapatillas",
        price:"2300",
        imgURL:'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        itemDetail:'Pantalon beige gabardina'
    },
    {   id:"5" ,
        categoria: "calzado",
        title: "Zapatillas",
        price:"3100",
        imgURL:'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        itemDetail:'Pantalon beige gabardina'
    },
    {   id:"6" ,
        categoria: "calzado",
        title: "Zapatillas",
        price:"1800",
        imgURL:'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        itemDetail:'Pantalon beige gabardina'
    },
    {   id:"7" ,
        categoria: "accesorios",
        title: "Reloj",
        price:"5300",
        imgURL:'https://images.unsplash.com/photo-1541778480-fc1752bbc2a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1459&q=80',
        itemDetail:'Pantalon beige gabardina'
    },
    {   id:"8" ,
        categoria: "accesorios",
        title: "Gafas",
        price:"3500",
        imgURL:'https://images.unsplash.com/photo-1610136649349-0f646f318053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        itemDetail:'Pantalon beige gabardina'
    },
    {   id:"9" ,
        categoria: "accesorios",
        title: "Mochila",
        price:"4200",
        imgURL:'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        itemDetail:'Pantalon beige gabardina'
    },
];

const getItemList = () => {
    return[
        {
            id: '1', title: "Remera", imgURL:'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', itemDetail:'Pantalon beige gabardina'
        }
    ];
};

const productsPromise = new Promise ((rej, res) => {
    setTimeout(() => {
        rej(singleProducts);
      }, 2000);
});

export const productPromise = new Promise((rej,res) =>{
    setTimeout(() => {
        rej(getItemList());
      }, 2000);
});


export default productsPromise;

import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getStoreData,removeFromDb,saveStoreData } from "../DataBase/FakeDataBase";

export const ProductComponents = createContext()
const ContextComponent = ({ children }) => {
    const [products, setproducts] = useState([]);
    const [topPrice,setTopprice]=useState([]);
    const [topViews,settopViews]=useState([])
    const [items, setItems] = useState([]);

const handleAddToWishlist =(id)=>{

    const product=products.find(product=>product.id == id)

    if(product){
        saveStoreData(id)
        setItems((previousCart) => [...previousCart,id])
    }
}

const removeFromCart = (itemId) => {

        const remaining = items.filter(item => item.id != itemId);
        setItems(remaining)
        removeFromDb(itemId)
};

useEffect(() => {
//data fetch

    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
         setproducts(data.products);
         const toppro = [...data.products].sort((a,b)=>b.price - a.price)
         setTopprice(toppro);
         const views = [...data.products].sort((a,b)=>b.rating - a.rating)
         settopViews(views);
   
    });

//add to cart data show
    const storedata = getStoreData();

    if (products.length > 0) {
        const storeItems = []
        console.log(storeItems)
        for (const id of storedata) {
            const product = products.find(product =>
                product.id == id);
            if (product) {
                storeItems.push(product)
            }
        }
        setItems(storeItems);

    }

}, [products])
const totalPrice = items.reduce((p,c)=>p+c.price,0)



    return (
        <ProductComponents.Provider value={{products,topPrice,topViews,removeFromCart,handleAddToWishlist,items,totalPrice}}>
            {children}
        </ProductComponents.Provider>
    );
};
ContextComponent.propTypes ={
    children: PropTypes.node,
}
export default ContextComponent;
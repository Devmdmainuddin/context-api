import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getStoreData } from "../DataBase/FakeDataBase";

export const ProductComponents = createContext()
const ContextComponent = ({ children }) => {
    const [products, setproducts] = useState([]);
    const [topPrice,setTopprice]=useState([]);
    const [topViews,settopViews]=useState([])
    const [cart,setcart]=useState([])


useEffect(()=>{
const items=getStoreData()
setcart(items)

},[])
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                 setproducts(data.products);
                 const toppro = [...data.products].sort((a,b)=>b.price - a.price)
                 setTopprice(toppro);
                 const views = [...data.products].sort((a,b)=>b.rating - a.rating)
                 settopViews(views);
           
            });

    }, []);
  

    return (
        <ProductComponents.Provider value={{products,topPrice,topViews ,cart,setcart}}>
            {children}
        </ProductComponents.Provider>
    );
};
ContextComponent.propTypes ={
    children: PropTypes.node,
}
export default ContextComponent;
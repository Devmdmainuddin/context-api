 import { useContext } from "react";
 import { ProductComponents } from "../Contaxt/ContextComponent";
import TopPriceProduct from "../components/Products/TopPriceProduct";


const Home = () => {
     const {topPrice}= useContext(ProductComponents)
 console.log(topPrice.length)
    return (
        <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
               
               {topPrice.length>0 &&
                topPrice.map(product=><TopPriceProduct key={product.id} product={product}></TopPriceProduct>)
               }
                
                
            </div>
        </div>
    </section>
    );
};

export default Home;
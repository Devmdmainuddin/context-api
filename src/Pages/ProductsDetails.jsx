import { useContext } from "react";
import { ProductComponents } from "../Contaxt/ContextComponent";
import { useParams } from "react-router-dom";
// import { saveStoreData } from "../DataBase/FakeDataBase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsDetails = () => {
    const {id}= useParams();

const {products,handleAddToWishlist}=useContext(ProductComponents)

const product=products.find(product=>product.id === parseInt(id))
if (!product) {
    return <div>Product not found</div>;
  }
// console.log(products)
// console.log(14,product)
    return (
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={product.thumbnail} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
                <div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">{product.title}</h3>
					<p className="mt-3 text-lg dark:text-gray-600">{product.description}</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
						
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">category : {product.category}</h4>
								<p className="mt-2 dark:text-gray-600">brand : {product.brand}</p>
                                <p className="mt-2 dark:text-gray-600">price : {product.price}</p>
                                <p className="mt-2 dark:text-gray-600">rating : {product.rating}</p>
                                <p className="mt-2 dark:text-gray-600">stock : {product.stock}</p>
							</div>
                            
						</div>
                        <button onClick={()=>handleAddToWishlist(product.id)} className="p-4 bg-red-300 rounded-md">add to cart</button>
						
					</div>
				</div>
                <ToastContainer />
            </div>
    );
};

export default ProductsDetails;
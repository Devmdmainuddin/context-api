import SingleCart from "./SingleCart";
import { useContext, useEffect, useState } from "react";
import { getStoreData,removeFromDb } from "../../DataBase/FakeDataBase";
import { ProductComponents } from "../../Contaxt/ContextComponent";
import { useNavigate } from "react-router-dom";

const Carts = () => {
	const { products } = useContext(ProductComponents);

	const navigate = useNavigate();
    const handlegoback=()=>{
        navigate(-1)
    }
	const [selecitems,setselecitem]=useState([])
	const [items, setItems] = useState([]);
	const price = items.reduce((p,c)=>p+c.price,0)
	useEffect(() => {

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
	
const removeFromCart = (itemId) => {

    const remaining = items.filter(item => item.id != itemId);
	setItems(remaining)
	removeFromDb(itemId)

  };




	return (
		<div className="flex flex-col mx-auto mt-6 max-w-5xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
			<h2 className="text-xl font-semibold">Your cart</h2>
			<ul className="flex flex-col divide-y divide-gray-700">

				{
					items.map((product, idx) => <SingleCart key={idx} product={product} removeFromCart={removeFromCart}></SingleCart>)
				}

			</ul>
			<div className="space-y-1 text-right">
				<p>Total amount:
					<span className="font-semibold">{price} €</span>
				</p>
				<p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
			</div>
			<div className="flex justify-end space-x-4">
				<button type="button" className="px-6 py-2 border rounded-md border-violet-400">Back
					<span onClick={handlegoback} className="sr-only sm:not-sr-only">to shop</span>
				</button>
				<button type="button" className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
					<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
				</button>
			</div>
		</div>
	);
};

export default Carts;
import SingleCart from "./SingleCart";
import { useContext} from "react";

import { ProductComponents } from "../../Contaxt/ContextComponent";
import { useNavigate } from "react-router-dom";

const Carts = () => {
	const { items,totalPrice } = useContext(ProductComponents);

	const navigate = useNavigate();
    const handlegoback=()=>{
        navigate(-1)
    }
	// const price = items.reduce((p,c)=>p+c.price,0)

	return (
		<div className="flex flex-col mx-auto mt-6 max-w-5xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
			<h2 className="text-xl font-semibold">Your cart</h2>
			<ul className="flex flex-col divide-y divide-gray-700">

				{
					items.map((product, idx) => <SingleCart key={idx} product={product}></SingleCart>)
				}

			</ul>
			<div className="space-y-1 text-right">
				<p>Total amount:
					<span className="font-semibold">{totalPrice} €</span>
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
import PropTypes from 'prop-types';

const TopPriceProduct = ({product}) => {
    const {title,description,thumbnail,price}=product;
   
    return (
        <article className="flex flex-col bg-gray-50">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={thumbnail} />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{title}</a>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{description}</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                            <span>PRICE : {price}</span>
                            <span>2.1K views</span>
                        </div>
                    </div>
                </article>
    );
};


TopPriceProduct.propTypes ={
    product: PropTypes.object,
}
export default TopPriceProduct;
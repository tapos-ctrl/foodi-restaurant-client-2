

import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const TopFoodItem = ({food}) => {
    const {_id,name,imageUrl,category,price,shortDescription,quantity} = food
    // console.log(Object.keys(food).join(','))
    return (
        <div>
            <div className="card card-compact shadow-2xl w-80 mx-auto mt-10">
                <figure><img src={imageUrl} alt="Shoes" className="h-[200px] w-[200px] object-cover rounded-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortDescription}</p>
                    <p className="font-medium"><span className="font-bold">Category:</span>{category}</p>
                    <p className="font-medium"><span className="font-bold">Price:$</span>{price}</p>
                    <p className="font-medium"><span className="font-bold">Quantity:</span>{quantity ==0?'not available':quantity}</p>
                    <div className="card-actions justify-end">
                    {/* <button className="btn bg-primary-bg normal-case text-[#fff] hover:text-neutral-950 w-full">Details</button> */}
                    <Link to={`/details/${_id}`} className="btn bg-primary-bg normal-case rounded-full text-[#fff] hover:text-neutral-950 w-full">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopFoodItem.propTypes = {
  food: PropTypes.shape({
    _id: PropTypes.any,
    category: PropTypes.any,
    imageUrl: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    shortDescription: PropTypes.any
  })
}

export default TopFoodItem;
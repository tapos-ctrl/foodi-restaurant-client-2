

import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
const SingleFood = ({foodItem}) => {
    const {_id,name,imageUrl,category,price,description,shortDescription,quantity,madeBy,count} = foodItem
    return (
        <div>
            <div className="card card-compact shadow-2xl w-80 mx-auto mt-10">
                <figure><img src={imageUrl} alt="Shoes" className="h-[200px] w-[200px] object-cover rounded-full"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortDescription}</p>
                    <p className="font-medium"><span className="font-bold">Category:</span>{category}</p>
                    <p className="font-medium"><span className="font-bold">Price:$</span>{price}</p>
                    <p className="font-medium"><span className="font-bold">Quantity:</span>{quantity ==0 ? 'not available': quantity}</p>                  
                    <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn bg-primary-bg normal-case rounded-full text-[#fff] hover:text-neutral-950 w-full">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleFood.propTypes = {
  foodItem: PropTypes.shape({
    _id: PropTypes.any,
    category: PropTypes.any,
    count: PropTypes.any,
    description: PropTypes.any,
    imageUrl: PropTypes.any,
    madeBy: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    quantity: PropTypes.any,
    shortDescription: PropTypes.any
  })
}

export default SingleFood;
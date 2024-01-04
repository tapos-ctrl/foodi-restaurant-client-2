import useConformOrder from "../../hock/useConformOrder";
import MyConformOrder from "./MyConformOrder";

const MyConformOrders = () => {
    const { isPending, error, data } = useConformOrder()

    console.log(data)
        
    
    return (
        <div>
            <div className="overflow-x-auto h-screen">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Add Name</th>
                        <th>Add email</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Buying Date</th>
                        <th>Delete Item</th>
                        <th>Conform Order</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        data?.data?.map(order => <MyConformOrder key={order._id} order={order}></MyConformOrder>)
                    }
                            
                </tbody>
                </table>
            </div>
        </div>
        );
    };
export default MyConformOrders;

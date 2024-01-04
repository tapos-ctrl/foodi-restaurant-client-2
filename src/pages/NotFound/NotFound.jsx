import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="py-20 w-full">
            <Helmet>
                <title>Foodi Restaurant | Not Found</title>
            </Helmet>
            <div className="w-full  flex justify-center">
            <img src="https://i.postimg.cc/vHVrdwff/404-error-with-people-holding-the-numbers-pana-2.png" className="flex justify-center h-[500px]" alt="" />
            </div>
        <div className="flex justify-center ">
        <Link to={'/'} className="btn px-10 rounded-full bg-primary-bg ">Go Home</Link>
        </div>
        </div>
    );
};

export default NotFound;
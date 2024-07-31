import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 my-auto">
            <h2 className="text-3xl">Ops!!!</h2>
            <h2 className="text-3xl">Page Not Found</h2>
            <Link className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;
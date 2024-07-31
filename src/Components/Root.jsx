import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
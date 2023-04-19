import { Breadcrumb } from "../../components";
import Sidebar from "../Sidebar/Sidebar";
import Content from "./Content";
import Related from "./Related";

const Single = () => {
    return <>
        <Breadcrumb />
        <div className="single-news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Content />
                        <div className="sn-related">
                            <h2>Related News</h2>
                            <Related />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Single;
import { Breadcrumb } from "../../components";
import Sidebar from "../Sidebar/Sidebar";
import Multiple from "./Multiple";

const Topic = () => {
    return <>
        <Breadcrumb />
        <div className="single-news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Multiple />
                        {/* <div className="sn-related">
                            <h2>Related News</h2>
                            <Related />
                        </div> */}
                    </div>
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Topic;
import configs from "../../configs/configs.js";
import CustomModal from "../CustomModal/CustomModal.jsx";

const TopBar = () => {
    return <div className="top-bar">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="tb-contact">
                        <p><i className="fas fa-envelope"></i>{configs.contacts.email}</p>
                        <p><i className="fas fa-phone-alt"></i>{configs.contacts.phone}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="tb-menu">
                        <CustomModal head="About"/>
                        <CustomModal head="Privacy"/>
                        <CustomModal head="Terms"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default TopBar;
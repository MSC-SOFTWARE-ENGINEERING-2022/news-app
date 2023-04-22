import { useContext } from "react";
import { DEPE } from "../../configs/utils";
import LocalStorageCtx from "../../contexts/LocalStorage";
import CustomModal from "../CustomModal/CustomModal";

const FooterMenu = () => {
    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    // console.log("localContent", localContent);

    const changeEntity = (item) => {
        // console.log(item)
        DEPE.scrollToTop();
        setLocalContent((obj) => ({...localContent, entity: DEPE.getAttribs(item, 'entity')}));
    }
    return <div className="footer-menu">
        <div className="container">
            <div className="f-menu">
                <CustomModal head="Terms of use"/>
                <CustomModal head="Privacy policy"/>
                <CustomModal head="Cookies"/>
                <CustomModal head="Accessibility help"/>
                <a role="button" entity="contacts" onClick={changeEntity}>Contact us</a>
            </div>
        </div>
    </div>
}

export default FooterMenu;
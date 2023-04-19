import CustomModal from "../CustomModal/CustomModal";

const FooterMenu = () => {
    return <div className="footer-menu">
        <div className="container">
            <div className="f-menu">
                <CustomModal head="Terms of use"/>
                <CustomModal head="Privacy policy"/>
                <CustomModal head="Cookies"/>
                <CustomModal head="Accessibility help"/>
                <CustomModal head="Contact us"/>
            </div>
        </div>
    </div>
}

export default FooterMenu;

const FooterBottom = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return <div className="footer-bottom">
    <div className="container">
        <div className="row">
            <div className="col-md-6 copyright">
                <p>Copyright &copy; {months[month].slice(0,1).toUpperCase()}{months[month].slice(1).toLowerCase()} {year}</p>
            </div>

            <div className="col-md-6 template-by">
                <p>JKUAT Masters Group 1</p>
            </div>
        </div>
    </div>
    </div>
}

export default FooterBottom;
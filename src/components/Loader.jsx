import { Spinner } from "reactstrap"

const Loader = () => {
    return <div className="divSpinner">
        <Spinner type="grow" color="secondary" size="sm" className="spinnerContainer"/>
    </div>;
}
  
export default Loader;
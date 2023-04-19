import { useState, useEffect } from "react";
import { searchNews } from "../api";
import { Loader } from "../components";
import Single from "./Single/Single";

const NewsItem = () => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const key = params.getAll('key')[0];

    useEffect(() => {
        setItem({});
        setIsLoading(true);
        searchNews(key)
            .then((data) => setItem(data))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, [])    

    return <>
        {/* <h1>News</h1>
        <h4>{key}</h4>
        {!isLoading && !Object.keys(item).length && <p>No item selected or found with that id</p>}
        {isLoading && <Loader />} */}
        {/* {!isLoading && Object.keys(item).length > 0 && JSON.stringify(item)} */}
        <Single />
    </>;
}

export default NewsItem;
import { useState, useEffect } from "react";
import { searchNews } from "../../api";

import { Loader } from "../../components";

const Content = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const key = params.getAll('key')[0];

    useEffect(() => {
        setItem(null);
        setIsLoading(true);
        setTimeout(() => {
            searchNews(key)
                .then((data) => {
                    // console.log("item", data[0])
                    setItem(data[0])
                } )
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false));
        }, 2000)
    }, [])

    // const img_src = multimedia.length && multimedia.find(mu => mu.subType === "blog533").url
    const getImg = (itm) => itm.multimedia.length && itm.multimedia.find(mu => mu.subType === "blog533").url

    return <div className="sn-container single-content">
        {/* <Loader /> */}
        {isLoading && <Loader />}
        {!isLoading && item && <>
            <div className="sn-img">
            <img src={getImg(item) && `http://www.nytimes.com/${getImg(item)}`} alt={item.headline["main"]} />
        </div>
        <div className="sn-content">
            <h3 className="sn-title">{item.headline["main"]}</h3>
            <p>{item.byline.original} {item.pub_date.split("T")[0]}</p>
            <p>{item.section_name}</p>
            <h5>{item.abstract}</h5>
            <p>{item.lead_paragraph}</p>
            <a href={item.web_url} target="_blank">See More (Official NewYorkTimes Website)</a>
        </div>
        </>}
    </div>
}

export default Content
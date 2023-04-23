import { useState, useEffect} from "react";

import { Loader } from "../../components";

const Content = ({newsitem}) => {
    const item = newsitem;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // setItem(null);
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000)
    }, [])

    const getImg = (itm) => itm.multimedia.length && itm.multimedia.find(mu => mu.subType === "blog533").url

    return <div className="md-container md-content">
        {/* <Loader /> */}
        {isLoading && <Loader />}
        {!isLoading && item && <>
            <div className="md-img">
            <img src={getImg(item) && `http://www.nytimes.com/${getImg(item)}`} alt={item.headline["main"]} />
        </div>
        <div className="sub-content">
            <p className="author">{item.byline.original}</p>
            <p className="date">{item.pub_date.split("T")[0]}</p>
            <p className="section">{item.section_name}</p>
            <p className="pAbstract">{item.abstract}</p>
            <p className="pLead">{item.lead_paragraph}</p>
            <a className="externalSrc" href={item.web_url} target="_blank">See More (Official NewYorkTimes Website)</a>
        </div>
        </>}
    </div>
}

export default Content
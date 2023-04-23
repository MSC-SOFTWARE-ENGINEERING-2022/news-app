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
            <div className="meta">
                <p className="author"><i className="fas fa-user-tie"></i> {item.byline.original}</p>
                <p className="date"><i className="fas fa-calendar-alt"></i> {item.pub_date.split("T")[0]}</p>
            </div>
            <div className="md-img">
            
            <img src={getImg(item) && `http://www.nytimes.com/${getImg(item)}`} alt={item.headline["main"]} />
            </div>
        <div className="sub-content">
            {/* <div className="meta">
                <p className="author"><i class="fas fa-user-tie"></i> {item.byline.original}</p>
                <p className="date"><i class="fas fa-calendar-alt"></i> {item.pub_date.split("T")[0]}</p>
            </div> */}
            <p className="section">{item.section_name}</p>
            <p className="pAbstract">{item.abstract}</p>
            <p className="pLead">{item.lead_paragraph}</p>
            <a className="externalSrc" href={item.web_url} target="_blank">See More (Official NewYorkTimes Website)</a>
        </div>
        </>}
    </div>
}

export default Content
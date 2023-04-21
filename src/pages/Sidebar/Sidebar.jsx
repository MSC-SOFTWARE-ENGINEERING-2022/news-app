import { useState, useEffect, useContext} from "react";
import { v4 as uuid } from 'uuid';
import { Loader, SingleModal } from "../../components";
import configs from "../../configs/configs";
import { DEPE } from "../../configs/utils"
import LocalStorageCtx from "../../contexts/LocalStorage";


const Sidebar = ({topic='politics'}) => {
    // console.log("red", recentRead);
    const [isLoading, setIsLoading] = useState(false);
    
    // console.log("localStorage", localStorage)
    const raw_data = localStorage.length && JSON.parse(localStorage?.openedNewsItems);
    // console.log("rawdata", raw_data)
    const data = raw_data? raw_data.map(op => op.newsitem).slice(0, 5) : [];
    // console.log("data", data)

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    // console.log("localContent", localContent);

    const changeTopic = (item) => {
        setLocalContent((obj) => ({...localContent, entity:"news", topic: DEPE.getAttribs(item, 'topic')}));
        DEPE.scrollToTop()
        // console.log("localContent-nav", localContent);
    }

    const retrieve = (item) =>  <SingleModal elem={item} place="sidebar"/> 
    const sd = (datos, idx) => {
        // console.log(datos)
        return <div className="nl-item">{<>{
            datos[idx]? retrieve(datos[idx]): 'No data'
        }</>
        }</div>
    }
    
    const itemObj = (itm) => ({
        key: itm._id,
        id: uuid(),
        timestamp: Date.now(),
        item: itm
    })

    const {news_by_topic} = configs.links;
    const elems = DEPE.getAllTopics().reduce((acc, curr) => {
        const {cats, tags} = acc;
            cats.push(<><a role='button' topic={curr.toLowerCase()} onClick={changeTopic}>{DEPE.capitalize(curr)}</a><span>({DEPE.randomNum(0, 231)})</span></>)
            tags.push({name:curr.toUpperCase(), id:curr.toLowerCase()})
        return acc;
    }, {cats:[], tags:[]})

    // console.log("recent", recentRead);

    const clearRecent = () => {
        localStorage.removeItem('openedNewsItems');
        setLocalContent(lc => ({...lc, openedItems: []}))
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000)
    }, [])

    return <div className="sidebar">
        <div className="sidebar-widget">
            <h2 className="sw-title">Recently Viewed</h2>
            <div className="news-list">
                {isLoading && <Loader />}
                {!isLoading && <>
                    {data.map((dt, idx) => {
                        return <div key={idx} className="nl-item">
                            {retrieve(dt)}
                        </div>
                    })}
                </> || 'Checking for recent items'}
                {!isLoading && data.length < 1 && "No recent items"}
            </div>
            <button className="clearRecent btn btn-outline-secondary btn-sm btn-block" onClick={clearRecent}>Clear</button>
        </div>

        <div className="sidebar-widget">
            <h2 className="sw-title">News Category</h2>
            <div className="category">
                <ul>
                    {elems.cats.map((el, idx) => <li key={idx}>{el}</li>)}
                </ul>
            </div>
        </div>

        {/* <div className="sidebar-widget">
            <div className="image">
                <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
            </div>
        </div> */}
        
        <div className="sidebar-widget">
            <h2 className="sw-title">Tags</h2>
            <div className="tags">
            {elems.tags.map((el, idx) => <a key={idx} role='button' topic={el.id} onClick={changeTopic}>{el.name}</a>)}
            </div>
        </div>
    </div>
}

export default Sidebar
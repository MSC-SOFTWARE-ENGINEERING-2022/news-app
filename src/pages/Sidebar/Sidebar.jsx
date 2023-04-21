import { useState, useEffect, useContext} from "react";
import { v4 as uuid } from 'uuid';
import { fetchNews } from "../../api";
import { Loader, SingleModal } from "../../components";
import configs from "../../configs/configs";
import { DEPE } from "../../configs/utils"
import LocalStorageCtx from "../../contexts/LocalStorage";


const Sidebar = ({recentRead, topic='politics', selectItem}) => {
    // console.log("red", recentRead);
    const [dataC, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [localItems, setLocaItems] = useState([]);
    

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    // console.log("localContent", localContent);


    const changeTopic = (item) => {
        setLocalContent((obj) => ({...localContent, entity:"news", topic: DEPE.getAttribs(item, 'topic')}));
        DEPE.scrollToTop()
        // console.log("localContent-nav", localContent);
    }


    const retrieve = (item) => {
        const {headline, news_desk, pub_date, multimedia, _id, byline } = item;
        const img_src = multimedia.length && multimedia.find(mu => mu.subType === "blog225").url
        return <SingleModal elem={item} place="sidebar"/>
    }
    const sd = (datos, idx) => {
        // console.log(datos)
        return <div className="nl-item">{<>{
            datos[idx]? retrieve(datos[idx]): 'No data'
        }</>
        }</div>
    }
    

    // console.log("contxt", contextValue)

    // const itemRead = (rd) => {
    //     return <div className="nl-item">
    //                 <div className="nl-img">
    //                     <img src="img/news-350x223-1.jpg" />
    //                 </div>
    //                 <div className="nl-title">
    //                     <a href={`${news_by_topic}/${rd.toLowerCase()}`}>Lorem ipsum dolor sit amet consec adipis elit</a>
    //                 </div>
    //             </div>
    // }

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
        localStorage.removeItem('readNewsItems');
        setLocaItems([]);
    }

    // useEffect(() => {
    //     // console.log('localstorage', localStorage);
    //     // console.log('recentRead', recentRead);
    //     if(!localStorage.readNewsItems && recentRead){
    //         localStorage.setItem('readNewsItems', JSON.stringify([itemObj(recentRead)]))
    //         setLocaItems(JSON.parse(localStorage.readNewsItems));
    //         // console.log('absentItems', JSON.parse(localStorage.readNewsItems));
    //     }
    //     if(localStorage.readNewsItems && recentRead){
    //         const storedItems = JSON.parse(localStorage.readNewsItems);
    //         const currentItemClicked = storedItems.filter(ci => ci.key === recentRead._id);
    //         // console.log('currentItemClicked', currentItemClicked);
    //         if(!currentItemClicked.length){
    //             // console.log('nocurrent', currentItemClicked);
    //             localStorage.setItem('readNewsItems', JSON.stringify([itemObj(recentRead), ...storedItems]));
    //         }else{
    //             const updatedCurrentItem = {...currentItemClicked[0], timestamp: Date.now()}
    //             localStorage.setItem('readNewsItems', JSON.stringify([updatedCurrentItem, ...storedItems.filter(ci => ci.key !== recentRead._id)]));
    //         }
    //         setLocaItems(JSON.parse(localStorage.readNewsItems));
    //         // console.log('presentItems', JSON.parse(localStorage.readNewsItems));
    //     }
    //     // console.log("local", localItems)
    // }, []);

    useEffect(() => {
        setData([]);
        setIsLoading(true);
        // console.log("topic", topic);
        setTimeout(() => {
            fetchNews(topic)
            .then((data) => {
                // console.log("trialdata", data)
                setData(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
    }, [])

    return <div className="sidebar">
        <div className="sidebar-widget">
            <h2 className="sw-title">Recently Viewed</h2>
            <button onClick={clearRecent}>Clear</button>
            <div className="news-list">
                {isLoading && <Loader />}
                {!isLoading && dataC.length && <>
                    {sd(dataC, 1)}
                    {sd(dataC, 8)}
                    {sd(dataC, 9)}
                    {sd(dataC, 3)}
                    {sd(dataC, 2)}
                </>}
            
                {/* <div className="nl-item">
                    <div className="nl-img">
                        <img src="img/news-350x223-1.jpg" />
                    </div>
                    <div className="nl-title">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                </div>
                <div className="nl-item">
                    <div className="nl-img">
                        <img src="img/news-350x223-2.jpg" />
                    </div>
                    <div className="nl-title">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                </div>
                <div className="nl-item">
                    <div className="nl-img">
                        <img src="img/news-350x223-3.jpg" />
                    </div>
                    <div className="nl-title">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                </div>
                <div className="nl-item">
                    <div className="nl-img">
                        <img src="img/news-350x223-4.jpg" />
                    </div>
                    <div className="nl-title">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                </div>
                <div className="nl-item">
                    <div className="nl-img">
                        <img src="img/news-350x223-5.jpg" />
                    </div>
                    <div className="nl-title">
                        <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                    </div>
                </div> */}
            </div>
        </div>
        
        {/* <div className="sidebar-widget">
            <div className="image">
                <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
            </div>
        </div> */}
        
        {/* <div className="sidebar-widget">
            <div className="tab-news">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#featured">Featured</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#popular">Popular</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#latest">Latest</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="featured" className="container tab-pane active">
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-1.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-2.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-5.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                    </div>
                    <div id="popular" className="container tab-pane fade">
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-2.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-1.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-2.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                    </div>
                    <div id="latest" className="container tab-pane fade">
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-5.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                        <div className="tn-news">
                            <div className="tn-img">
                                <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div className="tn-title">
                                <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
        {/* <div className="sidebar-widget">
            <div className="image">
                <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
            </div>
        </div> */}

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
import configs from "../../configs/configs";
import { DEPE } from "../../configs/utils"


const Sidebar = () => {
    const {news_by_topic} = configs.links;
    const elems = DEPE.getAllTopics().reduce((acc, curr) => {
        const {cats, tags} = acc;
            cats.push(<><a href={`${news_by_topic}/${curr.toLowerCase()}`}>{DEPE.capitalize(curr)}</a><span>({DEPE.randomNum(0, 231)})</span></>)
            tags.push({name:curr.toUpperCase(), link:`${news_by_topic}/${curr.toLowerCase()}`})
        return acc;
    }, {cats:[], tags:[]})

    return <div className="sidebar">
        <div className="sidebar-widget">
            <h2 className="sw-title">Recently Viewed</h2>
            <div className="news-list">
                <div className="nl-item">
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
                </div>
            </div>
        </div>
        
        <div className="sidebar-widget">
            <div className="image">
                <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
            </div>
        </div>
        
        <div className="sidebar-widget">
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
        </div>
        
        <div className="sidebar-widget">
            <div className="image">
                <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
            </div>
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
            {elems.tags.map((el, idx) => <a key={idx} href={el.link}>{el.name}</a>)}
            </div>
        </div>
    </div>
}

export default Sidebar
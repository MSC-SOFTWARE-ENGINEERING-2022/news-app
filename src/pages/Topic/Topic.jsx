import {useState, useEffect, createContext, useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { fetchNews } from '../../api';
import { Breadcrumb, Loader } from "../../components";
import { DEPE } from '../../configs/utils';
import LocalStorageCtx from '../../contexts/LocalStorage';
import Sidebar from "../Sidebar/Sidebar";
import Multiple from "./Multiple";



const Topic = ({topic}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const { topic='politics' } = useParams();
    const navigate = useNavigate();

    // const {localContent} = useContext(LocalStorageCtx);
    // console.log("localContent-topic.jsx", localContent);

    // const topic = localContent.topic || defaultTopic;

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    // console.log("localContent", localContent);

    const [selectedNewsItem, setSelectedNewsItem] = useState(null);

    const handleNewsItemClick = (item) => {
        // console.log('clickedItem', item)
        // navigate(`/news/id?key=${item._id}`)


        setSelectedNewsItem(item);

    

        // const itemObj = (itm) => ({
        //     key: itm._id,
        //     id: uuid(),
        //     timestamp: Date.now(),
        //     item: itm
        // })
        // if(!localStorage.readNewsItems2){
        //     localStorage.setItem('readNewsItems2', JSON.stringify([itemObj(item)]))
        // }else{
        //     const storedItems = JSON.parse(localStorage.readNewsItems2);
        //     console.log("str", storedItems)
        // }
        // <RecentRead readItem={selectedNewsItem}/>
    };

    const crumbs = [
        {name: "Home", link: "/"},
        {name: "News", link: "/news"},
        {name: DEPE.capitalize(topic)},
    ]

    useEffect(() => {
        setData([]);
        setIsLoading(true);
        // console.log("topic", topic);
        setTimeout(() => {
            fetchNews(topic)
            .then((data) => {
                // console.log(data)
                setData(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
    }, [topic])

    return <>
        <Breadcrumb crumbs={crumbs} />
        <div className="single-news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4 className='topicName'>{topic.toUpperCase()}</h4>
                        
                        {/* <Loader /> */}
                        {isLoading? <Loader />: <Multiple data={data} selectItem={handleNewsItemClick}/>}
                        
                        {/* <div className="sn-related">
                            <h2>Related News</h2>
                            <Related />
                        </div> */}
                    </div>
                    <div className="col-lg-4">
                        <Sidebar recentRead={selectedNewsItem} dummyData={topic} selectItem={handleNewsItemClick}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Topic;
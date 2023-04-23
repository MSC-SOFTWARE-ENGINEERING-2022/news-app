import {useState, useEffect } from 'react';
import { fetchNews } from '../../api';
import { Breadcrumb, Loader } from "../../components";
import { DEPE } from '../../configs/utils';
import Sidebar from "../Sidebar/Sidebar";
import Multiple from "./Multiple";

const Topic = ({topic}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [selectedNewsItem, setSelectedNewsItem] = useState(null);

    const handleNewsItemClick = (item) => {
        setSelectedNewsItem(item);
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
                        {isLoading? <Loader />: <Multiple data={data} selectItem={handleNewsItemClick}/>}
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
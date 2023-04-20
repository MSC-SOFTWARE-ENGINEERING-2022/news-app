import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchNews } from '../../api';
import { Breadcrumb, Loader } from "../../components";
import { DEPE } from '../../configs/utils';
import Sidebar from "../Sidebar/Sidebar";
import Multiple from "./Multiple";

const Topic = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { topic='politics' } = useParams();

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
                console.log(data)
                setData(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
    }, [])

    return <>
        <Breadcrumb crumbs={crumbs} />
        <div className="single-news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4 className='topicName'>{topic.toUpperCase()}</h4>
                        
                        {/* <Loader /> */}
                        {isLoading? <Loader />: <Multiple data={data}/>}
                        
                        {/* <div className="sn-related">
                            <h2>Related News</h2>
                            <Related />
                        </div> */}
                    </div>
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Topic;
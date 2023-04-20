import {useState, useEffect} from 'react';
import Slider from "react-slick";
import { fetchNews } from '../../api';
import { Loader } from '../../components';

const Main = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const retrieve = (item) => {
        const {headline, news_desk, pub_date, multimedia, byline} = item;
        return <> 
            <img src={`http://www.nytimes.com/${multimedia.find(mu => mu.subType === "blog533").url}`} alt={headline.main} />
            <div className="tn-title">
                <a href="">
                    {headline.main}
                    <br />
                    <span className="addedInfo author">{byline.original}</span>
                    <br />
                    <span className="addedInfo date">{pub_date.split("T")[0]}</span>
                </a>
            </div>                            
        </>
    }
    const sd = (idx) => {
        return <div className="col-md-6">
            <div className="tn-img">
                {
                    isLoading ? <Loader />: <>
                        {
                            data[idx]? retrieve(data[idx]): 'No data'
                        }
                    </>
                }
            </div>
        </div>
    }
    useEffect(() => {
        setData([]);
        setIsLoading(true);
        setTimeout(() => {
            fetchNews('politics')
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
        
    }, [])
    

    return <div className="top-news">
        <div className="container">
            <div className="row">
                <div className="col-md-6 tn-left">
                    <Slider className="row tn-slider">
                        {sd(1)}
                        {sd(2)}
                    </Slider>
                </div>
                <div className="col-md-6 tn-right">
                    <div className="row">
                        {sd(3)}
                        {sd(4)}
                        {sd(5)}
                        {sd(6)}
                    </div>
                </div>                
            </div>
        </div>
    </div>
}

export default Main
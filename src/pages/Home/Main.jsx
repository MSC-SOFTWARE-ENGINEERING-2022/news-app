import {useState, useEffect} from 'react';
import Slider from "react-slick";
import { fetchNews } from '../../api';
import { Loader, SingleModal } from '../../components';
import Single from '../Single/Single';

const Main = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const retrieve = (item) => {
        const {headline, news_desk, pub_date, multimedia, byline, _id} = item;
        return <SingleModal elem={item} place="top" />
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
    const settings = {
        className: "row tn-slider",
        autoplay: true,
        // infinite: true,
        dots: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        speed: 500,
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
                    <Slider {...settings}>
                        {sd(1)}
                        {sd(2)}
                        {sd(3)}
                    </Slider>
                </div>
                <div className="col-md-6 tn-right">
                    <div className="row">
                        {sd(8)}
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
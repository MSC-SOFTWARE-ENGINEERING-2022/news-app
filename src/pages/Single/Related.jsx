import {useState, useEffect} from 'react';
import Slider from "react-slick";
import { fetchNews } from '../../api';
import { Loader } from '../../components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Related = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const settings = {
        className: "row sn-slider",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const retrieve = (item) => {
        const {headline, news_desk, pub_date, multimedia} = item;
        return <> 
            <div className="sn-img">
                <img src={`http://www.nytimes.com/${multimedia.find(mu => mu.subType === "blog533").url}`} alt={headline.main} />
             
            <div className="sn-title">
                <a href="">{headline.main}</a>
            </div>
            </div>                                    
        </>
    }

    const sd = (idx) => {
        return <div className="col-md-4">
                {
                    isLoading ? <Loader />: <>
                        {
                            data[idx]? retrieve(data[idx]): 'No data'
                        }
                    </>
                }
        </div>
    }

    useEffect(() => {
        setData([]);
        setIsLoading(true);
        setTimeout(() => {
            fetchNews('politics')
            .then((data) => {
                // console.log(data)
                setData(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
    }, [])

    return <Slider {...settings}>
        {sd(1)}
        {sd(2)}
        {sd(3)}
        {sd(4)}
        {sd(5)}
    </Slider>
        {/* <Slider {...settingsB}> */}
        <div className="row sn-slider">
        
        <Slider {...settings}>
            {sd(1)}
            {sd(2)}
            {sd(3)}
        </Slider>
            {/* {sd(1)}
            {sd(2)}
            {sd(3)}
            {sd(4)}
            {sd(5)} */}
            {/* <div className="col-md-4">
                <div className="sn-img">
                    <img src="img/news-350x223-1.jpg" />
                    <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="sn-img">
                    <img src="img/news-350x223-2.jpg" />
                    <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="sn-img">
                    <img src="img/news-350x223-3.jpg" />
                    <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="sn-img">
                    <img src="img/news-350x223-4.jpg" />
                    <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                    </div>
                </div>
            </div> */}
        </div>
        {/* </Slider> */}
}

export default Related
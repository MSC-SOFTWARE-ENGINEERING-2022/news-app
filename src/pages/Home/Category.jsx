import {useState, useEffect} from 'react';
import Slider from "react-slick";
import { fetchNews } from '../../api';
import { Loader } from '../../components';

const Category = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const settings = {
        className:"row cn-slider",
        infinite: false,        
        autoplay: false,
        dots: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
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
    }

    const retrieve = (item) => {
        const {headline, news_desk, pub_date, multimedia} = item;
        return <> 
            <div className="cn-img">
                <img src={`http://www.nytimes.com/${multimedia.find(mu => mu.subType === "blog533").url}`} alt={headline.main} />            
            </div>
            <div className="cn-title">
                <a href="">{headline.main}</a>
            </div>                            
        </>
    }
    const sd = (idx) => {
        return <div className="col-md-6">
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
                console.log(data)
                setData(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
        
    }, [])

    return <>
        <div className="cat-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Sports</h2>
                        <Slider {...settings}>
                            {sd(1)}
                            {sd(2)}
                            {sd(3)}
                        </Slider>
                    </div>
                    <div className="col-md-6">
                        <h2>Technology</h2>
                        <Slider {...settings}>
                            {sd(3)}
                            {sd(4)}
                            {sd(5)}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
  
        <div className="cat-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Business</h2>
                        <Slider {...settings}>
                            {sd(6)}
                            {sd(7)}
                            {sd(5)}
                        </Slider>
                    </div>
                    <div className="col-md-6">
                        <h2>Entertainment</h2>
                        <Slider {...settings}>
                            {sd(2)}
                            {sd(7)}
                            {sd(8)}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
  
  </>
}

export default Category
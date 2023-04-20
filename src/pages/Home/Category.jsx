import {useState, useEffect} from 'react';
import Slider from "react-slick";
import { fetchNews } from '../../api';
import { Loader } from '../../components';

const Category = () => {
    const [data, setData] = useState([]);
    const [dataSports, setDataSports] = useState([]);
    const [dataCulture, setDataCulture] = useState([]);
    const [dataBusiness, setDataBusiness] = useState([]);
    const [dataEducation, setDataEducation] = useState([]);
    const [dataTravel, setDataTravel] = useState([]);
    const [dataPolitics, setDataPolitics] = useState([]);
    const [dataAutomobiles, setDataAutomobiles] = useState([]);
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
        const {headline, news_desk, pub_date, multimedia, byline} = item;
        return <> 
            <div className="cn-img">
                <img src={`http://www.nytimes.com/${multimedia.find(mu => mu.subType === "blog533").url}`} alt={headline.main} />            
            
            <div className="cn-title">
                <a href="">
                    {headline.main}
                    <br />
                    <span className="addedInfo author">{byline.original}</span>
                    <br />
                    <span className="addedInfo date">{pub_date.split("T")[0]}</span>
                </a>
            </div>
            </div>                           
        </>
    }
    const sd = (idx, datos) => {
        return <div className="col-md-6">
            {
                isLoading ? <Loader />: <>
                    {
                        datos[idx]? retrieve(datos[idx]): 'No data'
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

    useEffect(() => {
        setDataTravel([]);
        setIsLoading(true);
        setTimeout(() => {
            fetchNews('travel')
            .then((data) => {
                console.log(data)
                setDataTravel(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
    }, [])

    useEffect(() => {
        setDataSports([]);
        setIsLoading(true);
        setTimeout(() => {
            fetchNews('sports')
            .then((data) => {
                console.log(data)
                setDataSports(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
    }, [])

    useEffect(() => {
        setDataCulture([]);
        setIsLoading(true);
        setTimeout(() => {
            fetchNews('culture')
            .then((data) => {
                console.log(data)
                setDataCulture(data)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }, 2000)
    }, [])

    useEffect(() => {
        setDataBusiness([]);
        setIsLoading(true);
        setTimeout(() => {
            fetchNews('business')
            .then((data) => {
                console.log(data)
                setDataBusiness(data)
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
                            {sd(1, dataSports)}
                            {sd(2, dataSports)}
                            {sd(3, dataSports)}
                        </Slider>
                    </div>
                    <div className="col-md-6">
                        <h2>Politics</h2>
                        <Slider {...settings}>
                            {sd(3, data)}
                            {sd(4, data)}
                            {sd(5, data)}
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
                            {sd(6, dataBusiness)}
                            {sd(7, dataBusiness)}
                            {sd(5, dataBusiness)}
                        </Slider>
                    </div>
                    <div className="col-md-6">
                        <h2>Culture</h2>
                        <Slider {...settings}>
                            {sd(2, dataCulture)}
                            {sd(7, dataCulture)}
                            {sd(8, dataCulture)}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
  
  </>
}

export default Category
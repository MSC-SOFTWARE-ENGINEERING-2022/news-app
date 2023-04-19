import Slider from "react-slick";
import {useState, useEffect} from 'react';
import { fetchNews } from '../../api';
import { Loader } from '../../components';

const Multiple = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const retrieve = (item) => {
      const {headline, news_desk, pub_date, multimedia} = item;
      return <> 
      
      <div className="tp-img">
          <img src={`http://www.nytimes.com/${multimedia.find(mu => mu.subType === "blog533").url}`} alt={headline.main} />
          </div>
          <div className="tp-title">
              <a href="">{headline.main}</a>
          </div>                            
      </>
  }
  const sd = (idx) => {

     
      return <div className="tp-news">
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







    const settings = {
        dots: true
      };
  return <>
    {/* <Slider {...settings}>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
    </Slider> */}
    <div className="topic-news scroll-inner">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
              <div className="topic-content">
                <div id="featured" className="container tab-pane active">
                {sd(1)}
                {sd(2)}
                {sd(3)}
                {sd(4)}
                {sd(5)}
                {sd(6)}
                {sd(7)}
                {sd(8)}
                {sd(9)}
    </div></div></div></div></div></div>
  </>
}

export default Multiple;
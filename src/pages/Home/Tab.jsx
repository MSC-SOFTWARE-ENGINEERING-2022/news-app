import {useState, useEffect} from 'react';
import { fetchNews } from '../../api';
import { Loader, RecentRead, SingleModal } from '../../components';

const Tab = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const retrieve = (item) => <SingleModal elem={item} place="tab" />
    const sd = (idx) => {
        return <div className="tn-news">
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

    return <div className="tab-news">
    <div className="container">
      <div className="row">
          <div className="col-md-6">
              <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                      <a className="nav-link active" data-toggle="pill" href="#featured">Featured News</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#popular">Popular News</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#latest">Latest News</a>
                  </li>
              </ul>

              <div className="tab-content">
                  <div id="featured" className="container tab-pane active">
                    {sd(1)}
                    {sd(2)}
                    {sd(3)}
                  </div>
                  <div id="popular" className="container tab-pane fade">
                    {sd(3)}
                    {sd(4)}
                    {sd(1)}
                  </div>
                  <div id="latest" className="container tab-pane fade">
                    {sd(6)}
                    {sd(9)}
                    {sd(5)}
                  </div>
              </div>
          </div>
          
          <div className="col-md-6">
              <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#m-viewed">Most Viewed</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#m-read">Most Recent</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link active" data-toggle="pill" href="#m-recent">Recently viewed</a>
                  </li>
              </ul>

              <div className="tab-content">
                  <div id="m-viewed" className="container tab-pane fade">
                    {sd(6)}
                    {sd(9)}
                    {sd(5)}
                  </div>
                  <div id="m-read" className="container tab-pane fade">
                    {sd(6)}
                    {sd(9)}
                    {sd(5)}
                  </div>
                  <div id="m-recent" className="container tab-pane active">
                    <RecentRead place="tab" itemClass="tn-news" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
}

export default Tab
import { useState, useEffect } from "react";
import { fetchNews } from "../api";
import { Loader } from "../components";
import RecentRead from "./RecentRead";

import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Select } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import Topic from "./Topic/Topic";

const defaultTopics = ['automobiles', 'books', 'business', 'culture', 'fashion', 'politics', 'food', 'foreign', 'weather', 'sports'];

const News = () => {
    const [topic, setTopic] = useState('politics');
    const [newsItems, setNewsItems] = useState([]);
    const [selectedNewsItem, setSelectedNewsItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setNewsItems([]);
        setIsLoading(true);
        fetchNews(topic)
            .then((data) => setNewsItems(data))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        // console.log(topic, newsItems)
    }, [topic])

    const handleNewsItemClick = (item) => {
        console.log('clickedItem', item)
        setSelectedNewsItem(item);
        navigate(`/news/id?key=${item._id}`);
    };
    
    const handleModalClose = () => {
        setSelectedNewsItem(null);
    };

    const handleSelectChange = (event) => {
        setTopic(event.target.value);
    }

    const capitalize = (word) => {
       return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    }

    const sortAlphabets = (words) => {
        return words.sort((a, b) => a.localeCompare(b));
    }

    return <>
      {/* <h1>News - {topic}</h1> */}
      {/* <p>&copy; 2023 - New York Times Company</p> */}
      {/* {newsItems.map((item, idx) => <p key={idx}>{JSON.stringify(item)}</p>)} */}
      {/* <select value={topic} onChange={handleSelectChange}>
          {sortAlphabets(defaultTopics).map(dt => <option key={dt} value={dt}>{capitalize(dt)}</option>)}
      </select>         */}
      {/* {isLoading && <Loader />}
      <Row>
        <Col md={9}>
          {newsItems && newsItems.map((item, idx) => (
            <Card key={idx} className="mb-3">
              <CardBody onClick={() => handleNewsItemClick(item)}>
                <CardTitle tag="h5">{item.headline.main}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {new Date(item.pub_date).toLocaleDateString()}
                </CardSubtitle>
                <CardImg top width="100%" src={`http://www.nytimes.com/${item.multimedia.find(mu => mu.subType === "blog533").url}`} alt={item.headline.main} />
              </CardBody>
            </Card>
          ))}
        </Col>
        <Col md={3}>
          <RecentRead readItem={selectedNewsItem}/>
        </Col>
      </Row> */}

      <Topic />
    </>;
}

export default News;
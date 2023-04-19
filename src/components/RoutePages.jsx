import { Routes, Route } from 'react-router-dom';
import { Home, News, NewsItem } from '../pages';
import Loader from './Loader.jsx';
import Navbar from './Navbar.jsx';

const RoutePages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsItem />} />

        {/* <Route path="/" element={Home} />
        <Route path="/news" element={News} />
        <Route path="/news/:newsId" element={NewsItem} /> */}
        <Route element={<Loader />} />
      </Routes>
    </>
  );
}

export default RoutePages;
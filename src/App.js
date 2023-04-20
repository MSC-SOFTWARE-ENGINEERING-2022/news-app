import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, CustomNavbar, ScrollBackToTop } from './components';
import { Contact, Error, Home, News, NewsItem, Single, Topic } from './pages';

import './css/style/style.css';
import configs from './configs/configs';

const App = () => {
  const {home, homeB, homeC, news, news_by_topic, news_by_id, contact_us, error} = configs.links
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={homeB} element={<Home />} />
        <Route path={homeC} element={<Home />} />
        <Route path={news} element={<Topic />} />
        <Route path={news_by_topic} element={<Topic />} />
        <Route path={`${news_by_topic}/:topic`} element={<Topic />} />
        <Route path={news_by_id} element={<Single />} />
        <Route path={contact_us} element={<Contact />} />
        <Route path={error} element={<Error />} />
      </Routes>
      <Footer />
      <ScrollBackToTop />
    </Router>
  );
}

export default App;

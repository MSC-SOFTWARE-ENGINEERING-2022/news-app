import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, CustomNavbar, ScrollBackToTop } from './components';
import { Contact, Error, Home, News, NewsItem, Single, Topic } from './pages';

import './css/style/style.css';
import configs from './configs/configs';
import Main from './pages/Main';

const App = () => {
  const {home, homeB, homeC, news, news_by_topic, news_by_id, contact_us, error} = configs.links
  return (
    <Router>
      <Routes>
        {/* <Route path={home} element={<Home />} />
        <Route path={homeB} element={<Home />} />
        <Route path={homeC} element={<Home />} /> */}
        <Route path={home} element={<Main entity="home"/>} />
        <Route path={homeB} element={<Main entity="home"/>} />
        <Route path={homeC} element={<Main entity="home"/>} />
        <Route path={news} element={<Main entity="news"/>} />
        <Route path={error} element={<Main entity="error"/>} />

        {/* <Route path={news_by_topic} element={<Topic />} />
        <Route path={`${news_by_topic}/:topic`} element={<Topic />} />
        <Route path={news_by_id} element={<Single />} />
        <Route path={contact_us} element={<Contact />} /> */}
        {/* <Route path={error} element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

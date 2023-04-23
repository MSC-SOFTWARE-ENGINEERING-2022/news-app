import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Super } from './pages';

import configs from './configs/configs';

import './css/App/App.css';
import './css/style/style.css';

const App = () => {
  const {home, homeB, homeC, news, error} = configs.links;
  return (
    <section className="app">
      <Router>
        <Routes>
          <Route path={home} element={<Super entity="home"/>} />
          <Route path={homeB} element={<Super entity="home"/>} />
          <Route path={homeC} element={<Super entity="home"/>} />
          <Route path={news} element={<Super entity="news"/>} />
          <Route path={error} element={<Super entity="error"/>} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;

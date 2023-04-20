// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, CustomNavbar, ScrollBackToTop } from './components';
import { Contact, Error, Home, News, NewsItem, Topic } from './pages';

// import './css/components/components.css';
// import './css/custom/custom.css';
import './css/style/style.css';
import configs from './configs/configs';
// import './subs/lib/jquery-3.4.1.min.js';
// import './subs/lib/slick/slick.min.js';
// import './subs/js/main.js';

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   script.defer = true;
//   document.body.appendChild(script);
// }

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
        <Route path={news_by_id} element={<NewsItem />} />
        <Route path={contact_us} element={<Contact />} />
        <Route path={error} element={<Error />} />
      </Routes>
      <Footer />
      <ScrollBackToTop />
    </Router>
  );
}

// {AddLibrary('lib/slick/slick.min.js')}
// {AddLibrary('js/main.js')}

export default App;

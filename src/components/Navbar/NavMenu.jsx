import { useState } from 'react';
import configs from '../../configs/configs';

const {brand, links, social_media} = configs;
const {home, homeB, homeC, news, news_by_topic, news_by_id, contact_us, error} = links;
const {fb, tw, ld, ig, yt} = social_media;

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return <div className="nav-bar sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a href="/" className="navbar-brand">{brand}</a>
                <button type="button" className="navbar-toggler" onClick={toggle} data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${isOpen && 'show'}`} id="navbarCollapse">
                    <div className="navbar-nav mr-auto">
                        <a href={home} className="nav-item nav-link active">Home</a>
                        <div className="nav-item dropdown">
                            <a href={news} className="nav-link dropdown-toggle" data-toggle="dropdown">News</a>
                            <div className="dropdown-menu">
                                <a href={news} className="dropdown-item">All</a>
                                <a href={`${news_by_topic}/politics`} className="dropdown-item">Politics</a>
                                <a href={`${news_by_topic}/entertainment`} className="dropdown-item">Entertainment</a>
                            </div>
                        </div>
                        <a href={`${news_by_id}?key=30`} className="nav-item nav-link">example30</a>
                        <a href={`${news_by_id}?key=20`} className="nav-item nav-link">example20</a>
                        <a href={contact_us} className="nav-item nav-link">Contact Us</a>
                    </div>
                    <div className="social ml-auto">
                        <a href={tw} target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href={fb} target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href={ld} target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href={ig} target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href={yt} target="_blank"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
}

export default NavMenu
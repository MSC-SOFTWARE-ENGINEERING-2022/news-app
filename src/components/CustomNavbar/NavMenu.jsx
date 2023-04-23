import { useContext, useState } from 'react';
import configs from '../../configs/configs';
import { DEPE } from '../../configs/utils';
import LocalStorageCtx from '../../contexts/LocalStorage';
import SocialMedia from '../SocialMedia/SocialMedia';

const {brand, links } = configs;
const {home, homeB, homeC, news, news_by_topic, news_by_id, contact_us, error} = links;

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    // console.log("localContent", localContent);

    const changeEntity = (item) => {
        // console.log(item)
        DEPE.scrollToTop();
        setLocalContent((obj) => ({...localContent, entity: DEPE.getAttribs(item, 'entity')}));
    }

    const checkActive = (content, item, itemClass) => (content.entity === item)? `${itemClass} active`: itemClass;

    const changeTopic = (item) => {
        DEPE.scrollToTop();
        setLocalContent((obj) => ({...localContent, entity:"news", topic: DEPE.getAttribs(item, 'topic')}));
        // console.log("localContent-nav", localContent);
    }

    const toggle = () => setIsOpen(state => !isOpen);

    const topicElems = <>{
        DEPE.getAllTopics().map((tp, idx) => {
            return <a key={idx} role='button' className="dropdown-item" topic={tp} onClick={changeTopic}>
                {tp.slice(0,1).toUpperCase()}{tp.slice(1)}
            </a>
        })
    }</>
    // console.log("topicElems", topicElems)
    
    return <div className="nav-bar sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a role='button' className="navbar-brand" entity="home">{brand}</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto">
                        <a role='button' className={checkActive(localContent, "home", 'nav-item nav-link ')} entity="home" onClick={changeEntity}>Home</a>
                        <div className="nav-item dropdown">
                            <a role='button' className={checkActive(localContent, "news", 'nav-link dropdown-toggle ')} data-toggle="dropdown" entity="news">News</a>
                            <div className="dropdown-menu">
                                {topicElems}
                            </div>
                        </div>
                        <a role='button' className={checkActive(localContent, "contacts", 'nav-item nav-link ')} entity="contacts" onClick={changeEntity}>Contact Us</a>
                    </div>
                    <div className="social ml-auto">
                        <SocialMedia />
                    </div>
                </div>
            </nav>
        </div>
    </div>  
    
}

export default NavMenu
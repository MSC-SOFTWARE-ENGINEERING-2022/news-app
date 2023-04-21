import React, { useContext } from 'react'
import configs from '../../configs/configs';
import { DEPE } from '../../configs/utils';
import LocalStorageCtx from '../../contexts/LocalStorage';

const FooterStart = () => {
    const {email, phone, address} = configs.contacts;
    const {home, news, news_by_topic} = configs.links;
    const {fb, tw, ld, ig, yt} = configs.social_media;

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    // console.log("localContent", localContent);

    const changeEntity = (item) => {
        // console.log(item)
        setLocalContent((obj) => ({...localContent, entity: DEPE.getAttribs(item, 'entity')}));
        DEPE.scrollToTop()
    }

    const changeTopic = (item) => {
        setLocalContent((obj) => ({...localContent, entity:"news", topic: DEPE.getAttribs(item, 'topic')}));
        // console.log("localContent-nav", localContent);
        DEPE.scrollToTop()
    }

    return <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <h3 className="title">Get in Touch</h3>
                        <div className="contact-info">
                            <p><i className="fa fa-map-marker"></i>{address}</p>
                            <p><i className="fa fa-envelope"></i>{email}</p>
                            <p><i className="fa fa-phone"></i>{phone}</p>
                            <div className="social">
                                <a href={tw} target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href={fb} target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href={ld} target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href={ig} target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href={yt} target="_blank"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <h3 className="title">Useful Links</h3>
                        <ul>
                            <li><a role='button' entity="home" onClick={changeEntity}>Home</a></li>
                            <li><a role='button' entity="news" onClick={changeEntity}>News</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <h3 className="title">Quick Links</h3>
                        <ul>
                            {DEPE.getAllTopics().map((tp, idx) => {
                                return <li key={idx}><a role='button' topic={tp} onClick={changeTopic}>{DEPE.capitalize(tp)}</a></li>
                            })}
                        </ul>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <h3 className="title">Newsletter</h3>
                        <div className="newsletter">
                            <p>
                            Dear valued reader,<br/>
                            <span className='smallerTxt'>
                                Thank you for your interest in our newsletter! <br/>
                                
                                Please subscribe below to receive the latest news, updates, and exclusive content delivered straight to your inbox. <br/>

                                Thank you for joining our community
                            </span>                            
                            </p>
                            <form>
                                <input className="form-control" type="email" placeholder="Your email here" />
                                <button className="btn" disabled>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FooterStart;
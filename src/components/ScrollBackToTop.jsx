import { useState } from 'react';
import { DEPE } from '../configs/utils';

const ScrollBackToTop = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    
    // const scrollToTop = () =>{
    //     window.scrollTo({
    //     top: 0, 
    //     behavior: 'auto'
    //     /* you can also use 'auto' behaviour
    //         in place of 'smooth' */
    //     });
    // };
  
    window.addEventListener('scroll', toggleVisible);
    return <a role="button" className="back-to-top" onClick={DEPE.scrollToTop} style={{display: visible ? 'inline' : 'none'}} title="Scroll-Up">
        <i className="fa fa-chevron-up"></i>
    </a>
}

export default ScrollBackToTop;
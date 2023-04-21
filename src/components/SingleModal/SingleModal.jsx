import { useContext, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LocalStorageCtx from '../../contexts/LocalStorage.jsx';
import Content from '../../pages/Single/Content.jsx';

const SingleModal = (args) => {
    const {elem, place} = args;

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    
    const {headline, news_desk, pub_date, multimedia, _id, byline } = elem;
    const img_src = multimedia.length 
      && multimedia.find(mu => mu.subType === "blog533") 
      ? {src: `http://www.nytimes.com/${multimedia.find(mu => mu.subType === "blog533").url}`} 
      : {};

    const [modal, setModal] = useState(false);

    const toggle = () => {
      setModal(!modal)
      if(!modal){
        setLocalContent((curr) => {
          const elemObj = {timestamp:Date.now(), newsitem: elem};
          const updateOpened = [
            elemObj,
            ...curr.openedItems,
          ]

          if(!localStorage.openedNewsItems){
            localStorage.setItem('openedNewsItems', JSON.stringify(updateOpened));
          }else{
            const present = JSON.parse(localStorage.openedNewsItems);
            const filtered = present.filter(pr => pr.newsitem._id !== _id);
            const merged = [elemObj, ...filtered]
            localStorage.setItem('openedNewsItems', JSON.stringify(merged));
          }
          return {...curr, openedItems:updateOpened};
        })
        // console.log('localstorage', JSON.parse(localStorage.openedNewsItems));
      }
    };

    const places = {
      sidebar: <><div className="nl-img">
                  <img {...img_src} alt={headline.main} />
                  </div>
                  <div className="nl-title">
                  <a role='button' onClick={toggle}>
                          {headline.main}
                          <br />
                          <span className="addedInfo author">{byline.original}</span>
                          <br />
                          <span className="addedInfo date">{pub_date.split("T")[0]}</span>
                      </a>
                  </div> 
                </>,
      multiple: <>
        <div className="tp-img">
        <img {...img_src} alt={headline.main} />
        </div>
        <div className="tp-title">
           
          <a role='button' onClick={toggle}>
          {headline.main}
          <br />
          <span className="addedInfo author">{byline.original}</span>
          <br />
          <span className="addedInfo date">{pub_date.split("T")[0]}</span>
        </a>        
        </div>
      </>,

      tab: <><div className="tn-img">
      <img {...img_src} alt={headline.main} />
      </div>
      <div className="tn-title">
          {/* <a href={`/news/id?key=${_id}`}>{headline.main}</a> */}
          <a role='button' onClick={toggle}>
          {headline.main}
          <br />
          <span className="addedInfo author">{byline.original}</span>
          <br />
          <span className="addedInfo date">{pub_date.split("T")[0]}</span>
        </a> 
      </div>                        
  </>,

  
category:  <>
<div className="cn-img">
                <img {...img_src} alt={headline.main} />            
            
            <div className="cn-title">
            <a role='button' onClick={toggle}>
                    {headline.main}
                    <br />
                    <span className="addedInfo author">{byline.original}</span>
                    <br />
                    <span className="addedInfo date">{pub_date.split("T")[0]}</span>
                </a>
            </div>
            </div> 


</>,

top: <> 
<img {...img_src} alt={headline.main} />
<div className="tn-title">
<a role='button' onClick={toggle}>
        {headline.main}
        <br />
        <span className="addedInfo author">{byline.original}</span>
        <br />
        <span className="addedInfo date">{pub_date.split("T")[0]}</span>
    </a>
</div>                            
</>
    }
  
    return (
      <>
      {places[place]} 

        
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <Content newsitem={elem} />
          <Button color="secondary" onClick={toggle}>
                  Close
          </Button>      
        </Modal>          
      </>
    );
}

export default SingleModal
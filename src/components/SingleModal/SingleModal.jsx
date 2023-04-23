import { useContext, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LocalStorageCtx from '../../contexts/LocalStorage.jsx';
import Content from '../../pages/Single/Content.jsx';

const SingleModal = (args) => {
    const {elem, place} = args;
    const [currentElem, setCurrentElem] = useState(elem);

    const {localContent, setLocalContent} = useContext(LocalStorageCtx);
    
    const {headline, news_desk, pub_date, multimedia, _id, byline } = elem;
    const img_src = multimedia.length 
      && multimedia.find(mu => mu.subType === "blog533") 
      ? {src: `http://www.nytimes.com/${multimedia.find(mu => mu.subType === "blog533").url}`} 
      : {};

    const [modal, setModal] = useState(false);

    const toggle = (event) => {
      setModal(!modal)
      if(!modal){
        // console.log("elem", elem);
        setCurrentElem(elem);
        setLocalContent((curr) => {
          const elemObj = {timestamp:Date.now(), newsitem: elem};
          const updateOpened = [
            elemObj,
            ...curr.openedItems.filter(co=> co.newsitem._id !== _id),
          ]

          if(!localStorage.openedNewsItems){
            localStorage.setItem('openedNewsItems', JSON.stringify(updateOpened));
          }else{
            const present = JSON.parse(localStorage.openedNewsItems);
            const filtered = present.filter(pr => pr.newsitem._id !== _id);
            // console.log("filtered", filtered);
            const merged = [elemObj, ...filtered]
            // console.log("merged", merged);
            localStorage.setItem('openedNewsItems', JSON.stringify(merged));
          }
          return {...curr, openedItems:updateOpened};
        })
        // console.log('localstorage', JSON.parse(localStorage.openedNewsItems));
      }
    };

    const staticElem = (initials) => <>
      <div className={`${initials}-img`}>
        <img {...img_src} alt={headline.main} />
      </div>
      <div className={`${initials}-title`}>
        <a role='button' onClick={toggle}>
            {headline.main}
            <br />
            <span className="addedInfo author">{byline.original}</span>
            <br />
            <span className="addedInfo date">{pub_date.split("T")[0]}</span>
        </a>
      </div> 
    </>

    const staticElem2 = (initials) => <>
      <img {...img_src} alt={headline.main} />
      <div className={`${initials}-title`}>
        <a role='button' onClick={toggle}>
          {headline.main}
          <br />
          <span className="addedInfo author">{byline.original}</span>
          <br />
          <span className="addedInfo date">{pub_date.split("T")[0]}</span>
        </a>
      </div> 
    </>

    const staticElem3 = (initials) => <>
      <div className={`${initials}-img`}>
        <img {...img_src} alt={headline.main} />
        <div className={`${initials}-title`}>
        <a role='button' onClick={toggle}>
                {headline.main}
                <br />
                <span className="addedInfo author">{byline.original}</span>
                <br />
                <span className="addedInfo date">{pub_date.split("T")[0]}</span>
            </a>
        </div>
      </div>   
    </>

    const places = {
      sidebar: staticElem("nl"),
      multiple: staticElem("tp"),
      tab: staticElem("tn"),
      category: staticElem3("cn"),
      top: staticElem3("tn")
    }
  
    return (
      <>
        {places[place]}         
        <Modal className="singleModal" isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>{currentElem.headline.main}</ModalHeader>
          <ModalBody>
            <Content newsitem={currentElem} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle} className="btnClose">
              Close
            </Button>
          </ModalFooter>     
        </Modal>          
      </>
    );
}

export default SingleModal
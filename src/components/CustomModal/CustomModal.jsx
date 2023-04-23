import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CustomModal = (args) => {
    // console.log(args);
    const {head, body, fullElem} = args;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  
    return (
      <>
        <a role="button" onClick={toggle}>{head}</a>
        <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
          {fullElem || 
            <>
              <ModalHeader toggle={toggle}>{head}</ModalHeader>
              <ModalBody>
                {body}
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{' '} */}
                <Button color="secondary" onClick={toggle} className="btnClose">
                  Close
                </Button>
              </ModalFooter>
            </>
          }          
        </Modal>          
      </>
    );
}

export default CustomModal
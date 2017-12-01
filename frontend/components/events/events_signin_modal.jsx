//This modal needs to pop open when a user tries to register or bookmark while signed out
import React from 'react';
import Modal from 'react-modal';

class EventsSigninModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {

  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <Modal 
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className={{
              base: 'modal',
              afterOpen: 'modal_after-open',
              beforeClose: 'modal_before-close'
            }}
            overlayClassName={{
              base: 'modalOverlay',
              afterOpen: 'modalOverlay_after-open',
              beforeClose: 'modalOverlay_before-close'
            }}
            contentLabel="Sign In Modal"
          >
          <div className="closeButton" onClick={this.closeModal}> 
            <span className="closeButton">&times;</span>
          </div>
          
      </Modal>
    )
  }
}

export default EventsSigninModal
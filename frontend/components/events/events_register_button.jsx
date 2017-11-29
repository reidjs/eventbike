import React from 'react';
import Done from 'material-ui-icons/Done';
import Add from 'material-ui-icons/Add';
import { ProtectedFunction } from '../../util/route_util';
import EventsSigninModal from './events_signin_modal';
import { flashMessage } from 'redux-flash';
import Modal from 'react-modal';

class EventsRegisterButton extends React.Component {
  constructor(props){
    super(props)
    // debugger
    // this.userIsRegistered = this.userIsRegistered.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleRegistration(e) {
    e.preventDefault();
    //logic here to make sure there is a logged in user 
    if (this.props.currentUser) {
      switch(this.props.event.registered) {
        case false:
          this.props
            .register(this.props.event.id, this.props.currentUser.id); 
          return
        case true:
          this.props
            .unregister(this.props.event.id, this.props.currentUser.id); 
          return 
      }
    } else {
      // render modal 
      // console.log()
      //push to login screen
      this.props.history.push('/signin')
      // dispatch(flashMessage('You must be logged in to register'))
      // console.log(this.showModal)
      // this.showModal = false;

    }
    // console.log('Register')
  }

  render() {
    let myClass = "active"
    let buttonText;
    this.props.event.registered ? buttonText="Cancel" : buttonText = "Register";
    // if (this.props.customClass)
    //   myClass = this.props.customClass;

    // let myTest = this.showModal ? "true" : null
    // debugger
    // if (this.props.event.registered) {
    if (!this.props.currentUser) {
      return (
        <span className="register-button">
          <button className={myClass} onClick={this.handleRegistration}>Log in to register</button>
        </span>
      )
    } else {
      return (
        <div>
        <button className="open-register-modal" onClick={this.openModal}>Register</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={{
            base: 'register-modal',
            afterOpen: 'register-modal_after-open',
            beforeClose: 'register-modal_before-close'
          }}
          overlayClassName={{
            base: 'register-modalOverlay',
            afterOpen: 'register-modalOverlay_after-open',
            beforeClose: 'register-modalOverlay_before-close'
          }}
          contentLabel="Register Modal"
        >
          <div className="closeButton small" onClick={this.closeModal}> 
            <span className="closeButton">&times;</span>
          </div>
          <h2>{this.props.event.title}</h2>
          <p>{this.props.event.details}</p>
          <form>
            <input type="number"/>
            
            <span className="register-button">
            <button className={myClass} onClick={this.handleRegistration}>{buttonText}</button>
            </span>
            
          </form>
          
        </Modal>
      </div>
        
      )
    }
    
  }
}

export default EventsRegisterButton;
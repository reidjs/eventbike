import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// import SessionFormContainer from './session_form_container'

//https://github.com/reactjs/react-modal
const customStyles = {
  content : {
    top                   : '0%',
    left                  : '0%',
    right                 : '0%',
    bottom                : '0%',
    marginRight           : '0%',
    transform             : 'translate(-0%, -0%)'
  }
};

class SessionModalForm extends React.Component {
  constructor() {
    super();
    // debugger
    // this.currentUser = props.currentUser;
    // this.logout = props.logout;
    this.state = {
      modalIsOpen: false,
      username: "",
      password: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleSubmitUsername = this.handleSubmitUsername.bind(this)
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

  handleSubmitUsername(e) {
    e.preventDefault();
    const username = this.state.username;
    //if user exists 
    //tell modal to show enter password field 
    //
    // this.props.processForm({user});
    console.log('here')
    this.props.lookup(username)
  }
  handleSubmitLogIn(e) {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password}
    this.props.login(user)
  }
  handleSubmitSignUp(e) {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password}
    this.props.signUp(e)
  }
  handleChangeUsername(e) {
    console.log(e.target.value)
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div>
        {/* This button is either going to be sign in or log out  */}
        <button className="btn btn-default" onClick={this.openModal}>Sign In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Sign In Modal"
        >
        {/*modal is now open, show enter user name OR enter password*/}
          Enter Username
          <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
          <button onClick={this.handleSubmitUsername}>Submit</button>
        </Modal>
      </div>
    );
  }
}


// ReactDOM.render(<App />, appElement);
export default SessionModalForm;
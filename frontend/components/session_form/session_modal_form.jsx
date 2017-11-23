import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import SignupForm from './signup_form'
import LoginForm from './login_form'
import SigninForm from './signin_form'
import DemoLogin from './demo_login';

// import SessionFormContainer from './session_form_container'

//https://github.com/reactjs/react-modal


class SessionModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true
    };
    this.errors = props.errors
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.determineFormType = this.determineFormType.bind(this);
    this.formType = 'signin';
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.reseterrors();
    this.props.history.push('/')
    this.setState({modalIsOpen: false});
  }
  componentDidMount() {
    this.determineFormType(this.props);
    // this.props.entertext('asdf');

  }
  componentWillReceiveProps(nextProps) {
    //We received a new potential user, determine the correct form type to show
    // console.log("nextprops: ", nextProps)
    // console.log(this.props)
    if (nextProps.potentialUser !== this.props.potentialUser) {
    // if (nextProps.potentialUser)
      this.determineFormType(nextProps);
    }
  }
  determineFormType(nextProps) {
    //Set the form based on the current session data 
    if (nextProps.potentialUser === null) {
      this.props.history.push('/signin')
      // this.setState({formType: 'signin'})
      this.formType = 'signin';
      return 
    } else if (nextProps.newUserFlag) {
      this.props.history.push('/signin/signup')      
      // this.setState({formType: 'signup'})
      this.formType = 'signup';
      return 
    } else {
      this.props.history.push('/signin/login')        
      // this.setState({formType: 'login'})
      this.formType = 'login'
      return 
    }
  }
  
  render() {
    let formToShow;
    //Render the appropriate form based on the formTYpe
    if (this.formType === 'signup') {
      formToShow = <SignupForm 
      username={this.props.potentialUser} 
      history={this.props.history} 
      signup={this.props.signup} 
      reset={this.props.reset}  
      errors={this.props.errors} />     
    } else if (this.formType === 'login') {
      formToShow = <LoginForm 
      username={this.props.potentialUser} 
      history={this.props.history} 
      login={this.props.login} 
      reset={this.props.reset}
      errors={this.props.errors} />
    } else {
      formToShow = <SigninForm 
      lookup={this.props.lookup} 
      errors={this.props.errors}
      ui={this.props.ui}/>
    }
    // console.log(this.props.match.path)
    return (
      <div>

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
        <div className="modalForm">
          {formToShow}
          <DemoLogin demouser={this.props.demouser}/>
        </div>
        </Modal>
      </div>
    );
  }
}
export default SessionModalForm;
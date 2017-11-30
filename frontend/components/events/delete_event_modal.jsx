import React from 'react'
import Modal from 'react-modal';
class DeleteEventModal extends React.Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
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
  handleDelete() {
    // deleteevent();
    // this.props.history.push(`/users/${this.props.currentUser.id}/myevents`)
    // this.pushUserToPath("myevents")
    console.log('delete')
  }
  render() {
    return (<div>
      <div className="delete-button">
        <button className="delete-open-modal" onClick={this.openModal}>&times;</button>
      </div>
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
        contentLabel="delete Modal"
      >
      <div className="closeButton small" onClick={this.closeModal}> 
            <span className="closeButton">&times;</span>
          </div>
          <div className="register-modal-text">
            <h2>{this.props.event.title}</h2>
            <p class="overflow-ellipsis">Are you sure you want to delete this?</p>  
            <div className="cancel">
              <button className="cancel" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        </Modal>
    </div>)
  }
}

export default DeleteEventModal;
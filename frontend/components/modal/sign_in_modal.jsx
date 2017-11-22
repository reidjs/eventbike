import React from 'react'
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
const SignInModal = () => {
  return (
    <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Sign In Modal"
    >
    <h1>Sign In</h1>
    <button onClick={this.closeModal}>close</button>
    <div>I am a modal</div>
    <form>

      <input />
      <button>tab navigation</button>

    </form>
    </Modal>
  )
}
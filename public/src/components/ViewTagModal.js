import React from 'react';
import Modal from 'react-modal';


 class ViewTagModal extends React.Component{
  state = {
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title'),
    chapter_number:localStorage.getItem('chapter_number'),
    page_number:localStorage.getItem('page_number'),
  }




  render(){
console.log(this.props.open);
    return(
    <Modal
    isOpen={this.props.open}
    onRequestClose={this.props.closeModal}
    closeTimeoutMS={200}
    >

</Modal>
      )
  }
}

export default ViewTagModal;

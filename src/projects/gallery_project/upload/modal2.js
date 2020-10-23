import React, { Component } from "react";
import { Modal } from "reactstrap";
import "./renderimage.css";
class Mody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: true,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    console.log(this.val + "soy");
    return (
      <div>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          className="modal-md"
        >
          <img class="img-responsive-height" src={this.props.src} alt="asd" />
        </Modal>
      </div>
    );
  }
}

export default Mody;

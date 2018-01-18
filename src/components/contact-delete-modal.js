import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

class ContactDeleteModal extends Component {
    
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <div className="ui two buttons">
            <Modal trigger={<Button basic color="red" onClick={this.handleOpen}>Delete</Button>}
                open={this.state.modalOpen} 
                onClose={this.handleClose}>
                <Modal.Header>
                    Delete Your Contact
                </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your contact: {this.props.contact.name.first} {this.props.contact.name.last} ? </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={this.handleClose}>
                        No
                    </Button>
                    <Button positive onClick={() => this.props.deleteContact(this.props.contact._id)}  icon='checkmark' labelPosition='right'  content='Yes'/>
                </Modal.Actions>
            </Modal>
        </div>
        )
    }
}

export default ContactDeleteModal;
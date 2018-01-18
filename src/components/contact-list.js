// src/components/contact-list.js

import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contact-card';

const ContactList = ({contacts, deleteContact, modalOpen, showDeleteModal, hideDeleteModal}) => {
    
    const cards = () => {
        return contacts.map(contact => {
            return (
                < ContactCard 
                    key={contact._id} 
                    contact={contact}
                    deleteContact={deleteContact}
                    modalOpen={modalOpen}
                    showDeleteModal={showDeleteModal}
                    hideDeleteModal={hideDeleteModal} />
            )
        })
    }
    
    return (
            <Card.Group>
                { cards() }
            </Card.Group>
    )
}

export default ContactList;

// src/components/contact-card.js

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ContactDeleteModal from '../components/contact-delete-modal';

const ContactCard = ({contact, deleteContact }) => {    
    return (        
        <Card>
            <Card.Content>
                <Card.Header>
                    <Icon name='user outline'/> {contact.name.first} {contact.name.last} 
                </Card.Header>
                <Card.Description>
                    <p><Icon name='phone' /> {contact.phone}</p>
                    <p><Icon name='mail outline' /> {contact.email}</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Link to={`/contacts/edit/${contact._id}`} className="ui basic button green">Edit</Link>
                    <ContactDeleteModal
                         contact={contact}
                         deleteContact={deleteContact}
                    />
                </div>
            </Card.Content>
        </Card>
    );
}

ContactCard.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactCard;

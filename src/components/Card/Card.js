import React from 'react';

import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Container from './Container/Container';
import classes from './Card.css';

const card = (props) => (
    <div className={classes.Card}>
        <ProfilePicture />
        <Container 
            cardTitle={props.cardTitle}
            cardBody={props.cardBody}
            cardComments={props.cardComments}
            cardHearts={props.cardHearts}
            liked={props.liked}
            newComment={props.newComment}
            emailSent={props.emailSent}
            newEmail={props.newEmail} />
    </div>
);

export default card;
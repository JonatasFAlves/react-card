import React from 'react';

import Header from './Header/Header';
import CardBody from './CardBody/CardBody';
import SocialBadges from './SocialBadges/SocialBadges';
import classes from './Container.css';

const container = (props) => (
    <div className={classes.Container}>
        <Header title={props.cardTitle} />
        <CardBody 
            title={props.cardTitle}
            body={props.cardBody} />
        <SocialBadges />
    </div>
);

export default container;
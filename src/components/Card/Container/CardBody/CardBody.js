import React from 'react';

import CardImage from '../../../../assets/images/card-image.png';
import classes from './CardBody.css';

const cardBody = (props) => (
    <div className={classes.CardBody}>
        <img src={CardImage} alt="React banner" />
        <p><strong>{props.title}</strong></p>
        <p>{props.body}</p>
    </div>
);

export default cardBody;
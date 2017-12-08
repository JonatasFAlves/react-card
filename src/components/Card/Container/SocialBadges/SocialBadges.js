import React from 'react';

import classes from './SocialBadges.css';

const socialBadges = (props) => {

    const emailSent = props.emailSent ? <p>Thanks for the email! :D</p> : null;

    return (
        <div className={classes.SocialBadges}>
            <span
                className={classes.Comment}
                onClick={props.newComment}>
                <i className="far fa-comment" /> {props.comments}
            </span>

            <span
                className={classes.Heart}
                onClick={props.liked}>
                <i className="far fa-heart" /> {props.hearts}
            </span>

            <span
                className={classes.Envelope}
                onClick={props.newEmail}>
                <i className="far fa-envelope" />
            </span>

            {emailSent}
        </div>
    );
};

export default socialBadges;
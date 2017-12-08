import React from 'react';

import picture from '../../assets/images/profile-picture.png';
import classes from './ProfilePicture.css';

const profilePicture = () => (
    <div className={classes.ProfilePicture}>
        <img src={picture} alt="User" />
    </div>
);

export default profilePicture;
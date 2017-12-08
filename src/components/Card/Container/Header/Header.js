import React from 'react';

import Aux from '../../../../hoc/Aux';

const header = (props) => {
    const style = {
        h4: {
            display: 'inline',
            marginRight: '16px'
        },
        p: {
            display: 'inline',
            color: '#bbb'
        }
    };

    return (
        <Aux>
            <h4 style={style.h4}>Jay Developer</h4>
            <p style={style.p}>@jDev - Dec 08</p>
            <p>{props.title}</p>
        </Aux>
    );
};

export default header;
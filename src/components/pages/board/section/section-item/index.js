import React from 'react';

require('./style.scss');

export default ({ children }) => {
    return (
        <div className='section-item'>
            {children}
        </div>
    )
}
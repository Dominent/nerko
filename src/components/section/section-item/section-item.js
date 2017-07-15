import React from 'react';

require('./section-item.scss');

export default ({ children }) => {
    return (
        <div className='section-item'>
            {children}
        </div>
    )
}
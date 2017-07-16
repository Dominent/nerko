import React from 'react';

require('./style.scss');

export default function Overlay({ children }) {
    return (
        <div className='overlay'>
            {children}
        </div>
    )
}
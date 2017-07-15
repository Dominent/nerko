import React from 'react';

require('./overlay.scss');

export default function Overlay({ children }) {
    return (
        <div className='overlay'>
            {children}
        </div>
    )
}
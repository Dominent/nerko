import React from 'react';

export default function Col({ xs, sm, md, lg, offset, children }) {
    let className = '';

    const type =
        xs ? 'xs' :
            sm ? 'sm' :
                md ? 'md' :
                    lg ? 'lg' :
                        '';

    const size = xs || sm || md || lg;

    if (type) {
        className += `col col-${type}-${size}`;
        if (offset) {
            className += `col-${type}-offset-${offset}`
        }
    }

    return (
        <div className={className}>
            {children}
        </div>
    );
}
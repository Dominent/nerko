import React from 'react';

export default function Glyph({ icon, xs, sm, md, lg }) {
    const size =
        (xs ? 0.5 :
            sm ? 1 :
                md ? 1.5 :
                    lg ? 2 :
                        '');

    const fontSize = 
        size ? `${size}em` : `${1}em`;

    return (
        <span
            className={`glyphicon glyphicon-${icon}`}
            style={{ fontSize }} />
    )
}
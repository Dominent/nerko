import React from 'react';

import Glyph from './lib/glyph';

export default () => {
    return (
        <div className='navbar'>
            <ul className='list-group'>
                <li>
                    <button>
                        <Glyph lg icon='home' />
                    </button>
                </li>
                <li >
                    <button>
                        <Glyph lg icon='fire' />
                    </button>
                </li>
                <li>
                    <button>
                        <Glyph lg icon='signal' />
                    </button>
                </li>
                <li>
                    <button>
                        <Glyph lg icon='cog' />
                    </button>
                </li>
                <li>
                    <button>
                        <Glyph lg icon='question-sign' />
                    </button>
                </li>
            </ul>
        </div>
    );
}
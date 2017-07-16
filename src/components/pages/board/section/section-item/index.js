import React from 'react';

import Row from '../../../../lib/row';
import Col from '../../../../lib/col';

require('./style.scss');

export default ({ children }) => {
    return (
        <div className='section-item'>
            <div className='well'>
                <Row>
                    <Col md='4'>
                        <a href="#" className='thumbnail'>
                            <img src="https://dummyimage.com/100x100/c4c4c4/fff" alt="avatar"/>
                        </a>
                    </Col>
                    <Col md='8'>
                        {children}
                    </Col>
                </Row>
            </div>
        </div>
    )
}
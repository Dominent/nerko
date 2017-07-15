import React from 'react';

import Row from './lib/row';
import Col from './lib/col';

import Navbar from './navbar';

require('./app.scss');

export default () => {
    return (
        <div className='app'>
            <Row>
                <Col xs='1'>
                    <Navbar />
                </Col>
                <Col xs='11'></Col>
            </Row>
        </div>
    )
}
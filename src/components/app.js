import React from 'react';

import Row from './lib/row';
import Col from './lib/col';

import Sidebar from './sidebar';
import Board from './pages/board';

export default () => {
    return (
        <div className='app'>
            <Row>
                <Col xs='2'>
                    <Sidebar />
                </Col>
                <Col xs='10'>
                    <Board />
                </Col>
            </Row>
        </div>
    )
}
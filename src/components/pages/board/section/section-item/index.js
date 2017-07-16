import React, { Component } from 'react';

import Row from '../../../../lib/row';
import Col from '../../../../lib/col';

require('./style.scss');

export default class SectionItem
    extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: null
        }

        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent(event) {
        var pos = event.target.getBoundingClientRect();

        this.setState({
            position: {
                top: pos.top,
                left: pos.left
            }
        })

        console.log(event.target.getBoundingClientRect());
    }

    render() {
        return (
            <div
                className='section-item'
                onClick={this.handleClickEvent}
                style=
                {
                    this.state.position ? {
                        position: "fixed",
                        top: this.state.position.top,
                        left: this.state.position.left,
                        zIndex: 100
                    } : null
                }>
                <div className='well'>
                    <Row>
                        <Col lg='4'>
                            <a href="#" className='thumbnail'>
                                <img src="https://dummyimage.com/100x100/c4c4c4/fff" alt="avatar" />
                            </a>
                        </Col>
                        <Col lg='8'>
                            {this.props.children}
                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}
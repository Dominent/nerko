import React, { Component } from 'react';
import { connect } from 'react-redux';

import Row from '../../../../lib/row';
import Col from '../../../../lib/col';

require('./style.scss');

class SectionItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: null
        }

        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent(event) {
        var pos = this.props.mousePos;

        this.setState({
            position: {
                top: pos.top,
                left: pos.left
            }
        })
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
                        top: this.props.mousePos.top,
                        left: this.props.mousePos.left,
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

function mapStateToProps(state) {
    return {
        mousePos: state.mousePos
    };
}

export default connect(mapStateToProps)(SectionItem);
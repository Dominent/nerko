import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateMousePos } from '../../../redux/actions/board/updateMousePos'

import Row from '../../lib/row';
import Col from '../../lib/col';

import Section from './section';
import SectionItem from './section/section-item'

class Board extends Component {
    render() {
        return (
            <div 
                className='board'
                onMouseMove={(event) => this.props.updateMousePos(event)}
            >
                <Row>
                    <Col>
                        <Col md='12'>
                            <Col md='4' >
                                <Section name='ToDo' items={[
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>,
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>,
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>
                                ]} />
                            </Col>
                            <Col md='4' >
                                <Section name='Doing' items={[
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>,
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>,
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>
                                ]} />
                            </Col>
                            <Col md='4'>
                                <Section name='Done' items={[
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>,
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>,
                                    <SectionItem >
                                        As a user I want to have a personal
                                account so than nobody but me will
                                be able to buy from it.
                            </SectionItem>
                                ]} />
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateMousePos: updateMousePos
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Board);

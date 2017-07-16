import React, { Component } from 'react';

import Row from '../../lib/row';
import Col from '../../lib/col';

import Sidebar from './sidebar';
import Section from './section';
import SectionItem from './section/section-item'

export default class Board
    extends Component {
    constructor(props) {
        super(props);

        this.handleMouseMoveEvent = this.handleMouseMoveEvent.bind(this);
    }

    handleMouseMoveEvent(event) {
        // console.log(event);
    }

    render() {
        return (
            <div className='board'
                onMouseMove={this.handleMouseMoveEvent}>
                <Row>
                    <Col>
                        <Col md='2'>
                            <Sidebar />
                        </Col>
                        <Col md='9'>
                            <Col md='3' >
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
                            <Col md='3' >
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
                            <Col md='3'>
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
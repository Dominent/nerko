import React from 'react';

import Row from '../../lib/row';
import Col from '../../lib/col';

import Sidebar from './sidebar';
import Section from './section';
import SectionItem from './section/section-item'

export default () => {
    return (
        <div className='board'>
            <Row>
                <Col>
                    <Col md='1'>
                        <Sidebar />
                    </Col>
                    <Col md='11'>
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
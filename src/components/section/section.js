import React, { Component, PropTypes } from 'react';

import Glyph from '../lib/glyph';
import Overlay from '../lib/overlay/overlay';

require('./section.scss');

export default class Section
    extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddActive: false
        }

        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent(event) {
        this.setState({ isAddActive: true });
    }

    render() {
        return (
            <div className='section'>
                {this.state.isAddActive ? <Overlay /> : null}
                <div className='header'>
                    <h3>{this.props.name}</h3>
                    <button
                        className='btn btn-info'
                        onClick={this.handleClickEvent}>
                        <Glyph icon='plus' sm></Glyph>
                    </button>
                </div>
                <hr />
                {
                    this.props.items.map(item => {
                        return item;
                    })
                }
            </div>
        )
    }
}

Section.propTypes = {
    name: PropTypes.string,
    items: PropTypes.array
};

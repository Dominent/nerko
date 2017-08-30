import React, { Component, PropTypes } from 'react';

require('./style.css');

class Editor extends Component {
    constructor(props) {
        super(props);

        this._syntaxHighlightJson = this._syntaxHighlightJson.bind(this);
        this._buildJsonHighlight = this._buildJsonHighlight.bind(this);

        this._json = '';

        this.state = {
            editorHeight: 0,
            json: ''
        }
    }

    _syntaxHighlightJson(regex, className) {
        this._json = this._json
            .replace(regex, (substring, args) => {
                // This handles the case when we have keywords which are exact matches.
                let output = typeof args === 'number' || !args ? substring : args;

                let result = `<span class="${className}">${output}</span>`;

                return result
            }
        )
    }

    _buildJsonHighlight(input) {
        const KEY_REGEX = /("[^"]*")(?=\s*:)/g;

        const VALUE_REGEX = {
            STRING_REGEX: /("[^"]*")(?=\s*[,}\]])/g,
            NUMBER_REGEX: /([^$"][-+0-9.]+)(?=\s*[,}\]])/g,
            KEYWORDS_REGEX: /(true)(?=\s*[,}\]])|(false)(?=\s*[,}\]])|(null)(?=\s*[,}\]])|(undefined)(?=\s*[,}\]])/g,
            ARRAY_REGEX: /\[|\]/g,
            OBJECT_REGEX: /{|}/g
        }

        this._json = "" + input;

        this._syntaxHighlightJson(KEY_REGEX, 'json-key');

        this._syntaxHighlightJson(VALUE_REGEX.STRING_REGEX, 'json-string');
        this._syntaxHighlightJson(VALUE_REGEX.KEYWORDS_REGEX, 'json-keywords');
        this._syntaxHighlightJson(VALUE_REGEX.ARRAY_REGEX, 'json-array');
        this._syntaxHighlightJson(VALUE_REGEX.OBJECT_REGEX, 'json-object');
        this._syntaxHighlightJson(VALUE_REGEX.NUMBER_REGEX, 'json-number');

        this.setState({json: this._json});
    }

    componentWillMount() {
        this._buildJsonHighlight(this.props.children);
    }

    componentDidMount() {
        this.setState({ editorHeight: this.refs.highlight.clientHeight });
    }

    render() {
        return (
            <div className='editor'>
                <pre className='editor-reset editor-content-highlight'
                    dangerouslySetInnerHTML={{ __html: this._json }}
                    ref="highlight" />
                <textarea className='editor-reset editor-content'
                    style={{ height: this.state.editorHeight }}
                    defaultValue={this.props.children}
                    onChange={(event) => this._buildJsonHighlight(event.target.value) } />
            </div>
        )
    }
}

Editor.propTypes = {
    children: PropTypes.string
}

export default Editor;
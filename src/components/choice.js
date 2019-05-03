import React, { Component } from 'react';

import './choice.css';

class Choice extends Component {
  render() {
    const { label } = this.props.config;
    const { onSelect, selectedChoice } = this.props;

    return (
      <div
        className={`choice ${selectedChoice === label ? 'selected' : ''}`}
        onClick={() => onSelect(label)}>
        {label}
      </div>
    )
  }
}

export default Choice;

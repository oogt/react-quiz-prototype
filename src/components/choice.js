import React, { Component } from 'react';

import './choice.css';

class Choice extends Component {
  render() {
    const { label, image } = this.props.config;
    const { onSelect, selectedChoice, type } = this.props;

    return (
      <div
        className={`choice ${selectedChoice === label ? 'selected' : ''} ${type}`}
        onClick={() => onSelect(label)}>
        {image && (
          <div>
            <img src={image} alt="alt tag" />
          </div>
        )}
        <span>{label}</span>
      </div>
    )
  }
}

export default Choice;

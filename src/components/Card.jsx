import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper" style={{
        backgroundColor: this.props.color,
        color: this.props.white ? 'white' : '',
        cursor: this.props.onClick ? 'pointer' : '',
      }} onClick={this.props.onClick}>
        <div className={`card ${this.props.vertical ? 'vertical' : ''}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
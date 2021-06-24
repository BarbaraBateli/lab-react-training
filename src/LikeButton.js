import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button
          className="btn"
          style={{ backgroundColor: this.state.color[3] }}
          onClick={this.handleIncrement}
        >
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;

import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  maxChars = (e) => {
    e.preventDefault();
    if (e.target.value.length < 280)
      this.setState({
        message: event.target.value,
      });
  };
  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
     let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;

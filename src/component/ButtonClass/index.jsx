import { Component } from "react";

class ButtonClass extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      isLoading: "true",
    };
  }

  render() {
    const { content } = this.props;

    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // }, 1000);

    return (
      <button>
        {content} - {this.state.count} - {this.state.isLoading}
      </button>
    );
  }
}

export default ButtonClass;

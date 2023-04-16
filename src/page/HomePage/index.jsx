const { Component } = require("react");

class HomePage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    console.log("hello");
    this.state = {
      count: 1,
    };
  }

  componentWillMount() {
    console.log("will mount", document.getElementById("h1"));
  }

  componentDidMount() {
    console.log("did mount", document.getElementById("h1"));
    // call api
    //create useForm, interval...
  }

  componentWillUnmount() {
    console.log("un mount");
    // clear data, clear interval, clear timeout
  }

  shouldComponentUpdate(props, state) {
    console.log({ state, props });
    if (state.count > 5) {
      return true;
    }
    return false;
  }
  componentDidUpdate() {
    console.log("did update");
  }
  render() {
    console.log("render");
    return (
      <h1 id="h1">
        {/* <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        >
          +
        </button>
        {this.state.count}
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          +
        </button> */}
      </h1>
    );
  }
}

export default HomePage;

import React from "react";
import UserAge from "./UserAge";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " Construtor");

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    // console.log(this.props.name + " componentDidMount");
  }
  componentDidUpdate() {
    // console.log(this.props.name + " componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    // console.log(this.props.name + " Render");

    const { count } = this.state;
    return (
      <div className="user-container">
        {/* <UserAge age={"Grand Child "} /> */}
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h2>Desgination: {this.props.designation}</h2>
      </div>
    );
  }
}

export default UserClass;

import { Component } from "react";
class UserAge extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.age + "constructor");
  }

  componentDidMount() {
    console.log(this.props.age + "componentDidMount");
  }

  render() {
    console.log(this.props.age + " Render");
    return <div>UserAge</div>;
  }
}

export default UserAge;

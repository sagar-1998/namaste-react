import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../Context/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Construtor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about-page">
        <h1 className="about-heading">About</h1>
        <UserContext.Consumer>
          {(data) => <h1>{data.userName}</h1>}
        </UserContext.Consumer>
        <UserClass
          name={"Child1"}
          location={"Gurgaon"}
          designation={"Software Engineer"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-page">
//       <h1 className="about-heading">About</h1>
//       <UserClass
//         name={"Sagar"}
//         location={"Gurgaon"}
//         designation={"Software Engineer"}
//       />
//     </div>
//   );
// };

export default About;

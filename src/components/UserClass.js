import React from "react";
import CreateContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "ABC",
        id: 2,
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Chaitanya");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    if (this.state.count2 !== prevState.count2) {
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <>
        <div className="user-card">
          <h1>count:{count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Count Increament
          </button>
          <img src={this.state.userInfo.avatar_url} />
          <h2>Name:{this.state.userInfo.login}</h2>
          <h3>Location:{this.state.userInfo.id}</h3>
          <h4>Contact:chaitanya@</h4>
          <div>
            <CreateContext.Consumer>
              {(data) => <h4>Context API data{data.loggedInUserData}</h4>}
            </CreateContext.Consumer>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;

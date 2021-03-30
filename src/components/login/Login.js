import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.usernameErrorRef = React.createRef();
  }
  state = {
    username: "",
    usernameError: false,
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  renderSignupComponent = () => {
    if (!this.state.username) {
      this.setState((state) => ({
        usernameError: (state.usernameError = true),
      }));
      this.usernameErrorRef.current.focus();
    } else {
      this.setState((state) => ({
        usernameError: (state.usernameError = false),
      }));
      localStorage.setItem("username", this.state.username);
      this.props.history.push("/quiz");
    }
  };

  renderLoginComponent = () => {
    const username = localStorage.getItem("username");
    if (!username || username == "") {
      return (
        <>
          <div className="container">
            <div className="h-full full-display-flex">
              <div className="box max-w-full">
                <div className="box-content max-w-full">
                  <div id="headingText">
                    <h1 className="font-lighter text-center mb-3">Sign up</h1>
                  </div>
                  <div id="headingSubtext" className="text-center">
                    <span className="text-center">
                      Authorization is required
                    </span>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="text-center form-ai mt-3">
                      <input
                        type="text"
                        placeholder=" "
                        ref={this.usernameErrorRef}
                        autoFocus
                        value={this.state.username}
                        onChange={this.handleChange}
                        className={
                          this.state.usernameError
                            ? "input-error input form-ai-control w-350 max-w-full"
                            : "input form-ai-control w-350 max-w-full"
                        }
                      />
                      <label
                        className={this.state.usernameError && "label-error"}
                      >
                        Username
                      </label>
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        onClick={() => this.renderSignupComponent()}
                        className="button w-full max-w-full button-primary"
                      >
                        Next
                      </button>
                    </div>
                    <footer className="mt-6">
                      <ul className="list-style ul-flex">
                        <li className="color-gray">Home</li>
                        <span className="circle-span">•</span>
                        <li className="color-gray">Support</li>
                        <span className="circle-span">•</span>
                        <li className="color-gray">FAQ</li>
                      </ul>
                    </footer>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      this.props.history.push("/quiz");
    }
  };

  render() {
    return <>{this.renderLoginComponent()}</>;
  }
}

export default withRouter(Login);

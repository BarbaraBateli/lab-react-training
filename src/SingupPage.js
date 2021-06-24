import React from 'react';

class SingupPage extends React.Component {
  state = {
    email: '',
    password: 'Ab@4567890',
    nationality: [
      { lang: 'de', xis: 'German' },
      { lang: 'en', xis: 'English' },
      { lang: 'fr', xis: 'François' },
    ],
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleClick = (event) => {
    this.setState({});
  };
  render() {
    return (
      <div>
        <div>
          <h1>Email</h1>
          <div>
            <input
              placeholder="seunome@alguem.com"
              onChange={this.handleChange}
              value={this.state.emailCheck}
            />
            <div>
              <input placeholder="your password" />
            </div>
            <div>
              <form>
                <label for="country">Nationality</label>
                <select name="country">
                  {this.state.nationality.map((currentOption, index) => {
                    return (
                      <div>
                        <option key={index} value={currentOption.lang}>
                          {currentOption.xis}
                        </option>
                      </div>
                    );
                  })}
                </select>
              </form>
            </div>
          </div>
          <p>{this.nationality}</p>
          <p>Your email address is: {this.state.email}</p>
        </div>
      </div>
    );
  }
}
export default SingupPage;
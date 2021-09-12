import React from 'react';

class parent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this);
    this.state = { value: 'something' };
  }

  handleChanges(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div>
        <h1>Person information displayer</h1>
        <br/>
      </div>
    );
  }
}
export default parent;

import React from 'react';

class infoDisplayer extends React.Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.addInput = React.createRef();
  }

  addItem(){
    this.props.callBack(this.addInput.current.value)
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Add a new task" 
          ref={this.addInput}>
        </input>
        <button onClick={this.addItem}>Add!</button>
      </div>
    )
  }
}

export default infoDisplayer

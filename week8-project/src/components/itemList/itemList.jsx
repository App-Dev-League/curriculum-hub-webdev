import React from 'react';

class parent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem(key){
    this.props.callBack(key)
  }

  render() {
    return this.props.list.map((element) => {
      return (
        <div key={element.key}>
          {element.itemName}
          <span
            style={{ color: "red", marginLeft: "100px", cursor: "pointer" }}
            onClick={() => this.deleteItem(element.key)}
          >X</span>
        </div>
      )
    })
  }
}
export default parent;

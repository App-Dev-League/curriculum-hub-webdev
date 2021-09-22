import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ItemList from './components/itemList/itemList'
import AddItem from './components/addItem/addItem';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.callBackFunction = this.callBackFunction.bind(this);
    this.deleteCallBack = this.deleteCallBack.bind(this)
    this.state = {
      items: []
    }
  }
  callBackFunction(data) {
    console.log("Added!", data)
    let newElement = {
      key: (this.state.items.length).toString(),
      itemName: data
    }
    this.state.items.push(newElement)
    this.setState({
      items: this.state.items
    })
  }

  deleteCallBack(key){
    console.log("Deleted!", key)

    this.state.items.splice(key, 1)
    this.setState({
      items: this.state.items
    })
  }

  render() {
    return (
      <div>
        <ItemList list={this.state.items} callBack={this.deleteCallBack}/>
        <AddItem callBack={this.callBackFunction} />
      </div>
    )
  }
}
ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
)

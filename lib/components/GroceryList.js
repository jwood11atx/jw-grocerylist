import React from "react";
import Controls from "./Controls";
import ItemList from "./ItemList";

export default class GroceryList extends React.Component {
  constructor(){
    super();
    this.state = {
      listArray: []
    }
  }

  delete(event){
    let index = event.target.id;
    let newArray = this.props.listArray.splice(index,1);
    this.setState({listArray: newArray});
  }

  displayListItem(inputText){
    let arr = this.state.listArray;
    arr.push(inputText);
    this.setState({listArray: arr})
  }

  render(){
    return(
      <div>
        <Controls displayListItem={this.displayListItem.bind(this)} />
        <section>
          <h1>All of the groceries!</h1>
        <ItemList listArray={this.state.listArray} delete={this.delete}/>
        </section>
      </div>
    )
  }
}

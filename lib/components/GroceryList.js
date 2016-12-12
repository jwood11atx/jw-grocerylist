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
          <p>All of the groceries!</p>
        <ItemList listArray={this.state.listArray}/>
        </section>
      </div>
    )
  }
}

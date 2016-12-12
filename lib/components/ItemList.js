import React from "react";

export default class ItemList extends React.Component {

  render(){
    return(
      <section>{this.props.listArray.map((text, i)=> {
        return (
          <div key={i}>
            <p>{text}</p>
            <button id={i} onClick={this.props.delete.bind(this)}>delete</button>
          </div>
        )
      })}</section>
    )
  }
}

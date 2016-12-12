import React from "react";

export default class ItemList extends React.Component {
  render(){
    return(
      <section>{this.props.listArray.map((text, i)=> {
        return <p key={i}>{text}</p>
      })}</section>
    )
  }
}

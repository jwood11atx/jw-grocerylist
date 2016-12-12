import React from "react";

export default class Controls extends React.Component {
  constructor(){
    super();
    this.state = {
      inputText: ""
    }
  }

  updateInputText(event){
    this.setState({inputText: event.target.value})
  }

  render(){
    return(
      <section>
        <input type="text" onChange={this.updateInputText.bind(this)}/>
        <input type="submit" onClick={this.props.displayListItem.bind(null, this.state.inputText)}/>
      </section>
    )
  }
}

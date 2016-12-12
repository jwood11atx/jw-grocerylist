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

  fieldCheck(){
    if(this.state.inputText){
      this.props.displayListItem(this.state.inputText);
      this.setState({inputText: ""});
      document.querySelector("#input-field").focus();
    }
  }

  render(){
    return(
      <section>
        <input id="input-field" type="text" value={this.state.inputText} onChange={this.updateInputText.bind(this)}/>
        <input type="submit" onClick={this.fieldCheck.bind(this)}/>
      </section>
    )
  }
}

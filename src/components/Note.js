import React from 'react';

class Note extends React.Component {
  render() {
    if(this.props.note){
      return(
        <div className="note">
          <input 
            className="title-input"
            value={this.props.note.title}
            onChange = {(e)=>this.props.handleTitleChange(e)}
          />
          <textarea
            rows="20"
            className="body-input"
            value={this.props.note.body}
            onChange = {(e)=>this.props.handleBodyChange(e)}
          />
        </div>
      )
    }else{
      return(
        <div className="note">
          Please add a new note
        </div>
      )
    }
  }
}

export default Note;
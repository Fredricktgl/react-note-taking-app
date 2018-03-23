import React from 'react';

class Note extends React.Component {
  render() {
    if(this.props.note){
      return(
        <div className="note">
        <h1>Title</h1>
          <input 
            className="title-input form-control"
            value={this.props.note.title}
            onChange = {(e)=>this.props.handleTitleChange(e)}
          /><br />
        <h1>Content</h1>
          <textarea
            rows="10"
            className="body-input  form-control"
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
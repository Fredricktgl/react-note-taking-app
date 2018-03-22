import React from 'react';

class Note extends React.Component {
  render() {
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
  }
}

export default Note;
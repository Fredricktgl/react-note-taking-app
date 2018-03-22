import React from 'react';

class Sidebar extends React.Component{
  renderNotes(array) {
    return array.map((note, index) => {
      return(
        <div onClick={() => this.props.changeCurrentIndex(index)} >
          <h4>{note.title}</h4>
          <p>{note.body}</p>
        </div>
      )
    })

  }
  
  render() {
    return(
      <ul className="sidebar">
        {this.renderNotes(this.props.notes)}
      </ul>
    )
  }
}

export default Sidebar;
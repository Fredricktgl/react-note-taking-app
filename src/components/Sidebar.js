import React from 'react';

class Sidebar extends React.Component{
  renderNotes(array) {
    if(array.length === 0){
      return(
        <div>No Notes founds</div>
      )
    }else{
      return array.map((note, index) => {
        return(
          <div onClick={() => this.props.changeCurrentIndex(index)} >
            <h4><b>{note.title.substring(0,50)}</b></h4>
            <p>{note.body.substring(0,100)}</p>
          </div>
        )
      })
    }
  }
  
  render() {
    return(
      <ul className="sidebar">
      <h2 className="text-center"><b>Notes</b></h2>
        {this.renderNotes(this.props.notes)}
      </ul>
    )
  }
}

export default Sidebar;
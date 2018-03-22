import React from 'react';
import Note from './Note'
import Sidebar from './Sidebar'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [
        {
          title: "Once upon a time",
          body: "In a Galaxy far far away"
        }
      ],
      currentNoteIndex: 0
    }
  }

  handleTitleChange(event){
    //console.log(event.target.value)
    let newNotesArray = this.state.notes.slice()
    let newNote = Object.assign({}, this.state.notes[this.state.currentNoteIndex])
    newNote.title = event.target.value
    newNotesArray[this.state.currentNoteIndex] = newNote

    this.setState({
      notes: newNotesArray
    })
  }

  handleBodyChange(event){
    //console.log(event.target.value)
    let newNotesArray = this.state.notes.slice()
    let newNote = Object.assign({}, this.state.notes[this.state.currentNoteIndex])
    newNote.body = event.target.value
    newNotesArray[this.state.currentNoteIndex] = newNote

    this.setState({
      notes: newNotesArray
    })
  }

  addNewNote() {
    //console.log('asdadad')
    let newNotesArray = this.state.notes.slice()
    let newObject = {title: " ", body: " "}
    newNotesArray.push(newObject)

    this.setState({
      notes: newNotesArray,
      currentNoteIndex: newNotesArray.length - 1
    })
  }

  removeNote() {
    let newNotesArray = this.state.notes.slice()
    newNotesArray.splice(this.state.currentNoteIndex, 1)

    this.setState({
      notes: newNotesArray,
      currentNoteIndex: newNotesArray.length - 1
    })
  }

  changeCurrentIndex(index){
    this.setState({
      currentNoteIndex: index
    })
  }

  render() {
    return(
    <div className="dashboard">
      <div className="title">
        <h1> My Note taking app </h1>
        <button onClick={()=>this.addNewNote()}>Add new note</button>
        <button onClick={()=>this.removeNote()}>Remove note</button>
      </div>

      <Note
       note={this.state.notes[this.state.currentNoteIndex]}
       handleTitleChange={(e)=>this.handleTitleChange(e)}
       handleBodyChange={(e)=>this.handleBodyChange(e)}
      />
      <Sidebar 
      notes={this.state.notes} 
      changeCurrentIndex={(index)=>this.changeCurrentIndex(index)}/>

    </div>
    )
  }
}
export default Dashboard;
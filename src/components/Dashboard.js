import React from 'react';
import Note from './Note'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [
        {
          title: "asdasdas",
          body: "eg bodyyyyyy"
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

  render() {
    return(
    <div>
      <Note
       note={this.state.notes[this.state.currentNoteIndex]}
       handleTitleChange={(e)=>this.handleTitleChange(e)}
       handleBodyChange={(e)=>this.handleBodyChange(e)}
      />
      <button onClick={()=>this.addNewNote()}>Add new note</button>
    </div>
    )
  }
}
export default Dashboard;
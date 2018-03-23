import React from 'react';
import Note from './Note'
import Sidebar from './Sidebar'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      currentNoteIndex: 0
    }
  }

  componentWillMount(){
    fetch('https://rails-api-app-note.herokuapp.com/notes')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          notes:data
        })
      })
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
  
  sync(){
    fetch(
      'https://rails-api-app-note.herokuapp.com/notes/sync',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 'message': this.state.notes })
      }
    ).then((response) => response.json())
     .then((data) => {
        this.setState({
          notes: data
        })
     })
  }

  render() {
    return(
    <div className="dashboard">
      <div className="title">
        <p className="display-4">My React Note-taking app</p>
      </div>

      <Note
       note={this.state.notes[this.state.currentNoteIndex]}
       handleTitleChange={(e)=>this.handleTitleChange(e)}
       handleBodyChange={(e)=>this.handleBodyChange(e)}
      />
      <Sidebar 
      notes={this.state.notes} 
      changeCurrentIndex={(index)=>this.changeCurrentIndex(index)}/>

      <div className="footer">
        <table className="controls" width="80%">
          <tr>
            <td><button className="btn btn-outline-primary" onClick={()=>this.addNewNote()}>Add new note</button></td>
            <td width="70%"><button className="btn btn-outline-danger" onClick={()=>this.removeNote()}>Remove note</button></td>
            <td class="text-right"><button className="btn btn-outline-success" onClick={()=>this.sync()}>Database Sync</button></td>
          </tr>
        </table>
      </div>
    </div>
    )
  }
}
export default Dashboard;
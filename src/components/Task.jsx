import React, { Component } from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: '',
      alertType: '',
      showAlert: false,
      noteInputValue: '',
      notes: []
    };
  }

  componentDidMount() {
    this.loadNotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showAlert !== this.state.showAlert && this.state.showAlert) {
      setTimeout(() => {
        this.setState({ showAlert: false });
      }, 2000)
    }
  }

  addNote = (e) => {
    e.preventDefault();

    const noteText = this.state.noteInputValue;
    if (noteText.trim() !== '') {
      this.addNoteToLocalStorage(noteText);
      this.setState({
        noteInputValue: '',
        showAlert: true,
        alertMessage: 'Nota agregada con éxito',
        alertType: 'success'
      }, () => {
        this.loadNotes();
      });
    }
  };

  editNote = (e) => {
    if (e.target.classList.contains('edit-button')) {
      const noteElement = e.target.parentNode;
      const noteId = noteElement.dataset.id;
      const existingNoteText = noteElement.querySelector('.note-text').textContent;

      const newNoteText = prompt('Escribe una nueva nota:', existingNoteText);

      if (newNoteText != null && newNoteText.trim() !== '') {
        this.updateNoteInLocalStorage(noteId, newNoteText);
        this.setState({
          showAlert: true,
          alertMessage: 'Nota Editada correctamente!',
          alertType: 'success'
        }, () => {
          this.loadNotes();
        });
      }
    }
  };

  deleteNote = (e) => {
    if (e.target.classList.contains('delete-button')) {
      const noteElement = e.target.parentNode;
      const noteId = noteElement.dataset.id;

      this.deleteNoteFromLocalStorage(noteId);
      this.setState({
        showAlert: true,
        alertMessage: 'Nota eliminada con éxito',
        alertType: 'success'
      }, () => {
        this.loadNotes();
      });
    }
  };

  loadNotes = () => {
    const notes = this.getNotesFromLocalStorage();
    this.setState({ notes });
  };

  getNotesFromLocalStorage = () => {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
      return [];
    } else {
      return JSON.parse(notes);
    }
  };

  addNoteToLocalStorage = (text) => {
    const notes = this.getNotesFromLocalStorage();
    const newNote = { id: Date.now(), text: text };
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  updateNoteInLocalStorage = (id, newText) => {
    const notes = this.getNotesFromLocalStorage();
    const noteToUpdate = notes.find((note) => note.id == id);
    if (noteToUpdate != null) {
      noteToUpdate.text = newText;
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  };

  deleteNoteFromLocalStorage = (id) => {
    const notes = this.getNotesFromLocalStorage();
    const updatedNotes = notes.filter((note) => note.id != id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  handleNoteInputChange = (e) => {
    this.setState({ noteInputValue: e.target.value });
  };

  render() {
    const { showAlert, alertMessage, alertType, noteInputValue, notes } = this.state;

    return (
      <div>
        <h1>Block de Notas</h1>
        {showAlert && (
          <div className={`alert ${alertType}`}>
            {alertMessage}
          </div>
        )}
        <form id="form" onSubmit={this.addNote}>
          <input type="text" id="noteInput" value={noteInputValue} onChange={this.handleNoteInputChange} />
          <button type="submit">Agregar nota</button>
        </form>
        <div id="notesContainer">
          {notes.map((note) => (
            <div key={note.id} className="note" data-id={note.id}>
              <span className="note-text">{note.text}</span>
              <button className="edit-button" onClick={this.editNote}>🖊</button>
              <button className="delete-button" onClick={this.deleteNote}>❌</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
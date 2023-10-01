import React, { Component } from "react";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: "",
      alertType: "",
      showAlert: false,
      noteInputValue: "",
      titleInputValue: "",
      notes: [],
    };
  }

  componentDidMount() {
    this.loadNotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showAlert !== this.state.showAlert && this.state.showAlert) {
      setTimeout(() => {
        this.setState({ showAlert: false });
      }, 2000);
    }
  }

  addNote = (e) => {
    e.preventDefault();

    const noteText = this.state.noteInputValue;
    const titleText = this.state.titleInputValue;
    if (noteText.trim() !== '' && titleText.trim() !== '' ) {
      this.addNoteToLocalStorage(noteText, titleText);
      this.setState(
        {
          noteInputValue: "",
          titleInputValue: "",
          showAlert: true,
          alertMessage: "Nota agregada con éxito",
          alertType: "success",
        },
        () => {
          this.loadNotes();
        }
      );
    }
  };

  editNote = (e) => {
    if (e.target.classList.contains("edit-button")) {
      const noteElement = e.target.parentNode;
      const noteId = noteElement.dataset.id;
      const existingNoteText =
        noteElement.querySelector(".note-text").textContent;

      const newNoteText = prompt("Escribe una nueva nota:", existingNoteText);

      if (newNoteText != null && newNoteText.trim() !== "") {
        this.updateNoteInLocalStorage(noteId, newNoteText);
        this.setState(
          {
            showAlert: true,
            alertMessage: "Nota Editada correctamente!",
            alertType: "success",
          },
          () => {
            this.loadNotes();
          }
        );
      }
    }
  };

  deleteNote = (e) => {
    if (e.target.classList.contains("delete-button")) {
      const noteElement = e.target.parentNode;
      const noteId = noteElement.dataset.id;

      this.deleteNoteFromLocalStorage(noteId);
      this.setState(
        {
          showAlert: true,
          alertMessage: "Nota eliminada con éxito",
          alertType: "success",
        },
        () => {
          this.loadNotes();
        }
      );
    }
  };

  loadNotes = () => {
    const notes = this.getNotesFromLocalStorage();
    this.setState({ notes });
  };

  getNotesFromLocalStorage = () => {
    let notes = localStorage.getItem("notes");
    if (notes === null) {
      return [];
    } else {
      return JSON.parse(notes);
    }
  };

  addNoteToLocalStorage = (text, titleText) => {
    const notes = this.getNotesFromLocalStorage();
    const newNote = { id: Date.now(), text: text, title: titleText };
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  updateNoteInLocalStorage = (id, newText) => {
    const notes = this.getNotesFromLocalStorage();
    const noteToUpdate = notes.find((note) => note.id == id);
    if (noteToUpdate != null) {
      noteToUpdate.text = newText;
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  };

  deleteNoteFromLocalStorage = (id) => {
    const notes = this.getNotesFromLocalStorage();
    alert(notes.id);
    const updatedNotes = notes.filter((note) => note.id != id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  handleNoteInputChange = (e) => {
    this.setState({ noteInputValue: e.target.value });
  };
  handleTitleInputChange = (e) => {
    this.setState({ titleInputValue: e.target.value });
  };

  render() {
    const { showAlert, alertMessage, alertType, noteInputValue, titleInputValue, notes } =
      this.state;

    return (
      <div>
        {showAlert && (
          <div className={`alert ${alertType}`}>{alertMessage}</div>
        )}
        <form
          id="form"
          onSubmit={this.addNote}
          className="border-b border-gray-200 h-32 flex items-center justify-center"
        >
          <textarea
            id="titleInput"
            placeholder="Titulo"
            value={titleInputValue}
            onChange={this.handleTitleInputChange}
            className="resize-none mx-5 w-96 h-20 text-justify p-2 rounded-md border-2 border-cyan-400 bg-gray-100 focus:border-blue-950 focus:bg-gray-200"
          />
          <textarea
            id="noteInput"
            placeholder="Texto"
            value={noteInputValue}
            onChange={this.handleNoteInputChange}
            className="resize-none mx-5 w-96 h-20 text-justify p-2 rounded-md border-2 border-cyan-400 bg-gray-100 focus:border-blue-950 focus:bg-gray-200"
          />
          <button
            type="submit"
            className="w-32 h-8 text-center rounded-md bg-gray-100 border-2 border-cyan-400 hover:border-blue-950 hover:bg-gray-200"
          >
            Agregar
          </button>
        </form>
        <div className="flex justify-center p-8 ">
          <div
            id="notesContainer"
            className="grid gap-16 grid-cols-4 justify-center"
          >
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-purple-300 p-2 h-64 rounded-xl"
                data-id={note.id}
              >
                <div>
                  <button className="edit-button" onClick={this.editNote}>
                    🖊
                  </button>
                  <button className="delete-button" onClick={this.deleteNote}>
                    ❌<span className="break-all">{note.title }</span>
                  </button>
                </div>
                <span className="break-all">{note.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;

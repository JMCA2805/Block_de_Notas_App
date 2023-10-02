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
      valueToSearch: "",
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
    if (noteText.trim() !== "" && titleText.trim() !== "") {
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
      console.log(noteElement);
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
    const {
      showAlert,
      alertMessage,
      alertType,
      noteInputValue,
      titleInputValue,
      notes,
    } = this.state;

    return (
      <div>
        <form
          id="form"
          onSubmit={this.addNote}
          className="border-b dark:border-gray-800 border-gray-300 sm:flex items-center justify-center"
        >
          <input
            type="text"
            id="titleInput"
            placeholder="Titulo"
            value={titleInputValue}
            onChange={this.handleTitleInputChange}
            className="resize-none mx-5 w-full sm:w-72 h-10 text-center p-2 rounded-md border-2 bg-gray-200 border-cyan-950 dark:border-blue-950 dark:bg-gray-900 dark:text-white"
          />
          <textarea
            id="noteInput"
            placeholder="Texto"
            value={noteInputValue}
            onChange={this.handleNoteInputChange}
            className="resize-none mx-5 w-full sm:w-96 h-20 text-justify p-2 rounded-md border-2 bg-gray-200 border-cyan-950 dark:border-blue-950 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-32 sm:w-24 h-8 text-center rounded-md dark:bg-gray-900 border-2 border-cyan-950 hover:border-cyan-800 bg-cyan-500 hover:bg-cyan-600 dark:border-blue-950 dark:hover:border-blue-900 dark:hover:bg-gray-800 dark:text-white"
          >
            Agregar
          </button>
        </form>
        <div className="w-full flex items-center justify-center h-12">
          <input
            id="searchInput"
            type="search"
            placeholder="Buscar"
            onChange={this.handleSetSearchText}
            className="w-full sm:w-64 h-8 text-center rounded-md border-cyan-950 bg-gray-200 dark:bg-gray-900 border-2 dark:border-blue-950 dark:hover:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          {showAlert && (
            <div className={`${alertType} dark:text-white text-center`}>
              {alertMessage}
            </div>
          )}
        </div>
        <div className="flex justify-center p-2 sm:p-8 ">
          <div
            id="notesContainer"
            className="grid gap-6 sm:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center w-full"
          >
            {notes
              .filter(
                (note) =>
                  note.title
                    .toUpperCase()
                    .includes(this.state.valueToSearch.toUpperCase()) ||
                  note.text
                    .toUpperCase()
                    .includes(this.state.valueToSearch.toUpperCase())
              )
              .sort((a, b) => a.id - b.id)
              .map((note) => (
                <div
                  key={note.id}
                  className="bg-cyan-600 dark:bg-cyan-800 p-2 h-48 sm:h-64 w-full rounded-xl"
                  data-id={note.id}
                >
                  <div className="w-full flex justify-center items-center">
                    <span className="break-all h-5 overflow-hidden text-center font-extrabold hover:overflow-visible hover:h-auto dark:text-white">
                      {note.title}
                    </span>
                  </div>
                  <button
                    className="edit-button rounded-full border dark:border-gray-800 border-gray-300"
                    onClick={this.editNote}
                  >
                    🖊
                  </button>
                  <button
                    className="delete-button rounded-full border dark:border-gray-800 border-gray-300 ml-1"
                    onClick={this.deleteNote}
                     >
                    ❌
                  </button>
                  <div className="border-t mt-1 border-gray-300 dark:border-gray-800 w-full overflow-auto max-h-24 sm:max-h-48">
                    <span className="note-text break-all dark:text-white">
                      {note.text}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;

class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }

  markIncomplete() {
    this.completed = false;
  }
}

class TodoList {
  constructor() {
    this.notes = [];
  }

  addNote(title, content) {
    if (title && content) {
      const note = new Note(title, content);
      this.notes.push(note);
    }
  }

  removeNote(title) {
    const index = this.notes.findIndex((note) => note.title === title);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  editNote(title, newTitle, newContent) {
    const note = this.notes.find((note) => note.title === title);
    if (note) {
      note.title = newTitle;
      note.content = newContent;
    }
  }

  getNoteInfo(title) {
    const note = this.notes.find((note) => note.title === title);
    if (note) {
      return `Title: ${note.title}\nContent: ${note.content}\nCompleted: ${note.completed}`;
    }
  }

  listNotes() {
    return this.notes.map((note) => note.title);
  }

  getTotalNotes() {
    return this.notes.length;
  }

  getIncompleteNotesCount() {
    return this.notes.filter((note) => !note.completed).length;
  }

  searchNotesByName(name) {
    return this.notes.filter((note) => note.title.includes(name)).map((note) => note.title);
  }

  sortNotesByStatus(reverse = false) {
    this.notes.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    if (reverse) {
      this.notes.reverse();
    }
  }
}


const todoList = new TodoList();

todoList.addNote("Sport", "go to the gym");
todoList.addNote("Bills", "pay the bills");
todoList.addNote("Training", "do homework");
todoList.notes[0].markCompleted();


const foundNotes = todoList.searchNotesByName("Training");
console.log(foundNotes);


todoList.sortNotesByStatus();
for (const note of todoList.notes) {
  console.log(`${note.title} - Completed: ${note.completed}`);
};


todoList.getTotalNotes();

const incopmpletesNotes = todoList.getIncompleteNotesCount();
console.log(incopmpletesNotes);







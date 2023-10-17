class TodoList {
    constructor() {
      this.notes = [];
    }
  
    addNote(title, content) {
      if (title && content) {
        const note = {
          title,
          content,
          created: new Date(),
          updated: new Date(),
          done: false,
        };
        this.notes.push(note);
      }
    }
  
    editNote(index, title, content) {
      if (this.notes[index]) {
        this.notes[index].title = title;
        this.notes[index].content = content;
        this.notes[index].updated = new Date();
      }
    }
  
    deleteNote(index) {
      if (this.notes[index]) {
        this.notes.splice(index, 1);
      }
    }
  
    markAsDone(index) {
      if (this.notes[index]) {
        this.notes[index].done = true;
      }
    }
  
    getNoteInfo(index) {
      if (this.notes[index]) {
        return this.notes[index];
      }
      return null;
    }
  
    getNotes() {
      return this.notes;
    }
  
    getNoteCount() {
      return this.notes.length;
    }
  
    getRemainingNotesCount() {
      return this.notes.filter((note) => !note.done).length;
    }
  
    searchNotesByTitle(title) {
      return this.notes.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      );
    }
  
    sortNotesByStatus() {
      return this.notes.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
    }
  
    sortNotesByDateCreated(ascending = true) {
      return this.notes.sort((a, b) =>
        ascending
          ? a.created - b.created
          : b.created - a.created
      );
    }
  
    sortNotesByDateUpdated(ascending = true) {
      return this.notes.sort((a, b) =>
        ascending
          ? a.updated - b.updated
          : b.updated - a.updated
      );
    }
  }
  
  // Приклад використання
  const todoList = new TodoList();
  todoList.addNote('Завдання 1', 'Важливо зробити цю роботу.');
  todoList.addNote('Завдання 2', 'Підготувати презентацію.');
  todoList.addNote('Завдання 3', 'Прибрати вдома.');
  console.log('Список нотаток:', todoList.getNotes());
  
  todoList.markAsDone(0);
  console.log('Завдання 1 позначено як виконане.');
  console.log('Залишилось невиконаних завдань:', todoList.getRemainingNotesCount());
  
  const searchResults = todoList.searchNotesByTitle('завдання');
  console.log('Результати пошуку за "завдання":', searchResults);
  
  const sortedByStatus = todoList.sortNotesByStatus();
  console.log('Сортування за статусом:', sortedByStatus);
  
  const sortedByDateCreated = todoList.sortNotesByDateCreated();
  console.log('Сортування за датою створення:', sortedByDateCreated);
import { loadNotes, saveNotes } from './storage.js';
import { renderNotes, getInputValue, resetInput } from './dom.js';
import { createNote } from './noteFactory.js';

const SELECTORS = {
  form: '#note-form',
  input: '#note-input',
  list: '#notes-list',
  clear: '#clear-notes',
};

export function initNotesApp() {
  const form = document.querySelector(SELECTORS.form);
  const input = document.querySelector(SELECTORS.input);
  const list = document.querySelector(SELECTORS.list);
  const clearButton = document.querySelector(SELECTORS.clear);

  let notes = loadNotes();
  renderNotes(notes, list);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = getInputValue(input);
    if (!text.trim()) return;

    notes = [createNote(text), ...notes];
    saveNotes(notes);
    renderNotes(notes, list);
    resetInput(input);
  });

  list.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="delete"]');
    if (!button) return;
    const { id } = button.dataset;
    notes = notes.filter((note) => note.id !== id);
    saveNotes(notes);
    renderNotes(notes, list);
  });

  clearButton.addEventListener('click', () => {
    if (!notes.length) return;
    notes = [];
    saveNotes(notes);
    renderNotes(notes, list);
  });
}

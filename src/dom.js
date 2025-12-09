import { formatDate } from './formatDate.js';

export function renderNotes(notes, listEl) {
  listEl.innerHTML = '';
  if (!notes.length) {
    listEl.innerHTML = `<li class="note">No notes yet. Add your first one above.</li>`;
    return;
  }

  notes.forEach((note) => {
    listEl.appendChild(createNoteItem(note));
  });
}

export function getInputValue(inputEl) {
  return inputEl.value;
}

export function resetInput(inputEl) {
  inputEl.value = '';
  inputEl.focus();
}

function createNoteItem(note) {
  const item = document.createElement('li');
  item.className = 'note';
  item.dataset.id = note.id;

  const content = document.createElement('div');
  const text = document.createElement('p');
  text.className = 'note__text';
  text.textContent = note.text;

  const meta = document.createElement('p');
  meta.className = 'note__meta';
  meta.textContent = formatDate(note.createdAt);

  content.append(text, meta);

  const actions = document.createElement('div');
  actions.className = 'note__actions';
  const delButton = document.createElement('button');
  delButton.setAttribute('type', 'button');
  delButton.dataset.action = 'delete';
  delButton.dataset.id = note.id;
  delButton.textContent = 'Delete';
  actions.appendChild(delButton);

  item.append(content, actions);
  return item;
}

const STORAGE_KEY = 'notes-manager';

let memoryFallback = '[]';

export function loadNotes() {
  const store = getStore();
  const saved = store.get(STORAGE_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveNotes(notes) {
  const store = getStore();
  store.set(STORAGE_KEY, JSON.stringify(notes));
}

function getStore() {
  try {
    const testKey = '__notes_test__';
    localStorage.setItem(testKey, 'ok');
    localStorage.removeItem(testKey);
    return {
      get: (key) => localStorage.getItem(key),
      set: (key, value) => localStorage.setItem(key, value),
    };
  } catch {
    // fallback to in-memory store so the app still works even if storage is blocked
    return {
      get: (key) => (key === STORAGE_KEY ? memoryFallback : null),
      set: (key, value) => {
        if (key === STORAGE_KEY) memoryFallback = value;
      },
    };
  }
}

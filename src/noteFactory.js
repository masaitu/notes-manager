export function createNote(text) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };
}

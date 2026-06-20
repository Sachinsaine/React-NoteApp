import { useState } from "react";
import styles from "./notes.module.css";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(1);

  const handleCreateNote = () => {
    setNotes([...notes, { id: Date.now(), text: "", notNumber: notes.length }]);
    setCount(count + 1);
  };

  const handleTextChange = (id, value) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: value } : note)),
    );
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Notes </h1>
        <button className={styles.createBtn} onClick={handleCreateNote}>
          + Create Note
        </button>
      </div>

      {notes.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🗒️</div>
          <p>No notes yet — hit "Create Note" to get started</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {notes.map((note, index) => (
            <div key={note.id} className={styles.noteCard}>
              <div className={styles.cardHeader}>
                <span className={styles.noteLabel}>Note {index + 1} </span>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </div>
              <textarea
                className={styles.textarea}
                placeholder="Start typing your note..."
                value={note.text}
                onChange={(e) => handleTextChange(note.id, e.target.value)}
              />
              <span className={styles.charCount}>
                {note.text.length} characters
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

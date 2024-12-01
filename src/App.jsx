import React from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/notes').then((response) => {
      setNotes(response.data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(notes);

  return (
      <>
        {notes.length > 0 ? (
            notes.map((note) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <p>ID: {note.id}</p>
                  <p>Title: {note.title}</p>
                  <p>Content: {note.content}</p>
                  <p>Created At: {note.created_at}</p>
                  <p>Updated At: {note.updated_at}</p>
                  <hr/>
                </div>
            ))
        ) : (
            <p>Loading...</p>
        )}
      </>
  );

}

export default App

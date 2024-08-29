import './App.css';
import Content from './components/Content';
import Form from './components/Form';
import NoteList from './components/NoteList';

function App() {

  return (
    <div className='container text-center'>
      <Content />
      <Form />
      <NoteList/>
    </div>
  );
}

export default App;

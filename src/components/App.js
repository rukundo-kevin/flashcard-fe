import '../styles/App.css';
import FlashcardList from './FlashcardList';

function App() {
  return (
    <h1 className="text-3xl font-bold ">
      Hello world!
      <FlashcardList id={3}/>
    </h1>
  );
}

export default App;

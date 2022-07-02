import '../styles/App.css';
import Signup from './Auth/Signup';
import FlashcardList from './FlashcardList';

function App() {
  return (
    <>
      <Signup />
      <FlashcardList id={3}/>
    </>
  );
}

export default App;

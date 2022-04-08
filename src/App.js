import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Todo from './components/Todo/Todo';
import Todolist from './components/Todo/Todolist/Todolist';

function App() {

  return (
    <>
    <Header/>
    <Todo/>
    <div className='container mt-4'>
      <Todolist />
    </div>
    <Footer/>
    </>
  );
}

export default App;

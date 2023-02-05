import { Routes ,Route } from 'react-router-dom';
import './App.css';
import TodoApp from './component/TodoApp';
import Editcomp from './component/EditComp';

function App() {
  return (
    <Routes>
        <Route path='/' element={<TodoApp />} />
        <Route path='/edit/:id' element={<Editcomp />} />
    </Routes>
  );
}

export default App;

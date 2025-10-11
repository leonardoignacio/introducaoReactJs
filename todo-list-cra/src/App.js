import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Efeito para carregar tarefas do localStorage na primeira renderização
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Efeito para salvar tarefas no localStorage sempre que 'tasks' mudar
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">Lista de Tarefas</h1>
      <form className="form" onSubmit={handleAddTask}>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nova tarefa..."
        />
        <button type="submit" className="button">Adicionar</button>
      </form>
      <ul className="list">
        {tasks.map(task => (
          <li key={task.id} className="listItem">
            <span>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)} className="deleteButton">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

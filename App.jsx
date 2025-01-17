import  { useState } from 'react';
import './App.css';

function App() {
  // Estado para armazenar o texto da nova tarefa
  const [task, setTask] = useState('');

  // Estado para armazenar a lista de tarefas, cada uma com 'text' e 'completed'
  const [tasks, setTasks] = useState([]);

  // Estado para contar o número de tarefas concluídas
  const [completedCount, setCompletedCount] = useState(0);

  // Função para adicionar uma nova tarefa à lista
  const handleAddTask = () => {
    if (task.trim()) {
      // Adiciona a nova tarefa à lista
      setTasks([...tasks, { text: task, completed: false }]);
      // Limpa o campo de entrada de texto
      setTask('');
    }
  };

  // Função para alternar o estado de conclusão de uma tarefa
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks]; // Copia a lista de tarefas
    updatedTasks[index].completed = !updatedTasks[index].completed;

    // Atualiza o contador de tarefas concluídas
    if (updatedTasks[index].completed) {
      setCompletedCount(completedCount + 1);
    } else {
      setCompletedCount(completedCount - 1);
    }

    // Atualiza a lista de tarefas
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>

      {/* Formulário para digitar novas tarefas */}
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Atualiza o estado 'task' conforme o usuário digita
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
      </div>

      {/* Lista de tarefas */}
      <div className="task-list">
        <h2>Tarefas:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none', // Risca a tarefa concluída
              }}
            >
              <input
                type="checkbox"
                checked={task.completed} // Marca a tarefa como concluída ou não
                onChange={() => toggleTaskCompletion(index)} // Chama a função para alternar o estado de conclusão
              />
              {task.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Exibe o número de tarefas concluídas */}
      <div className="completed-count">
        <p>Tarefas Concluídas: {completedCount}</p>
      </div>
    </div>
  );
}

export default App;

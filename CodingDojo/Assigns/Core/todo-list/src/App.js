import './App.css';
import React, { useState, useEffect } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDo from './components/Todo';
import FadeIn from 'react-fade-in';

function App() {
  const [todos, setTodos] = useState([]);

	useEffect(() => {
		const TODOLIST = localStorage.getItem('TODOLIST');
		if (TODOLIST) {
			setTodos(JSON.parse(TODOLIST));
		}
	}, []);

	useEffect(() => {
		if (todos.length > 0) localStorage.setItem('TODOLIST', JSON.stringify(todos));
	}, [todos]);


	// Adding new todo
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, { task: e.target.task.value, status: e.target.status.checked }]);
		e.target.task.value = '';
	};

	// Deleting todo
	const handleDelete = (index) => {
		setTodos(todos.filter((todo, i) => i !== index));
	};

	// Checking todo
	const handleCheck = (index) => {
		// clone the array
		const newTodos = [...todos];

		// toggles the checkbox
		setTodos((newTodos[index].status = !todos[index].status));

		// set the new state
		setTodos(newTodos);
	};

	// Editing todo

	const handleEditInput = (e, index) => {
		const newTodos = [...todos];
		newTodos[index].task = e.target.value;
		setTodos(newTodos);
	};

	return (
		<React.Fragment>
			<div className='col-6 mx-auto my-3'>
				<h1 className='text-center mb-3'>Todo List</h1>
				<hr />
				<ToDoInput onChange={handleSubmit} />
				<hr />
				{todos.map((task, index) => {
					return (
						<FadeIn key={index}>
							<ToDo
								key={index}
								item={task}
								index={index}
								onDelete={() => handleDelete(index)}
								onCheck={() => handleCheck(index)}
								onEditInput={(e) => handleEditInput(e, index)}
							/>
						</FadeIn>
					);
				})}
			</div>
		</React.Fragment>
	);
}

export default App;

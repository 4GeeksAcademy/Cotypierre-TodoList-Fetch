import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValeu, setInputValeu] = useState("");
	const [todos, setTodos] = useState ([]);
	return (
		<div className="container">
			<h1>Lista de Tareas</h1>
			
				
					<input type="text"
					onChange={(e)=> setInputValeu(e.target.value)}
					value={inputValeu}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat([inputValeu]));
							setInputValeu("");
						}
						}}
					placeholder="¿Que ocupas hacer?"></input>
				
				<ul>
					{todos.map((item,index) => (
						<li key={index}>
							{item} <i className="fas fa-trash-alt" onClick={() => setTodos(todos.filter((t, currentIndex) => index !=currentIndex))}></i>
						</li>
					))}
				</ul>
			
			<div>{todos.length} Tareas</div>
		</div>
	);
};

export default Home;

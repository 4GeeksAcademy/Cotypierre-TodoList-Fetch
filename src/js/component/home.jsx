import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	useEffect(()=>{
		fetch('https://playground.4geeks.com/apis/fake/todos/user/cotypierre')
			.then(resp => {
				
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data);
				setTodos(data)
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	},[])



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

							fetch('https://playground.4geeks.com/apis/fake/todos/user/cotypierre', {
								method: "PUT",
								body: JSON.stringify([...todos,{label: inputValeu, done: false}]),
								headers: {
									"Content-Type": "application/json"
								}
								})
								.then(resp => {
									
									return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
								})
								.then(data => {
									//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
									console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
									setTodos([...todos,{label: inputValeu, done: false}]);
								})
								.catch(error => {
									//manejo de errores
									console.log(error);
								});

							setInputValeu("");
						}
						}}
					placeholder="¿Que ocupas hacer?"></input>
				
				<ul>
					{todos.map((item,index) => (
						<li key={index}>
							{item.label} <i className="fas fa-trash-alt" onClick={() => {

								console.log(todos)
							
								const filterTodos = todos.filter((t, currentIndex) => index !=currentIndex)
									console.log(filterTodos)

							fetch('https://playground.4geeks.com/apis/fake/todos/user/cotypierre', {
								method: "PUT",
								body: JSON.stringify(filterTodos),
								headers: {
								"Content-Type": "application/json"
								}
								})
								.then(resp => {
									
									return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
								})
								.then(data => {
									//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
									console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
								})
								.catch(error => {
									//manejo de errores
									console.log(error);
								});


									setTodos(filterTodos)
								}}></i>
						</li>
					))}
				</ul>
			
			<div>{todos.length} Tareas</div>
		</div>
	);
};

export default Home;

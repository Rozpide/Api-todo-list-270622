import React, { useEffect, useState } from "react";
import TareasPendientes from "./TareasPendientes.jsx";
import {getTodos, putTodos, deleteTodos} from "../app.js";

const Home = () => {
	const [tareas, cambiarTareas] = useState([]);


	useEffect(() => {
        getTodos()
		.then(res => res.json())
     	.then(data => cambiarTareas(data))
    	.catch(err => console.error('error:' + err));

    }, []);

	const agregarTarea = (tarea) => {
		const auxTarea = [...tareas, tarea];
		putTodos(auxTarea)
		.then(res => res.json())
    	.catch(err => console.error('error:' + err));
		cambiarTareas(auxTarea);
	};

	const deleteTodos = (index) => {
		console.log(index);
		const auxTarea = tareas.filter((nombreTarea, auxIndex) => {
			if (index !== auxIndex) return nombreTarea;
		});
		putTodos(auxTarea)
		.then(res => res.json())
    	.catch(err => console.error('error:' + err));
		cambiarTareas(auxTarea);
	};

	return (
		<div className="fondo">
			<h1>
				<b>
					<i>LISTA DE TAREAS</i>
				</b>
			</h1>
			<div className="hojaPrincipal">
				<TareasPendientes agregarTarea={agregarTarea} />

				{tareas.map((nombreTarea, index) => {
					return (
						<div key={index}>
							<h4 id="hoja1">
								{index + 1}.- {nombreTarea.label}
								<button
									className="btn"
									onClick={() =>
										eliminarTarea(index)
									}></button>
							</h4>
						</div>
					);
				})}
			</div>

			<div className="hoja2">
				<legend>
					<h6>tareas pendientes: </h6>
				</legend>
			</div>
			<div className="hoja3"></div>
		</div>
	);
};

export default Home;
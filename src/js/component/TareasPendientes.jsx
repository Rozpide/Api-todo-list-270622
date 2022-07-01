import React, { useState } from "react";

const TareasPendientes = (props) => {

	const [nuevaTarea, cambiarNuevaTarea]=useState({label:"",done:false});
	
	const change = (e) => {
		cambiarNuevaTarea({label:e.target.value,done:false})
		
	};

	const guardarNombre = () => {
		if (nuevaTarea && nuevaTarea.label.length > 0) {
			props.agregarTarea(nuevaTarea);
		}
	};

	return (
		<>
			<h3>Añadir tareas : </h3>
			<input
				className="pencil"
				type="text"
				onChange={change}
				placeholder="Añadir tareas?.."
			/>

			<button onClick={guardarNombre}>
				<b>Añadir</b>{" "}
			</button>
		</>
	);
};

export default TareasPendientes;
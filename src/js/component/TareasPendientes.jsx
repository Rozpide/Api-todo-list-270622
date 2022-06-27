import React, { useState } from "react";

const TareasPendientes = (props) => {
	const [nombreTarea, cambiarNombreTarea] = useState("");

	const change = (e) => {
		const value = e.target.value;
		cambiarNombreTarea(value);
	};

	const guardarNombre = () => {
		if (nombreTarea && nombreTarea.length > 0) {
			props.agregarTarea(nombreTarea);
		}
	};

	return (
		<>
			<h3>Añadir tareas : </h3>
			<input
				class="pencil"
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
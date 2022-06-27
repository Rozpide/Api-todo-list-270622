import React, { useState } from "react";
import TareasPendientes from "./TareasPendientes.jsx";

const Home = () => {
	const [tareas, cambiarTareas] = useState([]);
	const agregarTarea = (nombreTarea) => {
		const auxTarea = [...tareas, nombreTarea];
		cambiarTareas(auxTarea);
	};

	const eliminarTarea = (index) => {
		const auxTarea = tareas.filter((nombreTarea, auxIndex) => {
			if (index !== auxIndex) return nombreTarea;
		});
		cambiarTareas(auxTarea);
	};

	return (
		<div className="fondo">
			<h1>
				<b>
					<i>LISTA DE TAREAS</i>
				</b>
			</h1>
			<div class="hojaPrincipal">
				<TareasPendientes agregarTarea={agregarTarea} />

				{tareas.map((nombreTarea, index) => {
					return (
						<div key={index}>
							<h4 id="hoja1">
								{index + 1}.- {nombreTarea}
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
					<h6>tareas pendientes</h6>
				</legend>
			</div>
			<div className="hoja3"></div>
		</div>
	);
};

export default Home;
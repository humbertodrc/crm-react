import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const VerCliente = () => {
	const [cliente, setCliente] = useState({});
	const [cargando, setCargando] = useState(false);

	const {id} = useParams();

	const obtenerClienteAPI = async () => {
		setCargando(!cargando);
		try {
			const url = `http://localhost:4000/clientes/${id}`;
			const respuesta = await fetch(url);
			const resultado = await respuesta.json();
			setCliente(resultado);
		} catch (error) {
			console.log(error);
		}
		setCargando(false);
	};

	console.log(cargando);

	useEffect(() => {
		obtenerClienteAPI();
	}, []);

	return (
		<div>
			{cargando ? (
				"Cargando...."
			) : (
				<>
					<h1 className="font-black text-4xl text-blue-900">
						Ver cliente: {cliente.nombre}
					</h1>
					<p className=" mt-3">informacion del cliente</p>

					<p className=" text-2xl text-gray-600 mt-10">
						<span className="  text-gray-800 uppercase font-bold">
							Cliente:
						</span>
						{cliente.nombre}
					</p>
					<p className=" text-2xl text-gray-600 mt-4">
						<span className="  text-gray-800 uppercase font-bold">Email:</span>
						{cliente.email}
					</p>
					{/* Mostar notas en caso de que existan */}
					{cliente.telefono && (
						<p className=" text-2xl text-gray-600 mt-4">
							<span className="  text-gray-800 uppercase font-bold">
								Teléfono:
							</span>
							{cliente.telefono}
						</p>
					)}
					<p className=" text-2xl text-gray-600 mt-4">
						<span className="  text-gray-800 uppercase font-bold">
							Empresa:
						</span>
						{cliente.empresa}
					</p>
					{/* Mostar notas en caso de que existan */}
					{cliente.otas && (
						<p className=" text-2xl text-gray-600 mt-4">
							<span className="  text-gray-800 uppercase font-bold">
								Notas:
							</span>
							{cliente.notas}
						</p>
					)}
				</>
			)}
		</div>
	);
};

export default VerCliente;

import axios from "axios";
import { notFound } from "next/navigation";

async function getUsuario(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await axios.get(url);
  return response.data;
}

export default async function UsuarioDetalles({ params }) {
  const { id } = params;
  const usuario = await getUsuario(id);

  if (!usuario) {
    return notFound();
  }

  return (
    <>
      <h1>Detalles del Usuario: {usuario.name}</h1>
      <p><strong>Dirección:</strong> {usuario.address.street}, {usuario.address.suite}, {usuario.address.city}, {usuario.address.zipcode}</p>
      <p><strong>Latitud:</strong> {usuario.address.geo.lat}</p>
      <p><strong>Longitud:</strong> {usuario.address.geo.lng}</p>
      <p><strong>Teléfono:</strong> {usuario.phone}</p>
      <p><strong>Sitio Web:</strong> <a href={`http://${usuario.website}`} target="_blank" rel="noopener noreferrer">{usuario.website}</a></p>
    </>
  );
}

import axios from "axios";
const apiUrl = "https://proyecto-backend-jh-528473450808.europe-west1.run.app/api"; 

export const obtenerProductosServicio = async () => {
  try {
    const respuesta = await axios.get(`${apiUrl}/productos/`);
    if (respuesta.data && respuesta.data.ok) {
      return respuesta.data;
    } else {
      throw new Error(respuesta.data?.mensaje || "Error al obtener los productos");
    }
  } catch (error) {
    throw error;
  }
};

export const obtenerCategoriasServicio = async () => {
  try {
    const respuesta = await axios.get(`${apiUrl}/productos/categorias/all`);
    
    if (respuesta.data.ok) {
      return respuesta.data.categorias;
    } else {
      throw new Error(respuesta.data.mensaje || "Error al obtener categorías");
    }
  } catch (error) {
    throw error;
  }
};
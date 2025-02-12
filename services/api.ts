import axios from "axios";

// URL base de la API (Asegúrate de definir NEXT_PUBLIC_API_URL en tu .env)
const base_url = process.env.NEXT_PUBLIC_API_URL;

console.log("base_url", base_url)

// Instancia de Axios con configuración base
export const apiInstance = axios.create({
  baseURL: base_url + "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor de solicitudes
export const axiosInterceptor = () => {
  apiInstance.interceptors.request.use(
    (request) => {
      console.log("Procesando solicitud:", request);
      return request;
    },
    (error) => {
      console.error("Error en la solicitud:", error);
      return Promise.reject(error);
    }
  );

  // Interceptor de respuestas (Opcional, pero útil para manejar errores)
  apiInstance.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      console.error("Error en la respuesta:", error.response || error);
      return Promise.reject(error);
    }
  );
};

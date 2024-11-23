const ciudad = "Montevideo"; // ciudad a buscar
const apiKey = "5dace03188309300353d192542e330d2"; // clave que me da la api
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

fetch(url)
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then((datos) => {
    console.log(datos); 
    document.getElementById("clima").innerText = `La temperatura en ${ciudad} es de ${datos.main.temp}°C`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
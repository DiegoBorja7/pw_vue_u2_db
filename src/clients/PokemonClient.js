import axios from "axios";

//Funcion de consumir API Pokemon en forma funcional
const consumirAPIPokemon = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log("Respuesta:", response.data);
    return response.data; // ← Ahora sí retorna
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

//Facade para exportar la funcion de consumir API Pokemon
export default async function ConsumirAPIFacade() {
  return await consumirAPIPokemon();
}

//obtener numeros aleatorios entre 1 y 151
function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

//obtener vector numerico de 4 numeros aleatorios entre 1 y 200
const obtenerVectorNumerico = () => {
  const vectorNumerico = [];
  for (let i = 0; i < 4; i++) {
    vectorNumerico.push(obtenerNumeroAleatorio(1, 1000));
  }
  return vectorNumerico;
};

const obtenerPokemons = (vectorNumerico) => {
  const pokemon1 = consumirAPIPokemon(vectorNumerico[0]);
  const pokemon2 = consumirAPIPokemon(vectorNumerico[1]);
  const pokemon3 = consumirAPIPokemon(vectorNumerico[2]);
  const pokemon4 = consumirAPIPokemon(vectorNumerico[3]);

  const pokemon1Data = {};
  const pokemon2Data = {};
};

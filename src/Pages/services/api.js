import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/",
});

// Acabou sendo meio desnecessário aqui pois já adiconamos diretamente no fetch e funcionou mas deixamos aqui mesmo assim.

export default api;
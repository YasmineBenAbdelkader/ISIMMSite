import 'regenerator-runtime/runtime';
import axios from 'axios';

const BASE_URL = 'http://172.16.50.90:5501';

export const ObtenirDernieresActualites = async () => {
    try {
        console.log("Récupération des dernières actualités en cours...");
        const response = await axios.get(`${BASE_URL}/Actualite/last-actu`);
        console.log("Données des actualités récupérées avec succès :", response.data.data);
        return response.data.data;
    } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
    }
};

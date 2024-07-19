import axios from 'axios';

export default async function verifySiret(siret: string, apiKey: string): Promise<any> {
    const url = `https://api.insee.fr/entreprises/sirene/V3/siret/${siret}`;
    const headers = {
        'Authorization': `Bearer ${apiKey}`
    };
    
    try {
        const response = await axios.get(url, { headers });
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Error:', error.response.status, error.response.statusText);
            return null;
        } else {
            console.error('Unexpected Error:', error);
            return null;
        }
    }
}
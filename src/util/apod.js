const api_key = 'HsLqh3Cj31zxheq43H69jo1uU85Oxarg7JGcAjwF';

const getApodData = async () => {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
        if (!response.ok) {
            throw new Error('Error to obtain data from api');
        }
        const data = await response.json();
        return data;
    } catch (error) { throw error }
}

export default getApodData;
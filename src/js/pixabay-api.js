// pixabay-api.js

export async function fetchImages(query, page = 1) {
    const API_KEY = '44189904-4675a190af98c4e4efc911d57';
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}

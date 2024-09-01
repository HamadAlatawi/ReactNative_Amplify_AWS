import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { extractTheSoulOfTheUser } from '../auth/sessionToken.ts'
import { API_URL } from "./endpoints/movies.ts";

async function getIdToken() {
    try {
        const { idToken, userSub } = await extractTheSoulOfTheUser();
        if (!idToken || !userSub) {
            throw new Error('ID token or user sub not available');
        }
        return idToken;
    } catch (error) {
        console.error("Error fetching id Token:", error);
        throw error;
    }
}

async function fetchMovies() {
    try {
        const idToken = await getIdToken();
        const response = await fetch(`${API_URL}/dev/movies`, {
            headers: {
                Authorization: `Bearer ${idToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}

export function useFavoriteMovies() {
    return useQuery({
        queryKey: ['favoriteMovies'],
        queryFn: async () => {
            try {
                const idToken = await getIdToken();
                const response = await fetch(`${API_URL}/dev/movies/favorites`, {
                    headers: { 'Authorization': `Bearer ${idToken}` }
                });
                if (!response.ok) throw new Error(`Failed to fetch favorite movies: ${response.status}`);
                return response.json();
            } catch (error) {
                console.error('Error fetching favorite movies:', error);
                throw error;
            }
        }
    });
}

export function useFavoriteMovie() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (movieId: string) => {
            try {
                const idToken = await getIdToken();
                const response = await fetch(`${API_URL}/dev/movies/${movieId}/favorite`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({}) // Empty body for POST request
                });
                if (!response.ok) throw new Error(`Failed to favorite movie: ${response.status}`);
                return response.json();
            } catch (error) {
                console.error('Error favoriting movie:', error);
                throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favoriteMovies'] });
        }
    });
}

export function useUnfavoriteMovie() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (movieId: string) => {
            try {
                const idToken = await getIdToken();
                const response = await fetch(`${API_URL}/dev/movies/${movieId}/unfavorite`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                });
                if (!response.ok) throw new Error(`Failed to unfavorite movie: ${response.status}`);
                return response.json();
            } catch (error) {
                console.error('Error unfavoriting movie:', error);
                throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favoriteMovies'] });
        }
    });
}

export function useMovies() {
    return useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
        retry: 3,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
}
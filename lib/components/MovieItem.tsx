import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFavoriteMovie, useUnfavoriteMovie } from "../api/movies.ts";
import styles from "../styles/styles.ts"
import { MovieItemProps } from "../types/movie.ts";



function MovieItem({ id, title, type, year, description, isFavorite: initialIsFavorite }: MovieItemProps) {
    const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
    const [isLoading, setIsLoading] = useState(false);
    const favoriteMovie = useFavoriteMovie();
    const unFavoriteMovie = useUnfavoriteMovie();

    async function strip(input : string){
        const index = input.indexOf("#");
        return index !== -1 ? input.slice(index + 1) : input;
    }

    const handleFavoriteClick = async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            if (isFavorite) {
                await unFavoriteMovie.mutateAsync(await strip(id));
            } else {
                await favoriteMovie.mutateAsync(await strip(id));
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error('Error toggling favorite status:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.movieItem}>
            <Text style={styles.movieTitle}>{title}</Text>
            <View style={styles.movieDescription}>
                <Text style={{fontWeight : "bold"}}>Type: {type}</Text>
                <Text>Year: {year}</Text>
                <Text style={styles.plot}>{description}</Text>
            </View>
            <TouchableOpacity
                style={[
                    styles.favoritizeMovie,
                    {
                        backgroundColor: isFavorite ? "red" : "transparent",
                        opacity: isLoading ? 0.5 : 1
                    }
                ]}
                onPress={handleFavoriteClick}
                disabled={isLoading}
            />
        </View>
    );
}

export default MovieItem;
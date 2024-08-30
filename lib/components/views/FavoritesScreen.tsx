import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useFavoriteMovies, useUnfavoriteMovie } from "../../api/movies.ts";
import styles from "../../styles/styles.ts"
import {FavoriteMovie} from "../../types/movie.ts";

function FavoriteMovies() {
    const {
        data: favorites,
        isLoading,
        error,
        refetch } = useFavoriteMovies();
    const { mutateAsync: unFavoriteMovieAsync, isLoading: isUnFavoriting } = useUnfavoriteMovie();
    const [removingMovies, setRemovingMovies] = useState<{ [key: string]: boolean }>({});


    async function strip(input : string){
        const index = input.indexOf("#");
        return index !== -1 ? input.slice(index + 1) : input;
    }

    const getHeader = () =>{
        return <View style={styles.favoriteHeader}>
            <Text style={styles.header}>Favorite Movies</Text>
        </View>
    }

    const getFooter = () =>{
        return
    }
    useEffect(() => {
        const init = async () => {
            try {
                await refetch();
            } catch(error) {
                console.log("An error occurred while fetching favorites: ", error)
            }
        };
        init();
    }, [refetch]);

    const handleRemoveFavorite = async (movieId: string) => {
        try {
            setRemovingMovies(prev => ({ ...prev, [movieId]: true }));
            await unFavoriteMovieAsync(await strip(movieId));
            await refetch();
        } catch (error) {
            console.error('Error removing favorite:', error);
        } finally {
            setRemovingMovies(prev => ({ ...prev, [movieId]: false }));
        }
    };


    const renderItem = ({ item }: { item: FavoriteMovie }) => (
        <View style={styles.favouriteMoviesItem}>
            <View style={styles.favoriteListWithButton}>
                <Text style={styles.favoriteText}>{item.GSI1SK}</Text>
                <TouchableOpacity
                    onPress={() => handleRemoveFavorite(item.movieId)}
                    style={styles.favoriteButton}
                    disabled={removingMovies[item.movieId]}
                >
                    <Text style={styles.buttonText}>
                        {removingMovies[item.movieId] ? 'Removing...' : 'Remove'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    if (isLoading) {
        return <Text style={styles.centering}>Loading favorite movies...</Text>;
    }

    if (error) {
        return <Text style={styles.centering}>Error fetching favorite movies :(</Text>;
    }

    return (
        <SafeAreaView style={[styles.backgroundStyle, styles.rootContainer2]}>
            <View style={[styles.backgroundStyle, styles.pFavorite]}>
                {favorites && favorites.length === 0 ? (
                    <View style={styles.favoriteHeader}>
                        {getHeader()}
                        <Text style={[styles.favouriteMoviesItem, styles.noFavoritesText]}>
                            No movies in favorites :(
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.backgroundStyle}
                        data={favorites}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.SK}
                        ListHeaderComponent={getHeader}
                    />
                )}

            </View>
        </SafeAreaView>
    );
}

export default FavoriteMovies;
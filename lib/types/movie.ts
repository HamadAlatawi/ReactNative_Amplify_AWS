export interface MovieItemProps {
    id: string;
    title: string;
    type: string;
    year: string;
    description: string;
    isFavorite: boolean;
}

export interface FavoriteMovie {
    GSI1PK: string;
    GSI1SK: string;
    PK: string;
    SK: string;
    favoritedAt: string;
    movieId: string;
}
import { useEffect } from 'react'
import { useMovies } from "../../api/movies.ts";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import MovieItem from "../../components/MovieItem.tsx";
import AccordionItem from "../../components/UI/Accordian.tsx";
import styles from "../../styles/styles.ts"

function App() {
    const {
        data,
        isLoading,
        error,
        refetch
    } = useMovies();

    useEffect(() => {
        const init = async () => {
            try {
                await refetch();
            } catch(error) {
                console.log("An error occurred: ", error)
            }
        };
        init();
    }, [refetch])

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.backgroundStyle}
                contentContainerStyle={styles.rootContainer}
            >
                <View
                    style={styles.backgroundStyle}>
                    <View style={{marginTop : 20, paddingHorizontal: 24}}>
                        <Text style={styles.header}>Movie Database</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        {isLoading && <Text style={styles.centering}>Loading movies...</Text>}
                        {error && <Text style={styles.centering}>Error fetching movies :(</Text>}
                        {data && data.length === 0 && <Text style={styles.centering}>No movies found :(</Text>}
                        {data && data.map((movieItem: any) => (
                            <AccordionItem title={movieItem.title} key={movieItem.PK}>
                                <MovieItem
                                    key={movieItem.PK}
                                    id={movieItem.PK}
                                    title={movieItem.title}
                                    type={movieItem.genre}
                                    year={movieItem.releaseDate}
                                    description={movieItem.description}
                                />
                            </AccordionItem>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;
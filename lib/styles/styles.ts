import { Dimensions, StyleSheet } from "react-native";

const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    rootContainer: {
        flexGrow: 1,
        minHeight: screenHeight | 0,
    },
    rootContainer2: {
        flexGrow: 1,
        minHeight: screenHeight -25 | 0,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    header:{
        paddingHorizontal: 24,
        color : "orange",
        fontSize : 43,
        fontWeight : "bold",
        textAlign : "center",
        textDecorationStyle : "double",
        textDecorationColor : "orange",
        textDecorationLine  : "underline"
    },
    inputContainer: {
        paddingHorizontal: 24,
        textAlign: "center",
        alignItems: "center",
        marginTop : 30,
        marginBottom : 5,
    },
    inputId: {
        backgroundColor: '#FFFFF0',
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'orange',
        shadowColor: '#1a1a1a',
        shadowOffset: { width: 50, height: 50 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
        color: 'black',
        paddingHorizontal: 20,
    },
    centering: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize : 32,
        fontWeight : 'bold',
        color: 'orange'
    },
    loadMoreButton :{
        borderWidth: 4,
        borderColor: 'orange',
        width: 360,
        height: 40,
        alignItems : "center",
        justifyContent : "center",
        marginBottom: 20,
    },
    backgroundStyle : {
        backgroundColor: '#FFFFF0',
    },
    movieItem: {
        padding: 10,
        width : '100%',
        overflow: 'scroll',
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 10,
    },
    movieDescription: {
        fontSize: 16,
        color: '#333',
    },
    plot: {
        paddingTop: 20,
    },
    favoritizeMovie: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#ff4d4d',
        borderRadius: 10,
    },
    favouriteMovies: {
        borderWidth: 4,
        borderColor: 'orange',
        borderStyle : 'solid',
        padding: 20,
        borderRadius: 10,
        borderBottomRightRadius: 5,
    },
    favouriteMoviesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 20,
    },
    favouriteMoviesList: {
        maxHeight: 370,
    },
    favouriteMoviesItem: {
        marginBottom: 10,
    },
    noFavoritesText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ff4d4d',
        textAlign: 'center'
    },
    favoriteListWithButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    favoriteText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ff4d4d',
    },
    favoriteButton: {
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ff4d4d',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    container: {
        flex: 1
    },
    accordContainer: {
        paddingBottom: 4
    },
    accordHeader: {
        padding: 12,
        backgroundColor: '#FFFFF0',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderWidth : 4,
        borderColor: 'orange',
        minHeight: 70,
        maxHeight: 70,
        minWidth: '100%',
        marginBottom : 5,
        borderRadius: 10,
    },
    accordHeader2: {
        padding: 12,
        backgroundColor: '#FFFFF0',
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between',
        borderWidth : 4,
        borderColor: 'orange',
        minHeight: 370,
        maxHeight: 370,
        minWidth: '100%',
        marginBottom : 5,
        borderRadius: 10,
    },
    accordTitle: {
        fontSize: 16,
        fontWeight : 'bold'
    },
    accordBody: {
        marginBottom : 20
    },
    textSmall: {
        fontSize: 16
    },
    seperator: {
        height: 12
    },
    expanded:{
        flexDirection: 'row',
        alignItems : "flex-end",
        textAlign : "right",
        marginRight : 20
    },
    loadMoreButtonPressed: {
        backgroundColor: 'orange',
    },
    loadMoreButtonDisabled: {
        borderColor: 'gray',
        opacity: 0.6,
    },
    buttonTextDisabled: {
        color: 'gray',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFF0',
        borderTopWidth: 4,
        borderTopColor: 'orange',
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 30
    },
    navItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeNavItem: {
        borderBottomWidth: 4,
        borderBottomColor: 'orange',
    },
    navText: {
        color: 'black',
    },
    pFavorite:{
        padding: 20,
    },
    favoriteHeader:{
        marginTop: 20,
        marginBottom: 40,
    },
});

export default styles;
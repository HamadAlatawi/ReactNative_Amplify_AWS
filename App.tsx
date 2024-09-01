import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView } from 'react-native';
import { Authenticator } from "@aws-amplify/ui-react-native";
import { amplifyConfig } from "./lib/aws/amplify/config.ts"
import { useNavigationStore } from "./lib/store/store.ts";
import { authHandler } from "./lib/aws/amplify/auth/authHandler.tsx";
import SignOutButton from "./lib/aws/amplify/signoutButton/SignoutButton.tsx"
import FavouriteMovies from "./lib/components/views/FavoritesScreen.tsx";
import HomeScreen from "./lib/components/views/HomeScreen.tsx";
import NavBar from "./lib/components/UI/NavBar.tsx";

const queryClient : QueryClient = new QueryClient();
amplifyConfig();

function Root(): React.JSX.Element {
    const currentScreen = useNavigationStore(state => state.currentScreen);
    authHandler();

    return (
        <Authenticator.Provider>
            <Authenticator>
                <SafeAreaView>
                    <QueryClientProvider client={queryClient}>
                        <SignOutButton />
                        {currentScreen === 'home' ? <HomeScreen/> : <FavouriteMovies />}
                        <NavBar />
                    </QueryClientProvider>
                </SafeAreaView>
            </Authenticator>
        </Authenticator.Provider>
    );
}

export default Root;
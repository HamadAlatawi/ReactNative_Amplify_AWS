import {useAuthenticator} from "@aws-amplify/ui-react-native";
import {Button, View} from "react-native";

const SignOutButton = () => {
    const { signOut, user } = useAuthenticator();
    return (
        <View>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};


export default SignOutButton;
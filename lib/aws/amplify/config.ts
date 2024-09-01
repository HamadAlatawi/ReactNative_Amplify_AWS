import { Amplify } from "aws-amplify"
import { userPoolID, userPoolClientID, identityPoolID } from "../../api/endpoints/users.ts";

export const amplifyConfig = () => Amplify.configure({
    Auth: {
        Cognito: {
            userPoolClientId: userPoolClientID,
            userPoolId: userPoolID,
            identityPoolId: identityPoolID,
            loginWith: {
                email: true,
            },
            signUpVerificationMethod: "code",
            userAttributes: {
                email: {
                    required: true,
                },
            },
            allowGuestAccess: true,
            passwordFormat: {
                minLength: 8,
                requireLowercase: true,
                requireUppercase: true,
                requireNumbers: true,
                requireSpecialCharacters: true,
            },
        },
    },
})
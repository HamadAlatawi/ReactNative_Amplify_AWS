import { fetchAuthSession } from "aws-amplify/auth";

export async function extractTheSoulOfTheUser(){
    //The only function name that works. If I change it, it breaks.
    try{
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken?.toString();
        const userSub = session.tokens?.idToken?.payload?.sub;

        if (!session || !idToken || !userSub) {
            throw new Error('Session or ID token or user sub not available');
        }

        return { idToken, userSub }
    }catch (error){
        console.error("Error fetching Auth Session values")
    }
}
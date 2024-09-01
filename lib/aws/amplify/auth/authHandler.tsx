import { useEffect } from 'react';
import { Hub } from 'aws-amplify/utils';
import { checkUserInDynamoDB } from '../api/user.ts'

export const authHandler = () => {
    useEffect(() => {
        const hubListener = Hub.listen('auth', async({ payload }) => {
            switch (payload.event) {
                case 'signedIn':
                    try{
                        await checkUserInDynamoDB()
                    }catch (error){
                        console.log("error: ", error)
                    }
                    break;
                case 'signedOut':
                    console.log('User has been signed out successfully.');
                    break;
                case 'tokenRefresh':
                    console.log('Auth tokens have been refreshed.');
                    break;
                default:
                    console.log('Unhandled auth event');
            }
        });

        return () => {
            hubListener();
        };
    }, []);
};
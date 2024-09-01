import { extractTheSoulOfTheUser } from "../../../auth/sessionToken.ts"
import { API_URL } from "../../../api/endpoints/users.ts";

export async function checkUserInDynamoDB() {
    try {
        const { idToken, userSub } = await extractTheSoulOfTheUser();

        if (!idToken || !userSub) {
            throw new Error('ID token or user sub not available');
        }

        const response: Response = await fetch(`${API_URL}/dev/users/check`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${idToken}`
            }
        });

        if (response.status === 404) {
            await insertUserIntoDB();
        } else if (response.ok) {
            console.log("User found in database");
        } else {
            throw new Error(`Failed to check user in DB: ${await response.text()}`);
        }
    } catch (error) {
        console.error('Error checking user in DB:', error);
    }
}

export async function insertUserIntoDB() {
    try {
        const { idToken, userSub } = await extractTheSoulOfTheUser();

        if (!idToken || !userSub) {
            throw new Error('ID token or user sub not available');
        }

        const response: Response = await fetch(`${API_URL}/dev/users/insertUser`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        if (!response.ok) {
            throw new Error(`Failed to insert user into DB: ${await response.text()}`);
        }
    } catch (error) {
        console.error('Error inserting user into DB:', error);
    }
}
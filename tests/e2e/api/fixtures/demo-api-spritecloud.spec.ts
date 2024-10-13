import { test, expect } from '@playwright/test';
import envBaseURL from '../../../../utils/envBaseURL';

const baseURLenv = envBaseURL.api.apiEndpoint;

test.describe('api suite', () => {
    test('GET - second user on the list info', async ({ request }) => {
        const userList = await request.get(baseURLenv+'/users/12');
        const responseBody = JSON.parse(await userList.text());

        expect(responseBody.data.id).toBe(12);
        expect(responseBody.data.first_name).toBe('Rachel');
    });

    test('POST - Register a user', async ({ request }) => {
        const registerUser = await request.post(baseURLenv+'/register', {
            data: {
                email: 'rachel.howell@reqres.in',
                password: 'test',
            },
        });
        const responseBody = JSON.parse(await registerUser.text());

        expect(responseBody.id).toBe(12);
        expect(responseBody.token).toBeTruthy(); 
    });

    test('POST - Login with registerd user', async ({request}) => {
        const loginUser = await request.post(baseURLenv+'/login', {    
            data: {
                email: 'rachel.howell@reqres.in',
                password: 'test',
            },
        });
        const responseBody = JSON.parse(await loginUser.text());

        expect(loginUser).toBeOK;
        expect(responseBody.token).toBeTruthy();
    });

});
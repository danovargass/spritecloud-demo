import { test, expect } from '@playwright/test';
import envBaseURL from '../../../../utils/envBaseURL';
import schemaBody from '../../../../utils/schemaBody';

const baseURLenv = envBaseURL.api.apiEndpoint;

test.describe('api suite', () => {
    test('GET - second user on the list info', async ({ request }) => {
        const userList = await request.get(baseURLenv+'/users/2');

        const responseBody = JSON.parse(await userList.text());
        console.log(responseBody);

        expect(responseBody.data.id).toBe(2);
        expect(responseBody.data.first_name).toBe('Janet');
    });

    test('POST - Register a user', async ({ request }) => {
        const registerUser = await request.post(baseURLenv+'/register', {
            data: {
                email: 'janet.weaver@reqres.in',
                password: 'test',
            },
        });

        const responseBody = JSON.parse(await registerUser.text());
        console.log(responseBody);

        expect(responseBody.id).toBe(2);
        expect(responseBody.token).toBeTruthy();
       
    });

    // test('POST - Register a user', async ({ page }) => {

    //     const shFunctions = new sharedFunctions(page);
    //     expect(sh)       
    // });

    test('POST - Login with registerd user', async ({request}) => {
        const loginUser = await request.post(baseURLenv+'/login', {    
            data: {
                email: 'janet.weaver@reqres.in',
                password: 'test',
            },
        });

        const responseBody = JSON.parse(await loginUser.text());
        console.log(responseBody);

        expect(loginUser).toBeOK;
        expect(responseBody.token).toBeTruthy();

    });

});
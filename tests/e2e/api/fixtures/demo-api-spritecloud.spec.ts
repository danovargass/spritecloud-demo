import { test, expect } from '@playwright/test';
import envBaseURL from '../../../../envBaseURL';

const baseURLenv = envBaseURL.api.apiEndpoint;

test.describe('api suite', () => {
    test('ping api endpoint', async ({ request }) => {
        const userList = await request.get(baseURLenv+'/api/users/2');

        const responseBody = JSON.parse(await userList.text());
        console.log(responseBody);

        expect(responseBody.data.first_name).toBe('Janet');
    });

    test('create a user', async ({ request }) => {
        const createUser = await request.post(baseURLenv+'/api/register', {
            data: {
                email: 'test',
                password: 'test',
            },
        })
        
    });


});
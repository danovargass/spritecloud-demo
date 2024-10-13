import { Page } from "@playwright/test";
import envBaseURL from "../../../../utils/envBaseURL";
import schemaBody from "../../../../utils/schemaBody";


const baseURLenv = envBaseURL.api.apiEndpoint;

export class sharedFunctions {

    constructor (private page: Page) {}

    async requestWithBody(request: any, data: any, expectedStatus: number){
        const responseBody = await request.post(baseURLenv+'/register', data.JSON.stringify(schemaBody.register.data));
        await responseBody.toBe(expectedStatus);

    }
};
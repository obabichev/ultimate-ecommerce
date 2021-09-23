/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class OperationHandlerService {

    /**
     * handle
     * @param body body
     * @returns any OK
     * @throws ApiError
     */
    public static async handleUsingGet(
        body?: Record<string, string>,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/actuator/health`,
            body: body,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

    /**
     * handle
     * @param body body
     * @returns any OK
     * @throws ApiError
     */
    public static async handleUsingGet1(
        body?: Record<string, string>,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/actuator/health/**`,
            body: body,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

}
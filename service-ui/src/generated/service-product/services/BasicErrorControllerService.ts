/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class BasicErrorControllerService {

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static async errorUsingGet(): Promise<Record<string, any>> {
        const result = await __request({
            method: 'GET',
            path: `/error`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static async errorUsingHead(): Promise<Record<string, any>> {
        const result = await __request({
            method: 'HEAD',
            path: `/error`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
        return result.body;
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static async errorUsingPost(): Promise<Record<string, any>> {
        const result = await __request({
            method: 'POST',
            path: `/error`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static async errorUsingPut(): Promise<Record<string, any>> {
        const result = await __request({
            method: 'PUT',
            path: `/error`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static async errorUsingDelete(): Promise<Record<string, any>> {
        const result = await __request({
            method: 'DELETE',
            path: `/error`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
        return result.body;
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static async errorUsingOptions(): Promise<Record<string, any>> {
        const result = await __request({
            method: 'OPTIONS',
            path: `/error`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
        return result.body;
    }

    /**
     * error
     * @returns any OK
     * @throws ApiError
     */
    public static async errorUsingPatch(): Promise<Record<string, any>> {
        const result = await __request({
            method: 'PATCH',
            path: `/error`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
        return result.body;
    }

}
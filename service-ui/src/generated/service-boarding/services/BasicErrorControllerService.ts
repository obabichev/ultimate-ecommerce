/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelAndView } from '../models/ModelAndView';
import { request as __request } from '../core/request';

export class BasicErrorControllerService {

    /**
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static async errorHtmlUsingGet(): Promise<ModelAndView> {
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
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static async errorHtmlUsingHead(): Promise<ModelAndView> {
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
     * errorHtml
     * @returns ModelAndView OK
     * @returns any Created
     * @throws ApiError
     */
    public static async errorHtmlUsingPost(): Promise<ModelAndView | any> {
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
     * errorHtml
     * @returns ModelAndView OK
     * @returns any Created
     * @throws ApiError
     */
    public static async errorHtmlUsingPut(): Promise<ModelAndView | any> {
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
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static async errorHtmlUsingDelete(): Promise<ModelAndView> {
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
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static async errorHtmlUsingOptions(): Promise<ModelAndView> {
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
     * errorHtml
     * @returns ModelAndView OK
     * @throws ApiError
     */
    public static async errorHtmlUsingPatch(): Promise<ModelAndView> {
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
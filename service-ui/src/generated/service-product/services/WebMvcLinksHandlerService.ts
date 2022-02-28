/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from '../models/Link';
import { request as __request } from '../core/request';

export class WebMvcLinksHandlerService {

    /**
     * links
     * @returns Link OK
     * @throws ApiError
     */
    public static async linksUsingGet(): Promise<Record<string, Record<string, Link>>> {
        const result = await __request({
            method: 'GET',
            path: `/actuator`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

}
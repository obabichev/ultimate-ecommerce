/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tag } from '../models/Tag';
import { request as __request } from '../core/request';

export class TagControllerService {

    /**
     * getTags
     * @returns Tag OK
     * @throws ApiError
     */
    public static async getTagsUsingGet(): Promise<Array<Tag>> {
        const result = await __request({
            method: 'GET',
            path: `/api/tag`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

}
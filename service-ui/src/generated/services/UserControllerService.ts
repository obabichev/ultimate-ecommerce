/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetOrCreateUserRequestDTO } from '../models/GetOrCreateUserRequestDTO';
import type { User } from '../models/User';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * getOrCreateUser
     * @param body body
     * @returns User OK
     * @returns any Created
     * @throws ApiError
     */
    public static async getOrCreateUserUsingPost(
        body: GetOrCreateUserRequestDTO,
    ): Promise<User | any> {
        const result = await __request({
            method: 'POST',
            path: `/api/user/get-or-create`,
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
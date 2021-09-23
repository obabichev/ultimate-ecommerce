/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateStoreRequestDTO } from '../models/CreateStoreRequestDTO';
import type { Store } from '../models/Store';
import { request as __request } from '../core/request';

export class StoreControllerService {

    /**
     * getStores
     * @returns Store OK
     * @throws ApiError
     */
    public static async getStoresUsingGet(): Promise<Array<Store>> {
        const result = await __request({
            method: 'GET',
            path: `/store`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

    /**
     * createStore
     * @param body body
     * @returns Store OK
     * @returns any Created
     * @throws ApiError
     */
    public static async createStoreUsingPost(
        body: CreateStoreRequestDTO,
    ): Promise<Store | any> {
        const result = await __request({
            method: 'POST',
            path: `/store`,
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
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from '../models/Product';
import { request as __request } from '../core/request';

export class SearchControllerService {

    /**
     * searchProducts
     * @param text text
     * @returns Product OK
     * @throws ApiError
     */
    public static async searchProductsUsingGet(
        text: string,
    ): Promise<Array<Product>> {
        const result = await __request({
            method: 'GET',
            path: `/api/search`,
            query: {
                'text': text,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

    /**
     * getProduct
     * @param usin usin
     * @returns Product OK
     * @throws ApiError
     */
    public static async getProductUsingGet(
        usin: string,
    ): Promise<Product> {
        const result = await __request({
            method: 'GET',
            path: `/api/search/${usin}`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

}
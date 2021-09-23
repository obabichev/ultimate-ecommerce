/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyProductRequestDTO } from '../models/BuyProductRequestDTO';
import type { CreateProductRequestDTO } from '../models/CreateProductRequestDTO';
import type { Product } from '../models/Product';
import type { UserPurchase } from '../models/UserPurchase';
import { request as __request } from '../core/request';

export class ProductControllerService {

    /**
     * getProducts
     * @returns Product OK
     * @throws ApiError
     */
    public static async getProductsUsingGet(): Promise<Array<Product>> {
        const result = await __request({
            method: 'GET',
            path: `/product`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

    /**
     * createProduct
     * @param body body
     * @returns Product OK
     * @returns any Created
     * @throws ApiError
     */
    public static async createProductUsingPost(
        body: CreateProductRequestDTO,
    ): Promise<Product | any> {
        const result = await __request({
            method: 'POST',
            path: `/product`,
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
     * buyProducts
     * @param body body
     * @returns UserPurchase OK
     * @returns any Created
     * @throws ApiError
     */
    public static async buyProductsUsingPost(
        body: BuyProductRequestDTO,
    ): Promise<UserPurchase | any> {
        const result = await __request({
            method: 'POST',
            path: `/product/buy`,
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
     * getProduct
     * @param id id
     * @returns Product OK
     * @throws ApiError
     */
    public static async getProductUsingGet(
        id: string,
    ): Promise<Product> {
        const result = await __request({
            method: 'GET',
            path: `/product/${id}`,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
        return result.body;
    }

}
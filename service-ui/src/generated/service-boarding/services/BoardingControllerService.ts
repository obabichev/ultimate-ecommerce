/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegisterProductRequestDTO } from '../models/RegisterProductRequestDTO';
import type { RegisterProductResponseDTO } from '../models/RegisterProductResponseDTO';
import { request as __request } from '../core/request';

export class BoardingControllerService {

    /**
     * registerProduct
     * @param body body
     * @returns RegisterProductResponseDTO OK
     * @returns any Created
     * @throws ApiError
     */
    public static async registerProductUsingPost(
        body: RegisterProductRequestDTO,
    ): Promise<RegisterProductResponseDTO | any> {
        const result = await __request({
            method: 'POST',
            path: `/api/service-boarding/boarding`,
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
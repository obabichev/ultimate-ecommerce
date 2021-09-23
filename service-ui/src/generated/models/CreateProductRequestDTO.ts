/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateProductRequestDTO = {
    amount?: number;
    currency: string;
    price?: number;
    storeId: string;
    technicalDetails: Record<string, string>;
    title: string;
}

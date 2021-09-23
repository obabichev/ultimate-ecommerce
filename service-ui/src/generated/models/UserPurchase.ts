/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PurchasedProduct } from './PurchasedProduct';

export type UserPurchase = {
    amount: number;
    id: string;
    product: PurchasedProduct;
    userId: string;
}

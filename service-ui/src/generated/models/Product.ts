/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Store } from './Store';

export type Product = {
    amount: number;
    currency: string;
    id: string;
    price: number;
    store: Store;
    technicalDetails: Record<string, string>;
    title: string;
}

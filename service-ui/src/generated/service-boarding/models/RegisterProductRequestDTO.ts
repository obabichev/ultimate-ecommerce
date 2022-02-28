/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Rating } from './Rating';
import type { SellOption } from './SellOption';

export type RegisterProductRequestDTO = {
    attributes: Record<string, string>;
    description: string;
    images: Array<string>;
    ratings: Array<Rating>;
    sellOptions: Array<SellOption>;
    tag: string;
    title: string;
}

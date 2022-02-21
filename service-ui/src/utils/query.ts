import { UseQueryResult } from "react-query";

export const isQueriesLoading = (...queries: Array<UseQueryResult>) =>
  queries.reduce((collector, query) => collector || query.isLoading, false);

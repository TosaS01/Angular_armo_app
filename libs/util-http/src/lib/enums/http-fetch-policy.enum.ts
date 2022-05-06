/** Fetch policy header prop levelName */
export const FPolicy = 'F-Policy';

/**
 * Valid fetchPolicy values are:
 *
 * cache-first: Always try reading data from your cache first.
 * If all the data needed to fulfill your query is in the cache then that data will be returned.
 * Will only fetch from the network if a cached result is not available.
 * This fetch policy aims to minimize the number of network requests sent when rendering your component.
 *
 * network-only: This fetch policy will never return you initial data from the cache.
 * Instead it will always make a request using your network interface to the server.
 * This fetch policy optimizes for data consistency with the server,
 * but at the cost of an instant response to the user when one is available.
 *
 * no-cache: This fetch policy will never return your initial data from the cache.
 * Instead it will always make a request using your network interface to the server.
 * Unlike the network-only policy, it also will not write any data to the cache after the query completes.
 */
export enum HttpFetchPolicy {
  CacheFirst = 'cache-first',
  NetworkOnly = 'network-only',
  NoCache = 'no-cache',
}

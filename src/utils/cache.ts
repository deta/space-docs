/**
 * Cache function execution value on first run
 * @param name Unique cache key
 * @param func Function to cache execution result
 * @returns Function execution result
 */
export async function cacheOnFirstRun<T>(
  name: string,
  func: () => T | Promise<T>
): Promise<T> {
  const global = globalThis as any
  const cacheKey = `__cache_${name}__`

  if (!global[cacheKey]) global[cacheKey] = await func()
  return global[cacheKey]
}

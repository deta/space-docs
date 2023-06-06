import { get, writable, type Updater } from "svelte/store";

/**
 * Svelte writable store which is persisted to localStorage.
 * @param key LocalStorage key
 * @param initialData Initial data
 * @returns
 */
export function storedWritable<T>(key: string, initialData: T) {
  const store = writable(initialData);
  const { subscribe, set } = store;

  // Load from localStorage
  if (localStorage.getItem(key) !== null) {
    try {
      set(JSON.parse(localStorage.getItem(key) as string));
    } catch (e) {
      console.error(`[storedWritable] Error loading ${key} from localStorage, corrupted data!`, e);
    }
  } else {
    localStorage.setItem(key, JSON.stringify(initialData));
  }

  return {
    set(value: T) {
      localStorage.setItem(key, JSON.stringify(value));
      set(value);
    },
    update(updater: Updater<T>) {
      const newValue = updater(get(store));
      this.set(newValue);
    },
    subscribe
  };
}

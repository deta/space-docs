import { get, writable, type Updater } from "svelte/store";

/**
 * Svelte writable store for JSON data which is persisted to localStorage.
 * @param key LocalStorage key
 * @param initialData Initial data
 * @returns
 */
export function storedJsonWritable<T>(key: string, initialData: T) {
  const store = writable(initialData);
  const { subscribe, set } = store;

  // Load from localStorage
  if (localStorage.getItem(key) !== null) {
    try {
      set(JSON.parse(localStorage.getItem(key) as string));
    } catch (e) {
      console.error(
        `[storedJsonWritable] Error loading ${key} from localStorage, corrupted data!`,
        e
      );
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

/**
 * Svelte writable store for raw (string) data which is persisted to localStorage.
 * Note: We need to have this separate from storedJsonWritable, as strings are not valid json.
 * @param key LocalStorage key
 * @param initialData Initial data
 * @returns
 */
export function storedRawWritable<T extends string>(key: string, initialData: T) {
  const store = writable(initialData);
  const { subscribe, set } = store;

  // Load from localStorage
  if (localStorage.getItem(key) !== null) {
    try {
      set(localStorage.getItem(key) as T);
    } catch (e) {
      console.error(`[storedRawWritable] Error loading ${key} from localStorage, corrupted data!`, e);
    }
  } else {
    localStorage.setItem(key, initialData);
  }

  return {
    set(value: T) {
      localStorage.setItem(key, value);
      set(value);
    },
    update(updater: Updater<T>) {
      const newValue = updater(get(store));
      this.set(newValue);
    },
    subscribe
  };
}
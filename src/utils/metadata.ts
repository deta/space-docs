interface Metadata {
    isDevMode: boolean;
    isAuthenticated: boolean;
}

// Is initialization started
let isInitialized = false;

// If initialization finished
let isLoaded = false;

// Queue of resolves
const resolves: Array<(value: Metadata) => void> = [];

let isDevMode = false;
let isAuthenticated = false;

/**
 * Get users metadata. Made the way it send only one request.
 * @returns Metadata
 */
export function getMetadata(): Promise<Metadata> {
  if (!isInitialized) initializeMetadata();

  // Create promise and put resolving to the queue, that will be executed only after initialization
  return new Promise((resolve, reject) => {
    if (isLoaded) return resolve({ isAuthenticated, isDevMode });
    resolves.push(resolve);
  });
}

/**
 * Initialize metadata
 */
async function initializeMetadata() {
  isInitialized = true;

  try {

    // Send request
    const endpoint = import.meta.env.DEV ? "https://deta.space/api/v0/metadata" : "/api/v0/metadata";
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("Endpoint is not available");

    // Update metadata values
    const metadata = await res.json();
    isDevMode = metadata.dev_mode;
    isAuthenticated = true;
  } catch (error) {
    isDevMode = false;
    isAuthenticated = false;
  } finally {
    isLoaded = true;

    // Resolve all promises
    resolves.forEach((resolve) => resolve({ isDevMode, isAuthenticated }));
  }
}

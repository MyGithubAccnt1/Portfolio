export const getAssetPath = (path) => {
    const baseName = import.meta.env.MODE === "development" ? "" : "/Portfolio/";
    if (path.startsWith('http') || path.startsWith('https')) {
        return path;
    }
    return `${baseName}${path}`;
}; 
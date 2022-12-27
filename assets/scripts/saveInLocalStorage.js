function saveInLocalStorage(jsonLieux, jsonMateriels) {
    try {
        localStorage.setItem('jsonLieux', JSON.stringify(jsonLieux));
        localStorage.setItem('jsonMateriels', JSON.stringify(jsonMateriels));
        return true;
    } catch (error) {
        console.warn(error);
        return false;
    }
}
export { saveInLocalStorage };
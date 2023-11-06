export * from "./constants"

/**
 * Stores an item in the local storage.
 * @param {string} key - The key under which the item will be stored.
 * @param {any} value - The value to be stored.
 */
export const setItemInLocalStorage = (key, value) => {
    if (!key || !value) {
      return console.error('Cannot store in local storage');
    }
  
    const valueToStore =
      typeof value !== 'string' ? JSON.stringify(value) : value;
  
    localStorage.setItem(key, valueToStore);
  };
  
  /**
   * Retrieves an item from local storage.
   * @param {string} key - The key to retrieve the item from local storage.
   * @returns {any} The stored value, or null if the key is not found.
   */
  export const getItemFromLocalStorage = (key) => {
    if (!key) {
      return console.error('Cannot get the value from local storage');
    }
  
    return localStorage.getItem(key);
  };
  
  /**
   * Removes an item from local storage.
   * @param {string} key - The key of the item to be removed from local storage.
   */
  export const removeItemFromLocalStorage = (key) => {
    if (!key) {
      return console.error('Cannot remove the value from local storage');
    }
  
    localStorage.removeItem(key);
  };

  
/**
 * Converts an object of key-value pairs into a URL-encoded form body string.
 *
 * @param {Object} params - The key-value pairs to be converted.
 * @returns {string} The URL-encoded form body string.
 */
export const getFormBody = (params) => {
    let formBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property); // Encode the property name.
        let encodedValue = encodeURIComponent(params[property]); // Encode the property value.

        formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&'); // Return the URL-encoded form body string.
};

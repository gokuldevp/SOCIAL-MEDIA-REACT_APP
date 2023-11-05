export * from "./constants"

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

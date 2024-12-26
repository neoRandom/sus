const $s = (query) => document.querySelector(query);
const $m = (query) => document.querySelectorAll(query);
const $rs = (parent, query) => parent.querySelector(query);
const $rm = (parent, query) => parent.querySelector(query);

/*
 * Options (* = necessary):
 * - tagName *
 * - innerText
 * - attributes
 * - events
 * - container
 */
function $e(options, ...children) {
    // Creating the element
    const newElement = document.createElement(options.tagName);

    // Inserting the inner text, if it exists
    if ("innerText" in options && options.innerText !== "")
        newElement.innerText = options.innerText;

    // Setting the attributes, if they exist
    Object.keys(options.attributes ?? {}).forEach((key) => {
        if (options.attributes?.[key] !== undefined)
            newElement.setAttribute(key, options.attributes[key]);
    });

    // Adding the events, if they exist
    Object.keys(options.events ?? {}).forEach((key) => {
        if (options.events?.[key] !== undefined)
            newElement.addEventListener(key, options.events[key]);
    });

    // Appending the childs, if is any
    for (let child of children)
        if (child !== null) newElement.appendChild(child);

    // Adding it to the container, if it exists
    if ("container" in options && options.container !== null)
        options.container?.appendChild(newElement);

    // Returning the reference to the element created
    return newElement;
}

export { $s, $m, $rs, $rm, $e };

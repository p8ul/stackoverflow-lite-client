/**
 * Adds an element to root element node
 * @param {!string} element tag name of element to create
 * @param {!string} markUp InnerHtml to be inserted in created tag
 * @param {!Element} root parent node element where to insert created node
 */
export const render = (element, markUp, root ) => {
	let container = document.createElement(element);
	container.innerHTML = markUp;
	root.appendChild(container);
};
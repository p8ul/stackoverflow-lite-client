export const render = (element, markUp, root ) => {
	let container = document.createElement(element);
	container.innerHTML = markUp;
	root.appendChild(container);
};
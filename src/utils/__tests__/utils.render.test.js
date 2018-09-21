import { render, toggleElement } from '../../utils';

const template = (content) => {
	return `<div id='test' data-id="2">${content}</div>`;
};
document.body.innerHTML =
				'<div>' +
				'  <div id="root" class="hidden" ></div>' +
				'  <button id="button" />' +
																'</div>';
let rootNode = document.getElementById('root');
                
test('Test dom rendering function', () => {
	
	render('div', template('hello world'), rootNode);
	let renderedNode = document.getElementById('test');
	expect(renderedNode.getAttribute('data-id')).toEqual('2');
});

test('Toggle hide show element function', () => {
	toggleElement(rootNode);
	expect(rootNode.classList.contains('hidden')).toEqual(false);
});

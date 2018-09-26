import { 
	testEmail, formValidator, toggleInnerText,
	dateFormatter
} from '../../utils';

const data = {};

test('Should validate email field', () => {
	expect(testEmail.test('email@example.com')).toBe(true);
});

test('Should validator validate form data', () => {
	expect(typeof formValidator(data)).toBe(typeof {});
});

test('Should toggle innerHtml of an element', () =>{
	document.body.innerHTML =
				'<div>' +
				'  <div id="username" >Hello</div>' +
				'  <button id="button" />' +
				'</div>';
	var el = document.getElementById('username');
	var newText = 'new inner text';
	toggleInnerText(el, el.innerText, newText);
	expect(el.innerText).toEqual(newText);
});

test('Should return time ago from date', () => {
	expect(dateFormatter()).toEqual('a few seconds ago');
});
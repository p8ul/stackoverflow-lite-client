import { 
	testEmail, formValidator, toggleInnerText
} from '../utils';

const data = {};

// var dummyElement = document.createElement('div');
// document.getElementById = jasmine.createSpy('HTML Element').andReturn(dummyElement);

test('Validate email', () => {
	expect(testEmail.test('email@example.com')).toBe(true);
});

test('Test form validator', () => {
	expect(typeof formValidator(data)).toBe(typeof {});
});

test('Toggle innerHtml of an element', () =>{
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
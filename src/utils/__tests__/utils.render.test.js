import { 
	render, 
	toggleElement,
	popUp,
	$on,
	resetQuestionDom,
	resetSignupDom	
} from '../../utils';
import { 
	testTemplate, 
	rootTemplate,
	signupDom
} from '../../Templates';

document.body.innerHTML = rootTemplate();
const popupContent = document.getElementById('card-content');

let rootNode = document.getElementById('root');
            
test('Should render html element', () => {	
	render('div', testTemplate('hello world'), rootNode);
	let renderedNode = document.getElementById('test');
	expect(renderedNode.getAttribute('data-id')).toEqual('2');
});

test('Should toggle hide show element function', () => {
	toggleElement(rootNode);
	expect(rootNode.classList.contains('hidden')).toEqual(false);
});

test('Should add a success message', ()=> {
	let message = 'popup message';
	popUp(message, popupContent );
	let success = document.querySelectorAll('.text-success');
	expect(success[0].innerHTML).toEqual(message);
});

test('Should add an event listener', ()=> {
	let testBtn = document.getElementById('testBtn');
	$on(testBtn, 'click', ()=>toggleElement(testBtn));
	testBtn.click();
	expect(testBtn.classList.contains('fadeOut')).toEqual(true);
});

test('should reset dom elements when user is not logged in', () => {
	rootNode.innerHTML = '';
	const callback = jest.fn();
	callback();
	render('div', signupDom(), rootNode);
	resetQuestionDom(callback);
	resetSignupDom(callback);
	expect(callback).toBeCalled();
});




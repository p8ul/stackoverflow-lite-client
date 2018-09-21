import { 
	$on, 
	toggleElement, dismissNode, 
	popupNode, editPopupNode, removeErrors
} from '../../utils';
import { deleteQuestion } from './actions';
import { sendQuestion } from '../ask/actions';
import { getQuestion, questions } from '../../store';

let askForm;
let data = {};

export const profileEvents = () => {
	const cancels = document.querySelectorAll('.cancel');
	Object.values(cancels).map((el, index) => {		
		$on(cancels[index], 'click',()=>{toggleElement(popupNode);});
	});

	askForm = document.forms.ask;

	const setState = (e) => {
		data[e.target.name] = e.target.value;
		removeErrors(data);
	};
	Object.values(askForm.elements).map(el => {
		if (el.name) {
			data[el.name] = '';
			el.value = '';
		}			
	});

	Object.values(askForm.elements).map(el => {		
		$on(el, 'keyup',(e)=>{setState(e);});
		$on(el, 'input',(e)=>{setState(e);});
	});

	$on(dismissNode, 'click', () => toggleElement(editPopupNode));
	
	$on(askBtn, 'click', e => sendQuestion({
		event: e,
		url: 'questions/'+askBtn.getAttribute('data-id'),
		data: data,
		method: 'PUT'
	}));
};

/**
 * Set delete event listeners
 *
 */
export const HandleDeleleEvents = () => {
	const deleteBtns = document.querySelectorAll('.delete');
	const editBtns = document.querySelectorAll('.edit');
	Object.values(deleteBtns).map((el, index) => {		
		$on(deleteBtns[index], 'click',()=>{openPopup(deleteBtns[index], true);});		
		$on(editBtns[index], 'click',()=>{openEditPopup(editBtns[index], true);});		
	});
	let node = document.getElementById('confirm-delete');
	$on(node, 'click', ()=>{
		let id = node.getAttribute('data-id');
		deleteQuestion(id);
	});
};
/**
 * delete a question.
 *
 * @param {Element|Window} el Target Element
 */
const openPopup = (el) => {
	let id = el.getAttribute('data-id');
	let node = document.getElementById('confirm-delete');
	node.setAttribute('data-id', id);
	toggleElement(popupNode);
};

/**
 * edit a question.
 *
 * @param {Element|Window} el Target Element
 */
const openEditPopup = (el) => {
	let id = el.getAttribute('data-id');
	let question = getQuestion(parseInt(id));
	try {
		Object.values(askForm.elements).map(el => {
			if (el.name) {
				data[el.name] = question[el.name];
				el.value = question[el.name];
			}
		});
	} catch(err) {console.log(err);}
	
	let node = document.getElementById('askBtn');
	node.setAttribute('data-id', id);
	toggleElement(editPopupNode);
};

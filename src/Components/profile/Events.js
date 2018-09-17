import { $on, toggleElement, popupNode } from '../../utils';
import { deleteQuestion } from './actions';

export const profileEvents = () => {
	const cancels = document.querySelectorAll('.cancel');
	Object.values(cancels).map((el, index) => {		
		$on(cancels[index], 'click',()=>{toggleElement(popupNode);});
	});
};

/**
 * Set delete event listeners
 *
 */
export const HandleDeleleEvents = () => {
	const deleteBtns = document.querySelectorAll('.delete');
	Object.values(deleteBtns).map((el, index) => {		
		$on(deleteBtns[index], 'click',()=>{openPopup(deleteBtns[index], true);});		
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

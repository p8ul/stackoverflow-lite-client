import { $on } from '../../utils';
import { searchNode, loaderNode, parentNode } from './Nodes';
import { searchQuestions } from './actions';
import { processQuestionList } from './TemplateRenders';

export const searchEventListener = () => {
	$on(searchNode, 'keyup',() => {actionQuestions(searchNode);});
};

const actionQuestions = (el) => {		
	setTimeout(()=>{
		parentNode.innerHTML = '';
		loaderNode.innerHTML = 'Loading...';
		searchQuestions({query: el.value, callBackFnc: processQuestionList});
	}, 1500);	
};
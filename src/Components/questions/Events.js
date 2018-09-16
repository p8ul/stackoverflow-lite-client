import { $on } from '../../utils';
import { searchNode, loaderNode, parentNode } from './Nodes';
import { searchQuestions } from './actions';
import { renderQuestionList, renderLoader } from './TemplateRenders';

export const searchEventListener = () => {
	$on(searchNode, 'keyup',() => {actionQuestions(searchNode);});
};

const actionQuestions = (el) => {		
	setTimeout(()=>{
		parentNode.innerHTML = '';
		renderLoader();
		searchQuestions({query: el.value, callBackFnc: renderQuestionList});
	}, 1500);	
};
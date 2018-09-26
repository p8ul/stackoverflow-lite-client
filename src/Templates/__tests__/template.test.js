import { render } from '../../utils';
import { acceptCheckBox } from '../acceptCheckBox';
import { rootTemplate } from '../../Templates';

document.body.innerHTML = rootTemplate();
const root = document.getElementById('root');
const data = { accepted: false, answer_id: 12};

test('Should set checkbox field', ()=> {
	render('div', acceptCheckBox(data), root); 
	let allAccept = document.querySelectorAll('.accepted');
	
	expect(parseInt(allAccept[0].getAttribute('data-id'))).toEqual(data.answer_id);
	expect(allAccept[0].getAttribute('unchecked')).toEqual('checked');
	data.accepted = true;
	root.innerHTML = '';
	render('div', acceptCheckBox(data), root);
	allAccept = document.querySelectorAll('.accepted');	
	expect(allAccept[0].getAttribute('checked')).toEqual('checked');
});
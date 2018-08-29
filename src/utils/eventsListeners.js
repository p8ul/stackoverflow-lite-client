
export const handleKeyUp = (parentNode, setState, removeErrors) => {
	Object.values(parentNode.elements).map(el => {
		el.addEventListener('keyup', e => {
			let data = {};
			data[e.target.name] = e.target.value;
			setState({data});
			console.log(data);
			removeErrors(data);
		});
	});
}; 

const handleChange = () => {
	Object.values(signup.elements).map(el => {
		el.addEventListener('change', e => {
			data[e.target.name] = e.target.value;
			console.log(data);
			removeErrors(data);
		});
	});
};

const handleInput = () => {
	Object.values(signup.elements).map(el => {
		el.addEventListener('input', e => {
			data[e.target.name] = e.target.value;
			console.log(data);
			removeErrors(data);
		});
	});
};
export const $on = (target, type, callback) => {
	target.addEventListener(type, callback);
};

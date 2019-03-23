const ADD_PRODUCT = 'products:addProduct';

const addProduct = product => {
	return {
		type: ADD_PRODUCT,
		paylaod: product
	};
};

export { addProduct };

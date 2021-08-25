module.exports = function check(str, bracketsConfig) {
  // your solution
	let strArr = [...str];
	//console.log(strArr);

	const OPEN_BRECKETS = ['(', '[', '{', '|'];
	const BRACKETS_PAIR = {
		[')']: '(',
		[']']: '[',
		['}']: '{',
		['|']: '|',
	};
	let stack = [];

	for(let i = 0; i < strArr.length; i++) {
		let curentSymbol = strArr[i];
	
		if (OPEN_BRECKETS.includes(curentSymbol)) {
			stack.push(curentSymbol);
		} else {
			if (stack.length === 0) {
				return false;
			}

			let topElement = stack[stack.length - 1];

			if (BRACKETS_PAIR[curentSymbol] === topElement) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}

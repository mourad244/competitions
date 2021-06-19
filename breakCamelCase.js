function solution(string) {
	return string
		.split('')
		.map((e) => {
			if (e == e.toUpperCase()) return ` ${e}`;
			else return e;
		})
		.join('');
}

// best ractice
function solution2(string) {
	return string.replace(/([A-Z])/g, ' $1');
}

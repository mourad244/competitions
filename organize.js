function solution(...names) {
	let newList = [];
	const allValues = [].concat(...names);

	allValues.map((n, index) => {
		if (index == 0) newList.push(n);
		newList.some((s, i) => {
			if (s.split('')[0].toLowerCase() == n.split('')[0].toLowerCase()) {
				s.toLowerCase()
					.split('')
					.some((l, e) => {
						if (l > n.toLowerCase().split('')[e]) newList.splice(newList.indexOf(s), 0, n);
						else if (newList.length - 1 == i && index != 0) newList.push(n);
					});
			} else if (s.split('')[0].toLowerCase() > n.split('')[0].toLowerCase()) {
				newList.splice(newList.indexOf(s), 0, n);
				return true;
			} else if (newList.length - 1 == i && index != 0) newList.push(n);
		});
	});
	return newList;
}
let a = solution(['Daniel', 'Elijah', 'Elijah', 'Ethan', 'Jose', 'Joshua', 'Robert']);
console.log(a);

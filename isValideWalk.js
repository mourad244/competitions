function solution(walk) {
	let x = 0;
	let y = 0;
	if (walk.length == 10)
		walk.map((direction) => {
			switch (direction) {
				case 'n':
					x += 1;
					break;
				case 'e':
					y += 1;
					break;
				case 's':
					x -= 1;
					break;
				case 'w':
					y -= 1;
					break;
				default:
					break;
			}
		});
	return x == 0 && y == 0 && walk.length == 10 ? true : false;
}

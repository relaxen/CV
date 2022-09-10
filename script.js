function ready() {
	let today = new Date();
	let startTime = new Date('2022-04-29T00:00:00');
	let diff = (today - startTime) / 1000;
	let mounths = document.getElementById('mounths');

	let oneMounth = 60 * 60 * 24 * 28.8;
	let time = Math.floor(diff / oneMounth);

	mounths.innerHTML = time;
}

document.addEventListener('DOMContentLoaded', ready);

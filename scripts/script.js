const output = document.getElementById("text");
const numInput = document.getElementById("numinput");
const send = document.getElementById("send");
let inputVal = numInput.value;

const messages = [
	"You ain't even missing me baby.",
	"So why do I want you so badly?",
	"Making a fool of me, I'm so keen.",
	"Baby, I got your back, like we're still seventeen.",
];

const getItemFromArr = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

send.addEventListener("click", () => {
	inputVal = numInput.value;
	if (isNaN(parseInt(inputVal))) {
		output.innerHTML = "Please enter a number.";
		output.style.color = "red";
		setTimeout(() => {
			output.style.color = "whitesmoke";
		}, 300);
	} else {
		let res = "";
		for (let iter = 0; iter < parseInt(inputVal); iter++) {
			res += getItemFromArr(messages) + " ";
		}
		output.innerHTML = res;
	}
});

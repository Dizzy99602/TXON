let result = document.getElementById("result");

function insert(char) {
	if (result.textContent == "0") {
		result.textContent = "";
	}

	result.textContent += char;
}

function clearResult() {
	result.textContent = "0";
}

function backspace() {
	if (result.textContent.length > 1) {
		result.textContent = result.textContent.slice(0, -1);
	} else {
		result.textContent = "0";
	}
}

function calculate() {
	try {
		result.textContent = eval(result.textContent);
	} catch (error) {
		result.textContent = "Error";
	}
}

const el7 = document.getElementById("7");
el7.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "7";
});

const el8 = document.getElementById("8");
el8.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "8";
});

const el9 = document.getElementById("9");
el9.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "9";
});

const elDel = document.getElementById("del");
elDel.addEventListener("click", function () {
	let s = document.getElementById("view").innerHTML;
	let len = s.length;
	document.getElementById("view").innerHTML = s.substring(0, len - 1);
});

const el4 = document.getElementById("4");
el4.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "4";
});

const el5 = document.getElementById("5");
el5.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "5";
});

const el6 = document.getElementById("6");
el6.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "6";
});

const elplus = document.getElementById("+");
elplus.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "+";
});

const el1 = document.getElementById("1");
el1.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "1";
});

const el2 = document.getElementById("2");
el2.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "2";
});

const el3 = document.getElementById("3");
el3.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "3";
});

const elsub = document.getElementById("-");
elsub.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "-";
});

const eldot = document.getElementById(".");
eldot.addEventListener("click", function () {
	document.getElementById("view").innerHTML += ".";
});

const el0 = document.getElementById("0");
el0.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "0";
});

const eldiv = document.getElementById("/");
eldiv.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "/";
});

const elx = document.getElementById("x");
elx.addEventListener("click", function () {
	document.getElementById("view").innerHTML += "*";
});

const elres = document.getElementById("res");
elres.addEventListener("click", function () {
	document.getElementById("view").innerHTML = "";
});

const eleq = document.getElementById("=");
eleq.addEventListener("click", function () {
	try {
		let exp = document.getElementById("view").innerText;
		let evaluate = eval(exp);
		let s = evaluate.toString(),
			len = s.length;
		if (len > 7) {
			document.getElementById("view").innerText = evaluate.toFixed(5);
		} else {
			document.getElementById("view").innerText = evaluate;
		}
	} catch (error) {
		console.log(error);
	}
});

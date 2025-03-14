"use strict"
function chp(name) {
	var item = document.getElementById(name);
	if (item == null)
		return false;
	var isnumber = !(item.value == "" || isNaN(item.value) || item.value<=0);
	item.style = (isnumber?"background-color: #FFFFFF;":"background-color: #FFBBBB;");
	return isnumber;
}
function check1() {
	var res = true;
	res = chp("insoe") && res;
	res = chp("insrb") && res;
	res = chp("inlym1") && res;
	res = chp("inney1") && res;
	return res;
}
function check2() {
	var res = check1();
	res = chp("inlym2") && res;
	res = chp("inney2") && res;
	return res;
}
function change1() {
	var r = document.getElementById("result1");
	r.value = "";
	r.style = "background-color: #AAAAAA;";
	r = document.getElementById("resg1");
	r.value = "";
	r.style = "background-color: #AAAAAA;";
	change2();
}
function change2() {
	var r = document.getElementById("result2");
	r.value = "";
	r.style = "background-color: #AAAAAA; overflow: hidden; resize: none; border: 2px solid #111;";
	r.rows = 1;
	r = document.getElementById("resg2");
	r.value = "";
	r.style = "background-color: #AAAAAA;";
}
function solve1() {
	if (!check1())
		return false;
	var vsoe, vsrb, vlym1, vney1, vg1;
	var psoe, psrb, pg1;
	
	vsoe = Number(document.getElementById("insoe").value);
	vsrb = Number(document.getElementById("insrb").value);
	vlym1 = Number(document.getElementById("inlym1").value);
	vney1 = Number(document.getElementById("inney1").value);
	vg1 = vlym1 / vney1;

	psoe = (vsoe > 20.0);
	psrb = (vsrb > 5.0);
	pg1 = (vg1 < 0.3 || vg1 > 0.5);

	var rg1 = document.getElementById("resg1");
	if (pg1) {
		rg1.value = vg1;
		rg1.style = "background-color: #FFCCCC;";
	} else {
		rg1.value = vg1;
		rg1.style = "background-color: #CCDDFF;";
	}
	
	var r1 = document.getElementById("result1");
	if (psoe && psrb || pg1) {
		r1.value = "Высокий риск смерти.";
		r1.style = "background-color: #FFCCCC;";
	}
	else {
		r1.value = "Низкий риск смерти.";
		r1.style = "background-color: #BBFFBB;";
	}
	change2();
	return true;
}
function solve2() {
	var invalid = !solve1();
	invalid = !check2() || invalid
	if (invalid)
		return false;
	var vlym2, vney2, vg2;
	var pg2;
	
	vlym2 = Number(document.getElementById("inlym2").value);
	vney2 = Number(document.getElementById("inney2").value);
	vg2 = vlym2 / vney2;

	pg2 = (vg2 < 0.3 || vg2 > 0.5);

	var rg2 = document.getElementById("resg2");
	if (pg2) {
		rg2.value = vg2;
		rg2.style = "background-color: #FFCCCC;";
	} else {
		rg2.value = vg2;
		rg2.style = "background-color: #CCDDFF;";
	}
	
	var r2 = document.getElementById("result2");
	if (pg2) {
		r2.value = "Высокий риск смерти. Смена тактики лечения.";
		r2.style = "background-color: #FFCCCC; font-family: inherit; overflow: hidden; resize: none; border: 2px solid #111;";
		r2.rows = 2;
	}
	else {
		r2.value = "Низкий риск смерти. Продолжить лечение.";
		r2.style = "background-color: #BBFFBB; font-family: inherit; overflow: hidden; resize: none; border: 2px solid #111;";
		r2.rows = 2;
	}
	return true;
}

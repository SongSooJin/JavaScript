function buttonClicked(){
	var thead = document.getElementById('thead');
	var tbody = document.getElementById('tbody');
	var num1 = Number((document.getElementById('num1')).value);
	var num2 = Number((document.getElementById('num2')).value);
	var tds;
	var trs = [];
	var ths = [];
	thead.innerHTML = "";
	tbody.innerHTML = "";

	if(num1!=0&&(num2>num1||num2===num1)){
		for(var i = num1; i <= num2 ; i ++){
			ths.push("<th>"+i+"</th>");
		}
		trs = [];
		trs.push("<tr>"+ths.join("")+"</tr>");
		thead.innerHTML += trs.pop(i);

		for(var i  = 1 ; i <= 9; i++){
			tds = [];
			for(var j = num1 ; j <= num2 ; j++){
				tds.push("<td>"+j+" x "+i+" = "+j*i+"</td>");

			}
			trs.push("<tr>"+tds.join("")+"</tr>");
			tbody.innerHTML += trs.pop(i);
		}
	}else{
		alert("숫자를 정확히 입력 해주십시오.");	
	}
}
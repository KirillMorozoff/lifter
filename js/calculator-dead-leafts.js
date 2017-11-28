
function deadleafts(){
	
	var weigth = document.getElementById("weigthleafts").value;
	weigth = weigth.replace(",", ".");
	
	
	//Создание списка Weightов
	var numbers = [30];
	var trys = [(weigth/100)*50, (weigth/100)*60, (weigth/100)*70, (weigth/100)*75, (weigth/100)*80, (weigth/100)*85, (weigth/100)*100, (weigth/100)*105, (weigth/100)*110];
	
	
	for(var i=numbers[0]; i<180; i=i+2.5){
		numbers.push(i);									
	}
	
	for (var i = 0; i < trys.length; i++){
		for(var j = 0; j < numbers.length; j++){
			if (trys[i] > numbers[j] && trys[i] < numbers[j+1]){
				trys[i] = numbers[j+1];
				console.log(trys[i]);
			} 
		}
	}
		
	var newDiv = document.createElement('div');
	newDiv.innerHTML = ' ';
	newDiv.innerHTML = '<br>' + 
	'<style>table{width:100%; padding:20px;}th{text-align:left;}h4{padding-left:20px;font-size:16px;color:grey;margin-bottom:-10px;}</style>'+
	'<div class="content-block-title">1-3 weeks</div><hr>'+
	'<table id="table" align="center">'+
	
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>5</td><td>' + trys[0] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' + trys[1] + ' ' + 'кг.' + '</td><td>2</td></tr>'+
	'<tr><td>3</td><td>' + trys[2] + ' ' + 'кг.' + '</td><td>2</td></tr>'+
	'<tr><td>3</td><td>' + trys[3] + ' ' + 'кг.' + '</td><td>4</td></tr>'+
	'</table>'+
	
	'<div class="content-block-title">3-6 weeks</div><hr>'+
	'<table id="table" align="center">'+
	
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>5</td><td>' + trys[0] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' +  trys[1] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' +  trys[2] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' +  trys[4] + ' ' + 'кг.' + '</td><td>5</td></tr>'+
	'</table>'+
	

	
	'<div class="content-block-title">6-9 weeks</div><hr>'+
	'<table id="table" align="center">'+
	
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>5</td><td>' + trys[0] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' + trys[1] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[2] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[5] + ' ' + 'кг.' + '</td><td>3</td></tr>'+
	'</table>'+
	
	'<div class="content-block-title">Exam</div><hr>'+
	'<table id="table" align="center">'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>5</td><td>' + trys[0] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>2</td><td>' + trys[2] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>1</td><td>' + trys[3] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>1</td><td>' + trys[4] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>1</td><td>' + trys[5] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>1</td><td>' + trys[6] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>1</td><td>' + trys[7] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'<tr><td>1</td><td>' + trys[8] + ' ' + 'кг.' + '</td><td>1</td></tr>'+
	'</table>'+
	'<br><div style="padding:20px;"><small>You also need to do various utility exercises such as "hyperextension", "Squats" "leg Press" and so forth.</small></div>'
	
	;
	
	if (document.getElementById("deadleaftscolumn").hasChildNodes()) {
		deadleaftscolumn.removeChild(deadleaftscolumn.childNodes[0]);
		deadleaftscolumn.appendChild(newDiv);
	} else{
		deadleaftscolumn.appendChild(newDiv);
	}
										

	}

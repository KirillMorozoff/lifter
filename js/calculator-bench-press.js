
function benchpress(){
	
	var weigth = document.getElementById("weigth").value;
	var days = document.getElementById("bench-days").value;
	weigth = weigth.replace(",", ".");
	
	
	//Создание списка Weightов
	var numbers = [10];
	
		
	if (days==2){
		
	var trys = [(weigth/100)*45, (weigth/100)*52,(weigth/100)*70, (weigth/100)*72, (weigth/100)*85,
				(weigth/100)*75, (weigth/100)*90, (weigth/100)*105, (weigth/100)*110, (weigth/100)*92]
	
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
	'<h4>Hard day</h4>'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>10</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>2</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' + trys[4] + ' ' + 'kg.' + '</td><td>6</td></tr>'+
	'</table>'+
	'<table id="table" align="center">'+
	'<h4>Relax day</h4>'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>10</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>2</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>5</td></tr>'+
	'</table><br>'+
	
	'<div class="content-block-title">4-6 weeks</div><hr>'+
	'<table id="table" align="center">'+
	'<h4>Hard day</h4>'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>10</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>2</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' + trys[6] + ' ' + 'kg.' + '</td><td>5</td></tr>'+
	'</table>'+
	'<table id="table" align="center">'+
	'<h4>Relax day</h4>'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>10</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>2</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>5</td></tr>'+
	'</table><br>'+
	
	'<div class="content-block-title">7-9 weeks</div><hr>'+
	'<table id="table" align="center">'+
	'<h4>Hard day</h4>'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>10</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>2</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[9] + ' ' + 'kg.' + '</td><td>3</td></tr>'+
	'</table>'+
	'<table id="table" align="center">'+
	'<h4>Relax day</h4>'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>10</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>2</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>4</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>5</td></tr>'+
	'</table><br>'+
				
		'<div class="content-block-title">Exam</div><hr>'+
		'<table id="table" align="center">'+
		'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
		'<tr><td>5</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>2</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>1</td><td>' + trys[4] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>1</td><td>' + trys[7] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>1</td><td>' + trys[8] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		
		
	'</table><br>'+
	
	'<div style="padding:20px;"><small>The first two weeks it is necessary to do auxiliary exercises: "Press on incline bench", "French press", bars, "Bench narrow grip", wiring with dumbbells</small></div>'
	
	;
	} else if(days==1){
		
		
	var trys = [(weigth/100)*45, (weigth/100)*50,(weigth/100)*60, (weigth/100)*70, (weigth/100)*80,
				(weigth/100)*72, (weigth/100)*80, (weigth/100)*83, (weigth/100)*102, (weigth/100)*90]
	
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
	'<style>table{width:100%; padding:20px;}th{text-align:left;}</style>'+
	'<div class="content-block-title">First week</div><hr>'+
	'<table id="table" align="center">'+
	'<tr><th >Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>5</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>5</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>5</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>2</td></tr>'+
	'<tr><td>5</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>5+</td><td>' + trys[4] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'</table>'+
	
	'<div class="content-block-title">Second week</div><hr>'+
	'<table id="table" align="center">'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>3</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[5] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[6] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3+</td><td>' + trys[7] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'</table>'+
	
	
	'<div class="content-block-title">Third	 week</div><hr>'+
	'<table id="table" align="center">'+
	'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
	'<tr><td>5</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>5</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>5</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>5</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>3</td><td>' + trys[4] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
	'<tr><td>1+</td><td>' + trys[9] + ' ' + 'kg.' + '</td><td>1</td></tr>'+

	'</table>'+
	
			
		'<div class="content-block-title">Exam</div><hr>'+
		'<table id="table" align="center">'+
		'<tr><th>Repetition</th><th >Weight</th><th>Approaches</th></tr>' +
		'<tr><td>5</td><td>' + trys[0] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>3</td><td>' + trys[1] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>2</td><td>' + trys[2] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>1</td><td>' + trys[3] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>1</td><td>' + trys[7] + ' ' + 'kg.' + '</td><td>1</td></tr>'+
		'<tr><td>1</td><td>' + trys[8] + ' ' + 'kg.' + '</td><td>1</td></tr>'+		
	'</table><br>'+'<div style="padding:20px;">'+	
		'<small>The first two weeks it is necessary to do auxiliary exercises: "Press on incline bench", "French press", bars, "Bench narrow grip", wiring with dumbbells</small>'
	+'</div'
	;
	}
	
	if (document.getElementById("benchpresscolumn").hasChildNodes()) {
		benchpresscolumn.removeChild(benchpresscolumn.childNodes[0]);
		benchpresscolumn.appendChild(newDiv);
	} else{
		benchpresscolumn.appendChild(newDiv);
	}
										

	}

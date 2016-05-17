$(document).ready(function(){
	console.log("document ready");

		var ss = 0;
		var mm = 0;
		var hh = 0;

		function clock(){

//setTimeout is a countdown, wait for 1s before executing fnc
	setTimeout(function(){
					ss++; //increase by 1
		
					if(ss < 10 ){
						ss = "0"+ss;
					}
					else if( ss == 60 ){
						mm++;
						ss = "00";
						if( mm < 10 ){
							mm = "0"+ mm;
						}
					else if( mm == 60 ){
							hh++;
							mm = "00";
							if( hh < 10){
								hh = "0"+ hh;
							}else if( hh == 12 ){
								hh = "00";
							}
						}
					}
			$("#ss").html( ss );
			$("#mm").html( mm );
			$("#hh").html( hh );

			clock();

		}, 50);

	}

	clock();
});
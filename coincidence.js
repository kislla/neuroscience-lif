
 function coincidence() {

	
	
	function bucket_C(){
		let taps = new Array(2);
		let spike = 0;
		let n = 100000;

		let check_5 = new Array(); 
		let check_3 = new Array(); 

		taps[0] = 3;
		taps[1] = 5;

		while(n >0){
			let random_3 = Math.floor(Math.random() * 5) + 1 ;
			let random_5 = Math.floor(Math.random() * 5) + 1;
			if(random_3 == 3)
				check_3.unshift(1);
			else 
				check_3.unshift(0);
			if(random_5 == 5)
				check_5.unshift(1);
			else
				check_5.unshift(0);
                console.log(check_3.toString() + "\t" + check_5.toString());

			let flag = 10; 
			let counter_3 = false;
			let counter_5 = false;
			if(check_3.length >= 3 && check_5.length >= 5){
				for (let i = check_3.length; i > 2 && check_3.length <= flag; i--) {
					if(check_3[i-1] == 1 && check_3[i-2] == 1 && check_3[i-3] == 1){
								counter_3 = true;
								break;
							}
				}
				if(counter_3){
					for (let i = check_5.length; i > 4 && check_5.length <= flag; i--) {
						if(check_5[i-1] == 1 && check_5[i-2] == 1 && check_5[i-3] == 1 && check_5[i-4] == 1 && check_5[i-5] == 1){
							counter_5 = true;
							break;
						}
					}
				}
			}

			if(check_3.length >= flag)
				check_3.pop();
			if(check_5.length >= flag)
				check_5.pop();
			if(counter_3 && counter_5){
				spike++;
				for (let i = 0;  check_3.size()!=2; i++) 
					check_3.pop();
				for (let i = 0;  check_5.size()!=4; i++) 
					check_5.pop();
				console.log("** flash ! **");
			}

			n--;
		}

		console.log("SPIKE: " + spike);

    }
    bucket_C();

}
coincidence();
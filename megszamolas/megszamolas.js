class MEGSZAMOLAS {
	constructor (a=[], felt) {
		this.a = a;
		this.feltetel = felt;
		this.felt = felt.split("elem").join("this.a[this.i]");
		this.i = 0;
		this.result = 0;
		this.node1 = "";
	}

	update () {
		if(this.i < this.a.length){
			if(eval(this.felt)){
				this.result++;
				this.node1 = "A Pointer fölött felett álló " + this.feltetel  + " feltétel teljesul. Növeljük a jelenlegi állás értékét.";
			}else{
				this.node1 = "A Pointer fölött álló számra nem teljesül a " + this.feltetel + " feltétel.";
			}
		this.i++;
		}else{
			this.node1 = "vége";
		}
	}

	show () {
		return {
			pointerA: this.i,
			comparison: this.node1,
			currentResult: [this.result]
		}
	}
}

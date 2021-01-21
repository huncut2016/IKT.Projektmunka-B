class MAX {
	constructor(a=[]){
		this.a = a;
		this.i = 1;
		this.result = a[0];
		this.node1 = "";
	}

	update(){

		if(this.i < this.a.length){
			if(this.a[this.i] > this.result){
				this.result = this.a[this.i];
				this.node1 = "A pointer fölött álló szám nagyobb, mint a jelenlegi állás, ezért a pointer fölött álló elemet belerakjuk a jelenlegi állásba és tövábbléptetünk.";
			}else{
				this.node1 = "A pointer fölött álló szám nem nagyobb, mint a jelenlegi állás, ezért továbblépünk."

			}
			this.i++;
		}
	}

	show () {
		return {
			pointerA: this.i,
			currentResult: [this.result],
			comparison: this.node1
		}

	}
}

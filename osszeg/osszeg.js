class OSSZEG{
	constructor (a=[]) {
		this.a = a;
		this.i = 0;
		this.result = 0;
		this.node1 = "";
	}

	update () {
		if(this.i < this.a.length)  {
			this.result += this.a[this.i];
			this.i++;
			this.node1 = "A jelenlegi álláshoz hozzáadjuk a Pointer fölött álló elemet és továbbléptetjük.";
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

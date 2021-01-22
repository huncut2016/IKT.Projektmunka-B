class UNION {
    constructor(a = [], b = []) {
        this.a = a;
        this.b = b;
        this.result = [];

        this.aSize = a.length;
        this.bSize = b.length;
        this.i = 0;
        this.j = 0;
        this.node1 = "";

        this.con = true;
    }

    update() {
        let aLast = this.aSize - 1;
        let bLast = this.bSize - 1;

        if (((this.i < this.aSize) || (this.j < this.bSize)) && this.con) {
            switch (true) {
                case aLast < this.i:
                    this.node1 = "Kifogyott az A halmaz, ezért a BPointer utáni összes elemet belerakjuk az eredményhalmazba";
                    for (let k = this.j; k < this.bSize; k++) {
                        this.result.push(this.b[k]);
                    }
                    this.con = false;
                    this.i = this.aSize;
                    this.j = this.bSize;
                    break;

                case bLast < this.j:
                    this.node1 = "Kifogyott a B halmaz, ezért a APointer utáni összes elemet belerakjuk az eredményhalmazba";
                    for (let k = this.i; k < this.aSize; k++) {
                        this.result.push(this.a[k]);
                    }
                    this.i = this.aSize;
                    this.j = this.bSize;
                    this.con = false;
                    break;

                case this.a[this.i] == this.b[this.j]:
                    this.node1 = "Mindkét elem azonos, ezért az egyiket belerakjuk az eredményhalmazba. APointert és Bpointert is továbbléptetjük";
                    this.result.push(this.a[this.i]);
                    this.j++;
                    this.i++;
                    break;

                case this.a[this.i] < this.b[this.j]:
                    this.node1 = "Az APointer fölött álló szám kissebb, mint a BPointer fölött álló szám. Ezért a APointer számát belerakjuk az eredményhalmazba és APointert továbbléptetjük"
                    this.result.push(this.a[this.i]);
                    this.i++;
                    break;

                case this.b[this.j] < this.a[this.i]:
                    this.node1 = "A BPointer fölött álló szám kissebb, mint az APointer fölött álló szám. Ezért a BPointer számát belerakjuk az eredményhalmazba és BPointert továbbléptetjük"
                    this.result.push(this.b[this.j]);
                    this.j++;
                    break;
            }
        } else {
		this.node1 = "vége";
	}
    }

    show() {
        return {
            pointerA: this.i,
            pointerB: this.j,
            comparison: this.node1,
            currentResult: this.result,
            setA: this.a,
            setB: this.b,
        }
    }
}

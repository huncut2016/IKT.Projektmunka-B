class Metszet {
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
                case aLast < this.i || bLast < this.j:
                    this.node1 = 'Az egyik tömb kifogyott, magyarul nem lehet több megegyező elem. Kilépünk. ';
                    for (let k = this.j; k < this.bSize; k++) {
                        this.result.push(this.b[k]);
                    }
                    this.con = false;
                    this.i = this.aSize;
                    this.j = this.bSize;
                    break;
                case this.a[this.i] == this.b[this.j]:
                    this.node1 = "Mindkét Pointer fölött álló szám egyenlő. Az egyiket belerekjuk a jelenlegi állásba és mindkét Pointert továbbléptetjük";
                    this.result.push(this.a[this.i]);
                    this.j++;
                    this.i++;
                    break;

                case this.a[this.i] < this.b[this.j]:
                    this.node1 = "Az APointer fölött álló szám kissebb, mint a BPointer fölött álló szám. (Nem egyenlőek) EZért APointert továbbléptetjük.";
                    this.i++;
                    break;

                case this.b[this.j] < this.a[this.i]:
                    this.node1 = "BPointer fölött álló szám kissebb, mint az APointer fölött álló. (nem egyenlőek) . Ezért A BPointert továbbléptetjük."
                    this.j++;
                    break;
            }
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

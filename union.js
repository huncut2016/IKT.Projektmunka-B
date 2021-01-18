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
                    this.node1 = "Az \"a\" halmaznak nincs több vizsgálható eleme, ezért belerakjuk a \"b\" összes többi elemét az únióba";
                    for (let k = this.j; k < this.bSize; k++) {
                        this.result.push(this.b[k]);
                    }
                    this.con = false;
                    break;

                case bLast < this.j:
                    this.node1 = "Az \"b\" halmaznak nincs több vizsgálható eleme, ezért belerakjuk a \"a\" összes többi elemét az únióba";
                    for (let k = this.i; k < this.aSize; k++) {
                        this.result.push(this.a[k]);
                    }
                    this.con = false;
                    break;

                case this.a[this.i] == this.b[this.j]:
                    this.node1 = "Mindkét elem azonos, ezért egyik sem kissebb, mint a másik. Mindkét pointert továbbléptetjük";
                    this.result.push(this.a[this.i]);
                    this.j++;
                    this.i++;
                    break;

                case this.a[this.i] < this.b[this.j]:
                    this.node1 = "\"a\" jelen eleme kissebb, mint \"b\" eleme, ezért a jelenlegi elemét hozzáadjuk és továbbléptetjük a Pointert"
                    this.result.push(this.a[this.i]);
                    this.i++;
                    break;

                case this.b[this.j] < this.a[this.i]:
                    this.node1 = "\"b\" jelen eleme kissebb, mint \"a\" eleme, ezért a jelenlegi elemét hozzáadjuk és továbbléptetjük a Pointert"
                    this.result.push(this.b[this.j]);
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
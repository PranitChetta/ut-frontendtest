export class ContactDetails {
    public obj: any[] = [];
    public constructor(public name?: string, public mobile?: string) {
        if (this.mobile !== undefined && this.name !== undefined) {
            this.mobile = "";
            this.name = "";
        }
    }

    public list(): ContactDetails[] {
        if (localStorage.getItem("data") !== undefined) {
            this.obj = JSON.parse(localStorage.getItem("data") || "[]") as any[];
        }
        this.obj.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        return this.obj;
    }

    public add() {
        if (localStorage.getItem("data") !== undefined) {
            this.obj = JSON.parse(localStorage.getItem("data") || "[]") as ContactDetails[];
        }
        let current = {
            name: this.name,
            mobile: this.mobile
        }
        //console.log(current);
        this.obj.push(current);
        //console.log(this.obj);
        localStorage.setItem("data", JSON.stringify(this.obj));
    }
    update() {
        localStorage.setItem("data", JSON.stringify(this.obj));
    }
}

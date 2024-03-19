class Student {
    constructor(name, age, mark) {
        this.name = name;
        this.mark = mark;
        this.age = age;
    }
    setPlacement(minPlacementAge) {
        return (marks) => {
            if (this.mark > marks && this.age >= minPlacementAge) {
                console.log(this.name + "  Ready for Placement");
            } else {
                console.log(this.name + "  Not Ready for Placement");
            }
        };       
    }
}

const amal = new Student("amal", 25, 75);
const arun = new Student("arun", 13, 35);

amal.setPlacement(20)(60);
arun.setPlacement(20)(60);

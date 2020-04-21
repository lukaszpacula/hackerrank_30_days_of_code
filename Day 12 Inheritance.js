class Student extends Person {
    constructor(firstName, lastName, identification, testScore) {
        super(firstName, lastName, identification);
        this.testScore = testScore;
    }
    calculate() {
    var testScoreAvg = (this.testScore.reduce(function(a, b) { return a + b; })) /
    this.testScore.length;
        
        if (testScoreAvg < 40) {
            return "T";
        } else if (testScoreAvg >= 40 && testScoreAvg < 55) {
            return "D";
        } else if (testScoreAvg >= 55 && testScoreAvg < 70) {
            return "P";
        } else if (testScoreAvg >= 70 && testScoreAvg < 80) {
            return "A";
        } else if (testScoreAvg >= 80 && testScoreAvg < 90) {
            return "E";
        } else if (testScoreAvg >= 90 && testScoreAvg <= 100) {
            return "O";
        }
    }   
}

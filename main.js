var app = new Vue ({
    el: "#app",
    data: {
        humanChoice: 1,
        botChoice: 1,
        humanScore: 0,
        botScore: 0,

    },
    methods: {
        compare() {
            this.botChoice = Math.floor(Math.random()*3 + 1);
            if ((this.botChoice === 1) &&  (this.humanChoice === 3)) {
                this.botScore+=1;
            } else if ((this.humanChoice === 1) &&  (this.botChoice === 3)) {
                this.humanScore+=1;
            } else if (this.botChoice > this.humanChoice) {
                this.botScore+=1;
            } else if (this.botChoice < this.humanChoice) {
                this.humanScore+=1;
            } else if ((this.botChoice === this.humanChoice)) {
                this.humanScore +=0;
            }
        },
        reset() {
            this.humanChoice = 1;
            this.botChoice = 1;
            this.humanScore = 0;
            this.botScore = 0;
        }
    }
})

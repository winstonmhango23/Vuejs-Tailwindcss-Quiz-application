
const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 3,
            questions: [
                {
                    question: "Q1. Who create python  language?",
                    answers: {a: 'Guido van Rossum', b: 'Kristen Nygaard', c: 'Bjarne Stroustrup', d: 'Ole-Johan Dahl'},
                    correctAnswer: 'a'
                },
                {
                    question: "Q2. What does PEP stand for in python?",
                    answers: {a: 'name of parentehes parameters', b: 'python english processing', c: 'Python Enhancement Proposal', d: 'PyPi'},
                    correctAnswer: 'c'
                },
                {
                    question: "Q3. What are python modules?",
                    answers: {a: 'Are .py files with executable code', b: 'Python packages',c: 'Python list objects',d: 'Python packages'},
                    correctAnswer: 'a'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})

app.mount('#app')
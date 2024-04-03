import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: 'Python or JS?',
        answerA: 'Python',
        answerB: 'JS',
        votesA: 9,
        votesB: 10,
    },
])

export default PollStore;
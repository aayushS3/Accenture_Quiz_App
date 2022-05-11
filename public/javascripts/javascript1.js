const submit = document.getElementById("Submit2")
submit.addEventListener("click",(event)=> 
{let score = 0
if (document.getElementById("milwauke-bucks").checked == true)
    {score += 1}

console.log(score)

event.preventDefault()

})

var answers1, answers2, answers3, answers4, questions;
questions = ["Who won the NBA champonship", "Who won MVP in 2021?", "What team is Steph Curry on?"];
answers1 = ["Milwauke bucks", "2", "3"];
answers2 = ["Golden State warriors", "2", "3"];
answers3 = ["Los Angels Lakers", "2", "3"];
answers4 = ["Cleveland Caaliers", "2", "3"];

// for (question of questions) {
//     message = document.getElementById('question')
//     message.innerText = question;
// }

// for (answer1 of answers1) {
//     message = document.getElementById('question')
//     message.innerText = question;
// }

// for (var i = 0; i < questions.length; i += 1) {
let i = 0    
console.log(questions[i] + "\n" + answers1[i] + "\n" + answers2[i] + "\n" + answers3[i] + "\n" + answers4[i]);
    document.getElementById('question').innerText = questions[i];
    document.getElementById('answer1').innerText = answers1[i];
    document.getElementById('answer2').innerText = answers2[i];
    document.getElementById('answer3').innerText = answers3[i];
    document.getElementById('answer4').innerText = answers4[i];
    
    
// }
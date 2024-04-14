let quizform = document.querySelector(".quizform");
let result = document.querySelector(".result");
let quizslang = document.querySelector(".quizslang");
let headresult = document.querySelector(".head-result");
let score = 0;
let correctanswer = ['a','c','b','a','a'];


quizform.addEventListener("submit",
    e => {
        e.preventDefault();
        let useranswer = [quizform.q4.value,quizform.q5.value,quizform.q1.value,quizform.q2.value,quizform.q3.value];        
        useranswer.forEach((answer,index)=>{
            if(answer === correctanswer[index]){
                score = score +1;

            }
        });
        // after form get submitted,, page get scrolled to pos 0,0 i,e top
        scrollTo(0,0);
        console.log(score);
        let resultinper = (score/5)*100;
        console.log(resultinper);
        
        headresult.style.display="block";

        // animating the score(from 0 to score val)
        let initial_score = 0;
        let score_in_pc = setInterval(()=>{
            result.innerHTML = `<span class="fs-1 text-primary">${initial_score}</span>% answer where correct`;
            if(initial_score === resultinper){
                clearInterval(score_in_pc);
            }
            else{
                initial_score++;
            }
        },20);


        if(resultinper < 40){
            quizslang.innerHTML = "It's good u r leaving Nepal";
        }
        else if(resultinper > 80){
            quizslang.innerHTML = "Your Country's fate is in your hand";
        }
        else{
            quizslang.innerHTML = "You may be the one to change";
        }
        

    }
);
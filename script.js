const Questions = [
    {
      q: "What is the capital city of Kerala?",
      a: [
        { text: "Thiruvananthapuram", isCorrect: false },
        { text: "Ernakulam", isCorrect: false },
        { text: "Kottayam", isCorrect: true },
        { text: "Palakkad", isCorrect: false }
      ]
    },
    {
      q: "Which is the official language of Kerala?",
      a: [
        { text: "Malayalam", isCorrect: true },
        { text: "Tamil", isCorrect: false },
        { text: "Kannada", isCorrect: false },
        { text: "Sanskrit", isCorrect: false }
      ]
    },
    {
      q: "Which is the largest city in Kerala by population?",
      a: [
        { text: "Kozhikode", isCorrect: false },
        { text: "Kannur", isCorrect: false },
        { text: "Thiruvananthapuram", isCorrect: false },
        { text: "Kochi", isCorrect: true }
      ]
    },
    {
      q: "Which is the famous dance form of Kerala?",
      a: [
        { text: "Bharatanatyam", isCorrect: false },
        { text: "Kuchipudi", isCorrect: false },
        { text: "Kolkali", isCorrect: false },
        { text: "Kathakali", isCorrect: true }
      ]
    },
    {
      q: "Which is the longest river in Kerala?",
      a: [
        { text: "Periyar River", isCorrect: false },
        { text: "Bharathapuzha River", isCorrect: true },
        { text: "Pamba River", isCorrect: false },
        { text: "Chaliyar River", isCorrect: false }
      ]
    },
    {
      q: "Which city is known as the 'Venice of the East' in Kerala?",
      a: [
        { text: "Alappuzha", isCorrect: true },
        { text: "Kochi", isCorrect: false },
        { text: "Kozhikode", isCorrect: false },
        { text: "Thiruvananthapuram", isCorrect: false }
      ]
    },
    {
      q: "Which famous festival is celebrated in Thrissur, Kerala?",
      a: [
        { text: "Onam", isCorrect: false },
        { text: "Vishu", isCorrect: false },
        { text: "Pongal", isCorrect: false },
        { text: "Thrissur Pooram", isCorrect: true }
      ]
    }
  ];
  
  let currQuestion = 0;
  let score = 0;
  
  function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
  
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";
  
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
      const choicesdiv = document.createElement("div");
      const choice = document.createElement("input");
      const choiceLabel = document.createElement("label");
  
      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;
  
      choiceLabel.textContent = Questions[currQuestion].a[i].text;
  
      choicesdiv.appendChild(choice);
      choicesdiv.appendChild(choiceLabel);
      opt.appendChild(choicesdiv);
    }
  }
  
  loadQues();
  
  function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
  }
  
  function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
      currQuestion++;
      loadQues();
    } else {
      document.getElementById("opt").remove();
      document.getElementById("ques").remove();
      document.getElementById("btn").remove();
      loadScore();
    }
  }
  
  function checkAns() {
    const selectedAns = parseInt(
      document.querySelector('input[name="answer"]:checked').value
    );
  
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
      score++;
      console.log("Correct");
    }
    
    nextQuestion();
  }
  
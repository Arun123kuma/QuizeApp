const questions = [
    {
        question: "Which Kuwaiti Minister visited India in December 2024?",
        options: ["H.E. Abdullah Ali Al Yahya", "H.E. Khaled Al-Jarallah", "H.E. Bader Al-Mulla", "H.E. Sheikh Dr. Ahmed Nasser"],
        answer: 2 // H
    },
    {
        question: "What was one key outcome of the Kuwaiti Minister's visit to India?",
        options: ["Signing of a MoU to establish a Joint Commission for Cooperation (JCC)", "Signing a defence pact", "Inauguration of a cultural festival", "Launch of a trade agreement"],
        answer: 0
    },
    {
        question: "Which organization launched 'Trade Watch Quarterly' for Q1FY25?",
        options: ["NITI Aayog", "Ministry of Commerce", "RBI", "Ministry of Finance"],
        answer: 1 // Ministry of Commerce
    },
    {
        question: "India’s total trade performance for the 1st Half (H1) of 2024 reached how many USD?",
        options: ["576 billion", "500 billion", "600 billion", "550 billion"],
        answer: 0
    },
    {
        question: "Which project received Cabinet approval on December 6, 2024?",
        options: ["Rithala-Narela-Nathupur Metro corridor", "New bullet train project", "New highway project", "New airport construction"],
        answer: 0
    },
    {
        question: "How many new Navodaya Vidyalayas (NVs) were approved for establishment?",
        options: ["28", "50", "10", "35"],
        answer: 0
    },
    {
        question: "Which Union Minister launched 'Anna Chakra' and 'SCAN' Portal?",
        options: ["Pralhad Joshi", "Rajnath Singh", "Nirmala Sitharaman", "Piyush Goyal"],
        answer: 0 // Pralhad Joshi
    },
    {
        question: "The SCAN portal simplifies the process of subsidy claim submission under which act?",
        options: ["National Food Security Act (NFSA) 2013", "Consumer Protection Act 1986", "Essential Commodities Act 1955", "Food Safety and Standards Act 2006"],
        answer: 0
    },
    {
        question: "Where was the 'GI & Beyond' Summit organized?",
        options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: 0 // New Delhi
    },
    {
        question: "Which campaign did Shivraj Singh Chouhan launch to combat gender-based violence?",
        options: ["Nayi Chetna 3.0", "Beti Bachao Beti Padhao", "Sukanya Samriddhi Yojana", "Poshan Abhiyaan"],
        answer: 0
    },
    {
        question: "Who chaired the Defence Acquisition Council (DAC) meeting on December 3, 2024?",
        options: ["Rajnath Singh", "Narendra Modi", "Amit Shah", "Nirmala Sitharaman"],
        answer: 0
    },
    {
        question: "How much was the value of the capital acquisitions approved by the DAC?",
        options: ["Rs 21,772 crore", "Rs 10,000 crore", "Rs 30,000 crore", "Rs 15,000 crore"],
        answer: 0
    },
    {
        question: "Which Union Minister launched the 100-Day TB Elimination Campaign?",
        options: ["Jagat Prakash Nadda", "Mansukh Mandaviya", "Harsh Vardhan", "Ram Vilas Paswan"],
        answer: 1 // Mansukh Mandaviya
    },
    {
        question: "When will the 100-Day TB Elimination Campaign culminate?",
        options: ["March 24, 2025", "June 30, 2025", "December 31, 2025", "January 1, 2025"],
        answer: 0 // March 24, 2025
    },
    {
        question: "Where was India's first Hyperloop test track completed?",
        options: ["IIT Madras, Tamil Nadu", "IIT Bombay, Maharashtra", "IIT Delhi, New Delhi", "IIT Kanpur, Uttar Pradesh"],
        answer: 0
    },
    {
        question: "Which Union Minister announced the completion of India's first Hyperloop test track?",
        options: ["Ashwini Vaishnaw", "Piyush Goyal", "Smriti Irani", "Nitin Gadkari"],
        answer: 0 // Ashwini Vaishnaw
    },
    {
        question: "Who presented the President’s Colours to 4 battalions of Mechanised Infantry?",
        options: ["General Upendra Dwivedi", "General Bipin Rawat", "General Manoj Mukund Naravane", "General Dalbir Singh"],
        answer: 0
    },
    {
        question: "How many battalions received the President’s Colour Award?",
        options: ["4", "5", "6", "3"],
        answer: 0
    },
    {
        question: "Which Union Minister launched the 'GI & Beyond' Summit?",
        options: ["Union Minister of Textiles", "Union Minister of Commerce", "Union Minister of Culture", "Union Minister of Science & Technology"],
        answer: 0 // Union Minister of Textiles
    },
    {
        question: "Which ministry developed the NYPS portal?",
        options: ["Ministry of Parliamentary Affairs", "Ministry of Home Affairs", "Ministry of External Affairs", "Ministry of Education"],
        answer: 0
    },
    {
        question: "What is the theme of IFFI 2024?",
        options: ["Young Filmmakers – The Future is Now", "Cinema for a Better Tomorrow", "Celebrating Indian Cinema", "Global Cinema Unites"],
        answer: 0 // Young Filmmakers – The Future is Now
    },
    {
        question: "Which festival was organized by the Ministry of Information & Broadcasting in collaboration with NFDC and ESG?",
        options: ["IFFI 2024", "Dadasaheb Phalke Awards", "National Film Awards", "Mumbai Film Festival"],
        answer: 0
    },
    {
        question: "Who launched the NYPS portal?",
        options: ["Former President Ram Nath Kovind", "Former Prime Minister Manmohan Singh", "Former Vice President M. Venkaiah Naidu", "Former Chief Justice Ranjan Gogoi"],
        answer: 0
    },
    {
        question: "What is the full form of NYPS?",
        options: ["National Youth Parliament Scheme", "National Youth Policy Scheme", "National Youth Programme Scheme", "National Youth Participation Scheme"],
        answer: 0
    },
    {
        question: "What does the Nayi Chetna campaign aim to combat?",
        options: ["Gender-based violence", "Child labour", "Drug abuse", "Environmental pollution"],
        answer: 0
    },
    {
        question: "Who is collaborating with DPIIT to foster over 2,000 startups?",
        options: ["WinZO", "Flipkart", "Amazon", "Paytm"],
        answer: 0 // WinZO
    },
    {
        question: "What is the 'Anna Chakra' initiative?",
        options: ["A PDS supply chain optimization tool", "A health campaign", "An education initiative", "A financial inclusion program"],
        answer: 0
    },
    {
        question: "Which summit showcased India's GI tagged handloom products?",
        options: ["'GI & Beyond' Summit", "Handloom Week", "Textile Summit", "Crafts Expo"],
        answer: 0
    },
    {
        question: "When was the 5th anniversary of the NYPS portal observed?",
        options: ["November 26, 2024", "December 5, 2024", "January 1, 2025", "October 10, 2024"],
        answer: 0
    }
];



// Load the quiz when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    loadQuiz(questions);
});

function loadQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear existing content

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2>Q${index + 1}: ${question.question}</h2>
            ${question.options.map((option, i) => `
                <div class="option">
                    <label>
                        <input type="radio" name="question${index}" value="${i}">
                        ${option}
                    </label>
                </div>
            `).join('')}
            <hr class="divider">
        `;
        quizContainer.appendChild(questionElement);
    });
    
    document.getElementById('submit').addEventListener('click', () => {
        const { score, results } = calculateScore(questions);
        showResult(score, results);
    });
}

function calculateScore(questions) {
    let score = 0;
    const results = [];
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const userAnswer = selectedOption ? parseInt(selectedOption.value) : null;
        if (userAnswer === question.answer) {
            score++;
        }
        results.push({
            question: question.question,
            userAnswer: userAnswer !== null ? question.options[userAnswer] : 'No answer',
            correctAnswer: question.options[question.answer],
            isCorrect: userAnswer === question.answer // Track if the answer was correct
        });
    });
    return { score, results };
}

function showResult(score, results) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You scored ${score} out of ${results.length}<br><br>`;
    
    results.forEach((result, index) => {
        resultElement.innerHTML += `
            <div class="result-item">
                <strong>Q${index + 1}:</strong> ${result.question}<br>
                Your answer: <span class="${result.isCorrect ? 'correct' : 'incorrect'}">${result.userAnswer}</span><br>
                Correct answer: <span class="correct">${result.correctAnswer}</span><br>
                <hr class="divider">
            </div>
        `;
    });
}

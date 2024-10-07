const questions = [
    {
        question: "How much investment did iBUS Network secure from the International Finance Corporation (IFC)?",
        options: ["USD 20 million", "USD 34 million", "USD 50 million", "USD 40 million"],
        answer: 1 // Index of the correct answer
    },
    {
        question: "Which financial institution provided funding for the Rs 530 crore water supply project in Tripura?",
        options: ["World Bank", "Asian Development Bank (ADB)", "International Monetary Fund (IMF)", "European Investment Bank (EIB)"],
        answer: 1
    },
    {
        question: "Which Chief Minister laid the foundation for the ADB-funded water supply project in Tripura?",
        options: ["Biplab Kumar Deb", "Manik Saha", "Ratan Lal Nath", "Sudip Roy Barman"],
        answer: 1
    },
    {
        question: "Which online travel platform partnered with Bank of Baroda to launch a co-branded travel debit card?",
        options: ["MakeMyTrip", "Cleartrip", "EaseMyTrip", "Yatra"],
        answer: 2
    },
    {
        question: "Which insurance company launched the 'SBIG Health Super Top-Up' plan?",
        options: ["HDFC ERGO", "SBI General Insurance", "ICICI Lombard", "New India Assurance"],
        answer: 1
    },
    {
        question: "How many payment products were launched by City Union Bank at the 5th Global Fintech Fest?",
        options: ["5", "6", "8", "10"],
        answer: 2
    },
    {
        question: "Which two entities collaborated to launch the MyBiz business credit card for SME owners?",
        options: ["HDFC Bank and Visa", "Axis Bank and Mastercard", "ICICI Bank and American Express", "Yes Bank and Diners Club"],
        answer: 1
    },
    {
        question: "Axis AMC launched the first target maturity mutual fund scheme based on which sector?",
        options: ["Information Technology", "Banking", "Non-Banking Financial Company (NBFC)", "Manufacturing"],
        answer: 2
    },
    {
        question: "By which year does Tata Electronics aim to develop India’s first domestically produced semiconductor chips?",
        options: ["2024", "2025", "2026", "2027"],
        answer: 2
    },
    {
        question: "What is the S&P growth forecast for India’s GDP in FY25?",
        options: ["6.5%", "6.8%", "7.1%", "7.5%"],
        answer: 1
    },
    {
        question: "What is Moody’s forecast for India’s GDP growth in CY24?",
        options: ["6.8%", "7.1%", "6.5%", "7.3%"],
        answer: 1
    },
    {
        question: "What is the OECD's GDP forecast for India in FY25?",
        options: ["6.7%", "6.9%", "6.6%", "7.0%"],
        answer: 0
    },
    {
        question: "Which bank launched the National Common Mobility Card (NCMC) at the 5th Global Fintech Fest 2024?",
        options: ["ICICI Bank", "HDFC Bank", "City Union Bank", "Axis Bank"],
        answer: 2
    },
    {
        question: "Which company launched India’s first NBFC sector-based target maturity mutual fund scheme?",
        options: ["HDFC AMC", "ICICI Prudential AMC", "Axis AMC", "SBI Mutual Fund"],
        answer: 2
    },
    {
        question: "What is the projected Current Account Deficit (CAD) for India in FY25 according to the ADB?",
        options: ["1.0%", "1.2%", "1.5%", "1.7%"],
        answer: 1
    },
    {
        question: "Which organization raised India’s GDP forecast to 7% for FY25?",
        options: ["S&P", "OECD", "Moody’s", "ADB"],
        answer: 3
    },
    {
        question: "SBI General Insurance has partnered with which service provider to offer insurance products?",
        options: ["BLS E-Services", "Infosys", "Paytm", "Airtel Payments Bank"],
        answer: 0
    },
    {
        question: "How much funding has the ADB already provided for the water supply project in Tripura?",
        options: ["Rs 530 crore", "Rs 330 crore", "Rs 280 crore", "Rs 500 crore"],
        answer: 1
    },
    {
        question: "What is the sum insured range of the 'SBIG Health Super Top-Up' plan?",
        options: ["Rs 1 lakh to Rs 2 crores", "Rs 2 lakhs to Rs 3 crores", "Rs 5 lakhs to Rs 4 crores", "Rs 10 lakhs to Rs 5 crores"],
        answer: 2
    },
    {
        question: "Which company is collaborating with Tata Electronics to develop domestic semiconductor chips?",
        options: ["Wipro", "Tata Consultancy Services (TCS)", "Infosys", "Reliance"],
        answer: 1
    },
    {
        question: "Which is the first co-branded travel debit card launched by a Public Sector Bank (PSB) in India?",
        options: ["SBI & MakeMyTrip Debit Card", "ICICI & Yatra Debit Card", "Bank of Baroda & EaseMyTrip Debit Card", "PNB & Cleartrip Debit Card"],
        answer: 2
    },
    {
        question: "What is the Moody’s GDP growth forecast for India in CY25?",
        options: ["6.5%", "6.7%", "7.1%", "7.3%"],
        answer: 0
    },
    {
        question: "Which financial product was launched at the 5th GFF to cater to mutual funds?",
        options: ["UPI Lite", "Credit Line on UPI", "Loan Against Securities", "National Common Mobility Card (NCMC)"],
        answer: 2
    },
    {
        question: "Which bank collaborated with Mastercard to launch MyBiz credit card?",
        options: ["ICICI Bank", "HDFC Bank", "Axis Bank", "Yes Bank"],
        answer: 2
    },
    {
        question: "How much did Moody’s raise the Asia-Pacific region's growth forecast for 2025?",
        options: ["From 3.8% to 3.9%", "From 3.9% to 4%", "From 4.0% to 4.1%", "From 4.1% to 4.2%"],
        answer: 1
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
document.addEventListener('DOMContentLoaded', () => {
    const countries = {
        'France': {
            question: 'Translate "Hello" to French',
            answer: 'Bonjour'
        },
        'Japan': {
            question: 'Translate "Thank you" to Japanese',
            answer: 'Arigato'
        },
        'Brazil': {
            question: 'Translate "Good morning" to Portuguese',
            answer: 'Bom dia'
        }
    };

    const countryButtons = document.querySelectorAll('.country');
    const challengeDiv = document.getElementById('challenge');
    const questionEl = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const resultEl = document.getElementById('result');

    let currentCountry = '';

    countryButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCountry = button.getAttribute('data-country');
            questionEl.textContent = countries[currentCountry].question;
            challengeDiv.classList.remove('hidden');
            resultEl.textContent = '';
            answerInput.value = '';
        });
    });

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === countries[currentCountry].answer.toLowerCase()) {
            resultEl.textContent = 'Correct! Well done.';
            challengeDiv.classList.add('hidden');
        } else {
            resultEl.textContent = 'Incorrect. Try again.';
        }
    });
});

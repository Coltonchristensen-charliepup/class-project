document.write('<h3>Welcome !</h3>');

function ensureIsNotBlank(userInput) {
    return !!userInput && userInput.length >1 
}

function ensureIsNumber(userInput) {
    // return true if the value is good
    // return false if value is bad
    const isNotANumber = isNaN(userInput)
    return !isNotANumber
}

function getName() {
    const userName = getUserInput('what is your name??', ensureIsNotBlank)
    const quanityOfBiscuits = getUserInput('how many dog biscuits do you want to give charlie??', ensureIsNumber)

    const value = `<h3>Hello  ${userName}!</h3>`;
    document.write(value);
    let charliesbiscuits = '';
    for(let i = 0 ; i< quanityOfBiscuits; i++){
        charliesbiscuits = `${charliesbiscuits} we fed charlie biscuit ${i+1}</br>`;
    }
    document.write(`<h3>${charliesbiscuits}</h3>`)
}

function getUserInput(question, validator) {
    let userInput
    while (!validator(userInput)) {
        userInput = prompt(question).trim()
    }
    return userInput
}
getName();

git
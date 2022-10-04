function fizzbuzz() {
    let answer = parseInt(prompt("Please enter the number you would like to Fizz and Buzz"));

    for (let i = 1; i <= answer; i++) { // for each time i is less than the answer the user gives, go through the if statements and add one to i at the end
        if (i % 3 === 0 && i % 5 === 0) { // if i / 3 and i / 5 returns a remainder of 0
            console.log("FizzBuzz") // log "fizzbuzz"
        }
        else if (i % 3 === 0) { // if i / 3 returns a remainder of 0
            console.log("Fizz"); // log "fizz"
        } else if (i % 5 === 0) { // if i / 5 returns a remainder of 0
            console.log("Buzz"); // log "buzz"
        } else { // if none of the if statements are true
        console.log(i); // log the number instead
        }
    }
}

// if we have the second or third if statement above the first one, it will never give us "fizzbuzz" because it will always see the "fizz" first. Same if we put the else statement up first.
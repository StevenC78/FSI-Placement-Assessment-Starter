// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Steven Caloca" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by Steven Caloca`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    gb=gb+1;
    console.log('Gingerbread + button was clicked!')
    document.getElementById('qty-gb').textContent = gb

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
  

})

document.getElementById('minus-gb').addEventListener('click',function(){
    gb=gb-1;
    console.log('Gingerbread - button was clicked!')
    document.getElementById('qty-gb').textContent = gb
})


document.getElementById('add-cc').addEventListener('click',function(){
    cc=cc+1;
    console.log('Chocolate Chip + button was clicked!')
    document.getElementById('qty-cc').textContent = cc
})

document.getElementById('minus-cc').addEventListener('click',function(){
    cc=cc-1;
    console.log('Chocolate Chip - button was clicked!')
    document.getElementById('qty-cc').textContent = cc
})


document.getElementById('add-sugar').addEventListener('click',function(){
    sugar=sugar+1;
    console.log('Sugar Sprinkle + button was clicked!')
    document.getElementById('qty-sugar').textContent = sugar
})

document.getElementById('minus-sugar').addEventListener('click',function(){
    sugar=sugar-1;
    console.log('Sugar Sprinkle - button was clicked!')
    document.getElementById('qty-sugar').textContent = sugar
})

// TODO: Hook up event listeners for the rest of the buttons
function scoreOfParentheses(S) {
    let stack = [0]; // Start with a stack that has 0 as the base score.

    for (let char of S) {
        if (char === '(') {
            stack.push(0); // Start a new score for this open bracket.
        } else {
            let last = stack.pop(); // Get the score inside this pair.
            let prev = stack.pop(); // Get the score before this pair.
            let score = last === 0 ? 1 : 2 * last; // "()" is 1, "(A)" is 2×score of A
            stack.push(prev + score); // Add it to the previous score.
        }
    }
    return stack[0];
}

// Example usage:
console.log(scoreOfParentheses("()"));      // 1
console.log(scoreOfParentheses("(())"));    // 2
console.log(scoreOfParentheses("()()"));    // 2
console.log(scoreOfParentheses("(()(()))")) // 6

// pattern name  = "Score of Parentheses";
// pattern description = "Given a string S representing a valid parentheses sequence, return the score of the parentheses.";
// pattern difficulty = "Medium";
// pattern tags = ["Stack", "String"];
// pattern code = "javascript";
// pattern codeSnippet = scoreOfParentheses.toString();
// pattern example = {
//     input: "S = \"()\"",
//     output: "1"
// };
// pattern example2 = {
//     input: "S = \"(())\"",
//     output: "2"
// };
// pattern example3 = {
//     input: "S = \"()()\"",
//     output: "2"
// };
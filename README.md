## 🧩 Pattern: Stack (Score of Parentheses)

**Problem:**  
Given a string `S` representing a valid parentheses sequence, return the **score** of the parentheses.

---

### ✅ Pattern Details

- **Name:** Score of Parentheses  
- **Difficulty:** Medium  
- **Tags:** `Stack`, `String`  
- **Language:** JavaScript  

---

### 💡 Intuition

- `"()"` has a score of `1`
- `"(A)"` has a score of `2 * A`
- `"AB"` has a score of `A + B`

---

### 🧠 Approach

- Use a **stack** to track scores at each level of nesting.
- Push `0` for every `'('` to represent a new score context.
- When encountering `')'`, pop the top value:
  - If it's `0`, this was a `"()"`, so push `1`.
  - Otherwise, it's a nested expression, so push `2 * value`.
- Add this score to the previous level on the stack.

---

### ⏱️ Time & Space Complexity

- **Time Complexity:** O(n)  
- **Space Complexity:** O(n) – for the stack

---

### 📎 Code Snippet (JavaScript)

```js
function scoreOfParentheses(S) {
    let stack = [0]; // Start with a base score

    for (let char of S) {
        if (char === '(') {
            stack.push(0); // New score context
        } else {
            let last = stack.pop();         // Score inside current ()
            let prev = stack.pop();         // Score before this pair
            let score = last === 0 ? 1 : 2 * last;
            stack.push(prev + score);       // Add new score to context
        }
    }

    return stack[0];
}

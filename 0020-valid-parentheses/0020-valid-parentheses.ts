function isValid(s: string): boolean {
    const chars = s.split('');
    const stack = [];
    for (const ch of chars) {
        if (ch === '(' || ch === '{' || ch === "[") {
            stack.push(ch);
        } else {
            if (stack.length === 0) {
                return false;
            } else if (ch === ')' && stack[stack.length-1] === '(') {
                stack.pop();
            } else if (ch === '}' && stack[stack.length-1] === '{') {
                stack.pop();
            } else if (ch === ']' && stack[stack.length-1] === '[') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
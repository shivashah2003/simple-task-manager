# How long did you spend on the coding test?
I spent approximately 3-4 hours on the coding test, including coding, testing, and styling improvements.

## What was the most useful feature that was added to the latest version of your chosen language?
One of the most useful features in the latest version of JavaScript (ES2023) is the `Array.prototype.toSorted()`. This method allows sorting an array without mutating the original array.

### Example Usage in Simple Task Manager Project:
```javascript
const tasks = [
  { id: 1, title: "Task A", priority: "Medium" },
  { id: 2, title: "Task B", priority: "High" },
  { id: 3, title: "Task C", priority: "Low" }
];

const sortedTasks = tasks.toSorted((a, b) => a.title.localeCompare(b.title));
console.log(sortedTasks);
console.log(tasks); // Original array remains unchanged

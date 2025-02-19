# How long did you spend on the coding test?
I spent approximately 8 -9 hours on the coding test, including coding, testing, and styling improvements, deploying.

## What was the most useful feature that was added to the latest version of your chosen language?

### most useful feature added in Simple Task Manager Project:
```javascript
const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesPriority = filterPriority === "All" || task.priority === filterPriority;
  const matchesStatus =
    filterStatus === "All" || (filterStatus === "Completed" ? task.completed : !task.completed);
  return matchesSearch && matchesPriority && matchesStatus;
});


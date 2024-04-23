# The Secret Diary - Part 2

## Problem Statement

DFCorp would like to introduce a new option for Users to change the type of lock they use to protect their diary.  The original prototype only supported a numeric lock, but now they would like to support a password lock as well. This password lock will allow a user to set a password and then use that password to unlock the diary.

---

## Task 2

- From the Problem Statement above, create User Stories to describe the required functionality of the Secret Diary
- With these User Stories, add them to your Kanban board
- From the User Stories, identify the Objects and Messages that will make up the system and generate Domain Models
  - Ensure that you are following the *Single Responsibility Principle* for each block of code
- Test-Drive the creation of the prototype based on your User Stories, decoupling any of the code as necessary

---

## Additional Requirements

DFCorp would like you to add the following functionality to the prototype:

- The user should be able to set a password/pin when the lock is created
- The user should be able to change the password/pin, confirming the entry and saving the new password/pin to a file
- The user should be able to delete an entry in the diary
- The password or pin should be stored in a file and loaded in when the application starts
  - This file should contain a default password and pin that is used until the user changes the password/pin
- The diary entries should be stored in a file and loaded in when the application starts

For each of these, create a User Story, Domain Model and test-drive the development of the functionality.

---

## Crib Code

### Obtaining User Input in a Console Application

In a **Node.js** console application, you can use the ***built-in*** `readline` module to get user input. Here's a basic example:

```javascript
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your input: ', (answer) => {
  console.log(`You entered: ${answer}`);
  rl.close();
});
```

In this code, `readline.createInterface` is used to create an interface for input and output streams. The `rl.question` method is used to display a query to the user and collect their input. Once the user enters their input and presses Enter, the callback function is invoked with the user's input as an argument. The `rl.close` method is then used to close the readline interface.

To use this in your project, you will need to make sure that you have enabled the `"type": "modules"` option in your `package.json` file.

---

### Outputting Data to a File from a Console Application

In a **Node.js** console application, you can use the **built-in** `fs` module to *write* data to a file. Here's how you can export an array of objects to a **JSON** file:

```javascript
import * as fs from 'fs';
const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 35 },
];

fs.writeFile('output.json', JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
```

In this code, `fs.writeFile` is used to write data to a file. The `JSON.stringify` method is used to convert the JavaScript object into a JSON string. The parameters `null` and `2` are used to format the output with two spaces of indentation. If the file writing is successful, a message is logged to the console. If there's an error, it will be thrown.

---

### Reading Data from a File in a Console Application

In a **Node.js** console application, you can use the **built-in** `fs` module to *read* data from a file. Here's how you can read data from a **JSON** file:

```JavaScript
import * as fs from 'fs';

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const parsedData = JSON.parse(data);
  console.log(parsedData);
});
```

In this code, `fs.readFile` is used to read data from a file. The `utf8` argument specifies the encoding of the file. The *callback* function is invoked after the file has been read. If there's an error, it will be thrown. If the file reading is successful, the data is parsed from JSON into a JavaScript object using `JSON.parse`, and then logged to the console.

Back to [Part 1](README.md)

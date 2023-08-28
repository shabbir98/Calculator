#! /usr/bin/env node
import { sum } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';
import inquirer from 'inquirer';
let result;
do {
    const operation = await inquirer.prompt([
        {
            message: 'Enter your 1st num',
            type: 'number',
            name: 'firstNum',
        },
        {
            message: 'Choose your operation',
            type: 'list',
            choices: ['+', '-', '*', '/'],
            name: 'option',
        },
        {
            message: 'Enter your 2nd num',
            type: 'number',
            name: 'secondNum',
        },
    ]);
    switch (operation.option) {
        case '+':
            console.log(sum(operation.firstNum, operation.secondNum));
            break;
        case '-':
            console.log(subtract(operation.firstNum, operation.secondNum));
            break;
        case '*':
            console.log(multiply(operation.firstNum, operation.secondNum));
            break;
        case '/':
            console.log(divide(operation.firstNum, operation.secondNum));
            break;
    }
    const exitOrContinue = await inquirer.prompt({
        message: 'Press "y" to continue or any key to exit',
        type: 'input',
        name: 'choose',
    });
    result = exitOrContinue.choose;
} while (result === 'y');
//# sourceMappingURL=calculator.js.map
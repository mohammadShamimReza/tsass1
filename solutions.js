"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplyValue = (value, multiplier) => {
    if (multiplier === 0) {
        return value;
    }
    else if (!multiplier) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
};
const processInput = (input) => {
    if (typeof input === "string") {
        return input.trim();
    }
    else if (typeof input === "boolean") {
        if (input === true) {
            return "Active";
        }
        else {
            return "Incative";
        }
    }
    else {
        return input * 10;
    }
};
const formatCoordinate = (arr) => {
    return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`;
};
function concatenateArrays(...arrays) {
    let newArr = [];
    arrays.map((arr) => {
        arr.map((d) => {
            newArr.push(d);
        });
    });
    return newArr;
}
function getPopularCourses(array, minStudent) {
    let returnArray = [];
    array.map((arr) => {
        if (arr.students >= minStudent && arr.isPublished === true) {
            returnArray.push(arr);
        }
    });
    return returnArray;
}
function pluckValues(items, key) {
    let arr = [];
    items.map((item) => {
        arr.push(item[key]);
    });
    return arr;
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}

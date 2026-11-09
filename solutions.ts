// Solution: 1
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return value;
  } else if (!multiplier) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
// Solution: 2;

type pInput = string | number | boolean;
type pOut = string | number;
const processInput = (input: pInput): pOut => {
  if (typeof input === "string") {
    return input.trim();
  } else if (typeof input === "boolean") {
    if (input === true) {
      return "Active";
    } else {
      return "Incative";
    }
  } else {
    return input * 10;
  }
};

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

// Solution: 3

const formatCoordinate = (arr: Readonly<[number, number, string]>) => {
  return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`;
};

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));


// Solution: 4

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArr: T[] = [];

  arrays.map((arr: T[]) => {
    arr.map((d: T) => {
      newArr.push(d);
    });
  });

  return newArr;
}
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);


// Solution: 5

interface Course { 
  title: string;
  students: number;
  isPublished: boolean;
}


function getPopularCourses(array: Course[], minStudent: number): Course[] { 

  let returnArray: Course[] = [];
  array.map((arr: Course) => { 
    if (arr.students >= minStudent && arr.isPublished === true) { 
      returnArray.push(arr);
    }
  })
  return returnArray;
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
console.log(getPopularCourses(courses, 80));


// Solution 6

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
let arr: T[K][] = [];


items.map((item) =>{// Solution 6

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
let arr: T[K][] = [];


items.map((item) =>{
    arr.push(item[key]);
  })

  return arr
  
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
    arr.push(item[key]);
  })

  return arr
  
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
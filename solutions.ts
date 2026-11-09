const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return value;
  } else if (!multiplier) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};



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




const formatCoordinate = (arr: Readonly<[number, number, string]>) => {
  return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`;
};



function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArr: T[] = [];

  arrays.map((arr: T[]) => {
    arr.map((d: T) => {
      newArr.push(d);
    });
  });

  return newArr;
}



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
  });
  return returnArray;
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  let arr: T[K][] = [];

  items.map((item) => {
    arr.push(item[key]);
  });

  return arr;
}




class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}




function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    
    }
  });
}
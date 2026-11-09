# Title: Type vs interface in ts;

## Introduction: 
The key difference is type cannot be re-opened to add new properties, in the other hend interface is we can re-open and always extend.

### Description: 
Type and interface are both use for define type. here is the example:
```
type employ = {
  name: string;
  salary: number;
};
 
function printEmploy(em: employ) {
  console.log("The employ name is " + em.name);
  console.log("His salary is " + em.salary);
}
 
printEmploy({ name: "shamim", salary: 500000 });
```

```
interface employ {
   name: string;
  salary: number;
}
 
function printEmploy(em: employ) {
  console.log("The employ name is " + em.name);
  console.log("His salary is " + em.salary);
}
 
printEmploy({ name: "shamim", salary: 500000 });
```




Here are the differences of Type and Interfaces:

```
1. Type:
    type flower = {
        name: string;
    }
    type flower ={
        type: string
    }

// Duplicate identifier "flower

```



```
2. Interface 
    interface home{
    door: string;
    }
    interface home{
    windlow: number        
    }

```

see here we can extend the home interface

### Conclusion: 
In most of the case you should use interface. If you only type when you need the feactures of type
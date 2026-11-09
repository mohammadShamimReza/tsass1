# Title: Union and intersection in ts;

## Introduction: 
Union is uniteded multiple separate type for one type defination, means type can any of those multiple type for the filed and interseciton means united multiple filed from different type definicaiton.

### Description: 
here is the example of union and intersection:

``` 
function printMan(id: string | number) {
  console.log(`Id id: ${id}`);
  
}

printMan(32);
```

here parameter (id: string | number) is the union because we use 2 type for one field. it can be any of them

```
type human ={
    name: string;
    age: number
}
type man ={
    car: string;
    bike: string
}

type SigmaMale = human & man;
 
function PrintAlphaMan(s:SigmaMale) {
  console.log(`My name is : ${s.name}, age: ${s.age}, I have Car ${s.car} and bike${s.bike}`);
  
}

PrintAlphaMan({
  age: 21,
  bike: "honda", 
  car: "toypta",
  name: "shamim"
})
```
 


see here we use use type human and man for function PrintAlphaMan.

### Conclusion: 
SO you those carefully when need what
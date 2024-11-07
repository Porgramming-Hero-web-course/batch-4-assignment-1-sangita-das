# The Significance of Union and Intersection Types in TypeScript

TypeScript enhances JavaScript by providing a robust type system that makes code safer and more maintainable. Among its many features,**union types** and **intersection types**  stand out as essential tools, allowing developers to define flexible and strong type definitions. In this blog, we will explore union and intersection types, their syntax, and applications.

---
## Union Types

Union types allow a variable or parameter to hold values of multiple specified types, making code adaptable while maintaining type safety. This type is created using the | operator.

### Example:

function unionTypeCode(code: string | number) {
  console.log(`The output is: ${code}`);
}

unionTypeCode(2024);        // Output: The output is: 2024
unionTypeCode('Bangladesh'); // Output: The output is: Bangladesh

In this example, the parameter code can be either a string or a number. TypeScript ensures only these types are allowed that making the function versatile and safe. By using the | operator, we can handle multiple types without compromising type checking.

## Intersection Types

Intersection types combine multiple types to create a new type with all the properties of the combined types. Using & operator, we can define an intersection type that requires an object to satisfy each type’s structure.

### Example:
type User1 = {
  name: string;
  age: number;
};

type User2 = User1 & {
  role: string;
};

const userWithRole: User2 = {
  name: "Alice",
  age: 30,
  role: "admin",
};

Here, User2 is an intersection of User1 and an additional role property. The userWithRole object must include all the properties from both User1 ( name and age) and User2 ( role). So we can say, Intersection types enforce a strict structure by combining types, making complex data models easier to define and maintain.
To conclude, union and intersection types assist us to write versatile, type-safe code for a wide range of applications, also enhances code readability and reliability, helping to catch errors.

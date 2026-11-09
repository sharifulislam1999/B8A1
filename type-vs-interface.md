# Type vs Interface in TypeScript

## Introduction

When working with TypeScript, we often need to define the structure of objects. For this purpose, TypeScript provides two useful features: `type` and `interface`. At first, they may look almost the same, but there are some important differences between them.

## Understanding the Differences

Both `type` and `interface` can describe the structure of an object. For example:

```ts
interface User {
  name: string;
  email: string;
}

type Student = {
  name: string;
  email: string;
};
```

In this example, both define an object with a name and an email.

One important difference is that `type` can represent more than just objects. We can use it for union types, tuples, primitive types, and function types.

```ts
type Status = "active" | "inactive";
type ID = string | number;
```

On the other hand, interfaces support declaration merging. This means we can declare the same interface multiple times, and TypeScript combines their properties.

Another difference is how we extend them. Interfaces use the `extends` keyword, while types can combine multiple structures using the intersection (`&`) operator.

## When Should We Use Them?

I usually prefer interfaces when defining object structures, especially for classes and reusable object contracts. Types are useful when working with unions, intersections, tuples, or more complex type combinations.

## Conclusion

Both `type` and `interface` are important in TypeScript. Neither is always better than the other. Choosing one depends on the situation and the type of structure we want to define.
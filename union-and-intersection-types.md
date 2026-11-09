# Combining Union and Intersection Types in TypeScript

## Introduction

One thing I like about TypeScript is how it allows us to create flexible types. Union (`|`) and Intersection (`&`) are two useful features that help us manage different data structures. Although they look similar, they work in different ways.

## Understanding Union and Intersection

A union type means a value can be one of several types. For example:

```ts
type UserId = string | number;

let id: UserId = 101;
id = "USER-101";
```

Here, the variable `id` can store either a string or a number.

An intersection type works differently. It combines multiple types into one. The resulting value must contain the properties required by all combined types.

```ts
type UserInfo = {
  name: string;
  email: string;
};

type UserRole = {
  role: "admin" | "editor";
};

type User = UserInfo & UserRole;
```

Now, a `User` must have a name, email, and role.

## Practical Example: Combining Both

We can also use union and intersection together:

```ts
type Admin = {
  name: string;
  role: "admin";
};

type Editor = {
  name: string;
  role: "editor";
};

type UserRole = Admin | Editor;

type UserProfile = {
  email: string;
  age: number;
};

type User = UserRole & UserProfile;
```

In this example, a user can be either an Admin or an Editor, but every user must also have an email and age.

## Conclusion

Union and Intersection types make TypeScript more flexible and useful. I find them especially helpful when building applications where different users share some information but have different roles or permissions.
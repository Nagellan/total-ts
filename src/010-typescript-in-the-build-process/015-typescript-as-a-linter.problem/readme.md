# Using TypeScript As A Linter

## Learning Goals

- Understand how TypeScript is used in most modern frontend apps

## Problem

You'll notice that our `dist` folder has disappeared. When you run this exercise, we're not appearing to generate any JavaScript code.

Try cd-ing to the directory and running `tsc`. You'll notice that no JavaScript code is being emitted. Why is that?

- Take a look at the `tsconfig.json`
- Take a look at the options there. See if you can find one that decides whether TypeScript emits JavaScript code or not.

## Solution

The thing is in a `noEmit` field at `tsconfig.json`. It tells that there's no need on emitting
js files on `tsc` run in order to allow it to be made by other tools like `babel` or `swc`.
Also, there's a field `moduleResolution` which is set to `bundler` — it tells Typescript
Compiler that the source code is being bundled and `tsc` should behave accordingly.
The whole ts source code conversions are made by vite somewhere inside it. It probably
uses `swc` or other tool to transpile TypeScript code in more efficient and modern way
thant `tsc`.

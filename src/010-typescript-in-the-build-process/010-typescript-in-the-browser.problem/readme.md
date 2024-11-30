# TypeScript In The Browser

## Learning Goals

- Learn how you can use TypeScript to build web apps

## Problem

Try opening the `index.html` file in your browser. You'll see that it doesn't work. Why is that?

## Solution

The reason of the problem is in browsers not supporting ts files directly. We need to transpile
our ts file into the js file, change the extension of used file in html. This way we're able
to fix the problem — by adding a transpilation phase to our ts files.

I gonna use tsc.

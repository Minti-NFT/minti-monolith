# minti-monolith

Monolith repo for Minti v0

---

# Workflow

-   Do not commit directly to master.
-   All changes must be tested.
-   Branch names must be kebab-cased with appropriate names.
-   Commit messages must be descriptive.

---

# Node.js Style guide

Inspired by: [felixge's Node Style Guide](https://github.com/felixge/node-style-guide).
This is just a basic guide for Node.js styling so there is a consistent flow across the project. Please make sure you and others abide by it to minimize any confusion.

There will be a force-linter file to make sure that we stick to the styling guidelines as best as possible.

### Formatting

-   [`2 space tabs for indentation`](#2-space-tabs-for-indentation)
-   [`Newlines`](#newlines)
-   [`No trailing whitespaces`](#no-trailing-whitespaces)
-   [`Use semicolons`](#use-semicolons)
-   [`Wrap your text`](#wrap-your-text)
-   [`Single quotes`](#single-quotes)
-   [`One variable per statement`](#one-variable-per-statement)
-   [`Opening braces on the same line`](#opening-braces-on-the-same-line)

### Naming Conventions

-   [`lowerCamelCase for variables, properties, and functions`](#lowercamelcase)
-   [`UpperCamelCase for class names and components`](#uppercamelcase)
-   [`UPPERCASE for constants`](#uppercase)

### Conditionals

-   [`Use === operator`](#use-the-===-operator)
-   [`Use descriptive conditions`](#use-descriptive-conditionals)

### Functions

-   [`Keep functions compact`](#keep-functions-compact)
-   [`Return early`](#return-early)
-   [`Error handling`](#error-handling)
-   [`Fat arrows`](#fat-arrows)
-   [`Method chaining`](#method-chaining)

### Comments

-   [`Slashes`](#slashes)
-   [`Descriptive`](#descriptive)
-   [`Functions`](#functions)
-   [`Overheads`](#overheads)

## Formatting

---

### 2 space tabs for indentation

_Correct_:

```javascript
if (true) {
	console.log("Correct!");
}
```

### Newlines

Avoid the usage of `\r` followed by `\n`. Only have `\n`.
_Correct_:

```javascript
console.log("Hello: \n Minti");
```

_Wrong_:

```javascript
console.log("Hello: \r\n Minti");
```

### No trailing whitespaces

Don't have whitespaces floating around `like this `.

### Use semicolons

Always end your lines with a semicolon;

### Wrap your text

If you run out of space on a line, go to a new one. Don't have it go on forever.

### Single quotes

Use single quotes unless you are writing JSON.

### One variable per statement

Don't group variables declarations together.
_Correct_:

```javascript
var nums = [1, 2, 3, 4];
var vals = ["One", "Two", "Three", "Four"];
```

_Wrong_:

```javascript
var nums = [1, 2, 3, 4],
	vals = ["One", "Two", "Three", "Four"];
```

### Opening braces on the same line

_Correct_:

```javascript
if (true) {
	console.log("this is true");
}
```

_Wrong_:

```javascript
if (true) {
	console.log("this is wrong");
}
```

## Naming Conventions

---

### lowerCamelCase

Use `variableName`, `propertyName`, `functionName` naming convention for variables, properties, and functions.

### UpperCamelCase

Use `ClassName`, `ComponentName` naming convention for classes and components.

### UPPERCASE

Use `CONSTNAME` naming convention for constants.

## Conditionals

---

### Use the === operator

_Correct_:

```javascript
var a = 0;
if (a !== "") {
	console.log("this is right");
}
```

_Wrong_:

```javascript
var a = 0;
if (a == "") {
	console.log("not right");
}
```

### Use descriptive conditionals

_Correct_:

```javascript
var isValidEntry = entry.length >= 4 && /^(?=.*\d).{4,}$/.test(entry);

if (isValidEntry) {
	console.log("it's valid");
}
```

_Wrong_:

```javascript:
if (entry.length >= 4 && /^(?=.*\d).{4,}$/.test(entry)) {
	console.log('it\'s valid');
}
```

## Functions

---

### Keep functions compact

Keep functions short. Don't have them going on and on.

### Return early

To prevent deep if-statement nesting, we want to return early where possible.
_Correct_:

```javascript
function isPercentage(val) {
	if (val < 0) {
		return false;
	}

	if (val > 100) {
		return false;
	}

	return true;
}
```

_Wrong_:

```javascript
function isPercentage(val) {
	if (val >= 0) {
		if (val < 100) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}
```

Or for this particular example it may also be fine to shorten things even further:

```javascript
function isPercentage(val) {
	var isInRange = val >= 0 && val <= 100;
	return isInRange;
}
```

## Error handling

Be sure to include `try-catch blocks` and `throw` statements.
_Correct_:

```javascript
try {
	if (isValid) {
		return "this is valid";
	}

	throw "isValid came out false";
} catch (err) {
	console.log(err);
	return "oops. there has been an internal error";
}
```

_Wrong_:

```javascript
if (isValid) {
	return "this is valid";
}

return "oops. there has been an internal error";
```

## Fat arrows

`=>` is good.
_Correct_:

```javascript
const Component = (props) => {
	// code here
};
```

_Wrong_:

```javascript
function Component(props) {
	// code here
}
```

## Method chaining

One method per line when chaining

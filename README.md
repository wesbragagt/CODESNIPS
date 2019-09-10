# WES CODESNIPS

saving useful code snippets

# Slice properties from object

```javascript
slicePropFromObj = (obj, start, end) => {
	return Object.keys(obj)

		.slice(start, end)

		.reduce((result, key) => {
			result[key] = obj[key]

			return result
		}, {})
}
```

# Flat array of arrays

```javascript
var arr = [['abc', 'dbe', 'lejk'], ['yui', 'ouq', 'lou']]

var newArr = arr.reduce((accumulator, currentValue, currentIndex) => {
	return accumulator.concat(currentValue)
}, [])
```

# build an array of objects from a object of objects

```javascript
const newArr = Object.entries(updated).reduce((accumulator, currentValue) => {
	let [key, value] = currentValue
	return (accumulator = [...accumulator, { [key]: value }])
}, [])
```

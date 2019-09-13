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

# Object of Objects > Array of Objects

```javascript
function objToArr(obj) {
	return Object.entries(obj).reduce((accumulator, currentValue) => {
		let [key, value] = currentValue
		return (accumulator = [...accumulator, { [key]: value }])
	}, [])
}
```

## Assign another property to each object in array of objects

```javascript
function ObjToArrWithIndex(obj) {
	return Object.entries(obj).reduce((accumulator, currentValue, currentIndex) => {
		let [key, value] = currentValue
		let newObj = Object.assign({}, value, { _index: key })
		newObj._index = parseInt(newObj._index)
		return (accumulator = [...accumulator, newObj])
	}, [])
}
```

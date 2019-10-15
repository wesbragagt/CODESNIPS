# WES CODESNIPS

saving useful code snippets

# Slice properties from object

```javascript
slicePropFromObj = (obj, start, end) => {
	return Object.keys(obj)

		.slice(start, end)

		.reduce((result, key) => {
			result[key] = obj[key];

			return result;
		}, {});
};
```

# Flat array of arrays

```javascript
var arr = [['abc', 'dbe', 'lejk'], ['yui', 'ouq', 'lou']];

var newArr = arr.reduce((accumulator, currentValue, currentIndex) => {
	return accumulator.concat(currentValue);
}, []);
```

# Object of Objects > Array of Objects

```javascript
function objToArr(obj) {
	return Object.entries(obj).reduce((accumulator, currentValue) => {
		let [key, value] = currentValue;
		return (accumulator = [...accumulator, { [key]: value }]);
	}, []);
}
```

## Assign another property to each object in array of objects

```javascript
function ObjToArrWithIndex(obj) {
	return Object.entries(obj).reduce((accumulator, currentValue, currentIndex) => {
		let [key, value] = currentValue;
		let newObj = Object.assign({}, value, { _index: key });
		newObj._index = parseInt(newObj._index);
		return (accumulator = [...accumulator, newObj]);
	}, []);
}
```

## Modify Date format of an object property replacing / for -

```javascript
function formatDate(dateString) {
	var newDate = new Date(dateString);
	return newDate.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }).replace(/\//g, '-');
}
```

## Group array of objects by a property

```javascript
function groupBy(objectArray, property) {
	return objectArray.reduce(function(acc, obj) {
		var key = obj[property];
		if (!acc[key]) {
			acc[key] = [];
		}
		var newObj = Object.assign({}, { value: obj['ENTITY_ID'], label: obj['ENTITY_NAME'], original: obj });
		acc[key].push(newObj);
		return acc;
	}, {});
}

var group = groupBy(entities, 'SERVER_NAME');
group;
```

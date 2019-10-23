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

### Merge data between two arrays

```javascript
function modifyData(dataArr, updatedData) {
	let prevData = dataArr;

	let dataIndexesArr = findDataIndexes(prevData, updatedData);
	// modify each row that matches the index found from the masterList = data list of data
	dataIndexesArr.forEach((dataIndex, currentRowIndex) => (prevData[dataIndex] = updatedData[currentRowIndex]));
	// build new arr
	const newArr = prevData.map(data => {
		delete data['MEDICATION_ROUTE_ID'];
		delete data['ROUTE_DESCRIPTION'];
		delete data['_index'];

		return data;
	});
	return newArr;
}
```

## UTILITY FUNC RETURNS AN ARRAY OF INDEXES TO MODIFY

```javascript
function findDataIndexes(dataArr, updatedData) {
	let dataIndexesArr = updatedData.map(targetModified =>
		dataArr.findIndex(
			dataRow =>
				dataRow['NDC_CODE'] == targetModified['NDC_CODE'] &&
				dataRow['ROUTE_NAME'] == targetModified['ROUTE_NAME'] &&
				dataRow['NDC_PRODUCT_CODE'] == targetModified['NDC_PRODUCT_CODE']
		)
	);

	return dataIndexesArr;
}
```

### iterates through an array and assign object values to each row returning its newly modified version (i.e assignValueWithModifiedFlag(data, {REVIEWED_YN: 1}) )

```javascript
function assignValueWithModifiedFlag(targetArr, value) {
	let dataToMod = targetArr;
	// modify each row with values
	targetArr.forEach((dataRow, i) => {
		// when the target object does not have a modifiedFlag assigned
		if (!dataRow.modifiedFlag) {
			// reasign an object with the modified values
			dataToMod[i] = Object.assign({}, dataRow, value, {
				modifiedFlag: value
			});
		} else {
			// when a modified flag has been assigned
			// make a copy of the previous modifiedFlag object with the new flag
			let newFlag = Object.assign(dataRow.modifiedFlag, value);
			// reassign object with the previous modified flag and the new one
			dataToMod[i] = Object.assign({}, dataRow, value, newFlag);
		}
	});
	return dataToMod;
}
```

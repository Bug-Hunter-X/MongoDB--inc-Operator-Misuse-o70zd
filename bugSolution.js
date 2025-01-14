```javascript
// Correct use of $inc operator in MongoDB update query
db.collection('myCollection').findOne({"_id": 1}, (err, doc) => {
if (err) {
  console.error('Error:', err);
} else if (doc && typeof doc.field === 'number') {
  db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"field": value}});
} else {
  console.error('Field does not exist or is not a number');
}
});
```
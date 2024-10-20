---
title: "Pagination"
category: "System design concepts"
date: "2024-10-19"
---
### What is Pagination?

- Process of dividing large set of data into manageable chunks
- Reduces load on server by fetching only small amount of data per page

### Pagination Types

# Comparison of Pagination Types

| **Type**                | **Use Case / Benefits**                         | **Drawbacks**                              |
|-------------------------|-------------------------------------------------|--------------------------------------------|
| **Numeric Pagination**   | Ideal for stable datasets like articles or products. | May require many clicks to reach later pages. |
| **Infinite Scrolling**   | Great for social media feeds or large datasets. | Harder to bookmark or navigate specific sections. |
| **Load More Button**     | Gives users control, combines UX and performance. | Can still lead to long page loads eventually. |
| **Cursor-based Pagination** | Best for dynamic data like social feeds.     | More complex to implement. |
| **Offset-based Pagination** | Simple to implement, stable datasets.        | Less efficient for large datasets (performance issues). |


### Offset based pagination

It uses a combination of LIMIT and OFFSET to skip a certain number of records and return the next set.

Back-end: SQL queries use LIMIT and OFFSET to determine how many records to skip and fetch.
Front-end: Users can see buttons for Next, Previous, or page numbers to control which set of data is fetched.

Ex: `SELECT * FROM items LIMIT 10 OFFSET 20;`

### Cursor based pagination

Uses a "cursor" to keep track of where to start fetching the next set of items. Useful in cases where records are constantly changing, like in social media feeds.

Front-end:Instead of loading pages based on a number, you store the "cursor" (e.g., the ID of the last loaded item) and use it to fetch the next batch.  

Back-end: The server returns a list of items and a new cursor for the client to use in the next request.

#### Client request

```
function fetchMoreItems(cursor) {
  fetch(`/items?cursor=${cursor}`)
    .then(response => response.json())
    .then(data => {
      appendItemsToDOM(data.items);
      nextCursor = data.nextCursor;
    });
```

#### Backend

```
app.get('/items', (req, res) => {
  const cursor = req.query.cursor || 0;

  db.query(`SELECT * FROM items WHERE id > ? LIMIT 10`, [cursor], (error, results) => {
    const nextCursor = results[results.length - 1]?.id || null;
    res.json({ items: results, nextCursor });
  });
});
```
# qiita4js
Simple Qiita API v2 client written in JavaScript.

Reference: http://qiita.com/api/v2/docs

## Features

This client library allows __GET access only__, so you don't need an access token.

- Below apis are implemented.

| method | url |
| --- | --- | --- |
| GET | /api/v2/users/:id |
| GET | /api/v2/users |
| GET | /api/v2/items/:id |
| GET | /api/v2/items |
| GET | /api/v2/users/:user_id/items |
| GET | /api/v2/users/:user_id/stocks |
| GET | /api/v2/tags/:id/items |
| GET | /api/v2/comments/:id |
| GET | /api/v2/items/:item_id/comments |

## Example

```javascript
var qiita = new Qiita4js();
qiita.users('yukinagae').then(function(result) {
  console.log(result.name); // => Yuki Nagae
});
```

## TODO
- Below apis are not implemented.

| method | url |
| --- | --- | --- |
| GET | /api/v2/users/:user_id/followees |
| GET | /api/v2/users/:user_id/followers |
| GET | /api/v2/items/:item_id/stockers |
| GET | /api/v2/users/:user_id/following |
| GET | /api/v2/tags/:id |
| GET | /api/v2/tags |
| GET | /api/v2/users/:user_id/following_tags |
| GET | /api/v2/tags/:id/following |
| GET | /api/v2/items/:item_id/stock |

- Error handling
- `page` and `per_page` parameters are not supported.

## Tests
Run tests using `npm test`.

## License
MIT

# useFetch

Hook for managing **HTTP requests with fetch API**. The initial values are:

- `data`: `null`
- `loading`: `true`
- `error`: `null`

## Example

```js
const url = 'API endpoint';
const { data, loading, error } = useFetch(url);
```

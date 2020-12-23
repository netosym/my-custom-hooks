# useForm

Hook for managing **changes in a form**. Its methods are:

- `handleInputChange()`
- `reset()`

## Example

```js
const initialValue = {
  name: 'Ernesto',
  age: 20,
};
const [formValues, handleInputChange, reset] = useForm(initialValue);
```

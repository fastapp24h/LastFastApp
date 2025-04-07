```javascript
window.addEventListener('DOMContentLoaded', (event) => {
  fetch('/api/message')
    .then(response => response.json())
    .then(data => {
      document.querySelector('h1').textContent = data.message;
    });
});
```
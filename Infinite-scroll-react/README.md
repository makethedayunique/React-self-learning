# Infinite Scrolling using React.js

##### Key js code

```javascript
// This is the check point whether it reaches the bottom of the page
var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 

```

```javascript
window.addEventListener("scroll", handleScroll);
```

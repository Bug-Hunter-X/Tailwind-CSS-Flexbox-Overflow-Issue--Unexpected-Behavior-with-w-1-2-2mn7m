```javascript
/* Solution 1: Using flex-shrink */
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2 flex-shrink"></div>
  <div class="bg-blue-500 p-4 w-1/2 flex-shrink"></div>
</div>

/* Solution 2: Using flex-grow and setting min-width */
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2 min-w-0 flex-grow"></div>
  <div class="bg-blue-500 p-4 w-1/2 min-w-0 flex-grow"></div>
</div>
```
Solution 1 uses `flex-shrink` to allow the content to shrink to fit the allocated space. Solution 2 uses `flex-grow` to allow the content to expand if there's available space, and `min-w-0` prevents the element from collapsing to zero width.  Choosing the best solution depends on the desired behavior.
// Start Cache
class Cache {
 constructor() {
   this.cache = {};
 }

 // Method to set a cache entry with a timeout
 set(key, value, timeout) {
   // Invalidate any existing timeout for the same key
   if (this.cache[key]) {
     clearTimeout(this.cache[key].timeoutId);
   }

   // Store the value in the cache
   this.cache[key] = {
     value: value,
     timeoutId: setTimeout(() => {
       delete this.cache[key];
     }, timeout),
   };
 }

 // Method to get a cache entry
 get(key) {
   return this.cache[key] ? this.cache[key].value : null;
 }

 // Method to check if a key exists in the cache
 has(key) {
   return !!this.cache[key];
 }

 // Method to delete a cache entry
 delete(key) {
   if (this.cache[key]) {
     clearTimeout(this.cache[key].timeoutId);
     delete this.cache[key];
   }
 }

 // Method to clear all cache entries
 clear() {
   Object.keys(this.cache).forEach((key) => {
     clearTimeout(this.cache[key].timeoutId);
     delete this.cache[key];
   });
 }
}
// End Cache

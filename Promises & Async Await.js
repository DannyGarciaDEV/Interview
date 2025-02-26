// Write an async function fetchData(url) that uses fetch to retrieve data from a given URL and logs the JSON response. Handle errors properly.
async function fetchData(url) {
    try {
      const response = await fetch(url);  // Fetch data from URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();  // Parse the response as JSON
      console.log(data);  // Log the JSON data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Example usage:
  fetchData('https://jsonplaceholder.typicode.com/posts/1');
  

  
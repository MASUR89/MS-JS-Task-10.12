fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
        console.log(`Title: ${post.title}`);
     });
  })
  .catch(error => console.error("Error fetching posts:", error));



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'Post', 
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
        userId: "N101", 
        title: "New Post", 
        body: "Some content", 
    }),
})
    .then(response => response.json())
    .then(data => console.log("New Post:", data))
    .catch(error => console.log(error));
  

    
fetch("https://jsonplaceholder.typicode.com/posts/3", {
    method: 'Delete',
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

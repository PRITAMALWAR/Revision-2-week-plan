function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, maxRetries = 3) {
  let attempt = 1;

  while (attempt <= maxRetries) {
    try {
      console.log(`Attempt ${attempt}...`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("server erro " + response.status);
      }

      const data = await response.json();

      return data;

    } catch (error) {
      console.log("error", error.message);

      if (attempt === maxRetries) {
        throw new Error("Failed after 3 attempts");
      }

      const delay = Math.pow(2, attempt) * 1000;
      console.log(`Retrying after ${delay}ms...\n`);

      await wait(delay);
      attempt++;
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1")
  .then(data => {
    console.log("Final Data:", data);
  })
  .catch(error => {
    console.log("Final Error:", error.message);
  });

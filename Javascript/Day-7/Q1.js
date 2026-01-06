async function getUserPostAndComments() {
  try {
    //  fetch user data
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await userResponse.json();

    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const posts = await postResponse.json();

    const firstPost = posts[0];

    const commentResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
    const comments = await commentResponse.json();

    const result = {
      userName: user.name,
      firstPostTitle: firstPost.title,
      commentCount: comments.length,
      topComment: comments[0].body
    };

    console.log(result);

  } catch (error) {
    console.log("Error", error);
  }
}

getUserPostAndComments();

async function FetchUsersAndPosts() {
    try {
        let [userRes, postRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        let users = await userRes.json();
        let posts = await postRes.json();

        let result = users.map(user => {
            let userPosts = posts.filter(post => post.userId === user.id);

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                postCount: userPosts.length
            };
        });

        console.log(result);

    } catch (error) {
        console.log("error");
    }
}

FetchUsersAndPosts();

async function FetchData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();

        let ActiveUser = data.filter(user => user.username.length > 6);

        let result = ActiveUser.map(user => {
            return {
                id: user.id,
                fullName: user.name,
                email: user.email
            };
        });

        console.log(result);

    } catch (error) {
        console.log("error");
    }
}

FetchData();

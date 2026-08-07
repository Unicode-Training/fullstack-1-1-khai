const requestLogin = async () => {
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "123"
        },
        credentials: "include"
    });
    const data = await response.json();
    console.log(data);

}
requestLogin();
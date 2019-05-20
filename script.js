// fetch('https://api.github.com/users/zaLenaa')
//     .then(res => res.json())
//     .then(json => console.log(json.name));

// let name = window.location.search;
// console.log(name);



const search = new URLSearchParams(location.search);
var gitProfile = 'https://api.github.com/users/' + search.get('username');

fetch(gitProfile)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error("Пользователь не найден")
        }
    })

    .then(
        function (res) {
            var user = document.createElement('div');
            user.innerHTML = `<a href="${res.html_url}">${res.name}</a>
                <div> ${res.bio}</div>
                <img src="${res.avatar_url}" alt="">
            `;
            document.body.appendChild(user);
        }
    ).catch(err => {
        console.log(err)
});

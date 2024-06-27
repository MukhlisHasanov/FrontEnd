document.querySelector('#btn').addEventListener('click', fetchResult);
function fetchResult() {
    const inputName = document.querySelector('#in')
    fetch('https://api.github.com/users/' + inputName.value)
        .then((response) => response.json())
        .then((data) => {
            getImage(data.avatar_url);
        })
        .catch(() => {
            console.error('X');
        });
}
function getImage(imageUrl) {
    const avatarGit = document.querySelector('#imgIn');
    avatarGit.setAttribute('src', imageUrl);
}



const LinksSocialMedia = {
  github: 'GabrielMR897',
  youtube: '',
  facebook: '',
  instagram: 'gabriel.bitii',
  twitter: 'Gabrielbiti_'
}

function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = 'https://api.github.com/users/GabrielMr897'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatarurl
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

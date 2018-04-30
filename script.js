let siteTable = document.getElementById('siteTable_organic')
let signUp = document.getElementsByClassName('listingsignupbar')[0]

siteTable.parentElement.removeChild(siteTable)
signUp.parentElement.removeChild(signUp)

let ads = document.querySelectorAll(".dfp-ad-container");
for (let el of ads) {
    el.outerHTML = `<img src="http://thecatapi.com/api/images/get?type=jpg&categories=kittens" alt="error loading kittens" height="250" width="300"> `
}
const users = {
        name: 'Stephanie',
        age: 25,
        country: 'Canada',
    }

let tasks = []

document.querySelector(".user-profile-js").innerHTML = `
    <div class="col-8"></div>
    <div class="col-6">
        <div class="user-name-js">
            <label>Name: </label>
            <span>${users.name}</span>
        </div>
        <div class="user-age-js">
            <label>Age: </label>
            <span>${users.age}</span>
        </div>
        <div class="user-country-js">
            <label>Country: </label>
            <span>${users.country}</span>
        </div>
   </div>
`

const users = {
        name: 'Stephanie',
        age: 25,
        country: 'Canada',
    }

export default function showUser() {
    return(
        <div>
            <div>
                <label>Name: </label>
                <span>{users.name}</span>
            </div>
            <div>
                <label>Age: </label>
                <span>{users.age}</span>
            </div>
            <div>
                <label>Country: </label>
                <span>{users.country}</span>
            </div>
        </div>
    )
}
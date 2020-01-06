export function fetchData() {
    return new Promise((resolve, reject) => {
        // resolve("(function () {return '123'})()")
        resolve("123")
    })
}

fetchData().then(res => console.log(res))
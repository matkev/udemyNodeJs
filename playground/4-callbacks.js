// setTimeout(() => {
//     console.log('2 seconds are up')
// }, 2000)

// const names = ['Matthew', 'Lucas', 'Noel']

// const shortNames = names.filter((name) => {
//     return name.length <= 5
// })

// // shortNames.forEach((name) => {
// //     console.log(name)
// // })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)

// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })



const add = (x, y, callback) => {
    setTimeout(() => {
        const sum = x + y
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
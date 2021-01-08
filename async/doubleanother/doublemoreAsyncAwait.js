function doublemore(x, y) {
    return (x * 2) + y
}

function doublemorePromisse(x, y) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ x, y, doublemore: doublemore(x, y)})
        }, Math.round(Math.random() * 100))
    })
}

async function doublemoreAsync() {
    let result = await doublemorePromisse(1, 0)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)

    result = await doublemorePromisse(2, result.doublemore)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
    
    result = await doublemorePromisse(3, result.doublemore)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
    
    result = await doublemorePromisse(4, result.doublemore)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
    
    result = await doublemorePromisse(5, result.doublemore)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
}

doublemoreAsync()
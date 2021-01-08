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

doublemorePromisse(1, 0)
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
        return doublemorePromisse(2, result.doublemore)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
        return doublemorePromisse(3, result.doublemore)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
        return doublemorePromisse(4, result.doublemore)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
        return doublemorePromisse(5, result.doublemore)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doublemore}`)
    })
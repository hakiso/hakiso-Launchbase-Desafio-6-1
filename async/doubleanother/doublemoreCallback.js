function doublemore(x, y) {
    return (x * 2) + y
}

function doublemoreCallback(x, y, callback) {
    setTimeout(function() {
        result = doublemore(x, y)
        console.log(`(${x} * 2) + ${y} = ${result}`)
        if(callback)
            callback(result)
    }, Math.round(Math.random() * 100))
}

doublemoreCallback(1, 0, function(result) {
    doublemoreCallback(2, result, function(result) {
        doublemoreCallback(3, result, function(result) {
            doublemoreCallback(4, result, function(result) {
                doublemoreCallback(5, result)
            })
        })
    })
})
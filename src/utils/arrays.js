const chunkArray = (arr, size) => {
    var results = [];
    for (var i = 0; i <arr.length; i += size)
        results.push(arr.slice(i, i + size))
    return results
}

export { chunkArray }
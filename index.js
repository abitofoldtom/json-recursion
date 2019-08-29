const DATA = require('./data')

var flatObject = {}

function appendPathsToValues(obj, path) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let keyPath
            (path === '') 
                ? keyPath = key
                : keyPath = path + '.' + key
            if (typeof obj[key] == "object") {
                appendPathsToValues(obj[key], keyPath)
            } else {
                flatObject[keyPath] = obj[key]
            }
        }
    }
}

appendPathsToValues(DATA, '')

console.log(flatObject)
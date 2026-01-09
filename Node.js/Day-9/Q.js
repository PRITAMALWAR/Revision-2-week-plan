
const queries = [
    { name: "Alice", age: 25 },
    { name: "Bob", city: "NY" },
    { age: 25, city: "NY" },
    { name: "Alice", age: 25 },
    { city: "NY" }
];

let filterCount = {};

for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    for (let key in query) {
        if (filterCount[key]) {
            filterCount[key] += 1;
        } else {
            filterCount[key] = 1;
        }
    }
}

console.log("Filter usage count:", filterCount);

let indexes = [];

for (let key in filterCount) {
    if (filterCount[key] > 1) {
        indexes.push(key);
    }
}

console.log("suggested single column indexes", indexes);

let compositeCount = {};

for (let i = 0; i < queries.length; i++) {
    let keys = Object.keys(queries[i]).sort();
    for (let j = 0; j < keys.length; j++) {
        for (let k = j + 1; k < keys.length; k++) {
            let pair = keys[j] + "," + keys[k]; 
            if (compositeCount[pair]) {
                compositeCount[pair] += 1;
            } else {
                compositeCount[pair] = 1;
            }
        }
    }
}

let compositeIndexes = [];
for (let pair in compositeCount) {
    if (compositeCount[pair] > 1) {
        compositeIndexes.push(pair);
    }
}

console.log("suggested composite indexes:", compositeIndexes);

let cache = {};

function runQuery(query) {
    let key = JSON.stringify(query);
    if (cache[key]) {
        console.log("Cache hit for:", query);
        return cache[key];
    } else {
        console.log("Running query:", query);
        let result = { data: query };
        cache[key] = result;
        return result;
    }
}

runQuery({ name: "Alice", age: 25 });
runQuery({ city: "NY" });
runQuery({ name: "Alice", age: 25 }); 

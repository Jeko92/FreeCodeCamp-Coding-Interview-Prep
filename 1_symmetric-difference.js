const sym = (...args) =>{
    const getDiff  = (arr1, arr2) =>{
        // return items from arr1 that doesn't exist in arr2
        const filterFunc = (arr1, arr2)=> arr1.filter(item=>arr2.indexOf(item) === -1);

        // run filterFunc on each array against each other
        return filterFunc(arr1, arr2).concat(filterFunc(arr2, arr1));
    };

    // reduce all arguments getting the difference of them
    const summary = args.reduce(getDiff, []);
    console.log(summary.filter((el, i, arr) => i === arr.indexOf(el)))
    return summary.filter((el, i, arr) => i === arr.indexOf(el));
}

sym([1, 2, 3], [5, 2, 1, 4]);
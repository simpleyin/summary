function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved_2s');
        }, 2000);
    });
}

function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved_3s');
        }, 3000);
    });
}

function resolveAfter1Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved_1s');
        }, 1000);
    });
}

async function usingAsync() {
    var result_1 = await resolveAfter1Seconds();
    console.log(result_1);
    var result_2 = await resolveAfter2Seconds();
    console.log(result_2);
    var result_3 = await resolveAfter3Seconds();
    console.log(result_3);
    // expected output: 'resolved'
}

usingAsync();


// resolveAfter1Seconds()
//     .then(v => {console.log(v); return resolveAfter2Seconds()})
//         .then(v => {console.log(v); return resolveAfter3Seconds()})
//             .then(v => console.log(v));

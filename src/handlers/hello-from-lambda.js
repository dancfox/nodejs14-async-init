async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms)).then(()=>{console.log("*** The promise is resolved. ***")});
}

// Change this value to modify the duration of the timeout.
// On my laptop the promise stops resolving at ~>50ms.
sleep(50); // ms

exports.helloFromLambdaHandler = async () => {
    const message = 'Hello from Lambda!';
    console.info(`${message}`);
    return;
}

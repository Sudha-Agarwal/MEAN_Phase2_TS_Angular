function fetchData(url, callback) {
    // Fetch data from URL
    const data = "some data";
    // Call callback function with data
    callback(data);
}
function logData(data) {
    console.log(data);
}
fetchData("http://example.com", logData);

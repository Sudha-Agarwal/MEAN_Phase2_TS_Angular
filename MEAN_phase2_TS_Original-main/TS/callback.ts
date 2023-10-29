function fetchData(url: string, callback: (data: string) => void) {
    // Fetch data from URL
    const data = "some data";
  
    // Call callback function with data
    callback(data);
  }
  
  function logData(data: string) {
    console.log(data);
  }
  
  fetchData("http://example.com", logData);
  console.log('hi');
  

  //dont use optional callback parameters
  function fetchData1(callback: (data?: any) => void) {
    // fetch data from server
    const data = { /* some data */ };
    callback(data);
  }

  //or
  type CallbackFunction = (data: any) => void | (() => void);

function fetchData2(callback: CallbackFunction) {
  // fetch data from server
  const data = { /* some data */ };
  callback(data);
}

const Helpers = {
  //this handles the call to our server
  bigQueryCall: (data) => {
    const fetchSettings = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  }
  return   fetch('http://localhost:8080/',fetchSettings).catch(error =>
      console.log(error, 'barely')).then(res => {
        console.log(res, 'response');
    })
  }
}

export default Helpers

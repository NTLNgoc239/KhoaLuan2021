async function getstreet() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get-street');
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }
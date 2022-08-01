function sleep(obj) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(obj), 3000);
    });
  }
  
  sleep({ nome: "michael", idade: 31 }).then((res) => console.log(res));
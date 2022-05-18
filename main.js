const formLogin = document.querySelector('#registrarse');
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const newemail = document.querySelector('#newemail').value;
    const newpass = document.querySelector('#newpass').value;
    
   auth
   .createUserWithEmailAndPassword(newemail,newpass)
   .then(userCredential => {
       console.log('se registro');
   })

})





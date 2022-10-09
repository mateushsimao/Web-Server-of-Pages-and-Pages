window.onload = () => {
    var buttonSend = document.getElementById("sendContacts");
    buttonSend.onclick = e => {
        e.preventDefault();
        contacts();
    }
}


function contacts(){
    var email = document.getElementById("emailid");
    var name = document.getElementById("nomeContacts");
    var menssage = document.getElementById("messageContacts");
    if (email.value != "" && name.value != "" &&  menssage.value != "" && IsEmail(email.value)) {
        var myInit = { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ email: email.value,  name: name.value, menssage: menssage.value, answered: false })
        };
        console.log(myInit);
        fetch('http://localhost:30001/api/v1/contacts', myInit)
            .then(res => res.json())
            .then(res => console.log(res))
        alert('Enviado com sucesso');
    } else {
        alert('Preencha todos os campos corretamente');
    }
}

function IsEmail(email) {
    var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    return regex.test(email);
}

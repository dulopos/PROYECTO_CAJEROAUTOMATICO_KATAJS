class Usuario{
   
    money = 10;
    constructor(user, password){
        this.name = user;
        this.pass = password;
    }

    consultarSaldo(){
        alert("Su saldo disponible es de: $" + this.money);
    }

    ingresarMonto(){
        while(true){
            let cantidad = parseFloat(prompt("Su monto a ingresar es de: "));

            if(isNaN(cantidad) || cantidad<0){
                alert("Ingrese solamente caracteres numéricos mayores o igual a 0.");
            }else{
                let nuevoSaldo = this.money + cantidad;

                if( nuevoSaldo > 990){
                    alert('Su monto de $'+nuevoSaldo+' exede nuestro límite de $990, ingrese una cantidad menor.');
                }else{
                    alert('Ingresaste  $'+cantidad+' , tu nuevo saldo es de: $'+ nuevoSaldo);
                    this.money += cantidad;
                    break;
                }
            }
        }
    }

    retirarMonto(){
        while(true){
            let retiro = parseFloat(prompt("Su monto a retirar es de: "));

            if(isNaN(retiro) || retiro<0){
                alert("Ingrese solamente caracteres numéricos mayores o igual a 0.");
            }else{

                if(retiro > this.money){
                    alert("No cuentas con saldo suficiente para relizar el retiro, ingresa otra cantidad.");
                }else{
                    let nuevoSaldo = this.money - retiro;

                    if(nuevoSaldo < 10){
                        alert("Debes mantener un mínimo de $10.")
                    }else{
                        alert('Retiraste $'+retiro+', tu saldo restante es: $'+nuevoSaldo);
                        this.money -= retiro;
                        break;
                    }
                }
            }
        }
    }

}

let usuario1 = new Usuario('Daniel', '7410');
let usuario2 = new Usuario('Gustavo', '852');
let usuario3 = new Usuario('Jimena', 'gatitos');
let usuarios = [usuario1, usuario2, usuario3];


let btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', ()=>{

    usr = document.getElementById('user');
    pass = document.getElementById('password');
    login = false;
    numUsuario = "";

    usuarios.forEach( u => {
        if(u.name == usr.value && u.pass == pass.value){
            numUsuario = usuarios.indexOf(u);
            login = true;
        }   
    });

    if(login){
        alert(`Bienvenid@`);
        document.getElementById('noti').style.visibility = 'visible';
        document.getElementById('menu').style.visibility = 'visible';
        document.getElementById('login').style.display = 'none';
        document.getElementById('logo').style.display = 'none';
        document.getElementById('acceder').style.display = 'none';
    }else{
        alert('Sus datos son incorrectos');
    }

});


let btnConsulta = document.getElementById('consultar');
btnConsulta.addEventListener('click', ()=>{
    usuarios[numUsuario].consultarSaldo();
});

let btnIngresar = document.getElementById('ingresar');
btnIngresar.addEventListener('click', ()=>{
    usuarios[numUsuario].ingresarMonto();
});

let btnRetirar = document.getElementById('retirar');
btnRetirar.addEventListener('click', ()=>{
    usuarios[numUsuario].retirarMonto();
});

let btnSalir = document.getElementById('salir');
btnSalir.addEventListener('click', ()=>{
    alert(`Gracias por su preferencia, ${usuarios[numUsuario].name}.`);
});
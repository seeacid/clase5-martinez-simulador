
function aleatorio(menor,mayor) {
    let posibilidades = mayor - menor;
    let aleatorio = Math.random() * (posibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return menor + aleatorio;
}

class Personaje{
    constructor (nombre,contraseña,raza,clase){

        this.nombre = nombre
        this.contraseña = contraseña
        this.raza = raza
        this.clase = clase
        this.nivel = 1


        this.fuerza = ""
        if(raza=="humano"){
            this.fuerza=aleatorio(4,10)+3
        }else if(raza=="elfo"){
            this.fuerza=aleatorio(4,10)+1
        }else{
            this.fuerza=aleatorio(4,10)+8
        }

        this.agilidad = ""
        if(raza=="humano"){
            this.agilidad=aleatorio(4,10)+5
        }else if(raza=="elfo"){
            this.agilidad=aleatorio(4,10)+3
        }else{
            this.agilidad=aleatorio(4,10)+2
        }

        this.inteligencia = ""
        if(raza=="humano"){
            this.inteligencia=aleatorio(4,10)+3
        }else if(raza=="elfo"){
            this.inteligencia=aleatorio(4,10)+7
        }else{
            this.inteligencia=aleatorio(4,10)+1
        }
        
        this.ataque = ((aleatorio(this.nivel,(this.nivel*2)))+(this.fuerza*2))
    }
     

    atacar() {
        console.log("Das un golpe con tu arma por " + this.ataque)
    }
}

let nombrep1 = prompt("Elige el nombre de tu personaje")
let contraseñap1 = prompt("elige tu contraseña")
let razap1 = (prompt("elige tu raza \n Humano \n Elfo \ Orco")).toLowerCase()
let clasep1 = (prompt("elige tu clase \n Guerrero  \n Mago \n Cazador")).toLowerCase()

let personaje1 = new Personaje (nombrep1,contraseñap1,razap1,clasep1)

alert("Personaje creado exitosamente! \n \n Nombre: "+personaje1.nombre+ "\n Contraseña: "+personaje1.contraseña+"\n Raza: "+personaje1.raza+"\n Clase: "+personaje1.clase+"\n nivel: "+personaje1.nivel+"\n Fuerza: "+personaje1.fuerza+"\n Agilidad: "+personaje1.agilidad+"\n Inteligencia: "+personaje1.inteligencia)

let enfrentar = confirm("Te encuentras con una criatura hostil en el bosque, deseas enfrentarte a ella?")

if(enfrentar==true){
    personaje1.atacar()
}
else{
    alert("Escapas del combate")
}







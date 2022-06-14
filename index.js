

    function suma (param1,param2,param3){
    return (param1+param2+param3);
};

class Coche{
    let puertas = 4;
}


let numeroIf = 0;
if (numeroIf <0){
    console.log("la variable numeroIF" + numeroIf + "es negativa");
}else if(numeroIf >0){
    console.log("la variable numeroIF" + numeroIf + "es positiva");
}else{
    console.log("La variable numeroIf es 0");
}

let numeroWhile = 2;
while(numeroWhile < 3){
    numeroWhile = numeroWhile + 1;
    console.log(numeroWhile);
    
    
};
let numeroWhile = 3;
 do(numeroWhile + 1);
 while(numeroWhile <3);
  
for (numeroFor =0 ,numeroFor =< 3, numeroFor++);
console.log(numeroFor);

let estacion = invierno;

switch (estacion){
    case "invierno":
    console.log(" es Invierno")
    break;
    case "verano":
      console.log(" es Verano");
    break;
    case "primavera" :
        console.log("es primavera");
        break;
    case "otonio":
        console.log(es otonio);
        break;
    default: 
        console.log("esto no es una estacion");
}

public static void main (String [] args){ 
    Persona persona = new Persona();
persona.setEdad(15);
int edad = persona.setEdad();
persona.setNombre(Juanita);
String nombre = persona.setNombre()
persona.setTelefono(35148478);
int telefono = persona.setTelefono();  
    
    system.out.println(edad)
    system.out.println(nombre)
    system.out.println(telefono)
    
}

class Persona {
    private int edad;
    private String nombre;
    private int telefono;
    
   public void   setEdad (int valor)
this.edad = valor;
    
    
    public int getEdad(){
        return this.edad;
    }
    
    public void  setNombre (String valor){
    this.nombre = valor
    }
    public int getNombre(){
        return this.nombre;
    }
     public void  setTelefono (int valor){
    this.telefono = valor
    }
    public int getTelefono(){
        return this.telefono;
    }


}
EJERCICIOS DE LA SESION 9

class Persona {
    private int edad;
    private String nombre;
    private int telefono;
    };

class Cliente extends Persona{
let credito = true;
}
 
class Objeto extends Cliente {
 public void   setEdad (int 34)
this.edad = 34;
 public int getEdad(){
        return this.edad;
    }  
   public void  setTelefono (int 3517306023){
    this.telefono = 3517306023   
}
    
 public int getTelefono(){
        return this.telefono;
    }
    

    public void  setNombre (String maxito){
    this.nombre = maxito
    }
   public int getNombre(){
        return this.nombre;
    }
public void  setCredito (String tiene){
    this.nombre = tiene
    }
     public int getCredito(){
        return this.nombre;
     }
}
system.out.println(edad)
    system.out.println(nombre)
    system.out.println(telefono)
     system.out.println(credito)

class Trabajador extends Persona {
    let salario 
}

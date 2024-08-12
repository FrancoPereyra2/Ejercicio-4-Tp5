class Reloj{
    constructor(){
        this.obtenerHora()
        this.obtenerFecha()
    }
    obtenerHora(){
        let horario = new Date();
        this.hora = horario.getHours()
        this.minutos = horario.getMinutes()
        this.segundos = horario.getSeconds()
        this.hora12 = this.hora % 12 || 12
        if(this.hora >= 12){
            this.ampm = "PM"
        }else{
            this.ampm = "AM"
        }

    }

    obtenerFecha(){
        let fecha = new Date();
        const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this.dia = dias[fecha.getDay()];
        this.numeroDia = fecha.getDate();
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.mes = meses[fecha.getMonth()]
        this.anio = fecha.getFullYear()
    }

    mostrarFecha(){
        document.getElementById('dia', 'numeroDia', 'mes', 'anio').innerText = `${this.dia} ${this.numeroDia} de ${this.mes} del ${this.anio}`
    }
    mostrarHora(){
        document.getElementById('horas', 'minutos', 'segundos', 'ampm').innerHTML = `${this.hora} : ${this.minutos} : ${this.segundos} ${this.ampm}`
    }
}

let reloj = new Reloj();
let fecha = new Reloj();
fecha.mostrarFecha()

function actualizarYMostrar(){
    reloj.obtenerHora()
    reloj.mostrarHora()
}


setInterval(actualizarYMostrar, 1000)
class instituto {
    constructor(codigoInstituto, nombre) {
        this._codigoInstituto = codigoInstituto;
        this._nombre = nombre;
        this._grupos = [];
    }

    get codigoInstituto() {

        return this._codigoInstituto
    }
    set codigoInstituto(id) {

        this._codigoInstituto = id;
    }
    get nombre() {

        return this._nombre;
    }
    set nombre(nombre) {

        this._nombre = nombre;
    }
    get grupos() {

        return this._grupos;
    }

    numeroAlumnos() {
        let total = 0;
        for (let i = 0; i < this._grupos.length; i++) {
            total = total + this._grupos[i].numeroAlumnos;
        }
        return total;
    }
}
class Grupo {
    constructor(codigoGrupo, numeroAlumnos) {
        this._codigoGrupo = codigoGrupo;
        this._numeroAlumnos = numeroAlumnos;
    }
    get codigoGrupo() {

        return this._codigoGrupo;
    }
    set codigoGrupo(id) {

        this._codigoGrupo = id;
    }

    get numeroAlumnos() {
        return this._numeroAlumnos;
    }
}


let flemming = new instituto('F1', 'Flemming');
flemming.grupos.push(new Grupo('1A', 20));
flemming.grupos.push(new Grupo('1B', 21));

console.log('CODIGO DEL INSTITUTO: ' + flemming.codigoInstituto);
console.log('ALUMNOS DEL INSTITUTO: ' + flemming.numeroAlumnos());

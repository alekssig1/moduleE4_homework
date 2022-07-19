function ElectroPribor(pribor){           // функция конструктор
    this.name = pribor.name;
    this.factory = pribor.factory;
    this.power = pribor.power
}
// общий метод  на вкл/выкл прибора
ElectroPribor.prototype.powerWatt = function(switched){
    if (switched) {
        console.log(`${this.name} фабрики ${this.factory} включен/а и расходует ${this.power} ватт`)
    } else {
        console.log(` Прибор ${this.name} выключен`)
    }
}
//функция включения
ElectroPribor.prototype.powerOn = function (){
    return  true
}
//функция выключения
ElectroPribor.prototype.powerOff = function (){
    return  false
}
// наследуемся от основной ф-ии
function Tv(pribor, diagonal){
    ElectroPribor.apply(this, arguments)
    this.diagonal = pribor.diagonal
}

Tv.prototype = Object.create(ElectroPribor.prototype)
//свой метод
Tv.prototype.diagonalTv = function(){
    console.log(`${this.name} фабрики ${this.factory} имеет диагональ ${this.diagonal} см`)
}
//создаем экземпляр lg
const lg = new Tv({name: 'Телевизор', factory:'LG', power: 400, diagonal: 50})
//проверка работы
lg.diagonalTv()
lgPower = lg.powerOn()    // или lg.powerOff()
lg.powerWatt(lgPower)

// другой наследник
function Lampa(pribor, lampBase){
    ElectroPribor.apply(this, arguments)
    this.lampBase = pribor.lampBase
}

Lampa.prototype = Object.create(ElectroPribor.prototype)

Lampa.prototype.lampaBase = function() {
    console.log(`${this.name} фабрики ${this.factory} имеет цоколь ${this.lampBase}`)
}
// экземпляр floorLamp
const floorLamp = new Lampa({name: "Лампа", factory: "Philips", power:100, lampBase: 'E27'})
// проверка работы
floorLamp.lampaBase()
floorLampPower = floorLamp.powerOn()    // или floorLamp.powerOff()
floorLamp.powerWatt(floorLampPower)


// Подсчет общей мощности
if (lgPower) {
    if (floorLampPower){
        console.log('Общая мощность = ' + (lg.power + floorLamp.power) +' ватт')
    } else {
        console.log(`Общая мощность = ${lg.power} ватт`)
    }
} else {
    if (floorLampPower) {
        console.log(`Общая мощность = ${floorLamp.power} ватт`)
    } else {
        console.log("Приборы выключены. Потребление 0 ватт")
    }
}

class ElectroPribor {                //базовый клас
    constructor(pribor) {
        this.name = pribor.name;
        this.factory = pribor.factory;
        this.power = pribor.power
    }
// функция включения
    powerOn (){
        return  true
    }
// функция выключения
    powerOff (){
        return  false
    }
// общий метод  на вкл/выкл прибора
    powerWatt(switched) {
        if (switched) {
            console.log(`${this.name} фабрики ${this.factory} включен/а и расходует ${this.power} ватт`);
        } else {
            console.log(` Прибор ${this.name} выключен`);
        }
    }
}
// класс Tv наследник
class Tv extends ElectroPribor {
    constructor(pribor) {
        super(pribor);
        this.diagonal = pribor.diagonal;
    }

    powerWatt(switched) {
        console.log(`${this.name} фабрики ${this.factory} имеет диагональ ${this.diagonal} см`)
        super.powerWatt(switched)
    }
}
//экземпляр Tv
const lg = new Tv({name: 'Телевизор', factory:'LG', power: 400, diagonal: 50});

// проверка работы
lgPower = lg.powerOn() // или lg.powerOff()
lg.powerWatt(lgPower)

//класс наследник Lampa
class Lampa extends ElectroPribor {
    constructor(pribor) {
        super(pribor);
        this.lampBase = pribor.lampBase
    }

    powerWatt(switched) {
        console.log(`${this.name} фабрики ${this.factory} имеет цоколь ${this.lampBase}`)
        super.powerWatt(switched)
    }
}
// экземпляр Lampa
const floorLamp = new Lampa({name: "Лампа", factory: "Philips", power:100, lampBase: 'E27'})

//проверка работы
floorLampPower = floorLamp.powerOff() // или floorLamp.powerOn()
floorLamp.powerWatt(floorLampPower)

// расчет общей мощности
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
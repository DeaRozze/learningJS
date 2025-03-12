class Kettle {
    constructor(volume, brand) {
        this.volume = volume; 
        this.brand = brand;   
        this.temperature = 20; 
        this.isOn = false;
        this.boilingProcess = null;
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.brand} чайник включен.`);
        } else {
            console.log(`${this.brand} чайник уже включен.`);
        }
    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            clearInterval(this.boilingProcess);
            console.log(`${this.brand} чайник выключен.`);
        } else {
            console.log(`${this.brand} чайник уже выключен.`);
        }
    }

    boil() {
        if (!this.isOn) {
            console.log(`${this.brand} чайник выключен. Сначала включи его.`);
            return
        }

        if (this.temperature >= 100) {
            console.log(`Вода в чайнике ${this.brand} уже кипит`);
            return;
        }
        console.log(`Начинаем нагрев воды в чайнике ${this.brand}...`);

        this.boilingProcess = setInterval(() => {
            if (this.temperature < 100) {
                this.temperature += 5;
                console.log(`Температура воды: ${this.temperature}°C`);
            } else {
                clearInterval(this.boilingProcess);
                console.log(`Вода в чайнике ${this.brand} закипела.`);
                this.autoShutoff()
            }
        },1000)
    }
    autoShutoff() {
        console.log(`Автоотключение через 3 секунды...`);
        setTimeout(() => this.turnOff(), 3000);
    }

    currentTemperature() {
        console.log(`Температура воды в чайнике ${this.brand}: ${this.temperature}°C`);
    }
}


let kettle = new Kettle(1.5, "Tefal");
kettle.turnOn();
kettle.boil();
kettle.currentTemperature();

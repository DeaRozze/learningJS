class TV {
  isInclude = false
  channelNumber = 10
  currentChannel = 1
  constructor() { }

  getIncluding() {
    console.log(this.isInclude ? "Телевизор включен" : "Телевизор выключен");
  }

  setIncluding(value) {
    this.isInclude = value
    console.log(value ? "Телевизор включен" : "Телевизор выключен");
  }

  getCurrentChannel() {
    console.log(`Текущий канал: ${this.currentChannel}`);
  }

  setChannel(channel) {
    if (channel >= 1 && channel <= this.channelNumber) {
      this.currentChannel = channel
      console.log(`переключил на канал: ${this.currentChannel}`);
    } else {
      console.log('вы в деревне у вас только 10 каналов');
    }
  }

  nextChannel() {
    if (this.currentChannel < this.channelNumber) {
      this.currentChannel++
    } else {
      this.currentChannel
    }
    console.log(`Сейчас вы смотрите ${this.currentChannel}`);
  }
  previousChannel() {
    if (this.currentChannel > 1) {
      this.currentChannel--
    } else {
      this.currentChannel = this.channelNumber
    }
    console.log(`Сейчас вы смотрите ${this.currentChannel}`);
  }
}

const tv = new TV()
tv.getIncluding() // Телевизор выключен
tv.setIncluding(true)
tv.getIncluding() // Телевизор включен

tv.getCurrentChannel() //Текущий канал: 1
tv.nextChannel()
tv.getCurrentChannel() // Текущий канал: 2
tv.previousChannel()
tv.getCurrentChannel() // Текущий канал: 1
tv.setIncluding(false) // выключен
tv.setIncluding(true)  // включен
tv.setChannel(5) // переключил на канал: 5
tv.setChannel(12) // вы в деревне у вас только 10 каналов

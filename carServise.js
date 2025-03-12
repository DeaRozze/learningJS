class CarService {
  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name
    this.workingHours = workingHours
  }
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  }
  repairCar(carName) {
    if (!carName) {
      console.error("Вам необходимо указать название машины, чтобы ее отремонтировать");
      return;
    }

    const curTime = new Date().getHours()
    if (curTime < this.workingHours.from || curTime > this.workingHours.till) {
      console.log('К сожалению, мы сейчас закрыты. Приходите завтра');
    } else {
      console.log(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`);
    }
  }
}

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00"
});
carService.repairCar("BMW");





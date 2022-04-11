function vacation(arg1, arg2, arg3) {
  let groupOfPeople = Number(arg1);
  let typeOfGroup = arg2;
  let dayOfWeek = arg3;
  let price = 0;
  let total = 0;

  if (dayOfWeek === "Friday") {
    if (typeOfGroup === "Students") {
      price += 8.45; //Per people
      total = groupOfPeople * price;
    } else if (typeOfGroup === "Business") {
      price += 10.9; //Per people
      total = groupOfPeople * price;
    } else if (typeOfGroup === "Regular") {
      price += 15; //Per people
      total = groupOfPeople * price;
    }
  } else if (dayOfWeek === "Saturday") {
    if (typeOfGroup === "Students") {
      price += 9.8; //Per people
      total = groupOfPeople * price;
    } else if (typeOfGroup === "Business") {
      price += 15.6; //Per people
      total = groupOfPeople * price;
    } else if (typeOfGroup === "Regular") {
      price += 20; //Per people
      total = groupOfPeople * price;
    }
  } else if (dayOfWeek === "Sunday") {
    if (typeOfGroup === "Students") {
      price += 10.46; //Per people
      total = groupOfPeople * price;
    } else if (typeOfGroup === "Business") {
      price += 16; //Per people
      total = groupOfPeople * price;
    } else if (typeOfGroup === "Regular") {
      price += 22.5; //Per people
      total = groupOfPeople * price;
    }
  }
  // DISCOUNTS

  //STUDENTS:
  if (typeOfGroup === "Students" && groupOfPeople >= 30) {
    total *= 0.85;
    //BUISNESS
  } else if (typeOfGroup === "Business" && groupOfPeople >= 100) {
    total = total - price * 10;
  }
  //REGULAR:
  else if (
    typeOfGroup === "Regular" &&
    groupOfPeople >= 10 &&
    groupOfPeople <= 20
  ) {
    total *= 0.95; //Discount
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}
solve(30, "Students", "Sunday");

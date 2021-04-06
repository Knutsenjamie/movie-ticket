function Ticket(movieName, isMatinee, ticketType, price) {
  this.movieName = movieName;
  this.isMatinee = isMatinee;
  this.ticketType = ticketType;
  this.price = {}
}

Ticket.prototype.Price = function () {
const price = ""
  if (isMatinee === true && ticketType === "Adult") {
    price = "$10.00"
  } else if (isMatinee === true && ticketType === "Child"){
    price = "$6.00"
  } else if (isMatinee === true && ticketType === "Senior"){
    price = "$8.00"
  } else if (isMatinee === false && ticketType === "Adult") {
    price = "$18.00"
  } else if (isMatinee === false && ticketType === "Child") {
    price = "$12.00"
  } else if (isMatinee === false && ticketType === "Senior") {
    price = "$15.00"
  }
  return price
  
  }


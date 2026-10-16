// ============================================================
//  JS Assignment #6 – Switch Statement
// ============================================================


// Step 2: Employee Role Access System
let role = prompt("Enter your role (admin / manager / developer / intern)");

switch (role) {
  case "admin":
    alert("Full system access");
    break;
  case "manager":
    alert("Team management access");
    break;
  case "developer":
    alert("Code access");
    break;
  case "intern":
    alert("Limited access");
    break;
  default:
    alert("Invalid input. Please try again.");
}


// Step 3: Online Payment Method Selection
let payment = prompt("Choose payment method (credit / debit / upi / cod)");

switch (payment) {
  case "credit":
    alert("Credit Card selected. Redirecting to bank payment page.");
    break;
  case "debit":
    alert("Debit Card selected. Amount will be debited from your account.");
    break;
  case "upi":
    alert("UPI selected. Scan QR code or enter UPI ID.");
    break;
  case "cod":
    alert("Cash on Delivery selected. Pay when order arrives.");
    break;
  default:
    alert("Invalid input. Please try again.");
}


// Step 4: Order Status Checker
let status = prompt("Enter order status (placed / packed / shipped / delivered / cancelled)");

switch (status) {
  case "placed":
    alert("Your order has been placed successfully.");
    break;
  case "packed":
    alert("Your order is packed and ready to dispatch.");
    break;
  case "shipped":
    alert("Your order is on the way. Expected delivery in 2-3 days.");
    break;
  case "delivered":
    alert("Your order has been delivered. Thank you!");
    break;
  case "cancelled":
    alert("Your order has been cancelled. Refund will be processed soon.");
    break;
  default:
    alert("Invalid input. Please try again.");
}


// Step 5: Office Working Day Checker
let day = prompt("Enter day name (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday)");

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    alert(day + " is a Working Day.");
    break;
  case "Friday":
    alert("Friday is a Half Day.");
    break;
  case "Saturday":
  case "Sunday":
    alert(day + " is a Holiday.");
    break;
  default:
    alert("Invalid input. Please try again.");
}

// ============================================================
//  JS Assignment #6 – Switch Statement (prompt & alert)
//  WMA Batch 6
// ============================================================


// ─────────────────────────────────────────────────────────────
//  STEP 2: Employee Role Access System
//  Scenario: A company system asks for the employee role
//            and shows the corresponding access level.
// ─────────────────────────────────────────────────────────────
function checkEmployeeRole() {
  // Ask the user for their role using prompt()
  let role = prompt("🔐 Employee Role Access System\n\nEnter your role:\n(admin / manager / developer / intern)");

  // Convert to lowercase so input is case-insensitive
  role = role ? role.toLowerCase().trim() : "";

  // Use switch to decide access level based on role
  switch (role) {
    case "admin":
      // Admin gets full access to everything
      alert("✅ Welcome, Admin!\n\n🔓 Access Level: FULL SYSTEM ACCESS\nYou can manage users, settings, and all data.");
      break;

    case "manager":
      // Manager can manage their team
      alert("✅ Welcome, Manager!\n\n📋 Access Level: TEAM MANAGEMENT ACCESS\nYou can view reports and manage your team.");
      break;

    case "developer":
      // Developer gets access to code repositories
      alert("✅ Welcome, Developer!\n\n💻 Access Level: CODE ACCESS\nYou can access repositories, deploy code, and view logs.");
      break;

    case "intern":
      // Intern has limited read-only access
      alert("✅ Welcome, Intern!\n\n🔒 Access Level: LIMITED ACCESS\nYou can view assigned tasks only.");
      break;

    default:
      // Any invalid role shows an error message
      alert("❌ Invalid input!\n\nPlease enter a valid role:\nadmin / manager / developer / intern");
      break;
  }
}


// ─────────────────────────────────────────────────────────────
//  STEP 3: Online Payment Method Selection
//  Scenario: An e-commerce website asks the user to choose
//            a payment method.
// ─────────────────────────────────────────────────────────────
function checkPaymentMethod() {
  // Ask the user to choose a payment method
  let method = prompt("💳 Payment Method Selection\n\nChoose your payment method:\n(credit / debit / upi / cod)");

  // Normalize the input
  method = method ? method.toLowerCase().trim() : "";

  // Use switch to display the appropriate payment message
  switch (method) {
    case "credit":
      // Credit card payment message
      alert("✅ Payment Method: CREDIT CARD\n\n💳 You will be redirected to your bank's secure payment page.\nEMI options are available for orders above ₹3,000.");
      break;

    case "debit":
      // Debit card payment message
      alert("✅ Payment Method: DEBIT CARD\n\n🏦 Amount will be directly debited from your bank account.\nMake sure your account has sufficient balance.");
      break;

    case "upi":
      // UPI payment message
      alert("✅ Payment Method: UPI\n\n📱 Scan the QR code or enter your UPI ID to complete the payment.\nInstant transfer – no extra charges.");
      break;

    case "cod":
      // Cash on delivery message
      alert("✅ Payment Method: CASH ON DELIVERY (COD)\n\n📦 Pay when your order arrives at your doorstep.\nPlease keep the exact amount ready.");
      break;

    default:
      // Invalid payment method
      alert("❌ Invalid input!\n\nPlease choose a valid payment method:\ncredit / debit / upi / cod");
      break;
  }
}


// ─────────────────────────────────────────────────────────────
//  STEP 4: Order Status Checker
//  Scenario: A customer checks the status of their order.
// ─────────────────────────────────────────────────────────────
function checkOrderStatus() {
  // Ask the user to enter their order status
  let status = prompt("📦 Order Status Checker\n\nEnter your order status:\n(placed / packed / shipped / delivered / cancelled)");

  // Normalize the input
  status = status ? status.toLowerCase().trim() : "";

  // Use switch to display the matching status message
  switch (status) {
    case "placed":
      // Order has just been placed
      alert("🛒 Order Status: PLACED\n\n✅ Your order has been successfully placed!\nWe are verifying your payment and details.");
      break;

    case "packed":
      // Order is being packed
      alert("📦 Order Status: PACKED\n\n🔄 Your order is packed and ready to dispatch.\nIt will be handed over to the courier soon.");
      break;

    case "shipped":
      // Order is on its way
      alert("🚚 Order Status: SHIPPED\n\n🛣️ Your order is on its way!\nExpected delivery within 2–3 business days.");
      break;

    case "delivered":
      // Order has been delivered
      alert("✅ Order Status: DELIVERED\n\n🎉 Your order has been delivered successfully!\nWe hope you enjoy your purchase. Thank you!");
      break;

    case "cancelled":
      // Order has been cancelled
      alert("❌ Order Status: CANCELLED\n\n😔 Your order has been cancelled.\nRefund will be processed within 5–7 business days.");
      break;

    default:
      // Invalid status entered
      alert("❌ Invalid input!\n\nPlease enter a valid status:\nplaced / packed / shipped / delivered / cancelled");
      break;
  }
}


// ─────────────────────────────────────────────────────────────
//  STEP 5: Office Working Day Checker
//  Scenario: An employee checks whether today is a working
//            day, half day, or a holiday.
// ─────────────────────────────────────────────────────────────
function checkWorkingDay() {
  // Ask the user to enter the day name
  let day = prompt("📅 Office Working Day Checker\n\nEnter the day name:\n(Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday)");

  // Normalize the input (handle different capitalizations)
  day = day ? day.toLowerCase().trim() : "";

  // Use switch to determine if it's a working day, half day, or holiday
  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      // Monday to Thursday are full working days
      alert("💼 Day: " + day.charAt(0).toUpperCase() + day.slice(1) + "\n\n✅ Status: WORKING DAY\n\nOffice hours: 9:00 AM – 6:00 PM\nAll employees are expected to be present.");
      break;

    case "friday":
      // Friday is a half day
      alert("🕐 Day: Friday\n\n⏰ Status: HALF DAY\n\nOffice hours: 9:00 AM – 1:00 PM\nEnjoy your weekend!");
      break;

    case "saturday":
    case "sunday":
      // Weekends are holidays
      alert("🎉 Day: " + day.charAt(0).toUpperCase() + day.slice(1) + "\n\n🏖️ Status: HOLIDAY\n\nNo office today! Rest well and enjoy your day off.");
      break;

    default:
      // Invalid day name
      alert("❌ Invalid input!\n\nPlease enter a valid day name:\nMonday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday");
      break;
  }
}

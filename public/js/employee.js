let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let phoneNumber = document.querySelector("#phoneNumber");
  let age = document.querySelector("#age");
  let employeeId = document.querySelector("#employeeId");
  let email = document.querySelector("#email");

  const data = {
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    age: age,
    employee_id: employeeId,
    email: email,
  };

  fetch("/api/employee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

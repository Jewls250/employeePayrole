let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let age = document.querySelector("#age").value;
  let employeeId = document.querySelector("#employeeId").value;
  let email = document.querySelector("#email").value;

  const data = {
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    age: age,
    employeeid: employeeId,
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

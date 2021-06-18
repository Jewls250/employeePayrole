let submitBtn = document.querySelector("#submitBtn")

submitBtn.addEventListener("click", () => {
    let position = document.querySelector("#position")
    let wage = document.querySelector("#wage")
    let hoursWorded = document.querySelector("#hoursWorked")
    let idNumber = document.querySelector("#idNumber")
    let description = document.querySelector("#description")

    const data = {
      position: position,
      wage: wage,
      hours_worked: hoursWorded,
      id_number: idNumber,
      description: description,
    };

    fetch("/api/payroll", {
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

})
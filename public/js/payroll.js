let submitBtn = document.querySelector("#submitBtn")

submitBtn.addEventListener("click", () => {
    let position = document.querySelector("#position").value
    let wage = document.querySelector("#wage").value
    let hours_worked = document.querySelector("#hoursWorked").value
    let idNumber = document.querySelector("#idNumber").value
    let description = document.querySelector("#description").value

    const data = {
      position: position,
      wage: wage,
      hours_worked: hours_worked,
      id_number: idNumber,
      job_description: description,
    };

    console.log(data)

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
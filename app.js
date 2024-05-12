document.addEventListener("DOMContentLoaded", function () {
  const calculateAgeBtn = document.querySelector(".btn-info button");
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");
  const yearResult = document.querySelector(".year span");
  const monthResult = document.querySelector(".month span");
  const dayResult = document.querySelector(".day span");
  const errorMessages = document.querySelectorAll(".error");

  calculateAgeBtn.addEventListener("click", function () {
    // Clear previous error messages
    errorMessages.forEach((error) => (error.textContent = ""));

    // Get input values
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Validate input values
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      errorMessages.forEach(
        (error) => (error.textContent = "Please enter valid values.")
      );
      return;
    }

    // Calculate age
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let ageYear = currentYear - year;
    let ageMonth = currentMonth - month;
    let ageDay = currentDay - day;

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
    }

    if (ageDay < 0) {
      const daysInLastMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      ageDay += daysInLastMonth;
      ageMonth--;
    }

    // Display age
    yearResult.textContent = ageYear;
    monthResult.textContent = ageMonth;
    dayResult.textContent = ageDay;
  });
});

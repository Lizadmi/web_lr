document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phone");
  
    // Маска ввода для номера телефона
    phoneInput.addEventListener("input", (e) => {
      let input = phoneInput.value.replace(/\D/g, "");
      let formatted = "+7 ";
      if (input.length > 1) {
        formatted += `(${input.substring(1, 4)}`;
      }
      if (input.length >= 4) {
        formatted += `) ${input.substring(4, 7)}`;
      }
      if (input.length >= 7) {
        formatted += `-${input.substring(7, 9)}`;
      }
      if (input.length >= 9) {
        formatted += `-${input.substring(9, 11)}`;
      }
      phoneInput.value = formatted.substring(0, 18); // Ограничение длины маски
    });
  });
  
  // Проверка формы
  function validateForm() {
    const postcode = document.getElementById("postcode").value;
  
    // Проверка почтового индекса
    if (!/^\d{6}$/.test(postcode)) {
      alert("Введите корректный почтовый индекс (6 цифр).");
      return false;
    }
  
    // Все проверки пройдены
    return true;
  }
  
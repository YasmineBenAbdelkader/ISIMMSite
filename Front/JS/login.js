const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById('role').addEventListener('change', function() {
  var selectedValue = this.value;
  var otherOptionValue = selectedValue === 'etudiant' ? 'enseignant' : 'etudiant';
  var otherOption = document.querySelector('option[value="' + otherOptionValue + '"]');
  otherOption.disabled = true;
  otherOption.removeAttribute('selected');
});





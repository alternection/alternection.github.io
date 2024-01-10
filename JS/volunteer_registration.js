//check form data
var checkForm = (form) => {
  if (!form.AgreeToTermsAndConditions.checked) {
    alert ("Please indicate that you accept the Terms and Conditions")
    form.AgreeToTermsAndConditions.focus ()
    return false
  }
  return true
};

//submit the data of the form
window.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('volunteerForm');
  form.addEventListener("submit", function(e) {
    document.getElementById('click-msg').classList.replace('hidden', 'not-hidden');
    e.preventDefault();
    const data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbzgZeh-IZd-vF9EpD1rBoUYta-TsteRzKfg-UWOJVsDehnZy14IwnIq3M2arL0kkeF3/exec', {
      method: 'POST',
      body: data,
    })
    .then(() => {
      window.location.reload()
    })
  })
});
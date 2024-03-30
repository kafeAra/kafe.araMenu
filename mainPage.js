document.getElementById('select').addEventListener('change', function () {
    var selectBox = document.getElementById('select');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    window.location.href = selectedValue;
  });
    
  document.addEventListener("DOMContentLoaded", function() {
    // Telefon ikonuna tıklandığında telefon numarasına yönlendirme işlevi
    var phoneIcon = document.getElementById("phoneIcon");
    if (phoneIcon) {
      phoneIcon.addEventListener("click", function() {
        window.location.href = "tel:0212 245 41 05"; // Telefon numarasını buraya girin
      });
    }
  
    // Mail ikonuna tıklandığında mail adresine yönlendirme işlevi
    var mailIcon = document.getElementById("mailIcon");
if (mailIcon) {
  mailIcon.addEventListener("click", function() {
    window.location.href = "mailto:info@teraziturizm.com"; 
  });
}

    // Instagram ikonuna tıklandığında Instagram sayfasına yönlendirme işlevi
    var instagramIcon = document.getElementById("instagramIcon");
    if (instagramIcon) {
      instagramIcon.addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/arakafe/"; 
      });
    }
  });
  
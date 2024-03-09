const fnqs = document.querySelectorAll(".faq-container");

fnqs.forEach((fnq) => {
  fnq.addEventListener("click", function () {
    // Close all other active fnq
    fnqs.forEach((other_fnq)=>{
      if (other_fnq !== fnq) {
    other_fnq.classList.remove("active");
    }
    // Toggle the 'active' class on the fnq div
    else{
    other_fnq.classList.toggle("active");
    }
    })

  });
});
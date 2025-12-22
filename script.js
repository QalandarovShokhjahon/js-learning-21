"use strict";

// **`Delegatsiya`** → bu **bitta umumiy ota elementga** hodisa (`event`) qo‘shish orqali uning **barcha farzand elementlariga** ta’sir qilish usulidir.

// Agar Delegatsiyasiz har bir elementga alohida hodisa yozilsa, kod ko‘payadi, xotira ko‘proq sarflanadi va yangi element qo‘shilganda yana qo‘shimcha kod yozish kerak bo‘ladi — shu sababli delegatsiya samaraliroq usul hisoblanadi.

// let btns = document.querySelectorAll("button");
// let btnsWrapper = document.querySelector("#btns-wrapper");

// btnsWrapper.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// matches() → element tanlangan selectorga mos kelishini true yoki false qiymat qaytarib tekshiradi.
let btns = document.querySelectorAll("#btns-wrapper button");
let wrapper = document.querySelectorAll("#btns-wrapper");

wrapper.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    console.log(event.target.textContent);
  }
});

let btnsWrapper = document.querySelector("#btns-wrapper");

btnsWrapper.addEventListener("click", (event) => {
  if (event.target.matches(".bg-blue-700")) {
    console.log(`Siz ${event.target.textContent} tugmasiga bosdingiz`);
  }
});

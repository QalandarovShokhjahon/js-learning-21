# 🧠 JavaScript Day 21 — Event Delegation (Delegatsiya)

Bu darsda men JavaScript’da **Event Delegation (hodisalar delegatsiyasi)** tushunchasini o‘rgandim.
Bu usul yordamida ko‘p elementlarga alohida-alohida event qo‘shmasdan, **bitta parent orqali** hodisalarni boshqarishni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

### Event Delegation nima?

Event Delegation — bu **event bubbling** mexanizmidan foydalanib,
hodisani parent elementga qo‘yish va `event.target` orqali qaysi child bosilganini aniqlash usuli.

Bu usul:

* Kamroq kod yozishga
* Tezroq ishlashga
* Dinamik elementlar bilan muammosiz ishlashga

imkon beradi.

---

## 🔁 Event Bubbling (qisqacha)

Event bubbling — hodisa **eng ichki elementdan tashqariga (parentlarga)** qarab tarqalishi.

```
button → div → body → document
```

Shu sababli parent element event’ni ushlab qola oladi.

---

## 💻 Oddiy misol (delegatsiyasiz)

```
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
```

❌ Kamchilik: har bir elementga alohida event.

---

## ✅ Event Delegation bilan

```
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('active');
  }
});
```

✔️ Bitta event — ko‘p element.

---

## 🧪 Amaliy misollar / Practical examples

### 1️⃣ Dynamic elementlar bilan ishlash

```
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
```

---

### 2️⃣ Todo list (mini misol)

```
const todoList = document.querySelector('#todos');

 todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
```

---

## 🧩 Qisqacha xulosa / Summary

* Event Delegation → parent orqali event boshqarish
* `event.target` → bosilgan aniq element
* `classList.contains()` → kerakli elementni tekshirish
* Dinamik DOM uchun eng to‘g‘ri yechim

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da **katta va dinamik UI’larda events’ni to‘g‘ri boshqarish**ni o‘rganish.

Buning yordamida:

* Performance yaxshilanadi
* Kod soddalashadi
* Real loyihalarda professional yondashuv paydo bo‘ladi

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 21-kun — Event Delegation (Delegatsiya)

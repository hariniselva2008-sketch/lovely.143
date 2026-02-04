// page switch
function goPage2() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

// enter names
function enterNames() {
  let n1 = prompt("Enter Name 1");
  let n2 = prompt("Enter Name 2");

  if (n1 && n2) {
    document.getElementById("namesDisplay").innerText =
      `${n1} ❤️ LOVE ❤️ ${n2}`;

    setTimeout(() => {
      document.getElementById("page2").classList.remove("active");
      document.getElementById("page3").classList.add("active");
      createHearts();
    }, 2000);
  }
}

// stars
const starBox = document.getElementById("stars");
for (let i = 0; i < 40; i++) {
  let s = document.createElement("div");
  s.className = "star";
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  starBox.appendChild(s);
}

// hearts
function createHearts() {
  const heartBox = document.getElementById("hearts");

  for (let i = 0; i < 20; i++) {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerText = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (20 + Math.random() * 20) + "px";
    heartBox.appendChild(h);
  }
}

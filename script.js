// Edit package prices and inclusions here. Keep all displayed amounts in USD.
const packages = [
  {
    name: "Basic Website",
    tag: "For the essential pages",
    description: "A tailored starting point for a business that needs its key information in one clear, professional place.",
    price: "$[Add USD price]",
    pages: "Page count: [confirm]",
    items: ["Design shaped around your business", "Mobile-friendly layouts", "Core information pages [confirm scope]", "Contact feature [confirm scope]", "Revisions and handover [confirm]", "Launch preparation [confirm]"]
  },
  {
    name: "Advanced Website",
    tag: "For a broader website",
    description: "A more developed starting point for businesses with more pages, content or agreed functionality to bring together.",
    price: "$[Add USD price]",
    featured: true,
    pages: "Page count: [confirm]",
    items: ["More page types or design detail [confirm scope]", "Mobile-friendly layouts", "Contact or enquiry features [confirm scope]", "Additional functionality [specify]", "Revisions and handover [confirm]", "Launch preparation [confirm]"]
  },
  {
    name: "Custom Website",
    tag: "For individual requirements",
    description: "For a business with specific needs that don’t fit neatly into the other starting points. We’ll define the scope together.",
    price: "[Quote in USD]",
    pages: "Pages and features: scoped together",
    items: ["Custom design and structure", "Mobile-friendly layouts", "Features or integrations [scope and quote]", "Revisions and handover [confirm]", "Launch preparation [confirm]"]
  }
];

const priceGrid = document.querySelector("#price-grid");
priceGrid.innerHTML = packages.map((item, i) => `
  <article class="price-card ${item.featured ? "featured" : ""}">
    ${item.featured ? '<span class="popular">A broader scope</span>' : ""}
    <span class="plan-tag">${item.tag}</span>
    <h3>${item.name}</h3>
    <p class="description">${item.description}</p>
    <div class="price"><small>Price in USD · confirm before launch</small><strong>${item.price}</strong></div>
    <ul><li>${item.pages}</li>${item.items.map(feature => `<li>${feature}</li>`).join("")}</ul>
    <a class="button button-dark" href="#contact" data-package="${item.name}">Ask about this package <span>↗</span></a>
  </article>`).join("");

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  nav.classList.toggle("open", !expanded);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  nav.classList.remove("open");
}));

document.addEventListener("click", event => {
  const packageLink = event.target.closest("[data-package]");
  if (packageLink) document.querySelector('[name="package"]').value = packageLink.dataset.package;
});

document.querySelector("#enquiry-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const fields = [
    ["Name", form.get("name")],
    ["Email", form.get("email")], ["Type of business", form.get("type")],
    ["Website requirement", form.get("need")], ["Website type", form.get("siteType")], ["Preferred package", form.get("package")],
    ["Additional information", form.get("message")]
  ];
  const body = fields.map(([label, value]) => `${label}: ${value || "Not provided"}`).join("\n");
  const subject = `Website enquiry — ${form.get("name")}`;
  document.querySelector("#form-feedback").textContent = "Your email app should open with the details filled in. Add the business email address and send the message to complete your enquiry. This website does not receive or store it.";
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector("#year").textContent = new Date().getFullYear();

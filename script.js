// Edit package prices and inclusions here. Keep all displayed amounts in USD.
const packages = [
  {
    name: "Basic",
    formValue: "Basic Website",
    tag: "For the essential pages",
    description: "A simple, professional website for businesses that need to establish an online presence.",
    price: "$25 / month",
    pages: "One-page professional website",
    items: ["Customised design using your business branding", "Mobile and tablet-friendly layout", "Business introduction, services and contact information", "Contact or enquiry form and social media links", "Basic search engine optimisation (SEO) setup", "Website hosting and SSL"]
  },
  {
    name: "Advanced",
    formValue: "Advanced Website",
    tag: "For a broader website",
    description: "A more comprehensive website for businesses that need additional pages and flexibility to showcase their products and services.",
    price: "$59 / month",
    featured: true,
    pages: "Up to five website pages",
    items: ["Everything included in Basic", "More tailored website design", "Separate About, Services and Contact pages where appropriate", "Image gallery or portfolio", "Blog or news section if required", "Additional enquiry features", "Enhanced on-page SEO setup"]
  },
  {
    name: "Custom",
    formValue: "Custom Website",
    tag: "For individual requirements",
    description: "For businesses with specific requirements or more specialised website needs.",
    price: "Request a quote",
    pages: "Pricing based on your requirements",
    items: ["Bespoke website design and development", "Online shops and e-commerce", "Booking and appointment systems", "Specialised integrations", "Advanced or tailored functionality"]
  }
];

const priceGrid = document.querySelector("#price-grid");
priceGrid.innerHTML = packages.map((item, i) => `
  <article class="price-card ${item.featured ? "featured" : ""}">
    ${item.featured ? '<span class="popular">A broader scope</span>' : ""}
    <span class="plan-tag">${item.tag}</span>
    <h3>${item.name}</h3>
    <p class="description">${item.description}</p>
    <div class="price"><small>${i < 2 ? "Monthly subscription · USD" : "Individually quoted"}</small><strong>${item.price}</strong></div>
    <ul><li>${item.pages}</li>${item.items.map(feature => `<li>${feature}</li>`).join("")}</ul>
    <a class="button button-dark" href="#contact" data-package="${item.formValue}">Ask about this package <span>↗</span></a>
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

document.querySelector("#year").textContent = new Date().getFullYear();


'use strict';

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});

/**
 * Tab content switcher
 */
document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabContent = document.querySelector('.tab-content');

  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      tabButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      this.classList.add('active');

      var tabName = this.innerText;

      switch (tabName) {
        case 'Our Mission':
          tabContent.innerHTML = `
            <p class="section-text">
                Our mission is to conserve endangered species and their habitats through research, education, advocacy, and conservation action. We work to ensure that all species have a chance to survive and thrive in the wild.
            </p>
            <ul class="tab-list">
                <li class="tab-item">
                    <div class="item-icon">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                    <p class="tab-text">Protecting Natural Habitats</p>
                </li>
                <li class="tab-item">
                    <div class="item-icon">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                    <p class="tab-text">Media Campaigns</p>
                </li>
                <li class="tab-item">
                    <div class="item-icon">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                    <p class="tab-text">Preventing Poaching and Illegal Trade</p>
                </li>
                <li class="tab-item">
                    <div class="item-icon">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                    <p class="tab-text">Reducing Resource Exploitation</p>
                </li>
            </ul>`;
          break;
        case 'Our Vision':
          tabContent.innerHTML = `
            <p class="section-text">
                We envision a world where all endangered species are protected and their habitats are restored. We believe that this is possible through the combined efforts of individuals, organizations, and governments. 
            </p>`;
          break;
        case 'Next Plan':
          tabContent.innerHTML = `
            <p class="section-text">
                We work to conserve endangered species through a variety of programs and initiatives, including:
            </p>
            <ul class="tab-list">
                <li class="tab-item">
                    <p class="tab-text">• We conduct research to better understand the threats facing endangered species and to develop effective conservation strategies.</p>
                </li>
                <li class="tab-item">
                    <p class="tab-text">• We educate the public about the importance of endangered species conservation and how they can get involved.</p>
                </li>
                <li class="tab-item">
                    <p class="tab-text">• We advocate for policies that protect endangered species and their habitats.</p>
                </li>
                <li class="tab-item">
                    <p class="tab-text">• We implement conservation actions on the ground to help endangered species recover.</p>
                </li>
            </ul>`;
          break;
        default:
          tabContent.innerHTML = `<p>Content not available.</p>`;
          break;
      }
    });
  });
});
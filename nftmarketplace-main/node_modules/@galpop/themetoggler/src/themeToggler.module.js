import {
  toggler,
  slider,
  round,
  unselectable,
} from "./themeToggler.module.css";

class ThemeToggler extends HTMLElement {
  constructor() {
    super();
    this.darkCSS = document.querySelectorAll(
      "link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"
    );
    this.lightCSS = document.querySelectorAll(
      "link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"
    );
    this.darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.darkModeOn = this.darkModeMediaQuery.matches;
  }

  connectedCallback() {
    this.lightFocusColor = this.getAttribute("lightFocusColor");
    this.darkFocusColor = this.getAttribute("darkFocusColor");
    this.setColorAttributes();
    this.render();
    this.init();
  }

  setColorAttributes = () => {
    if (this.lightFocusColor && this.isHexColor(this.lightFocusColor)) {
      document.documentElement.style.setProperty(
        "--light-focus-color",
        this.lightFocusColor
      );
    }
    if (this.darkFocusColor && this.isHexColor(this.darkFocusColor)) {
      document.documentElement.style.setProperty(
        "--dark-focus-color",
        this.darkFocusColor
      );
    }
  };

  init = () => {
    this.themeToggler = document.getElementById("themeToggler");
    this.initToggler();
    this.themeToggler.addEventListener("click", this.toggleTheme);
    this.darkModeMediaQuery.addEventListener("change", (e) => {
      this.darkModeOn = e.matches;
      if (this.darkModeOn) {
        this.activateDarkMode();
      } else {
        this.activateLightMode();
      }
      this.updateToggler();
    });
  };

  isHexColor = (hex) => /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(hex);

  initToggler = () => {
    if (this.darkModeOn && !this.themeToggler.checked) {
      this.themeToggler.checked = true;
    } else if (this.themeToggler.checked) {
      this.themeToggler.checked = false;
    }
  };

  updateToggler = () => {
    if (this.darkModeOn && !this.themeToggler.checked) {
      this.themeToggler.checked = true;
      this.themeToggler.dispatchEvent(new Event("input", { bubbles: true }));
    } else if (this.themeToggler.checked) {
      this.themeToggler.checked = false;
      this.themeToggler.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  activateDarkMode = () => {
    this.darkModeOn = true;
    this.lightModeOn = false;
    this.darkCSS.forEach((link) => {
      link.media = "all";
      link.disabled = false;
    });
    this.lightCSS.forEach((link) => {
      link.media = "not all";
      link.disabled = true;
    });
  };

  activateLightMode = () => {
    this.darkModeOn = false;
    this.lightModeOn = true;
    this.lightCSS.forEach((link) => {
      link.media = "all";
      link.disabled = false;
    });
    this.darkCSS.forEach((link) => {
      link.media = "not all";
      link.disabled = true;
    });
  };

  toggleTheme = () => {
    if (this.darkModeOn) {
      this.activateLightMode();
    } else {
      this.activateDarkMode();
    }
  };

  render = () => {
    const html = String.raw;
    this.innerHTML = html`
      <label for="themeToggler" class="${toggler}">
        <input
          tabindex="1"
          id="themeToggler"
          name="themeToggler"
          type="checkbox"
        />
        <span class="${slider} ${round}">
          <p class="${unselectable}">🌙</p>
          <p class="${unselectable}">🌞</p>
        </span>
      </label>
    `;
  };
}

customElements.define("theme-toggler", ThemeToggler);

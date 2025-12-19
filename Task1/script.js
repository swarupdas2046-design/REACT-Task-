/* NAVBAR */
let navlogo = React.createElement("img", {
  src: "https://github.com/vasundhara-thakur/react_1/blob/main/image/logo.png?raw=true",
});
let about = React.createElement("h2", null, "About Me");
let portfolio = React.createElement("h2", null, "Portfolio");
let services = React.createElement("h2", null, "Services");
let blog = React.createElement("h2", null, "Blog");

let navLeft = React.createElement("div", { className: "left" }, [
  about,
  portfolio,
  services,
  blog,
]);

let call = React.createElement("a", { href: "#" }, "Book A Call");
let logo = React.createElement("i", { class: "ri-arrow-right-up-line" });

let navRight = React.createElement("div", { className: "right" }, [call, logo]);

let nav = React.createElement("div", { className: "nav" }, [
  navlogo,
  navLeft,
  navRight,
]);

// let line = React.createElement("div",{className:'line'},'')

/* HERO LEFT */

// SIDE TEXT
let year = React.createElement("span", null, "2024");

let line = React.createElement("div", { className: "line" });

let role = React.createElement("span", null, "Product Designer");

let sideText = React.createElement("div", { className: "side-text" }, [
  year,
  line,
  role,
]);

let num1 = React.createElement("h1", null, "+200");
let text1 = React.createElement("p", null, "Project completed");
let box1 = React.createElement("div", null, [num1, text1]);

let num2 = React.createElement("h1", null, "+50");
let text2 = React.createElement("p", null, "Startup raised");
let box2 = React.createElement("div", null, [num2, text2]);

let stats = React.createElement("div", { className: "stats" }, [box1, box2]);

let down = React.createElement("h3", null, "Scroll down");
let arrow = React.createElement("i", { class: "ri-arrow-down-line" });

let stats2 = React.createElement("div", { className: "stats2" }, [down, arrow]);

let hello = React.createElement("h2", null, "Hello");

let heroLeft = React.createElement("div", { className: "hero-left" }, [
  stats,
  hello,
  stats2,
]);

/* HERO RIGHT */
let image = React.createElement("img", {
  src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});

let heroRight = React.createElement(
  "div",

  { className: "hero-right" },
  [image]
);

/* HERO */
let hero = React.createElement("div", { className: "hero" }, [
  sideText,
  heroLeft,
  heroRight,
]);

/* APP */
let app = React.createElement("div", null, [nav, hero]);

/* ROOT */
let root = ReactDOM.createRoot(document.querySelector(".main"));
root.render(app);

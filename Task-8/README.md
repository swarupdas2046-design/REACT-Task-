# React Router DOM Practice Project

This project is created to practice and understand **core React Router DOM concepts**.
The goal was to get comfortable with **modern routing, navigation, and layouts** in React.

---

## 📌 Concepts Covered in This Project

### 1️⃣ useNavigate
- Used for **programmatic navigation**
- Redirecting users on button click or logic-based conditions
- Example: navigating to Contact page or going back in history

---

### 2️⃣ NavLink
- Used for navigation with **active state awareness**
- Helps in styling links based on whether the route is active or not
- Used in the Navbar to highlight the current page

---

### 3️⃣ createBrowserRouter
- Modern way of handling routing in React
- Routes are defined in a **centralized configuration file**
- Replaced the old `BrowserRouter + Routes + Route` approach
- Helps manage large applications more cleanly

---

### 4️⃣ Outlet
- Used for **nested routing**
- Acts as a placeholder where child routes render
- Implemented in parent routes like `Store`
- Child routes (`Men`, `Women`) render only when `Outlet` is present

---

## 🧠 Key Learning

> Nested routes will not render unless the parent component contains `<Outlet />`.

This was an important realization while building this project.

---

## 🛠️ Tech Stack

- React JS
- React Router DOM
- Tailwind CSS

---

## 🙌 Author

**Swarup Das**  
Learning React & Frontend Development 🚀

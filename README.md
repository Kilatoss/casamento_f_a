# Wedding Website - Francisca & André

### Project — Web Development 2025 (MDM - University of Coimbra)

**Assignment 2 — Static Website**

---

This repository contains the source code for the **static website** created for *Assignment 2*.  
The website serves as a **digital invitation and information hub** for Francisca and André's wedding, offering guests details about the event, schedule, location, and gift registry.

The project was built **from scratch** using **HTML5**, **CSS3**, and **JavaScript (ES6+)**, focusing on **high aesthetic rigor** and a **strong user experience** [source: 2, 3].  
This is achieved through a **full-page (scroll-less) design** where navigation is handled dynamically.

---

## Demonstration

- **Website (GitHub Pages):** [Your GitHub Pages Website Link]  
- **Interaction Video:** The `SEEME.mp4` video [source: 18], demonstrating the website’s functionality, is located in the root of this repository.

---

## Features (Assignment Requirements)

This project fulfills **all mandatory requirements** for the assignment:

### Aesthetic Rigor & UX
- Full-page layout (**no scrolling**)
- User navigates via a **sidebar** (SPA-like experience)
- Clean and modern user experience

### Responsive Website
- Fully responsive across **desktops, tablets, and mobile phones**
- On mobile, navigation moves to the **top**
- Content-heavy sections (e.g., *Gifts*, *Schedule*) use `overflow-y: auto` for internal scrolling

### Dynamic Interaction
- Navigation is the **main dynamic element** [source: 12]
- JavaScript intercepts navbar clicks and dynamically updates the `.section-active` class
- Simulates **full-page transitions** without reloading

### CSS Animations
The website includes several animations [source: 13]:
- **Automatic photo carousel** in “The Couple” section (using `clip` and `transition`)
- **Smooth fade-in/fade-out transitions** between sections
- **Hover effects** on buttons and navigation links

### Content Generated via Fetch
- The **“Gift Registry”** section is **not hard-coded**
- JavaScript uses the `fetch()` API to load `prendas.json` (fulfilling the *own static content on GitHub* requirement [source: 15])
- The script **dynamically builds the gift grid** and inserts it into the DOM

---

## Technologies Used

- **HTML5**
- **CSS3**
  - CSS Variables  
  - Grid & Flexbox  
  - Animations & Transitions  
- **JavaScript (ES6+)**
  - DOM Manipulation  
  - Event Listeners  
  - Fetch API  
  - Async/Await  
  - Classes for Carousel

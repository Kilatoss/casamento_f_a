# Wedding Website - Francisca & André

### Project — Web Development 2025 (MDM - University of Coimbra)

**Assignment 2 — Static Website**

---

This repository contains the source code for the **static website** created for *Assignment 2*.  
The website serves as a **digital invitation and information hub** for Francisca and André's wedding, offering guests details about the event, schedule, location, and gift registry.

The project was built  using **HTML5**, **CSS3**, and **JavaScript (ES6+)**, focusing on **high aesthetic rigor** and a **strong user experience**  

---

## Demonstration

- **Website (GitHub Pages):** [\[Website Link\] ](https://kilatoss.github.io/casamento_f_a/) 
- **Interaction Video:** The `SEEME.mp4` video, demonstrating the website’s functionality, is located in the root of this repository.

---

## Features (Assignment Requirements)

### Aesthetic Rigor & UX
- Full-page layout (**no scrolling**)
- User navigates via a **sidebar** (SPA-like experience)
- Clean and modern user experience

### Responsive Website
- Fully responsive across **desktops, tablets, and mobile phones**
- On mobile, navigation moves to the **top**
- Content-heavy sections (e.g., *Gifts*, *Schedule*) use `overflow-y: auto` for internal scrolling

### Dynamic Interaction
- Navigation is the **main dynamic element** 
- JavaScript intercepts navbar clicks and dynamically updates the `.section-active` class

### CSS Animations
The website includes several animations:
- **Automatic photo carousel** in “The Couple” section (using `clip` and `transition`)
- **Smooth fade-in/fade-out transitions** between sections
- **Hover effects** on buttons and navigation links

### Content Generated via Fetch
- JavaScript uses the `fetch()` API to load `prendas.json` 
- The script **dynamically builds the gift grid** and inserts it into the DOM

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**

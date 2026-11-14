# Oladele Stitches

A simple multi-page fashion house website built for **CSC 106 / IFT 203 — Introduction to Web Technologies**.

**Oladele Stitches** is a contemporary Nigerian bespoke and ready-to-wear fashion house offering custom Agbada, senator suits, adire evening gowns, and bridal/aso-ebi couture.

---

## Pages Included

All pages share a consistent navigation bar, footer link structure, an external stylesheet (`css/styles.css`), a scrolling `<marquee>` announcement bar, and interactive JavaScript (`js/main.js`):

1. **Home (`index.html`)** — Brand introduction, featured collections, and an interactive Atelier Note switcher.
2. **Products (`products.html`)** — Product showcase with category filter buttons and a Quick View modal.
3. **Board of Trustees (`board.html`)** — Founding group members with portraits, roles, and expandable bio toggles.
4. **Upcoming Events (`events.html`)** — Calendar of runway and trunk shows with a live countdown timer and RSVP toggle buttons.
5. **Inquiries & Appointments (`appointments.html`)** — Booking and inquiry form with client-side validation and confirmation message, plus showroom details.
6. **DOM Structure (`dom-structure.html`)** — Visual representation of the website's Document Object Model (DOM) tree and a live DOM node counter.

---

## Project Structure

```text
ninola-stitches/
├── index.html
├── products.html
├── board.html
├── events.html
├── appointments.html
├── dom-structure.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   ├── hero-atelier.jpg
│   ├── event-runway.jpg
│   ├── product-agbada.jpg
│   ├── product-bridal.jpg
│   ├── product-gown.jpg
│   ├── product-suit.jpg
│   ├── trustee-1.jpg
│   ├── trustee-2.jpg
│   ├── trustee-3.jpg
│   └── trustee-4.jpg
├── screenshots/
└── README.md
```

---

## What I Found Difficult (JavaScript)

While building the HTML layout and styling it with external CSS felt straightforward, **JavaScript was the most challenging part of this project**:

- **Connecting JS to the DOM:** Remembering how `document.getElementById()` and `document.querySelectorAll()` work—and why we need to wrap code in `DOMContentLoaded` so the script doesn't run before the HTML finishes loading.
- **Sharing one `main.js` file across multiple pages:** At first, code meant for one page (like the appointment form or product filter) would cause errors on other pages where those elements didn't exist. Learning to check `if (element)` before adding an `addEventListener` fixed this.
- **Form handling and `preventDefault()`:** Stopping the browser from reloading the page when submitting the appointment form so I could validate the inputs and show a confirmation message directly on the page.
- **Dynamic updates:** Writing the logic for filtering product cards using `data-category` attributes, toggling text/classes on the RSVP and bio buttons, and calculating days/hours/minutes/seconds for the live event countdown using `setInterval`.

---

## Screenshots

Project screenshots are stored in the [`screenshots/`](screenshots/) folder:

- ![Screenshot 1](screenshots/Screenshot%20From%202026-11-13%2018-07-01.png)
- ![Screenshot 2](screenshots/Screenshot%20From%202026-11-14%2008-39-52.png)
- ![Screenshot 3](screenshots/Screenshot%20From%202026-11-14%2008-40-21.png)
- ![Screenshot 4](screenshots/Screenshot%20From%202026-11-14%2008-40-36.png)
- ![Screenshot 5](screenshots/Screenshot%20From%202026-11-14%2008-40-57.png)
- ![Screenshot 6](screenshots/Screenshot%20From%202026-11-14%2008-41-07.png)
- ![Screenshot 7](screenshots/Screenshot%20From%202026-11-14%2008-41-23.png)
- ![Screenshot 8](screenshots/Screenshot%20From%202026-11-14%2008-41-35.png)
- ![Screenshot 9](screenshots/Screenshot%20From%202026-11-14%2008-47-43.png)
- ![Screenshot 10](screenshots/Screenshot%20From%202026-11-14%2009-39-50.png)
- ![Screenshot 11](screenshots/Screenshot%20From%202026-11-14%2009-40-01.png)
- ![Screenshot 12](screenshots/Screenshot%20From%202026-11-14%2009-40-10.png)
- ![Screenshot 13](screenshots/Screenshot%20From%202026-11-14%2009-40-21.png)
- ![Screenshot 14](screenshots/Screenshot%20From%202026-11-14%2009-40-30.png)

---

## How to View the Website

Open `index.html` directly in any web browser, or run a local server from the project directory:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.


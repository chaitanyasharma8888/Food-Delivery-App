🍔 Food Delivery App (React + Parcel + Vercel)
A responsive Food Delivery Website Clone built with React, Parcel, and Tailwind CSS, featuring dynamic search, cart management, and interactive UI components. Deployed on Vercel.

Live Demo
*** -----Note: Enable CORS extension for seamless API requests during development.-----***

🚀 Features
1. Home Page
Header: Navigation links (Home, About, Contact, Grocery, Cart) + Login button.

Dynamic Search:

Filter restaurants by name using the search bar.

"Top Rated" button to filter restaurants (rating > 4.5).

"Show All" button appears after filtering to reset the view.

Restaurant Cards:

Display name, price, cuisine, and rating.

Click any card to expand a custom accordion showing menu items.

Add items to cart directly from the accordion.

2. Cart Page
View all added items with a "Clear All" button to empty the cart.

3. About Us
Static content about the app.

4. Contact Us
Submit a form (name + message) to see a temporary confirmation card (disappears after 2 seconds).

5. Grocery Page
Placeholder message: "Our online Grocery Store will coming soon .... Thanks for patience".

⚙️ Tech Stack
Frontend: React (Functional Components)

Bundler: Parcel

Styling: Tailwind CSS

State Management:

Context API (Cart, User Input)

Redux Toolkit (Restaurant Data)

Testing: Jest + React Testing Library (Unit Tests)

Deployment: Vercel
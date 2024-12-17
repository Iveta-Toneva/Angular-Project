# Angular-Project : Caricatures SPA

This project was generated using Angular CLI version 19.0.1 and Softuni-Practice server for the backend.

# How to Run 

To start a local development server go to the application folder, open the terminal and run :
```
npm install
ng serve
```
 Once the server is running, open your browser and navigate to http://localhost:4200/


To build the Softuni-Practice server,go to the server folder and run the following commands in the terminal:
```
npm install
npm run client
npm run build
node index.js
```

Once the server is running, you should receive the following message :
Server started on port 3030. You can make requests to http://localhost:3030/

# Overview

The Caricatures SPA is a single-page application (SPA) designed for users to explore, order, and interact with caricatures. Logged-in users can view a catalogue, view detailed information about each caricature, make custom orders, edit and delete their own orders, like caricatures, and they have a profile page. Guests can browse the caricature catalogue and view detailed information about each caricature.

# Security
The application utilizes route guards to protect specific areas. The guests can't reach order's page, add order's page, profile page, edit page. The logged in users can't reach the login and register pages.


# Custom Design: 
All HTML and CSS for this project were written from scratch by me.

# Screenshots

Catalouge page:


<img width="1708" alt="Screenshot 2024-12-11 at 17 08 22" src="https://github.com/user-attachments/assets/96956cca-af26-435b-bd2c-4948945b9d51" />

Details page:


<img width="1650" alt="Screenshot 2024-12-11 at 17 08 54" src="https://github.com/user-attachments/assets/ed584a39-6557-4c9b-b1e5-72c434f3ccf9" />

Orders page:


<img width="1693" alt="Screenshot 2024-12-11 at 17 09 10" src="https://github.com/user-attachments/assets/ab6fbec0-4e50-4f35-bfe3-55669070f6a4" />






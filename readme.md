# Project 04: Full Stack Application using MERN stack

## Bootleg Bill's 
> *Unofficial Audio Rarities*


## Overview
Bootleg Bill's is an e-commerce site for niche mixed tape cassettes with music from movies and tv, video games and original work. Using REACT on the frontend, Bootleg Bill's allows you to sign up as either a buyer or a seller. Buyers can browse the shop, see details about specific products, add items to the cart, go to checkout to complete their order and see a list and the status of their past orders. Sellers can access a dashboard enabling them to add, edit or delete products from the inventory as well as monitor all orders and edit their status.

### Technical Requirements Satisfied:
- A working, full stack SPA utilising the MERN stack hosted on heroku
- Interactive front end which communicates with the backend via AJAX calls
- Token based authentication that allows user to sign up, log in and log out
- Authorisation controlled access to completing checkout and viewing the dashboard. Navigation changes in response to authorisation.
- Additional functionality for logged in users with seller status


### Technologies Used
- React
- HTML and CSS
- React Bootstrap 
- JavaScript 
- Node.js
- Express
- Mongo DB/Mongoose
- Git/GitHub
- Figma
- Trello

### Team Members
- Ailish McLaughlin - [GitHub](https://github.com/ailishmcl) | [LinkedIn](www.linkedin.com/in/ailish-mclaughlin)
- Chris Ailey - [GitHub]() | [LinkedIn]()
- Christopher Carey - [GitHub]() | [LinkedIn]()

### Process
Planning:
We dedicated a lot of time to planning; we felt it important to dial in on getting the vision aligned in order to maximise efficieny once we started coding. We created a user flow, ERDs and wireframes to assist with this and then translated the broad plan in to detailed user stories, icebox and MVPs, in order to create a clear plan for moving forward. 
###### Trello
![Trello board screenshot picture](/project-04-fe/public/trelloboard.png) (https://trello.com/b/qJ5YXS7L/project-four)
###### ERD (Entity Relationship Diagrams)
![ERD screenshot picture](/project-04-fe/public/ERD.png)
###### User Flow
![Wireframes pictures screenshot](/project-04-fe/public/userflow.png)
###### Wireframes
![Wireframes pictures screenshot](/project-04-fe/public/wireframe1.png)
![Wireframes pictures screenshot](/project-04-fe/public/wireframe2.png)
![Wireframes pictures screenshot](/project-04-fe/public/wireframe3.png)
![Wireframes pictures screenshot](/project-04-fe/public/wireframe4.png)
![Wireframes pictures screenshot](/project-04-fe/public/wireframe5.png)

### Key Features
- Responsive design for different screen sizes and/or mobile viewports
- Ability to add one or multiple items to cart and edit their quantity/delete with the cart icon in the nav bar responding appropriately
- Top 3 most popular products are displayed in a responsive carousel on the homepage to pique buyer interest and maximise user experience
- Seller dashboard which enables CRUD operations on the products and the order status

### Deployed application link
(Heroku App)[https://bootlegbills.herokuapp.com/index]

### Challenges
- One of the biggest challenges was ensuring we were aligned as a group on the vision and maintaining good communication and regular code merging to ensure we were working as efficiently as possible towards the end goal 
- It was challenging to figure out how to save entries to the database without filling in a form, such as for the cart and the order form. Paring it back by holding the cart information in a state in the time between adding to cart and going to checkout was the way we figured out how to work around this but has lots of downsides such as loss of cart items/data/information in the case of a page refresh or loss of connection
- 

### Features to be added in the future
- Storing cart data on the local storage so that it wouldn't be erased by a page refresh or loss of connection
- Cart should empty upon placing an order
- A search function for searching products in the shop as well as for searching orders by reference number on the seller dashboard
- Add a filter for viewing different types of orders in the seller dashboard
- A community forum/review page where users can leave reviews on products and discuss retro music etc.


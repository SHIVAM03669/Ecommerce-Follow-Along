# Ecommerce-Follow-Along  


## Project Overview

**Milestone 1**

We will use the MERN Stack, a JavaScript-based technology stack (MongoDB, Express.js, React.js, Node.js) for building full-stack web applications, simplifying development for beginners.

We will implement an API structure that enables client-server communication using HTTP methods. For example:

- **User Authentication**: Register and log in users.
- **Product Management**: Add, update, and retrieve product data.
- **Order Handling**: Manage customer orders, with all data exchanged in JSON format.
- **Database Schema Design**: Defines data structure and relationships in MongoDB to organize and optimize data storage.

### Authentication Role:
Verifies user identity to secure sensitive actions like purchases and viewing orders.

At the end of this milestone, we will create an eCommerce website.

---

**Milestone 2 Overview**

In this milestone, I have successfully implemented the following key features for the eCommerce project:

- **Project Folder Structure**: I have organized the project files by separating the frontend and backend directories, ensuring a clean and manageable structure for the application.
  
- **React Frontend Setup**: I initialized a React application to build the user interface, laying the groundwork for further UI development.

- **Node.js Backend Setup**: I set up a simple Node.js server to handle the backend processes, preparing it for future API integration.

- **Tailwind CSS Configuration**: I integrated and configured Tailwind CSS, which enables modern, responsive, and utility-based styling for the website, enhancing the overall look and feel of the UI.

- **Login Page Development**: I developed the first user interface of the e-commerce application, focusing on both functionality (user authentication) and styling (using Tailwind CSS for a sleek, responsive design).

With these features in place, the foundation for a fully functioning e-commerce site is well established. I can now proceed to integrate more complex features in the upcoming milestones.

---

 Milestone 3 Overview

In this milestone, I have successfully implemented the following key features for the backend project:

### Backend Folder Structure
I have meticulously organized the backend project files by creating a well-defined hierarchy. This includes separating essential components such as routes, controllers, models, and middleware. This structure not only ensures a clean and manageable codebase but also lays the foundation for scaling the application as new features are added. Additionally, I have started understanding terms like *utils* and *middlewares*, which play an integral role in backend development.

### Node.js Server Setup
To handle API requests efficiently, I set up a Node.js server using Express. The server has been configured to listen on a designated port, ensuring smooth communication between the client and server. This setup serves as the backbone for managing backend processes and acts as a gateway for future API integrations. 

### MongoDB Integration
I successfully integrated MongoDB into the project, enabling efficient and reliable data storage. The integration process included setting up a connection between the server and the database, which has been thoroughly tested and confirmed. This step ensures that the application can handle data management seamlessly, paving the way for robust CRUD operations.

### Error Handling Implementation
Recognizing the importance of a resilient application, I implemented basic error-handling mechanisms. These include providing clear error messages that enhance the debugging process and offer better user feedback. The error handling setup not only improves the reliability of the application but also makes it more developer-friendly for future troubleshooting and enhancements.

### Additional Notes
Throughout this milestone, I have followed best practices to ensure that the backend code remains modular and maintainable. By adhering to a structured approach, I have set a solid groundwork that will support the development of more advanced features in subsequent milestones. This milestone also served as an opportunity to enhance my understanding of backend architecture and the integration of modern tools like MongoDB.

---

**Milestone 4 Overview**

In this milestone, I have successfully implemented the following key features to enhance the backend functionality of the application:

- **User Model Creation**: Designed a User Model as a blueprint for storing user data in the database. This includes defining fields such as:
  - Name
  - Email
  - Password
  
  The model ensures a structured approach to managing user information within the database.

- **User Controller Development**: Set up a User Controller to manage user-related operations, including:
  - Adding new users to the database.
  - Retrieving user information as required.
  - Managing other user-specific interactions.

- **File Upload Configuration with Multer**: Configured Multer to enable file uploads within the application. This includes:
  - Allowing users to upload files, such as profile pictures.
  - Storing these files efficiently in the backend.
  - Ensuring secure and organized file management.

- **README Update**: Updated the README file to document the key milestones and progress. This includes details about the User Model, Controller setup, and file upload functionality.

### Key Concepts Covered:

1. **Model**: Defined as a blueprint for the data structure, the User Model leverages MongoDB schemas to map out user information like a detailed plan.

2. **Controller**: Acts as the "manager" for handling user data operations, ensuring smooth interaction between the user and the backend system.

3. **File Uploads with Multer**: Implemented Multer to handle file uploads, allowing users to upload and manage files, such as images, securely and efficiently.

With these features in place, the backend is now well-equipped to manage user data and support file uploads. This milestone establishes a strong foundation for further backend development and integration.

---


**Milestone 5 Overview**

In this milestone, I have successfully implemented the following key features for the user sign-up process in the application:

- **Frontend Sign-Up Page Design**: I created a clean and user-friendly Sign-Up Page using HTML and CSS, ensuring an intuitive experience for users registering for the application.

- **Form Fields and User Inputs**: The form includes fields for essential user details:
  - Name
  - Email
  - Password
  
  These fields are designed to capture the necessary information required for account creation.

- **Form Validation**: I implemented form validation to ensure the following:
  - The email field accepts only correctly formatted email addresses.
  - The password meets specific security criteria, such as a minimum length.
  
  This step helps maintain data integrity and ensures that only valid information is sent to the backend.

- **Routing for Sign-Up**: I set up the necessary routes to handle user sign-up requests. This includes:
  - Configuring the frontend to send user input data to the server.
  - Preparing the backend to process and validate incoming data.

- **README Update**: I updated the README file to document the work accomplished in this milestone. This includes details about the Sign-Up Page design, form validation implementation, and routing setup.

With these features in place, the Sign-Up process is now functional and ready for further enhancements or integration with the backend system. This milestone lays a strong foundation for building a robust user authentication system in the upcoming milestones.

---



**Milestone 6 Overview**  

In this milestone, we will focus on enhancing the backend functionality of the signup process. Specifically, we’ll implement a secure endpoint to handle user registration while ensuring sensitive information is protected.  

This involves encrypting user passwords and storing the complete user data in the database with the highest security standards. By the end of this milestone, you will have a robust backend foundation to securely handle user data.  

### Learning Goals   

By completing this milestone, we will:  
- **Understand Password Encryption**: Learn how to hash and securely store passwords.  
- **Implement Secure User Data Storage**: Manage user details, ensuring the password is protected during storage.  

### Why Encrypt Passwords?  

- **Protect User Data**: Safeguard passwords in case of database breaches.  
- **Ensure Privacy**: Prevent unauthorized access to user credentials.  
- **Achieve Compliance**: Adhere to security regulations like GDPR and PCI-DSS.  
- **Stop Password Theft**: Make passwords harder to steal or guess.  

### Steps for Milestone 6   

**1. Encrypt Passwords:**  
- Use **bcrypt** to hash user passwords during signup.  
- Store the hashed password in the database instead of plain text.  

**2. Store User Data Securely:**  
- Save user details (e.g., name, email, etc.) while keeping the password encrypted.  
- Ensure database schema adheres to security best practices.  

By the end of this milestone, we will have a secure backend capable of managing user registrations effectively, setting the stage for building a safe and reliable application.  

---  


**Milestone 7 Overview**

In this milestone, we will focus on implementing secure login authentication for users. We’ll learn how to validate user credentials and ensure that passwords are stored securely by comparing encrypted passwords during the login process. By the end of this milestone, you will have a solid foundation for handling user login securely.

**Learning Goals**  
By the end of this milestone, you will:  
- Understand how to validate user credentials during login.  
- Learn how to compare the encrypted password with the user’s input.

**Why Encrypting Passwords?**  
- **Protect User Data**: Keeps passwords safe even if the database is compromised.  
- **Privacy**: Ensures passwords aren't stored in plain text.  
- **Compliance**: Meets security standards like GDPR and PCI-DSS.  
- **Prevents Password Theft**: Hashed passwords are difficult to decipher, increasing security.

**How Login Authentication Works**  
- **User Enters Credentials**:  
  The user provides their email/username and password on the login page.  

- **Fetch User Data from Database**:  
  The backend retrieves the user record based on the provided email/username. If the user is not found, return an error: "User does not exist."

- **Compare Encrypted Passwords**:  
  Process the user's input password using the same hashing algorithm (e.g., bcrypt). Compare the resulting hash to the stored hashed password. If they match, the user is authenticated; if not, send an error.

**Steps for Milestone 7**

1. **Create Login Endpoint**:  
   - Accept user credentials (email/username and password).  
   - Retrieve the corresponding user from the database.

2. **Validate Password**:  
   - Use bcrypt to hash the entered password.  
   - Compare it with the stored hashed password for authentication.

---



**Milestone 8 Overview**

In this milestone, we will focus on creating a reusable card component that will help display product details effectively on the homepage. By the end of this milestone, you will have learned how to design a dynamic card component that can be used across multiple pages or sections of the app to enhance the user experience.

**Learning Goals**  
By the end of this milestone, you will:  
- Learn how to create a card component.  
- Learn how to display those cards on the products page.

**Why Create Card Components?**  
- **Showcase Products Effectively**: Presents product details in a clear and visually appealing way.  
- **Reusable Design**: Can be used across multiple pages or sections of the app.  
- **Improved User Experience**: Makes it easy for users to browse and interact with products.  
- **Organized Layout**: Keeps the homepage clean and structured.

**How to Display a Single Card for Multiple Products?**  
- **Create a Dynamic Component**: Design a single card component that accepts product details as props.  
- **Use Mapping**: Use array mapping to iterate over the product list and render a card for each product.  
- **Pass Data Dynamically**: Pass unique product information (e.g., name, price, image) to each card.  
- **Maintain Consistency**: Ensure the layout remains uniform for all products.

**Steps for Milestone 8**

1. **Create the Card Component**:
   - Design a reusable card component with props for product details (e.g., name, image, price).
   
2. **Design the Homepage Layout**:  
   - Set up a grid layout or flexbox for displaying multiple cards neatly.

---


**Milestone 9 Overview**

In this milestone, we will create a frontend **Product Input Form** that allows users to submit detailed product information, including multiple images. By the end of this milestone, you'll understand how to design and implement a form that can handle structured product data effectively.

---

## **Learning Goals**

By the end of this milestone, you will:  
- Learn how to create a form that collects all product details.  
- Understand how to accept multiple images as input.  

---

## **Why Create a Product Input Form?**

1. **Collect Comprehensive Product Data:** Gather all necessary details, such as product name, price, description, and images.  
2. **Save Data to the Database:** Ensure the input is stored for display on the product homepage.  
3. **Extend Functionality:** Lay the foundation for additional features, such as admin access or user roles, to control who can upload products.  

---

## **How Does the Product Form Work?**

1. **Input Fields:**  
   - Add text fields for product name, description, price, and category.  
   - Include an image upload field to handle multiple images.  

2. **Data Validation:**  
   - Validate the form inputs to ensure accurate and complete data.  

3. **Submit and Save:**  
   - On submission, the data will be saved to the database.  

4. **Integration with Homepage:**  
   - The submitted product details will appear on the product homepage we created in the previous milestone.  

---

## **Steps for Milestone 9**

### **1. Create the Product Input Form**  
   - Design a form with fields for:  
     - Product Name  
     - Product Description  
     - Product Price  
     - Product Category  
     - Multiple Image Upload  

### **2. Handle Image Input**  
   - Enable the form to accept and preview multiple images before submission.  

### **3. Optional Features (Experiment & Expand)**  
   - **Admin Access:** Restrict form access so only admins can upload products.  
   - **Shop Profiles:** Allow only users with shop profiles to add products.  

---


## Milestone 10 Overview  

In this milestone, we will create a **Mongoose schema for products** and build an **API endpoint** to store product details in MongoDB. By the end, you’ll understand how to define and validate product data efficiently.  

### Learning Goals   
By the end of this milestone, you will:  
 Learn how to write a **product schema** using Mongoose.  
 Create an **API endpoint** to validate and store product details in MongoDB.  

### Why Create a Product Schema?  
A well-defined schema ensures **structured and consistent** product data storage, including:  
- **Product Name**  
- **Description**  
- **Price**  
- **Image URL**  
- **Other attributes as needed**  

### Why Validation Matters?  
Validation helps:  
- **Maintain data integrity** by enforcing required fields and correct data types.  
- **Prevent errors** by ensuring only valid data is saved in the database.  

### How Does the Product API Work?  
#### 1️ Define the Product Schema  
- Structure product data with necessary fields.  
- Apply validation (e.g., required fields, correct data types).  

#### 2️ Build the API Endpoint  
- Create a **POST** route to accept product details.  
- Validate incoming data before saving it to MongoDB.  

#### 3️ Save and Manage Products  
- Store validated product details in the database.  
- Extend functionality with optional features like admin control.  

### Optional Features (Experiment & Expand)  
🔹 **Admin Access**: Restrict product uploads to admins only.  
🔹 **Shop Profiles**: Allow only users with a shop profile to add products.  

This milestone lays the foundation for handling product data efficiently , and you are encouraged to expand by adding authentication, authorization, and more!.
---

## Milestone 11 Overview  

In this milestone, we will make our **home page dynamic** by displaying all the products stored in MongoDB. We'll create an **API endpoint** to fetch product data and render it dynamically on the frontend using the previously created **Product Card** component.  

### Learning Goals   
By the end of this milestone, you will:  
 Learn how to **write an API endpoint** to extract and send product data from MongoDB.  
 Understand how to **fetch data on the frontend** and display it dynamically.  
 Use the **Product Card component** to render product details dynamically.  

### Steps for Milestone 11 📝  

#### 1️ Create a Backend Endpoint  
- Write an API endpoint that retrieves all stored products from MongoDB.  
- Send the data to the frontend in JSON format.  

#### 2️ Fetch Data in the Frontend  
- Implement a function to call the API and retrieve product details.  
- Handle the API response and store the product data.  

#### 3️ Display Products Dynamically  
- Pass the fetched data to the **Product Card** component.  
- Render each product dynamically on the homepage.  

### Why This Matters?  
This milestone helps you understand **how to send and receive data** between the backend and frontend while ensuring a smooth, dynamic user experience.  


This milestone sets the foundation for **building a fully functional product listing page**—get ready to bring your products to life!

---
## Milestone 12 Overview  

In this milestone, we will create a **My Products page** that displays only the products **added by the logged-in user** based on their email. We'll build an **API endpoint** to filter products by email and render them dynamically on the frontend using the **Product Card** component.  

### Learning Goals   
By the end of this milestone, you will:  
 Learn how to **write an API endpoint** that filters products by the user’s email.  
 Understand how to **fetch and display user-specific products** on the frontend.  
 Use the **Product Card component** to dynamically render filtered products.  

### Steps for Milestone 12   

#### 1️ Create a Backend Endpoint  
- Write an API endpoint that **retrieves only the products added by the logged-in user**.  
- Filter products based on the **user’s email** stored in MongoDB.  

#### 2️ Fetch Data in the Frontend  
- Implement a function to **call the API** and retrieve **only the logged-in user’s products**.  
- Handle the response and store the filtered data.  

#### 3️ Display Products Dynamically  
- Pass the fetched data to the **Product Card** component.  
- Render only the **user’s products** dynamically on the **My Products page**.  

### Why This Matters?  
This milestone teaches you **how to filter data based on specific constraints** and send only relevant information to the client, improving efficiency and user experience.  

Now, it's time to **build a personalized product page!**

---

## Milestone 13 Overview  

In this milestone, we will **add functionality to edit uploaded products**. We'll implement an **Edit button** on the Product Card and create a **backend endpoint** to update product details in MongoDB.  

### Learning Goals   
By the end of this milestone, you will:  
 Learn how to **write an API endpoint** to update existing product data in MongoDB.  
 Understand how to **auto-fill a form with existing product details** for editing.  
 Enable users to **modify and save changes** to their uploaded products.  

### Steps for Milestone 13 📝  

#### 1️ Create a Backend Update Endpoint  
- Write an API endpoint that **receives updated product data**.  
- Find the existing product in MongoDB and **update its details**.  

#### 2️ Add an Edit Button in the Frontend  
- Display an **Edit** button on each **Product Card**.  
- When clicked, send the **product data to the form**.  

#### 3️ Auto-Fill the Form & Allow Edits  
- Populate the form with the **existing product details**.  
- Allow users to **modify the fields** and submit the changes.  

### Why This Matters?  
This milestone helps you understand **how to perform update operations** efficiently, ensuring users can modify their products without re-uploading everything.  

Now, let’s **bring editing functionality to life!**

---

## Milestone 14 Overview  

In this milestone, we will **add a Delete button** to remove products from the database. We'll create a **backend endpoint** that deletes a product using its **unique ID** in MongoDB.  

### Learning Goals   
By the end of this milestone, you will:  
 Learn how to **write an API endpoint** to delete a product by its ID.  
 Understand how to **trigger the delete operation** from the frontend.  

### Steps for Milestone 14 📝  

#### 1️ Create a Backend Delete Endpoint  
- Write an API endpoint that **deletes a product from MongoDB** using its unique ID.  

#### 2️ Add a Delete Button in the Frontend  
- Display a **Delete button** on each **Product Card**.  
- When clicked, send the **product ID to the backend**.  

#### 3️ Handle the Deletion Process  
- Ensure the product is **removed from MongoDB**.  
- Update the UI to **reflect the changes dynamically**.  

### Why This Matters?  
This milestone teaches you **how to perform delete operations** in MongoDB, ensuring users can remove unwanted products efficiently.  

Now, let's implement **the delete functionality!**

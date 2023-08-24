
# The Knowledge Society

## 1. Project Goals
The purpose of this project is to create a Django Rest Framework API for The Knowledge Society Web App. The design and creation of the API takes into consideration future compatibility for native app.

The Knowledge Society book club is a web application to create an engaging platform where book lovers can share and comment their favorite books, fostering a vibrant community of avid readers. The application aims to provide a seamless and interactive experience for members to discover new books and expand their knowledge and literary horizons. By facilitating meaningful interactions and promoting a love for reading, The Knowledge Society aims to create a supportive and inclusive environment that encourages intellectual growth and fosters a lifelong passion for books.

The primary goals of the web app are to:

Design an engaging web application with interactive user interfaces using HTML, CSS, and advanced JavaScript (React), focusing on organizing components effectively and separating different concerns. For more information.

Describe the crucial role played by specialist Front-End developers in modern software development and delivery processes, highlighting their expertise in creating user-friendly and visually appealing interfaces.

Develop an Application Programming Interface (API) in the current repository that can be utilized by third-party applications, enabling seamless integration and data exchange.

Build distinct and customized models that cater to the specific needs and requirements of the application, ensuring uniqueness and efficiency in data representation.

Construct an engaging Front-End application that utilizes data from an API, allowing users to interact with and manipulate the information in an interactive and meaningful manner.

## 2. Technologies I've used
- React JS
- React Bootstrap
- React Router

## 3. User stories
###  3.1 Home
As a site user, I want to be able to publish or update posts.

###  3.2 Create Post
As a site user, I want to be able to create a post to publish on the blog. 

###  3.3 Update Post
As a site user, I want to be able to edit a post and make changes to its fields. 

###  3.4 Delete Post
As a site user, I want to be able to delete a post so that it no longer appears on the blog. 

## 4. Design Structure
### 4.1 Font
Google Monserrat Font was chosen with to be used across the entire site.

### 4.2 Colors
| Use           | Hex     | Color                                                    |
| ------------- | ------- | -------------------------------------------------------- |
| Background    | #f8f9fa | ![#f8f9fa](https://via.placeholder.com/10/f8f9fa?text=+) |
| Cards         | #fff    | ![#fff](https://via.placeholder.com/10/fff?text=+)       |
| NavBar        | #343a40 | ![#343a40](https://via.placeholder.com/10/343a40?text=+) |
| Footer        | #424649 | ![#424649](https://via.placeholder.com/10/424649?text=+) |
| Btn Primary   | #6c757d | ![#6c757d](https://via.placeholder.com/10/6c757d?text=+) |
| Inputs        | #ccc    | ![#ccc](https://via.placeholder.com/10/ccc?text=+)       |

### 4.3 Navigation
- A Navbar was created on top of the page for easy user navigation through the web app.
- Add, Edit/Update are straightforward forms that allow users the use the features with ease.


## 5. Example of Reusable React Components: Notification Component
###  5.1 Purpose
The Notification component serves as a visual cue for notifying users about certain events, such as successful actions or errors. It was created to enhance user feedback and improve the overall user experience by providing immediate and contextually relevant information.

###  5.2 Usage
The Notification component is integrated across the application to display messages related to actions performed by users. These messages include, but are not limited to, post creation, update success and delete notifications.

###  5.3 Implementation
The component is built using React functional components and leverages context management to communicate and display notifications throughout the application. By using context, the Notification component can be easily consumed by other components without needing to pass down notification messages as props.

## 5.4 Example of how the Notification component is consumed
```javascript
import React from "react";
import { useNotification } from "../context/NotificationContext";
import classes from "./notification.module.css";

const Notification = () => {
  const { notification } = useNotification();

  return (
    <div>
      {notification && <p className={classes["notification"]}>{notification}</p>}
    </div>
  );
};

export default Notification;
```

## 5.4 Styling
The Notification component's appearance is controlled through CSS modules. This allows for encapsulated and scoped styling to prevent any unintended effects on other parts of the application. The CSS module defines the appearance of the notification container and the message text. The styling can be easily adjusted to match the application's design preferences.

## 5.4 Example of the CSS module (notification.module.css):
```css
/* notification.module.css */

.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
```

## 6. Results
[Link to the project](https://secret-front-0474d6a815cf.herokuapp.com/)

### 6.1 [Home](https://secret-front-0474d6a815cf.herokuapp.com/)

### 6.2 [Create Post](https://secret-front-0474d6a815cf.herokuapp.com/post/create)

### 6.3 [Update Post](https://secret-front-0474d6a815cf.herokuapp.com/post/edit/7)

### 6.4 [Delete Post](https://secret-front-0474d6a815cf.herokuapp.com/)


## 7. Testing
### 7.1 API Endpoints Testing
- I verify that all API endpoints are working correctly and returning the expected responses.
- Each endpoint was tested with different HTTP methods (GET, POST, PUT, DELETE) to ensure proper functionality.

### 7.2 Data Integrity Testing
I verify the integrity of data stored in the database by performing CRUD (Create, Read, Update, Delete) operations through the API.
I checked that data is saved correctly, updated accurately, and deleted successfully.
I checked that data retrieval is returned for different scenarios.

### 7.3 Lighthouse report
- Home page. [Result](https://github.com/David-Angel-M/docum-pp5/blob/main/01_Test.JPG)

### 7.4 WAVE Webaim Accessibility testing
The WAVE tool was used to test all pages on the app. Due to empty social links some common errors were found repeatedly over each tested page, those were:

- Home page WAVE [Result](https://wave.webaim.org/report#/https://secret-front-0474d6a815cf.herokuapp.com/)
- Login page WAVE [Result](https://wave.webaim.org/report#/https://secret-front-0474d6a815cf.herokuapp.com/login)
- Register page WAVE [Result](https://wave.webaim.org/report#/https://secret-front-0474d6a815cf.herokuapp.com/register)

### 7.5 CSS Validator results
I use https://jigsaw.w3.org/css-validator/validator.html.en option Validate by direct input the style.css. [Result](https://github.com/David-Angel-M/docum-pp5/blob/main/02_Test_CSS.JPG)

### 7.6 HTML Validation
I use https://validator.w3.org/ option Validate by URI to test html. [Result](https://github.com/David-Angel-M/docum-pp5/blob/main/03_Test_HTML.JPG)

### 7.7 Manual Testing
During the manual testing phase, I examined the user inputs and functionality of the website. My objective was to compare the feedback and results obtained from testing against the expected outcomes. Any unexpected outputs or outcomes encountered were promptly addressed and resolved.

- Field Validation Test [Result](https://)
- Create Post Test [Result](https://github.com/David-Angel-M/docum-pp5/blob/main/05_Create_Post.JPG)
- Update Post Test [Result](https://github.com/David-Angel-M/docum-pp5/blob/main/04_Update_Test.JPG)
- Delete Post Test [Result](https://github.com/David-Angel-M/docum-pp5/blob/main/06_Delete_Post.JPG)

Desktop Testing:
I thoroughly tested all aspects of the site on Chrome and Safari browser, and I am pleased to report that everything functions flawlessly. Pages load swiftly, and all features, including CRUD operations, user authentication (login/logout), register process, post addition work without any issues.

Mobile Testing:
I conducted a thorough testing on three different mobile devices: Apple iPhone 11, Samsung S20FE, and Samsung S7 tablet. The website showcased excellent responsiveness and adaptability across various devices. The site performed seamlessly on Apple's Safari browser as well.

## 8. Deployment
The site was deployed using Heroku, by following the steps found in the tutorials and guidelines of CodeInstitute’s material:

- Using my Heroku account
- Create a new app whilst logged in
- Connect my GitHub repository via "Connect to GitHub" option in Heroku
- Enable either "Automatic Deploy"

## 9. Credits and references
- Stackoverflow.
- Student Care.
- Slack Community.
- W3Schools.
- Family and Friends.

## 10. Acknowledgements
This was created for my PP5 Project for the Full Stack Developer program with Code Institute.
DAVID ANGEL, 2022/2023

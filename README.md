# User Profiles App (Beginner)

This is a single-page React application that fetches and displays user data from a public API. It's built as the first part of a two-assignment series, focusing on foundational React concepts.

## Features

- **API Integration**: Fetches an array of 10 user objects from `https://jsonplaceholder.typicode.com/users`.
- **Dynamic Avatars**: Generates unique user avatars using the DiceBear API based on each user's username.
- **Loading State**: Displays a loading indicator while the data is being fetched.
- **Component-based Structure**: Uses a `UserCard` component to render each individual profile, demonstrating the use of props and component reusability.
- **Styling**: Styled using Bootstrap for a clean and simple layout.

## Technologies Used

- **ReactJS**: For building the user interface.
- **JavaScript (ES6+)**: For core application logic.
- **HTML & CSS**: For structure and basic styling.
- **Bootstrap 4.5.2**: For responsive layout and component styling.

## How to Run Locally

Follow these steps to get a copy of the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd user-profiles-basic
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```

The application will open in your browser at `http://localhost:3000`.

## Demo

A live demo of this project is available [here](user-profiles-basic-9p62f3q0z-arun-reddys-projects.vercel.app).

---

### **Option 2: README for Assignment 2 (Advanced)**

This README is for the more complex version of the app, which uses Ant Design and includes advanced features like a responsive grid and a modal for editing user data.

```markdown
# User Profiles App (Advanced)

This is the advanced version of the user profiles application. It builds upon the first assignment by introducing a more robust UI library (Ant Design), a responsive layout, and a functional modal for editing user information.

## Features

- **All features from the Beginner Assignment**, including API fetching, dynamic avatars, and a loading state.
- **Modern UI**: Uses **Ant Design** components for a professional and polished look.
- **Responsive Design**: The user card grid adapts seamlessly to different screen sizes (mobile, tablet, desktop) using Ant Design's `<Row>` and `<Col>` components.
- **User Editing**: A functional "Edit" button on each card opens a modal.
- **"Lifting State Up"**: The modal's form data is managed by the parent `App` component, demonstrating how to update state across multiple components.
- **Delete Functionality**: Includes a "Delete" button to remove a user from the list.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Ant Design**: A powerful UI library for a polished, responsive user interface.
- **JavaScript (ES6+)**: For all application logic.

## How to Run Locally

Follow these steps to get a copy of the project up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd user-profiles-advanced
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```

The application will open in your browser at `http://localhost:3000`.

## Demo

A live demo of this project is available [here](https://user-profiles-advanced-demo-link.vercel.app/).

---

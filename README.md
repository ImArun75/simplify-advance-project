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



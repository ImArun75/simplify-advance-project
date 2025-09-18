### Assignment 2 (Advanced)**

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


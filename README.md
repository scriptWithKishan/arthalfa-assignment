# Text Manager

A simple yet powerful text management application that allows users to replace text, count words and characters, and toggle between dark and light modes. Additionally, the app provides real-time feedback through toast notifications and supports clipboard copying functionality.

## Features

- **Word and Character Count**: View the total number of words, unique words, and characters in your text.
- **Case-Sensitive Text Replacement**: Replace text based on exact case-sensitive matches.
- **Dark Mode/Light Mode Toggle**: Switch between light and dark themes.
- **Text Highlighting**: Replaced words are highlighted for visual clarity.
- **Real-Time Toast Notifications**: Success or error messages are displayed during actions like replacing text.
- **Copy to Clipboard**: Copy the entire text to your clipboard with a single click.

## Bonus Features

- **Case-Sensitive Replacement**: If the search term does not match the case of the text exactly, a toast notification will inform the user that no case-sensitive match was found.
- **Clipboard Copy**: Quickly copy the text to the clipboard by clicking the "Copy to Clipboard" button.
- **Toast Notifications**: Success and error messages provide real-time feedback to the user.

## Prerequisites

To run this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/text-manager.git

   ```

2. Navigate to the project directory:

   ```bash
   cd text-manager

   ```

3. Install the required dependencies:

   ````bash
   npm install

   Or if you're using yarn:

   ```bash
   yarn install
   ````

## Running the Project

1. Start the development server:

   ```bash
   npm start

   ```

2. Or with yarn:

   ```bash
   yarn start

   ```

3. Open your browser and navigate to http://localhost:3000 to view the app.

## Usage

- Type or paste text into the text area.
- Use the search and replace fields to find and replace words (case-sensitive).
- Click the "Replace" button to replace the words.
- Toggle between dark mode and light mode using the button at the top.
- View the word, unique word, and character count in the stats section.
- Copy the text to your clipboard by clicking the "Copy to Clipboard" button.

## Technologies Used

- React: For building the user interface.
- React Icons: For the light and dark mode icons.
- React Toastify: For real-time notifications.
- React Copy-to-Clipboard: To copy text to the clipboard.
- CSS: For styling the application.

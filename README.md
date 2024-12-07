# **Aspire4Hire**

---

## 🚀 **Features**

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Component Documentation:** Storybook configured for easy visualization and
  testing of components.
- **Package Manager:** npm

---

## 🛠️ **Prerequisites**

Ensure you have the following installed:

- **Node.js** (Recommended minimum version: 16.x).
- **npm**, included with Node.js.

---

## ⚙️ **Installation & Setup**

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd aspire4hire
   ```

3. Install the dependencies using npm:

   ```bash
   npm install --force
   ```

4. Once installation is complete, you can run the project in development mode:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server at `http://localhost:3000`.

---

## 📚 **Running Storybook**

Storybook has been configured to allow you to view and test components in
isolation.

1. To start Storybook, run:

   ```bash
   npm run storybook
   ```

2. Once Storybook is running, you can view it in your browser at
   `http://localhost:6006`.

---

## 📝 **Project Structure**

- **`src/`**: Contains all the route files for your application.
- **`components/`**: Stores reusable UI components.
- **`storybook/`**: Storybook configuration and stories.

---

## 💡 **Additional Notes**

- If you run into issues with dependencies, try deleting the `node_modules`
  folder and running `npm install` again.
- Make sure to check the browser's developer console for any potential warnings
  or errors during development.

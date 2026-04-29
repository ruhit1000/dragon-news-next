# Dragon News Next

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-Enabled-47A248?style=flat&logo=mongodb)
![Better Auth](https://img.shields.io/badge/Auth-Better_Auth-purple?style=flat)

Dragon News Next is a modern, fast, and responsive news portal web application. Built with the latest Next.js App Router, it provides dynamic news categorization, user authentication, and interactive layouts.

**Live Demo:** [Dragon News](https://your-live-link-here.com)

## 🚀 Technologies Used

**Core specific:**
*   **Framework:** [Next.js (v16.2)](https://nextjs.org/) using the App Router.
*   **UI Library:** [React (v19.2)](https://react.dev/) with React Compiler enabled.

**Styling & UI Components:**
*   [Tailwind CSS (v4)](https://tailwindcss.com/) for utility-first styling.
*   [DaisyUI](https://daisyui.com/) & [HeroUI](https://heroui.com/) for beautiful, pre-built, semantic UI components.
*   [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee) for the breaking news ticker.
*   [React Icons](https://react-icons.github.io/react-icons/) for scalable vector icons.
*   [React Spinners](https://www.npmjs.com/package/react-spinners) and [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) for user feedback and loading states.

**Database & Authentication:**
*   **Database:** [MongoDB](https://www.mongodb.com/) via the official Node.js driver.
*   **Authentication:** [Better Auth](https://better-auth.com/) using the `@better-auth/mongo-adapter`.

**Forms & Utilities:**
*   [React Hook Form](https://react-hook-form.com/) for performant, flexible, and extensible forms.
*   [Date-fns](https://date-fns.org/) for modern JavaScript date utility processing.

## 🔐 Authentication System

The application relies on **Better Auth**, which is configured as the main Identity and Access Management solution connected directly to the MongoDB database. 

**Features:**
1.  **Email & Password:** Native credential-based signup/login logic is enabled.
2.  **Social Providers (SSO):**
    *   **Google:** Users can sign in with their Google accounts.
    *   **GitHub:** Users can authenticate via their GitHub profiles.
3.  **Database Strategy:** Adapts straight to MongoDB (`dragon-news` database) to safely store user sessions, accounts, and profile data, making the system highly scalable and decoupled from the application server.

Authentication API routes are dynamically handled via `src/app/api/auth/[...all]/route.js` catching all auth-related endpoints securely.

## 📁 Project Structure

*   `/src/app`: Contains the App Router segments (`(main)`, `(auth)`, `api`), layouts, pages, and dynamic routing (e.g., `/news/[id]`, `/category/[id]`). 
*   `/src/components`: Reusable UI pieces divided into logical segments (`Homepage`, `shared`, `ui`).
*   `/src/lib`: Core utility functions, configurations, and Singletons (e.g., `auth.js`, `auth-client.js`, data-fetching utilities).
*   `/src/assets`: Static assets, images, and brand identifiers.

## 🛠️ Getting Started

### Prerequisites
*   Node.js (18.17 or later)
*   MongoDB Instance (Local or Atlas)
*   OAuth App Credentials for Google and GitHub (if using Social Logins)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/dragon-news-next.git
    cd dragon-news-next
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Environment Variables:
    Create a `.env` or `.env.local` file in the root directory and add the following keys:
    ```env
    MONGO_URI=your_mongodb_connection_string
    
    # Better Auth Setup
    BETTER_AUTH_SECRET=your_random_secret_string
    BETTER_AUTH_URL=http://localhost:3000

    # Social Logins (Optional, based on your auth.js configuration)
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    ```

4.  Start the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

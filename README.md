## About Intervue

**Intervue** is a comprehensive platform designed to enhance interview preparation through a variety of innovative features. Users can engage in mock interviews tailored to their specific needs, allowing them to practice different interview styles, including behavioral and technical formats. The platform provides valuable feedback after each session, enabling users to identify their strengths and areas for improvement. 

With flexible scheduling options, candidates can set up interviews at their convenience, ensuring that practice fits seamlessly into their busy lives. Intervue also offers various subscription plans, including a free option, making it accessible for everyone. In addition, users can access resources and tools for self-assessment, further supporting their journey toward mastering interview skills. 

Overall, Intervue is designed to empower candidates and boost their confidence as they prepare for real-world interviews.

For more detailed information about Intervue's features, you can visit their [official website](https://intervue-nine.vercel.app/).

# 📁 File Structure
```
📦 Intervue
├── .gitignore
├── components.json
├── drizzle.config.js
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.jsx
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   │           └── page.jsx
│   ├── dashboard/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── how/
│   │   │   └── page.jsx
│   │   ├── interview/
│   │   │   └── [interviewId]/
│   │   │       ├── page.jsx
│   │   │       ├── feedback/
│   │   │       │   └── page.jsx
│   │   │       └── start/
│   │   │           ├── page.jsx
│   │   │           └── _components/
│   │   │               ├── QuestionsSection.jsx
│   │   │               └── RecordAnsSection.jsx
│   │   ├── questions/
│   │   │   └── page.jsx
│   │   ├── upgrade/
│   │   │   └── page.jsx
│   │   └── _components/
│   │       ├── AddNewInterview.jsx
│   │       ├── Header.jsx
│   │       ├── InterviewItemCard.jsx
│   │       └── InterviewList.jsx
│   └── fonts/
│       ├── GeistMonoVF.woff
│       └── GeistVF.woff
├── components/
│   └── ui/
│       ├── button.jsx
│       ├── collapsible.jsx
│       ├── dialog.jsx
│       ├── input.jsx
│       ├── sonner.jsx
│       └── textarea.jsx
├── lib/
│   └── utils.js
├── public/
│   ├── bg-image.jsx
│   ├── icon1.svg
│   ├── icon2.svg
│   ├── icon3.svg
│   ├── logo.svg
│   ├── webc.png
│   └── assets/
│       └── back.jpg
└── utils/
    ├── db.js
    ├── GeminiAIModel.js
    ├── planData.jsx
    └── schema.js
```


# 📦 Installation
- **Clone the Repository**: Clone the repository to your local machine using the following command:
  ```bash
   git clone https://github.com/your-username/intervue.git
  ```
- **Navigate into the project directory**: To navigate into the project directory, use the command:

  ```bash
   cd intervue
  ```
- **Install the required dependencies**: Install all necessary libraries and packages required to run the project.
  ```bash
   npm install
  ```
- **Start the development server**: Finally, run the application to start the service.
  ```bash
   npm run dev
  ```
# 🛠 Tech Stack

- **Frontend:** 
  -  🌐 [Next.js](https://nextjs.org/) - A React framework for server-rendered applications.
  - 🌊  [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.
  - ⚛️ [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

- **Backend:**
  - 🌲Node.js - JavaScript runtime for server-side development.
  - ⚙️ Express.js - A minimal and flexible Node.js web application framework.

- **Database:**
  - 🔮 NeonDB - A PostgreSQL database for storing user data and application state.

- **Other Technologies:**
  - 🚀 [Vercel](https://vercel.com/) - For deploying the Next.js application.
  -  🌧️ [Drizzle ORM](https://orm.drizzle.team/) - For interacting with the database.

# ✨ Contributors

- **[Bhavesh Shukla](https://github.com/bhavesh932003)** - Project Lead and Developer
- **Additional contributors** are welcome! Please feel free to submit pull requests or open issues.

# 🌐 Website

You can check out the live version of the application at [Intervue](https://intervue-nine.vercel.app/).

# 📚 Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)

For further assistance or questions, feel free to reach out to the contributors.

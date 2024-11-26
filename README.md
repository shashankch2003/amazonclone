 Amazon Clone - Full Stack Project

### Overview
This project is an **Amazon Clone** built using **React** for the frontend, **Firebase** for backend services such as authentication and database, and **Stripe** for payment integration. The project mimics key features of an e-commerce platform like Amazon, including user registration, product browsing, shopping cart functionality, and secure checkout with payment processing.

### Tech Stack
- **Frontend**: React
- **Backend Services**: Firebase (Authentication, Firestore Database)
- **Payment Gateway**: Stripe
- **Deployment**: Firebase Hosting

---

### Features
1. **User Authentication**:
   - Users can register and log in using Firebase Authentication.
   - Password-based and Google OAuth sign-in options are supported.

2. **Product Listings**:
   - Display a list of products fetched from a Firebase Firestore database.
   - Each product has details such as image, price, description, and reviews.

3. **Shopping Cart**:
   - Users can add items to their shopping cart and manage quantities.
   - Cart persists across sessions for logged-in users.

4. **Checkout Process**:
   - Integrated with **Stripe** for secure and seamless payment processing.
   - Users can input their card details and complete transactions via Stripe.

5. **Order History**:
   - After successful payment, orders are stored in Firebase, and users can view their order history.
   
6. **Responsive Design**:
   - The application is fully responsive, providing a seamless experience on both desktop and mobile devices.

---

### Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/amazon-clone.git
   cd amazon-clone
   ```

2. **Install Dependencies**:
   Run the following command to install all the necessary packages:
   ```bash
   npm install
   ```

3. **Set Up Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firebase Authentication** and **Firestore**.
   - Copy your Firebase config credentials and paste them into your React project (`src/firebase.js`):
   ```javascript
   import firebase from "firebase/app";
   import "firebase/auth";
   import "firebase/firestore";

   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();

   export { db, auth };
   ```

4. **Set Up Stripe**:
   - Create a Stripe account at [Stripe](https://stripe.com).
   - Generate a Stripe publishable key from the Stripe dashboard.
   - Add the publishable key in your React app (`src/Payment.js`):
   ```javascript
   const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
   ```

5. **Running the Project**:
   - Start the development server:
   ```bash
   npm start
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

### Deployment

1. **Firebase Hosting**:
   - Run the following commands to deploy the project on Firebase Hosting:
   ```bash
   firebase login
   firebase init
   firebase deploy
   ```

   Make sure to select **Hosting** and follow the prompts to set up Firebase hosting. After deployment, your project will be accessible via a unique Firebase URL.

---

### Folder Structure
```
amazon-clone/
│
├── public/             # Public assets (index.html, favicon, etc.)
│
├── src/
│   ├── components/     # React components (Header, Product, Checkout, etc.)
│   ├── Payment.js      # Stripe integration and payment processing
│   ├── firebase.js     # Firebase configuration and setup
│   ├── App.js          # Main app component with routing logic
│   └── index.js        # Entry point of the React app
│
├── .firebaserc         # Firebase project configuration
├── firebase.json       # Firebase deployment settings
├── package.json        # Node.js dependencies and scripts
├── .env                # Environment variables (Stripe keys, Firebase config)
└── README.md           # Project documentation (this file)
```

---

### Important Notes
- **Stripe Test Mode**: While in development, use [Stripe's test card numbers](https://stripe.com/docs/testing) for testing payments.
- **Security**: Do not expose your Firebase and Stripe keys in public repositories. Use environment variables for sensitive data in production.
- **Database Rules**: Ensure that your Firestore security rules are properly set up to prevent unauthorized access.

---

### Future Enhancements
- Add product reviews and ratings.
- Integrate real-time chat support.
- Implement a recommendation system for products.


# 💱 Currency Converter

A modern and responsive currency converter built with React and Vite.
This project demonstrates **custom React hooks**, **reusable components**, and **session-based caching** for an efficient user experience.

---

## 📖 Description

The Currency Converter allows users to convert between different currencies using real-time exchange rates from exchangerate.host API.
It serves as a comprehensive learning project focused on mastering:

- Creating **custom hooks** to encapsulate API logic and caching
- Building **reusable UI components** with proper prop handling
- Managing API requests and state efficiently in React
- Implementing **session-based caching** to minimize API calls
- Using environment variables securely in Vite

Whether you're new to hooks or looking to better organize your React components, this project demonstrates modern best practices.

---

## ✨ Features

- 🔁 **Real-time currency conversion** with live exchange rates
- 🌐 **Dynamic selection** of base and target currencies (180+ currencies supported)
- � **Swap functionality** to quickly reverse conversion direction
- 💾 **Session-based caching** - API called only once per browser session
- 🎨 **Beautiful UI** with backdrop blur and background image
- 📱 **Responsive design** optimized for all screen sizes
- ⚡ **Fast loading** with Vite build tool
- 🔒 **Secure API key management** using environment variables

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or v22.12.0+)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/lavish-agrwl/currency-convertor.git
   cd currency-convertor
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Copy the `.env.example` file to `.env` (if available)
   - Add your exchangerate.host API key:

   ```env
   VITE_CURRENCY_API_KEY=your_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

---

## 🏗️ Project Structure

```
src/
├── components/
│   └── CurrencyCard.jsx      # Reusable currency input/output component
├── hooks/
│   └── useCurrency.js        # Custom hook for API calls and caching
├── assets/
│   └── backgroundImage.png   # Background image for the app
├── App.jsx                   # Main application component
├── main.jsx                  # React app entry point
└── index.css                 # Global styles (Tailwind CSS)
```

---

## 🔧 Technologies Used

- **React 19** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **exchangerate.host API** - Real-time currency exchange rates
- **Session Storage** - Browser caching for API responses

---

## 📚 Key Learning Points

### Custom Hooks

- `useCurrency` hook demonstrates API data fetching with caching
- Encapsulates complex logic away from UI components
- Provides reusable data fetching across the application

### Component Reusability

- `CurrencyCard` component is used for both input and output
- Props-based configuration for different use cases
- Clean separation of concerns

### Performance Optimization

- Session-based caching prevents redundant API calls
- Efficient state management with React hooks
- Optimized bundle size with Vite

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact

**Lavish Agarwal** - [@lavish-agrwl](https://github.com/lavish-agrwl)

Project Link: [https://github.com/lavish-agrwl/currency-convertor](https://github.com/lavish-agrwl/currency-convertor)

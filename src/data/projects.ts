export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  screenshot: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Trading Simulator",
    description:
      "Historical trading practice platform where users simulate trades on real OHLC data with LLM-powered coaching and performance tracking.",
    tech: ["Python", "Streamlit", "Groq", "yfinance", "SQLite"],
    liveUrl: "https://tradingsimulatordev.up.railway.app/",
    githubUrl: "https://github.com/marcelljonathan/Trading-Simulator-with-LLM",
    screenshot: "/screenshots/trading.png",
    featured: true,
  },
  {
    id: 2,
    title: "DailyFX Update",
    description:
      "Automated currency exchange rate pipeline tracking 20 major currency pairs and crosses with daily gainers, losers, and alerts.",
    tech: ["Python", "SQLite", "Frankfurter API", "Schedule"],
    liveUrl: "https://dailyfx-update-2525.up.railway.app/",
    githubUrl: "https://github.com/marcelljonathan/DailyFX-Update",
    screenshot: "/screenshots/dailyfx.png",
    featured: true,
  },
  {
    id: 3,
    title: "CryptoScope",
    description:
      "Real-time cryptocurrency intelligence dashboard tracking top 5 coins with live prices, 90-day charts, RSI/MA50 technical analysis, and news from CoinDesk and CoinTelegraph.",
    tech: ["Python", "Streamlit", "Plotly", "CoinGecko API"],
    liveUrl: "https://crypto-scope-e6sfae8tmjwtk8vhotkchj.streamlit.app/",
    githubUrl: "https://github.com/marcelljonathan/Crypto-Scope",
    screenshot: "/screenshots/cryptoscope.png",
    featured: false,
  },
  {
    id: 4,
    title: "E-Commerce Sales Dashboard",
    description:
      "Interactive sales analytics dashboard exploring 100,000+ orders through dynamic filters and real-time visualizations.",
    tech: ["Python", "Streamlit", "Plotly", "Pandas"],
    liveUrl: "https://ecommerce-sales-dashboard-2mcaftt5vch58qzx9uups6.streamlit.app/",
    githubUrl: "https://github.com/marcelljonathan/Ecommerce-Sales-Dashboard",
    screenshot: "/screenshots/ecommerce.png",
    featured: false,
  },
];

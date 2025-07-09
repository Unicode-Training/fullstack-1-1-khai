import "../styles/global.css";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Products } from "./Products";
import config from "../config.json";
import image from "../images/1045.jpg";
const { app_name, page_limit } = config;
export const App = () => {
  return `
  ${Header()}
  <h1 class="text-[red] text-3xl font-bold italic underline">Học lập trình khó</h1>
  ${Button()}
  ${Products()}
  <p>AppName: ${app_name}</p>
  <p>PageLimit: ${page_limit}</p>
  <p>Server API: ${import.meta.env.VITE_SERVER_API}</p>
  <p>Google Client ID: ${import.meta.env.VITE_GOOGLE_CLIENT_ID}</p>
  <p>Google Client Secret: ${import.meta.env.VITE_GOOGLE_CLIENT_SECRET}</p>
  <div><img src="${image}" alt="" width="400"/></div>
  <div>
    <img src="/images/vite.svg" />
  </div>
  ${Footer()}
  `;
};

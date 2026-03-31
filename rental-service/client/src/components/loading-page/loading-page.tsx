import {JSX} from "react";

import './loading-page.css';

export default function LoadingPage(): JSX.Element {
  return (
    <div className="loading-page">
      <div className="spinner"></div>
      <p className="loading-text">Загрузка...</p>
    </div>
  );
}

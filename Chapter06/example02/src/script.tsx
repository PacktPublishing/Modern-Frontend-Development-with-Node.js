import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import App from './App';

const root = createRoot(document.querySelector('#app')!);
root.render(<App />);

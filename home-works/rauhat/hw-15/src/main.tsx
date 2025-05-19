import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/providers/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<ThemeProvider defaultTheme="dark" storageKey="ui-theme">
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</ThemeProvider>
		</StrictMode>,
)

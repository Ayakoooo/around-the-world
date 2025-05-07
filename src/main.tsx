import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./shared/ScrollToTop.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ScrollToTop />
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
);

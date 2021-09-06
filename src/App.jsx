import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalFetchingSpinner from "./components/GlobalFetchingSpinner";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/partials/Navigation";
import PageNotFound from "./pages/PageNotFound";
import CharactersPage from "./pages/CharactersPage";
import PlanetsPage from "./pages/PlanetsPage";
import FilmsPage from "./pages/FilmsPage";
import StarshipsPage from "./pages/StarshipsPage";
import SpeciesPage from "./pages/SpeciesPage";

function App() {
	return (
		<>
			<Navigation />

			<div id="App">
				<GlobalFetchingSpinner />

				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route path="/characters">
						<CharactersPage />
					</Route>

					<Route path="/planets">
						<PlanetsPage />
					</Route>

					<Route path="/films">
						<FilmsPage />
					</Route>

					<Route path="/starships">
						<StarshipsPage />
					</Route>

					<Route path="/species">
						<SpeciesPage />
					</Route>

					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getPlanets } from "../services/SWAPI";
import PageButtons from "../components/PageButtons/";

const PlanetsPage = () => {
	const [page, setPage] = useState(1);
	const { data, error, isError, isFetching, isLoading, isPreviousData } =
		useQuery(["planets", page], () => getPlanets(page), {
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		});

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container className="py-3">
			<h1>planets</h1>

			<div>
				{isLoading && <p className="my-3">Loading planets...</p>}

				{isError && (
					<p className="my-3">
						Sorry, tried to get planets but no stamps found ({error}
						)
					</p>
				)}

				{data?.results.results && (
					<>
						{data.results.results.map((planet, i) => (
							<Card key={i}>
								<div className="card-body">
									<h5 className="card-title">
										{planet.name}
									</h5>
									<h6 className="card-subtitle mb-2 text-muted"></h6>
									<p className="card-text"></p>
									<a href="#" className="card-link">
										More info
									</a>
								</div>
							</Card>
						))}
					</>
				)}

				<div className="pagination d-flex justify-content-between align-items-center mt-4">
					<Button
						onClick={() =>
							setPage((currentPage) =>
								Math.max(currentPage - 1, 1)
							)
						}
						disabled={page === 1}
					>
						Previous Page
					</Button>

					<span>Current Page: {page}</span>

					<Button
						onClick={() => {
							if (!isPreviousData && data.results.next) {
								setPage((currentPage) => currentPage + 1);
							}
						}}
						// Disable the Next Page button until we know a next page is available
						disabled={isPreviousData || !data?.results.next}
					>
						Next Page
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default PlanetsPage;

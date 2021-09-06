import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { useHistory } from "react-router";
import { getCharacters } from "../services/SWAPI";

const CharactersPage = () => {
	const [page, setPage] = useState(1);
	const history = useHistory();
	const { data, error, isError, isFetching, isLoading, isPreviousData } =
		useQuery(["characters", page], () => getCharacters(page), {
			staleTime: 1000 * 60 * 5, // 5 mins
			cacheTime: 1000 * 60 * 30, // 30 mins
			keepPreviousData: true, // keep previous data
		});

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container className="py-3">
			<h1>Characters</h1>

			<div>
				{isLoading && <p className="my-3">Loading characters...</p>}

				{isError && (
					<p className="my-3">
						Sorry, tried to get characters but no stamps found (
						{error})
					</p>
				)}

				{data?.results.results && (
					<>
						{data.results.results.map((character, i) => (
							<Card key={i}>
								<div className="card-body">
									<h5 className="card-title">
										{character.name}
									</h5>
									<h6 className="card-subtitle mb-2 text-muted"></h6>
									<p className="card-text"></p>
									<Button
										onClick={() => {
											history.push(
												`/person/${character.url.replace(
													"https://swapi.dev/api/people/",
													""
												)}`
											);
										}}
									>
										More info
									</Button>
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

export default CharactersPage;

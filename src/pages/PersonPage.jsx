import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getPerson } from "../services/SWAPI";

const CharactersPage = () => {
	const { data, error, isError, isFetching, isLoading } = useQuery(
		["characters"],
		() => getPerson()
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container className="py-3">
			{isLoading && <p className="my-3">Loading person...</p>}

			{isError && (
				<p className="my-3">
					Sorry, tried to get person but no stamps found ({error})
				</p>
			)}

			{data?.results.results && (
				<>
					{data.results.results((character) => (
						<Card>
							<div className="card-body">
								<h5 className="card-title">{character.name}</h5>
								<h6 className="card-subtitle mb-2 text-muted"></h6>
								<p className="card-text"></p>
							</div>
						</Card>
					))}
				</>
			)}
		</Container>
	);
};

export default CharactersPage;

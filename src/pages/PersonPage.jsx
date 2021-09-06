import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPerson } from "../services/SWAPI";

const PersonPage = () => {
	const { id } = useParams();
	const { data, error, isError, isFetching, isLoading } = useQuery(
		["person", id],
		() => getPerson(id)
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

			{data?.results && (
				<Card>
					<h1 className="card-header">{data.results.name}</h1>
					<div class="card-body">
						<h3 className="card-text">
							Gender: {data.results.gender}
						</h3>
						<p className="h3">Height: {data.results.height}cm</p>
						<p className="h3">
							Hair-color: {data.results.hair_color}
						</p>
					</div>
				</Card>
			)}
		</Container>
	);
};

export default PersonPage;

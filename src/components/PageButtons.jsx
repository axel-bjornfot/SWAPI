import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const PageButtons = (props) => {
	const [page, setPage] = useState(1);
	return (
		<div className="pagination d-flex justify-content-between align-items-center mt-4">
			<Button
				onClick={(props) =>
					setPage((currentPage) => Math.max(currentPage - 1, 1))
				}
				disabled={page === 1}
			>
				Previous Page
			</Button>

			<span>Current Page: {page}</span>

			<Button
				onClick={() => {
					if (!isPreviousData && props.data.results.next) {
						setPage((currentPage) => currentPage + 1);
					}
				}}
				// Disable the Next Page button until we know a next page is available
				disabled={isPreviousData || !data?.results.next}
			>
				Next Page
			</Button>
		</div>
	);
};

export default PageButtons;

import { FC } from "react";
import { Button } from "@mui/material";
import { useRouteError, useNavigate } from "react-router-dom";


const ErrorPage: FC = () => {
	const error = useRouteError() as any;
	const navigate = useNavigate();

	console.error(error);
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<Button color="info" onClick={() => navigate('/ciphers')}>Return to Ciphers</Button>
		</div>
	)
}

export default ErrorPage
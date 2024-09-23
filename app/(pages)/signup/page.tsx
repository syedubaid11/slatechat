"use client"

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
export default function Page() {
	const router = useRouter();

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formElement = e.target as HTMLFormElement;
		const response = await fetch(formElement.action, {
			method: formElement.method,
			body: JSON.stringify(Object.fromEntries(new FormData(formElement).entries())),
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (response.ok) {
			router.push("/");
		}
	}

	return (
		<>
			<h1>Create an account</h1>
			<form method="post" action="/api/signup" onSubmit={onSubmit}>
				<label htmlFor="username">Username</label>
				<input name="username" id="username" />
				<br />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<br />
				<button>Continue</button>
			</form>
		</>
	);
}
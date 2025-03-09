import { getRandomNumbers } from "./random-numbers";

export default async function LabPage() {
	let storedMatchData = null;

	if (typeof window !== "undefined") {
		const cachedData = localStorage.getItem("storedMatchData");
		if (cachedData) {
			storedMatchData = JSON.parse(cachedData);
		}
	}

	const values = await getRandomNumbers();

	return (
		<div>
			<h1>WebR</h1>
			<div>
				{values.map((n, idx) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<p key={idx}>{n}</p>
				))}
			</div>
			{storedMatchData && (
				<div>
					<h2>Stored Match Data</h2>
					<p>{JSON.stringify(storedMatchData)}</p>
				</div>
			)}
		</div>
	);
}

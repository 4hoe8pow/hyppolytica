import type { MatchEventWithSystemData } from "@/app/components/schemas";

export const createMatchEvent = (
	id: number,
	raiderId: string,
	isSuccess: boolean,
	defeatedDefenderIds: string[],
	revivedDefenderIds: string[],
	raiderName = "",
	gained = 0,
	lost = 0,
	hasBonusPoints = false,
	tacklerName = "",
): MatchEventWithSystemData => ({
	id,
	raiderId,
	isSuccess,
	defeatedDefenderIds,
	revivedDefenderIds,
	hasBonusPoints,
	resultCategory: undefined,
	tackleBy: undefined,
	timeSpentInRaid: 0,
	raiderName,
	raiderHeight: 0,
	raiderWeight: 0,
	raiderTeamName: "",
	gained,
	lost,
	defeatedDefenders: defeatedDefenderIds.map((id) => ({
		id,
		playerName: "",
		height: 0,
		weight: 0,
		jerseyNumber: 0,
	})),
	revivedDefenders: revivedDefenderIds.map((id) => ({
		id,
		playerName: "",
		height: 0,
		weight: 0,
		jerseyNumber: 0,
	})),
	raiderJerseyNumber: 0,
	tacklerName,
	tacklerHeight: 0,
	tacklerWeight: 0,
	tacklerJerseyNumber: 0,
});

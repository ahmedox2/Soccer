export interface PlayerStates {
    id: string;
    goals: string;
    assists: string;
    minutesPlayed:string;
    matches: string;
    season: string;
    xg: string;
    xa:string;
    shots: string;
    shotsOnTarget: string;
    shootingAccuracyPct:string;
    bigChancesMissed:string;
    headedGoals:string;
    passes:string;
    accurateLongBalls:string;
    crossAccuracyPct:string;
    tackles:string;
    tackleSuccessPct:string;
    interceptions:string;
    recoveries:string;
    duelsWon:string;
    duelsLost:string;
    aerialBattlesWon:string;
    aerialBattlesLost:string;
    fouls:string;
    yellowCards:string;
    redCards:string;
    ownGoals:string;
    wins:string;
    losses:string;
    cleanSheets:string;
    goalsConceded:string;
    savesPer90:string;
    saves:string;
    penaltiesSaved:string;
    bigChancesCreated:string;
    goals_Assists:string;
    total_Contributions:string;
    minutes_per_Goal:string;
    minutes_per_Assist:string;
    predictedGoals:string;
    predictedAssists:string;
    totalPredictedContributions:string;
}

export interface Player {
  id:       number;
  name:     string;
  photoUrl: null;
  position: string;
  clubId:   number;
  club:     Club;
}

export interface Club {
  id:      number;
  name:    string;
  country: string;
  logo:    string;
  players: null[];
}

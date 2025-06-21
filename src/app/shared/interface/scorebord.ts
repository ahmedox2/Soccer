export interface Scorebord {
  id:             number;
  clubId:         number;
  club:           Club;
  played:         number;
  wins:           number;
  draws:          number;
  losses:         number;
  goalsFor:       number;
  goalsAgainst:   number;
  goalDifference: number;
  points:         number;
  position:       number;
  season:         number;
}

export interface Club {
  id:      number;
  name:    string;
  country: Country;
  logo:    string;
  players: null;
}

export enum Country {
  England = "England",
}

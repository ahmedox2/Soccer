export interface Scorebord {
  filters:     Filters;
  area:        Area;
  competition: Competition;
  season:      Season;
  standings:   Standing[];
}

export interface Area {
  id:   number;
  name: string;
  code: string;
  flag: string;
}

export interface Competition {
  id:     number;
  name:   string;
  code:   string;
  type:   string;
  emblem: string;
}

export interface Filters {
  season: string;
}

export interface Season {
  id:              number;
  startDate:       Date;
  endDate:         Date;
  currentMatchday: number;
  winner:          null;
}

export interface Standing {
  stage: string;
  type:  string;
  group: null;
  table: Table[];
}

export interface Table {
  position:       number;
  team:           Team;
  playedGames:    number;
  form:           null;
  won:            number;
  draw:           number;
  lost:           number;
  points:         number;
  goalsFor:       number;
  goalsAgainst:   number;
  goalDifference: number;
}

export interface Team {
  id:        number;
  name:      string;
  shortName: string;
  tla:       string;
  crest:     string;
}

export interface Clubs {
  id:      number;
  name:    string;
  country: Country;
  logo:    string;
  players: Player[];
}

export enum Country {
  England = "England",
}

export interface Player {
  id:       number;
  name:     string;
  photoUrl: null;
  position: Position;
  clubId:   number;
}

export enum Position {
  Def = "DEF",
  Fwd = "FWD",
  Gkp = "GKP",
  Mid = "MID",
}

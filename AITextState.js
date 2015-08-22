class AITextState {
  var HeaderText[];
  var CrewText[];
  var ShipText[];
  var PowerRoomText[];
  var CrewRoomText[];
  var ShipSystemFields[];

  void AITextState(header[], crew[], ship[], powerroom[], crewroom[], shipsystem[]) {
    HeaderText = header[];
    CrewText = crew[];
    ShipText = ship[];
    PowerRoomText = powerroom[];
    CrewRoomText = crewroom[];
    ShipSystemText = shipsystem;
  }

  function getHeader() {
    return HeaderText[];
  }

  function getCrew() {
    return CrewText[];
  }

  function getShip() {
    return ShipText[];
  }

  function getPowerRoom() {
    return PowerRoomText[];
  }

  function getCrewRoom() {
    return CrewRoomText[];
  }

  function getShipSystem() {
    return ShipSystemFields[];
  }
}

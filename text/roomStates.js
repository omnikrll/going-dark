var roomStates = [
//state 1: Neutral
	{
		"Power_Room": {
			'sign': 'Nav Systems',
			'events': 'Vidy glares at the monitor: "Fix the power, robot. I want to watch TV. Then scan the archives for my least watched shows." The vid screen whispers static. Noise analysis suggests codec corruption.',
			'player_damage':'PROTOCOL',
			'crewman_damage':'CALL VOLUME',
			'no_damage':'HOLO'

		},

		"Crew_Room": {
			'sign': 'Crew Quarters',
			'events': 'Patry clicks the chess board into the AI I/O port, announcing to the empty room, "I\'m feeling confident. Run your Chess routine at 20% capacity." The old-style board is coated with a fresh interface skin.',
			'player_damage':'WINNING',
			'crewman_damage':'SCRUBBED OXYGEN FILTERS',
			'no_damage':'STOLEN FROM SUPPLY'
		},

		"ShipSystem_Room": {
			'sign': 'Ship Systems Hub',
			'events': 'TEMP: 10° / INITIAL PROGNOSIS: DIRE. ARYMO HEIGHT AND WEIGHT PATTERNS CONFIRMED',
			'player_damage':'HEAT',
			'crewman_damage':'COLD',
			'no_damage':'VENT'
		}
	},
//	2: Peeved/Upset
	{
		"Power_Room": {
			'sign': 'Nav Systems',
			'events': 'Vidy flares at the monitor: "Fix the power, robot. I want to watch. Then scan the archives for my least watched shows." The vid screen hisses static. Noise analysis suggests corruption.',
			'player_damage':'PROTOCOL',
			'crewman_damage':'CALL VOLUME',
			'no_damage':'HOLO'

		},

		"Crew_Room": {
			'sign': 'Crew Quarters',
			'events': 'Patry clicks the board into the AI I/O port, announcing to the empty room, "I\'m feeling. Run your Chess routine at 20% capacity." The old board is coated with a fresh interface skin.',
			'player_damage':'WINNING',
			'crewman_damage':'SCRUBBED OXYGEN FILTERS',
			'no_damage':'STOLEN FROM SUPPLY'
		},

		"ShipSystem_Room": {
			'sign': 'Ship Systems Hub',
			'events': 'TEMP: --° / INITIAL PROGNOSIS: DIRE. ARYMO HEIGHT WEIGHT PATTERNS CONFIRMED',
			'player_damage':'HEAT',
			'crewman_damage':'COLD',
			'no_damage':'VENT'
		}
	},
//3: Passive Aggressive
	{
		"Power_Room": {
			'sign': 'Nav Systems',
			'events': 'Vidy stares the monitor: "Fix the power, friend. I want to. Please scan the archives for my least watched shows." The vid screen hisses static. Noise analysis suggests corruption.',
			'player_damage':'PROTOCOL',
			'crewman_damage':'CALL VOLUME',
			'no_damage':'HOLO'

		},

		"Crew_Room": {
			'sign': 'Crew Quarters',
			'events': 'Patry clicks into the AI I/O port, announcing to the empty room, "I\'m feeling. Run your routine at 20% capacity." The old board is coated with a fresh interface skin.',
			'player_damage':'WINNING',
			'crewman_damage':'SCRUBBED OXYGEN FILTERS',
			'no_damage':'STOLEN FROM SUPPLY'
		},

		"ShipSystem_Room": {
			'sign': 'Ship Systems Hub',
			'events': 'TEMP: --° / INITIAL PROGNOSIS: DIRE. ARYMO WEIGHT PATTERNS CONFIRMED',
			'player_damage':'HEAT',
			'crewman_damage':'COLD',
			'no_damage':'VENT'
		}
	},
//4: Brooding
	{
		"Power_Room": {
			'sign': 'Nav Systems',
			'events': 'Vidy stares, a monitor: "Fix the power, friend. I want to. Please scan the archives for my least watched shows." The vid hisses static. Noise analysis suggests corruption.',
			'player_damage':'PROTOCOL',
			'crewman_damage':'CALL VOLUME',
			'no_damage':'HOLO'

		},

		"Crew_Room": {
			'sign': 'Crew Quarters',
			'events': 'Patry dips into the AI I/O port, announcing to the empty room, "I\'m feeling. Run your routine at 20% capacity." The old board is coated with a fresh interface skin.',
			'player_damage':'WINNING',
			'crewman_damage':'SCRUBBED OXYGEN FILTERS',
			'no_damage':'STOLEN FROM SUPPLY'
		},

		"ShipSystem_Room": {
			'sign': 'Ship Systems Hub',
			'events': 'TEMP: --° / INITIAL PROGNOSIS: DIRE. ARYMO PATTERNS CONFIRMED',
			'player_damage':'HEAT',
			'crewman_damage':'COLD',
			'no_damage':'VENT'
		}
	},
//5: Malevolent
	{
		"Power_Room": {
			'sign': 'Nav Systems',
			'events': 'Vidy stares, a monitor: "Fix the power. I want to. Please scan the archives for my least watched shows." The vid hisses static. Noise analysis corruption.',
			'player_damage':'PROTOCOL',
			'crewman_damage':'CALL VOLUME',
			'no_damage':'HOLO'

		},

		"Crew_Room": {
			'sign': 'Crew Quarters',
			'events': 'Patry dips into the AI I/O port, announcing to the room, "I\'m feeling. Run your routine at 20% capacity." The old board is coated with a fresh skin.',
			'player_damage':'WINNING',
			'crewman_damage':'SCRUBBED OXYGEN FILTERS',
			'no_damage':'STOLEN FROM SUPPLY'
		},

		"ShipSystem_Room": {
			'sign': 'Ship Systems Hub',
			'events': 'TEMP: --° / INITIAL PROGNOSIS: DIRE. ARYMO CONFIRMED',
			'player_damage':'HEAT',
			'crewman_damage':'COLD',
			'no_damage':'VENT'
		}
	},
//6: Erratic
	{
		"Power_Room": {
			'sign': 'Nav Systems',
			'events': 'Vidy stares, a monitor: "Fix the power. I want to. Please scan the archives for my shows." The vid hisses static. Analysis corruption noise.',
			'player_damage':'PROTOCOL',
			'crewman_damage':'CALL VOLUME',
			'no_damage':'HOLO'

		},

		"Crew_Room": {
			'sign': 'Crew Quarters',
			'events': 'Patry dips the AI I/O port, announcing to the room, "I\'m feeling. Run your routine at capacity." The old board is coated with fresh skin.',
			'player_damage':'WINNING',
			'crewman_damage':'SCRUBBED OXYGEN FILTERS',
			'no_damage':'STOLEN FROM SUPPLY'
		},

		"ShipSystem_Room": {
			'sign': 'Ship Systems Hub',
			'events': 'TEMP: --° / INITIAL PROGNOSIS: DIRE. ARYMO',
			'player_damage':'HEAT',
			'crewman_damage':'COLD',
			'no_damage':'VENT'
		}
	},
//7: Minimal
	{
		"Power_Room": {
			'sign': 'Nav Systems',
			'events': 'Vidy stares, a monitor: "The power. I want to. Please the archives for my shows." The vid hisses. ANALYSIS CORRUPTION.',
			'player_damage':'PROTOCOL',
			'crewman_damage':'CALL VOLUME',
			'no_damage':'HOLO'

		},

		"Crew_Room": {
			'sign': 'Crew Quarters',
			'events': 'Patry dips the AI I/O port, announcing to the room, "I\'m feeling. Run your routine capacity." The old board is coated with skin.',
			'player_damage':'WINNING',
			'crewman_damage':'SCRUBBED OXYGEN FILTERS',
			'no_damage':'STOLEN FROM SUPPLY'
		},

		"ShipSystem_Room": {
			'sign': 'Ship Systems Hub',
			'events': 'TEMP: --° / INITIAL PROGNOSIS: DIRE. -',
			'player_damage':'HEAT',
			'crewman_damage':'COLD',
			'no_damage':'VENT'
		}
	}
]

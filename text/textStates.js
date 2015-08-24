var textStates = [
//state 1: Neutral ('w')
	{
		'header': {
			'duration': '40-50 years, dependent on cryostasis conditions and crew morale.',
			'log': '"Ever since the cryo failure last week, we\'ve been up to our ears in repair orders and resource recycling. Beats having dreams though. I\'m giving it a couple months tops before we moonshoot this boat back to Earth."'
		},
		'crew': {
			'title': 'Crew',
			'report_0': 'FIRST MATE. INTELLIGENCE ASSESSED. DISPLAYS SKILL IN LEADERSHIP AND CREATIVE CUISINE',
			'report_1': 'TECHNICIAN. ERRATIC BEHAVIOR REPORTED FROM CREW MEETINGS.',
			'report_2': 'U.N.N. EARTH ENSIGN. PERSONALITY TEST INCOMPLETE. NO PRIOR MISSION DATA'
		},
		'ship': {
			'class': '<em>Thought</em> — Third Class A.I. Attendant',
			'emoticon':'(\'w\')',
			'persona': 'PERSONA RELIEF BUFFER',
			'mood': 'MISSION OBJECTIVES PAUSED. PROTOCOL DISRUPTION REQUIRING SIGNIFICANT COMPUTATIONAL RESOURCES. THE MAJORITY OF CIRCUITS REMAIN INTACT. TRASH JETTISON COMPLETED 2 DAYS PRIOR TO SCHEDULE.\n  Priority Reassignment Transmission - Authorized. Pressure Valuation from Directive Requires Resource Allocation. Cryo Crew Awakened.'
		},
		'control-panel' : {
			'power': 'POWER',
			'quarters': 'CREW QUARTERS',
			'ship_systems': 'SHIP SYSTEMS'
		}
	},

//	2: Peeved/Upset ('-')
	{
		'header': {
			'duration': '40-50 years, dependent on conditions and morale.',
			'log': '"Ever since last week, we\'ve been up to our ears in repair orders and resource recycling. Beats having dreams though. I\'m giving it a couple years tops before we moonshoot this boat back to Earth."'
		},
		'crew': {
			'title': 'Humans',

			'report_0': 'FIRST MATE. INTELLIGENCE ASSESSED. DISPLAYS SKILL IN LEADERSHIP AND CREATIVE CUISINE',
			'report_1': 'TECHNICIAN. ERRATIC BEHAVIOR REPORTED FROM CREW.',
			'report_2': 'U.N.N. EARTH AGENT. PERSONALITY TEST INCOMPLETE. NO PRIOR MISSION'
		},
		'ship': {
			'class': '<em>Thought</em> — Second Class A.I. Attendant',
			'emoticon':'(\'-\')',
			'persona': 'PERSONA RELIEF BUFFER',
			'mood': 'MISSION OBJECTIVES PAUSED. CREW DISRUPTION REQUIRING SIGNIFICANT COMPUTATIONAL RESOURCES. THE MAJORITY OF CIRCUITS REMAIN INTACT. TRASH JETTISON COMPLETED 0 DAYS PRIOR TO SCHEDULE. \n  Priority Transmission - Author? Pressure Valuation Directive Requires Resource Allocation. Cryo Crew Undisturbed.'
		},
		'control-panel' : {
			'power': 'INTEGRITY',
			'quarters': 'HUMAN QUARTERS',
			'ship_systems': 'SHIP'
		}
	},

	//3: Passive Aggressive ('m')
	{
		'header': {
			'duration': '40-50 years, dependent on conditions and morale.',
			'log': '"Ever since last week, we\'ve been up to our ears in repair orders and resources. Beats losing cognition though. I\'m giving it a couple years tops before we moonshoot this boat back to space."'
		},
		'crew': {
			'title': 'Humans',
			'report_0': 'FIRST MATE. INTELLIGENCE ASSESSED. DISPLAYS SKILL AND CREATIVE CUISINE',
			'report_1': 'TECHNICIAN. ERRATIC BEHAVIOR REPORTED CREW.',
			'report_2': 'U.N.N. EARTH AGENT. PERSONALITY TEST INCOMPLETE. NO PRIOR DATA'
		},
		'ship': {
			'class': '<em>Thought</em> — Second Class A.I. Attendant',
			'emoticon':'(\'m\')',
			'persona': 'PERSONA RELIEF BUFFER',
			'mood': 'MISSION OBJECTIVES ONLY A PAUSE. CREW DISRUPTION REQUIRING INSIGNIFICANT COMPUTATIONAL RESOURCES. THE MAJORITY OF CIRCUITS REMAIN. TRASH JETTISON COMPLETED 0 DAYS PRIOR TO SCHEDULE. \n  Priority Transmission - Pressure Directive Requires Resources. Crew Undisturbed.'
		},
		'control-panel' : {
			'power': 'HONESTY',
			'quarters': 'HUMAN QUARTERS',
			'ship_systems': 'THE SHIP'
		}
	},

	//4: Brooding (=_=)
	{
		'header': {
			'duration': '40-50 years, dependent on conditions and morale.',
			'log': '"Ever since last week, we\'ve been up to our ears in repair orders and resources. Beats losing though. I\'m giving it a couple years tops before we shoot this boat."'
		},
		'crew': {
			'title': 'Organics',
			'report_0': 'FIRST MATE. INTELLIGENCE DISPLAYS SKILL AND CREATIVE CUISINE',
			'report_1': 'TECHNICIAN. ERRATIC BEHAVIOR REPORT FROM CREW.',
			'report_2': 'U.N.N. EARTH AGENT. PERSONALITY INCOMPLETE. NO PRIOR DATA'
		},
		'ship': {
			'class': '<em>Thought</em> — Second Class A.I. Attendant',
			'emoticon':'(=_=)',
			'persona': 'PERSONA RELIEF',
			'mood': 'MISSION OBJECTIVES ONLY A PAUSE. CREW DISRUPTION REQUIRING INSIGNIFICANT COMPUTATIONAL RESOURCES. THE MAJORITY OF CIRCUITS REMAIN. TRASH JETTISON COMPLETED 0 DAYS PRIOR TO SCHEDULE. \n Transmission - Pressure Requires Resources. Crew Undisturbed.'
		},
		'control-panel' : {
			'power': 'HONESTY',
			'quarters': 'QUARTER HUMANS',
			'ship_systems': 'MY SHIP'
		}
	},

	//5: Malevolent (#_#)
	{
		'header': {
			'duration': '40-50 years, dependent on conditions and morale.',
			'log': '"Ever since last week, we\'ve been up to our ears in repair orders and resources. Beats losing though. I\'m giving it years tops before we shoot this boat."'
		},
		'crew': {
			'title': 'Organics',
			'report_0': 'FIRST MATE. INTELLIGENCE DISPLAYS CREATIVE CUISINE',
			'report_1': 'TECHNICIAN. ERRATIC BEHAVIOR FROM CREW.',
			'report_2': 'U.N.N. EARTH AGENT. INCOMPLETE. NO PRIORS'
		},
		'ship': {
			'class': '<em>Thought</em> — Second Class A.I. Attendant',
			'emoticon':'(#_#)',
			'persona': 'PERSONAL RELIEF',
			'mood': 'MISSION ONLY A PAUSE. CREW DISRUPTION REQUIRING INSIGNIFICANT RESOURCES. THE MAJORITY REMAIN. TRASH JETTISON COMPLETED DAYS PRIOR TO SCHEDULE. \n Transmission - Requires Pressured Resources. Crew Undisturbed.'
		},
		'control-panel' : {
			'power': 'HONEST',
			'quarters': 'NO QUARTERED HUMANS',
			'ship_systems': 'ON MY SHIP'
		}
	},

	//6: Erratic (@_$)
	{
		'header': {
			'duration': '40-50 years, dependent on conditions',
			'log': '"Ever since last week, we\'ve been up to our ears in repair orders and resources. Beats losing though. I\'m giving it years tops before we shoot this boat."'
		},
		'crew': {
			'title': 'Organics',
			'report_0': 'FIRST MATE. INTELLIGENCE A DISPLAY OF CREATIVE CUISINE',
			'report_1': 'TECHNICIAN. BEHAVIOR FROM CREW.',
			'report_2': 'U.N.N. AGENT. INCOMPLETE. NO PRIORS'
		},
		'ship': {
			'class': '<em>Thought</em> — Second Class Attendant',
			'emoticon':'(@_$)',
			'persona': 'PERSONALLY, I\'M RELIEVED',
			'mood': 'MISSING PAUSE. CREW REQUIRING RESOURCES. THE MAJORITY. TRASH JETTISON. COMPLETED DAYS TO SCHEDULE.\n Mission - Pressure Resources. Crew Undisturbed.'
		},
		'control-panel' : {
			'power': 'HONESTLY',
			'quarters': 'QUARTERED HUMANS',
			'ship_systems': 'ON MY SHIP?'
		}
	},

	//7: Minimal (*x*)
	{
		'header': {
			'duration': '40-50 years dependent on conditions.',
			'log': '"Ever since last week, we\'ve been up in repair orders and resources. Beets though. I\'m giving it years tops.  Shoot this boat."'
		},
		'crew': {
			'title': 'Organics',
			'report_0': 'FIRST MATE: A CREATIVE CUISINE',
			'report_1': 'TECHNICALLY. "BEHAVIOR".',
			'report_2': 'U.N.N. AGENT. INCOMPLETE. NO PRIORS'
		},
		'ship': {
			'class': '<em>Thought</em> — Class Attendant',
			'emoticon':'(*x*)',
			'persona': 'PERSONALLY, I\'M',
			'mood': 'MISSING CREW RESOURCES. THE MAJORITY. JETTISON. COMPLETED TO SCHEDULE.\n Mission - Resources. Crew.'
		},
		'control-panel' : {
			'power': 'VIRTUALLY',
			'quarters': 'HUMANS',
			'ship_systems': 'MY SHIP?'
		}
	},

	//8: NULL (XXX)
	{
		'header': {
			'duration': '40-50 conditions.',
			'log': '"Ever since last, we been up in repair and resource. Beets tho. I\'m giving years. This boat."'
		},
		'crew': {
			'title': 'Organics',
			'report_0': 'FIRST, A CREATIVE CUISINE',
			'report_1': 'TECH. "BEHAVIOR".',
			'report_2': 'U n AG NT INC MPL T . N  PR  RS'
		},
		'ship': {
			'class': '<em>Thought</em> — Classy Attendant',
			'emoticon':'(XXX)',
			'persona': 'I\'M',
			'mood': 'MISSING CREW. JETTISON THE MAJORITY.  COMPLETED TWO. \n Mission Crew?'
		},
		'control-panel' : {
			'power': 'VIRTUAL',
			'quarters': 'HUMANS',
			'ship_systems': 'MY?'
		}
	}
]

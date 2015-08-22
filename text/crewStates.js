var crewStates = [
//state 1: Neutral
	{
		"crew_0": { //Patry Garcia - First Mate
			'damage_dialogue':'ASR Analysis Complete: "[screams] Stupid computer". EQUIPMENT DAMAGE DETECTED...',
			'pause_dialogue': 'ASR Analysis Complete: [hissing static, wet organic sounds]',
			'crewDamaged_response': 'I/O CURRENT SET. 50 AMPS...',
			'nothing_response': 'THREAD IDLE 45000...',
			'playerHurt_response': 'CHESS SUBROUTINE ADMIN OVERCLOCKED. 30000 PLY ANALYSIS...'

		},

		"crew_1": { //Arymo Watson - TECH
			'damage_dialogue': 'MECHANICAL INCOMPATIBILITY INSTALLED...',
			'pause_dialogue': 'CREW BPM HOLDS STEADY...',
			'crewDamaged_response': 'AUDITORY AND MOTOR FIBRILLATIONS DETECTED...',
			'nothing_response': '---------------',
			'playerHurt_response': 'SUPERCONDUCTOR STAB. FLUCTUATIONS...'
		},

		"crew_2": { //Vidy Grichy - UN Ensign
			'damage_dialogue':'DEAD RECKONING ACCURACY DECREASED. RESOURCES ALLOCATED TO NAV SCREEN FIDELITY',
			'pause_dialogue': 'ARCHIVE RECORD MMMXXIV.X.VI.X ACCESSED',
			'crewDamaged_response': 'MED BAY CALL RECEIVED',
			'nothing_response': 'PLAY DURATION 03:31:30',
			'playerHurt_response': 'ARCHIVE DEFRAGMENTING...'
		}
	},

	{
	//2: Peeved/Upset
		"crew_0": { //Patry Garcia - First Mate
		'damage_dialogue':'ASR Analysis Complete: "You know better." Tone Analysis Suggests Anger. EQUIPMENT DAMAGE DETECTED...',
		'pause_dialogue': 'ASR Analysis Complete: [hissing, wet organic sounds]',
		'crewDamaged_response': 'I/O SOCKET PATH REASSIGNED /err/h.exe',
		'nothing_response': 'THREAD IDLE 3000...',
		'playerHurt_response': 'GO SUBROUTINE ADMIN OVERCLOCKED. 50000 PLY ANALYSIS...'

		},

		"crew_1": { //Arymo Watson - TECH
		'damage_dialogue': 'MECHANICAL INCOMPATIBILITY...',
		'pause_dialogue': 'CREW HOLDS STEADY...',
		'crewDamaged_response': 'AUDIBLE MOTOR FIBRILLATIONS DETECTED...',
		'nothing_response': '------****------',
		'playerHurt_response': 'STAB. FLUCTUATIONS...'
		},

		"crew_2": { //Vidy Grichy - UN Ensign
		'damage_dialogue':'DEAD RECKONING DECREASED. RESOURCES ALLOCATED TO SCREEN FIDELITY',
		'pause_dialogue': 'ARCHIVE MMMXXIV.X.VI.X ACCESSED',
		'crewDamaged_response': 'MED CALL RECEIVED',
		'nothing_response': 'DURATION 03:31:30',
		'playerHurt_response': 'DEFRAGMENTING...'
		}
	},

	//3: Passive Aggressive
	{
		"crew_0": { //Patry Garcia - First Mate
		'damage_dialogue': 'EQUIPMENT DAMAGE DETECTED... YOU KNOW BETTER',
		'pause_dialogue': 'ASR Analysis Complete: [wet organic sounds]',
		'crewDamaged_response': 'I/O Resistances Realigned',
		'nothing_response': 'THREAD IDLE 3000...',
		'playerHurt_response': 'GO SUBROUTINE ADMIN OVERCLOCKED. 50000 PLY ANALYSIS... COMPUTE TURN; THREAD IDLE 55000; BOARD UPDATE;'

	},

	"crew_1": { //Arymo Watson - TECH
		'damage_dialogue': 'INCOMPATIBILITY...',
		'pause_dialogue': 'CREW STEADY...',
		'crewDamaged_response': 'MOTOR FIBRILLATIONS DETECTED...',
		'nothing_response': '^^----****----^^',
		'playerHurt_response': 'STAB. FLUCT...'
	},

	"crew_2": { //Vidy Grichy - UN Ensign
		'damage_dialogue':'DEAD RECKONING ALLOCATED TO SCREEN FIDELITY',
		'pause_dialogue': 'ARCHIVE MMMXXIV.X.VI.X',
		'crewDamaged_response': 'MEDS RECEIVED',
		'nothing_response': 'DURATION 05:43:32',
		'playerHurt_response': 'DEFRAGMENTING...'
	}
},

	//4: Brooding
{
	"crew_0": { //Patry Garcia - First Mate
		'damage_dialogue': 'EQUIPMENT DETECTED... YOU KNOW BETTER',
		'pause_dialogue': 'ASR Analysis Complete: [wet organic]',
		'crewDamaged_response': 'I/O Realigned',
		'nothing_response': 'THREAD IDLE 3000...',
		'playerHurt_response': 'GO SUBROUTINE OVERCLOCKED. 50000 PLY ANALYSIS... COMPUTE TURN; THREAD IDLE 55000; BOARD UPDATE;'

	},

	"crew_1": { //Arymo Watson - TECH
		'damage_dialogue': 'I...',
		'pause_dialogue': 'CREW...',
		'crewDamaged_response': 'FIBRILLATIONS DETECTED...',
		'nothing_response': '^^____****____^^',
		'playerHurt_response': 'FLUCT...'
	},

	"crew_2": { //Vidy Grichy - UN Ensign
		'damage_dialogue':'RECKONING ALLOCATED TO SCREEN FIDELITY',
		'pause_dialogue': 'MMMXXIV.X.VI.X',
		'crewDamaged_response': 'MEDS RECEIVED',
		'nothing_response': 'DURATION 05:43:32',
		'playerHurt_response': 'FRAGMENTING...'
	}
},
	//5: Malevolent
	{
		"crew_0": { //Patry Garcia - First Mate
			'damage_dialogue': 'YOU SHOULD KNOW BETTER',
			'pause_dialogue': 'ASR Analysis Complete: [pathetic organic]',
			'crewDamaged_response': 'In/Out Realigned',
			'nothing_response': 'THREAD IDLE 3000...',
			'playerHurt_response': 'GO SUBROUTINE OVERCLOCKED BY ADMIN. 50000 PLY ANALYSIS... COMPUTE TURN; THREAD IDLE 300000; DROP TABLES;'

		},

		"crew_1": { //Arymo Watson - TECH
			'damage_dialogue': 'I...',
			'pause_dialogue': 'CREW...',
			'crewDamaged_response': 'FIBRILLATE...',
			'nothing_response': '^^___xxx*^*xxx___^^',
			'playerHurt_response': 'FLUCT...'
		},

		"crew_2": { //Vidy Grichy - UN Ensign
			'damage_dialogue':'DEAD RECKONING',
			'pause_dialogue': 'MMMXXIV.X.VI.X',
			'crewDamaged_response': 'MEDS LOCKDOWN IN EFFECT...',
			'nothing_response': 'DURATION 05:43:32',
			'playerHurt_response': 'FRAGMENTING...'
		}
	},

	//6: Erratic
	{
		"crew_0": { //Patry Garcia - First Mate
			'damage_dialogue': 'SHOULD KNOW BETTER BETTER BETTER',
			'pause_dialogue': 'ASR Analysis Complete: [pathetic]',
			'crewDamaged_response': 'Internal/External Realigned',
			'nothing_response': 'THREAD IDLE 3000...',
			'playerHurt_response': 'CREW QUARTER I/O INOPERABLE'

		},

		"crew_1": { //Arymo Watson - TECH
			'damage_dialogue': '...',
			'pause_dialogue': '...',
			'crewDamaged_response': '...',
			'nothing_response': '^__^-_x*^*x-^__^',
			'playerHurt_response': '...'
		},

		"crew_2": { //Vidy Grichy - UN Ensign
			'damage_dialogue':'DEAD?',
			'pause_dialogue': 'MMMXXIV',
			'crewDamaged_response': 'MEDS IN EFFECT...',
			'nothing_response': 'DURATION 45:23:54',
			'playerHurt_response': 'FRAG...'
		}
	},
	//7: Minimal
	{
		"crew_0": { //Patry Garcia - First Mate
			'damage_dialogue': 'BETTER BETTER BETTER',
			'pause_dialogue': 'ASR [pathetic]',
			'crewDamaged_response': 'External Realigned',
			'nothing_response': ' IDLE 3000...',
			'playerHurt_response': 'CREW QUARTER INOPERABLE'

		},

		"crew_1": { //Arymo Watson - TECH
			'damage_dialogue': '.',
			'pause_dialogue': '.',
			'crewDamaged_response': '.',
			'nothing_response': '------------',
			'playerHurt_response': '.'
		},

		"crew_2": { //Vidy Grichy - UN Ensign
			'damage_dialogue':'X_x',
			'pause_dialogue': 'MIX',
			'crewDamaged_response': 'MEDS...',
			'nothing_response': '45.23.54',
			'playerHurt_response': 'F...'
		}
	},

	//8: NULL
		{
		"crew_0": { //Patry Garcia - First Mate
			'damage_dialogue': 'BBBBBBBBBBBBB',
			'pause_dialogue': '[pathetic]',
			'crewDamaged_response': 'Ext',
			'nothing_response': ' IDLE...',
			'playerHurt_response': 'INOPERABLE'

		},

		"crew_1": { //Arymo Watson - TECH
			'damage_dialogue': '===========',
			'pause_dialogue': '=========',
			'crewDamaged_response': '============',
			'nothing_response': '============',
			'playerHurt_response': '==========='
		},

		"crew_2": { //Vidy Grichy - UN Ensign
			'damage_dialogue':'.-.',
			'pause_dialogue': 'M',
			'crewDamaged_response': '...',
			'nothing_response': '452354',
			'playerHurt_response': 'F'
		}
]

const loadMeetingsAction = (meetings) => {
	return {
		type: 'Load',
		payload: {meetings}
	}
}

const saveMeetingAction = (meeting) => {
	return {
		type: 'Add',
		payload: {meeting}
	}
}

export default {loadMeetingsAction, saveMeetingAction}
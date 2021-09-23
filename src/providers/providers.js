const apiUrl = 'http://localhost:3005/meetings';

export const loadMeetingsProvider = () => {
    return fetch(apiUrl)
    .then(resp => {
        if (resp.ok) {
            return resp.json();
        }

        throw new Error('Network error!');
    })
    .catch(err => {
        console.error(err);
    });
};

export const sendMeetingProvider = (meetingData) => {
    return fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(meetingData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }

            throw new Error('Network error!');
        })
        .catch(err => {
            console.log(err);
        });
};

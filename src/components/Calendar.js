import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';
import {loadMeetingsProvider, sendMeetingProvider } from '../providers/providers';
import actions from '../actions/calendar'

const Calendar = () => {
    const meetings = useSelector((state) => state.meetings);
    const dispatch = useDispatch();
  
    const loadMeetingsFromApi = () => {
      loadMeetingsProvider()
        .then((resp) => dispatch(actions.loadMeetingsAction(resp)))
        .catch((err) => console.error(err));
    };
  
    const sendMeetingToApi = (meetingData) => {
      sendMeetingProvider(meetingData)
        .then((meetingData) => {
          dispatch(actions.saveMeetingAction(meetingData));
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    useEffect(() => {
      loadMeetingsFromApi();
    }, []);
  
    return (
      <section>
        <CalendarList meetings={meetings} />
        <CalendarForm saveMeeting={sendMeetingToApi}/>
      </section>
    );
  };

  const mapStateToProps = (state, props) => {
	return {
		meetings: state.meetings
	};
};

const mapActionToProps = {
	loadMeetingsProvider: actions.loadMeetingsAction,
	sendMeetingProvider: actions.saveMeetingAction,
};

export default connect(mapStateToProps,mapActionToProps)(Calendar);
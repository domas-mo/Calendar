import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';
import {loadMeetingsProvider, sendMeetingProvider } from '../providers/providers';
import actions from '../actions/calendar'

import TitleStyled from './styled/Title.styled';
import StyledSection from './styled/Section.styled';

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
      <>
      <TitleStyled>
          <h1>Calendar</h1>
        </TitleStyled>
      <StyledSection>
        <CalendarForm saveMeeting={sendMeetingToApi}/>
        <CalendarList meetings={meetings} />
      </StyledSection>
      </>
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
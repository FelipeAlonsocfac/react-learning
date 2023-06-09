import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';

function MeetupList(props)
{
  return <ul className={classes.list}>
    {props.meetups.map((meetup) =>
    {
      return <MeetupItem meetup={meetup}></MeetupItem>
    })}
  </ul>
}

export default MeetupList;
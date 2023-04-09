import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react'; 
import FavoritesContext from '../../Store/favorites-context';

function MeetupItem(props)
{
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);
  const favoritesText = itemIsFavorite ? "Remove from Favorites" : "To Favorites";
  function toggleFavoriteStatutHandler()
  {
    if (itemIsFavorite)
    {
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite(props.meetup);
      }
  }

  return <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.meetup.image} alt={props.meetup.title}></img>
      </div>
      <div className={classes.content}>
        <h3>{props.meetup.title}</h3>
        <addres>{props.meetup.address}</addres>
        <p>{props.meetup.description}</p>
      </div>
      <div className={`${itemIsFavorite ? classes.favorite : classes.actions}`}>
        <button onClick={toggleFavoriteStatutHandler}>{favoritesText}</button>
      </div>
    </Card>
  </li>
}

export default MeetupItem;
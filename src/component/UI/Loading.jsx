import React, { useEffect } from 'react';
import classes from './Loading.module.css';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../hook/hooks';
import { searchActions } from '../../store/reducers/search-slice';

const Backdrop = props => {
  return (
    <div className={classes.backdrop}>
      <div className={`${classes.loader} ${classes['loader-black']} ${classes['loader-6']}`}></div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = props => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(searchActions.updateLoading(false));
    }, 1000);
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop toggleCartHandler={props.toggleCartHandler}>{props.children}</Backdrop>,
        portalElement
      )}
    </>
  );
};

export default Modal;

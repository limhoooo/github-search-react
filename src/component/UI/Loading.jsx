import React, { useEffect } from 'react';
import classes from './Loading.module.css';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../hook/hooks';
import { searchActions } from '../../store/reducers/search-slice';

const Backdrop = props => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.wrapper}>
        <div className={classes.focus}>Loading...</div>
        <div className={classes.mask}>
          <div className={classes.text}>Loading...</div>
        </div>
      </div>
      {/* <div className={`${classes.loader} ${classes['loader-black']} ${classes['loader-6']}`}></div> */}
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(searchActions.updateLoading(false));
    }, 2500);
  }, [dispatch]);
  return <>{ReactDOM.createPortal(<Backdrop></Backdrop>, portalElement)}</>;
};

export default Modal;

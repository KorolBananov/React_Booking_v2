import {useAppSelector} from '../../hooks';
import {useState} from 'react';
import {SortTypes} from '../../consts';
import {store} from '../../store';
import {changeSortType} from '../../store/action';

function Sort(): JSX.Element {
  const {currentSortType} = useAppSelector((state) => state);
  const [isOpened, setOpenedStatus] = useState(false);
  const handlerSortFormClick = () => {
    setOpenedStatus(!isOpened);
  };

  return (
    <>
      <span className="places__sorting-type" tabIndex={0} onClick={handlerSortFormClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${isOpened ? '--opened' : ''}`}>
        {(Object.keys(SortTypes) as Array<keyof typeof SortTypes>).map((sort) => (
          <li
            key={SortTypes[sort]}
            className={`places__option ${currentSortType === SortTypes[sort] ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {store.dispatch(changeSortType(SortTypes[sort]));}}
          >{SortTypes[sort]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sort;

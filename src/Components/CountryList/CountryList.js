import React from 'react';
import PropTypes from 'prop-types';
import CountryItem from '../CountryItem/CountryItem';
import style from './style.module.css';

function CountryList(props) {
  const { countries } = props;
  return (
    <div className={style.container} data-testid="countryList-container">
      {countries.map((el, index) => <CountryItem country={el} key={el.name} st={index % 2 === 0 ? '#95A3A4' : '#697268'} />)}
    </div>
  );
}
CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default CountryList;

import countries from 'world-countries';

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (countryToFind: string) => {
    return formattedCountries.find(
      (country) => country.value === countryToFind
    );
  };

  return {
    getAll,
    getByValue,
  };
};

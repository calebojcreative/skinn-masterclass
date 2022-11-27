import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Flag() {
  const [country, setCountry] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountry({
          ...country,
          loading: true,
        });

        // fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountry({
          ...country,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountry({
          ...country,
          loading: false,
          errorMessage: "Sorry, something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  const { loading, errorMessage, countries } = country;
  // console.log("loading", loading);
  // console.log("countries", countries);
  // console.log("errorMessage", errorMessage);

  const [selectedCountry, setSelectedCountry] = useState();
  // console.log("selectedCountry", selectedCountry);

  // Find selected country data

  // Search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    } else {
      return false;
    }
  });

  // console.log("searchSelectedCountry", searchSelectedCountry);

  return (
    <div className="flag">
      <div>
        {loading === true ? (
          <div className="spinner">
            <p>...loading</p>
          </div>
        ) : (
          <div className="country">
            <div>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="country-select"
              >
                <option>Select Country</option>
                {countries.map((item) => {
                  return (
                    <option key={uuidv4()} value={item.name.common}>
                      {item.name.common}
                    </option>
                  );
                })}
              </select>
            </div>
            <div></div>
            <div>
              {searchSelectedCountry && (
                <div className="flag-items">
                  <div className="flag-item">
                    <img
                      className="flag-img"
                      src={
                        searchSelectedCountry && searchSelectedCountry.flags.png
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="country-code">
                      {searchSelectedCountry && searchSelectedCountry.idd.root}
                      {searchSelectedCountry &&
                        searchSelectedCountry.idd.suffixes}
                    </p>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="phone"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flag;

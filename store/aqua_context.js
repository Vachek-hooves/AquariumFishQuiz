import {createContext, useEffect, useState} from 'react';

import {AQUARIUM} from '../data/aquaData';
import {getStoredData, setStoredData} from './utilsAsyncStorage';

export const AquariumContext = createContext({
  aquaData: [],
});

export const AquaProvider = ({children}) => {
  const [aquaData, setAquaData] = useState([]);
  //   console.log('CONTEXT-', aquaData);

  useEffect(() => {
    const initData = async () => {
      try {
        let aquaQuizz = await getStoredData();
        if (aquaQuizz.length === 0) {
          await setStoredData(AQUARIUM);
          aquaQuizz = await getStoredData();
        }

        setAquaData(aquaQuizz);
      } catch (error) {
        console.error('Error initializing data:', error);
      }
    };
    initData();
  }, []);

  const values = {aquaData};
  return (
    <AquariumContext.Provider value={values}>
      {children}
    </AquariumContext.Provider>
  );
};

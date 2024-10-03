import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]); 

  const getAPIdata = async () => {
    const url = "http://10.0.2.2:3000/user"; 

    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <View>
      <Text>App Call</Text>
      {data.length ? (
        data.map((item) => (
          <View > 
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        ))
      ) : (
        <Text>No Data Available</Text> 
      )}
    </View>
  );
};

export default App;

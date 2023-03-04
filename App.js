import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';
import TableComponent from './component/TableComponent';
import emStyled from '@emotion/styled';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <TableComponent data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

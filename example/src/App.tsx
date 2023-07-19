import React, { useMemo, useState } from 'react';

import { FlashList } from '@shopify/flash-list';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { ImageAsync } from './ImageAsync';

export default function App() {
  const [count, setCount] = useState(30);

  const data = useMemo(() => {
    return Array(count)
      .fill(null)
      .map((_, i) => i);
  }, [count]);

  const renderItem = ({ item }) => {
    return (
      <ImageAsync
        color={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4?${item}`}
        style={styles.box}
      />
    );
    return (
      <Video
        repeat
        paused={false}
        muted={false}
        source={{
          uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4?${item}`,
        }}
        style={styles.box}
      />
    );
  };

  const onEndReached = () => {
    if (count < 400) {
      setCount((c) => c + 30);
    }
  };

  const onRemove = () => {
    if (count > 60) {
      setCount((c) => c - 30);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onRemove}>
        <Text>onRemove</Text>
      </TouchableOpacity>
      <FlashList
        numColumns={1}
        renderItem={renderItem}
        data={data}
        onEndReached={onEndReached}
        estimatedItemSize={100}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 300,
    height: 400,
    backgroundColor: 'red',
  },
});

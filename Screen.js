import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
useAnimatedProps,
  withSpring,withSequence,withRepeat,useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {View, Button,Text,TouchableOpacity} from 'react-native';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Svg, { Path,Line } from 'react-native-svg';
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function AnimatedStyleUpdateExample(props) {
 

  const radius = useSharedValue(150);

  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    const path = `
    M 100, 200
    m -${radius.value}, 0
    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
    `;
    return {
      d: path,
    };
  });



  return (
<Svg height="100" width="100">
  <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />
</Svg>
  );
 
}

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
import Svg, { Path } from 'react-native-svg';
export default function AnimatedStyleUpdateExample(props) {
  // const randomWidth = useSharedValue(10);
  // const randomR = useSharedValue(255);
  // const randomG = useSharedValue(255);
  // const randomB = useSharedValue(1);
  // const offset = useSharedValue(1);


  // const config = {
  //   duration: 500,
  //   easing: Easing.bezier(0.5, 0.01, 0, 1),
  // };

  // const style = useAnimatedStyle(() => {
  //   return {
  //     // width: withTiming(randomWidth.value*Math.random(300), config),
  //     // height:withTiming(randomWidth.value,config),
  //     // opacity:withTiming(randomB.value *Math.random(1) ,config),
  //     transform: [{ translateX: offset.value }],

  //   };
  // });

  
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      // x.value = withSpring(startingPosition);
      // y.value = withSpring(startingPosition);
    },
  });
  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });



  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[{width:100,height:100,borderRadius:50}, uas]} />
    </PanGestureHandler>
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'black', margin: 30,opacity:1},
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
          randomB.value = Math.random(1) 
          // offset.value = Math.random()
          offset.value = withSequence(
            withTiming(75, { duration: 50 }),
            withRepeat(withTiming(150, { duration: 100 }), 6, true),
            withTiming(75, { duration: 50 })
          );

        }}
      />
    </View>
  );
}

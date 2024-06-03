import React, { useEffect } from 'react';
import { Center, Box } from '@gluestack-ui/themed';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedProps,
    useDerivedValue,
    Easing,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import Svg, { Circle } from 'react-native-svg';
import { useFocusEffect } from '@react-navigation/native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function CircleCounter({ size, count, stroke_color, innerColor }) {
    const CIRCLE_LENGTH = Math.ceil(size * 2 * Math.PI);
    const R = size;
    const width = 2.5 * size;
    const height = 2.5 * size;
    const fontSize = size * 0.6;
    const BACKGROUND_STROKE_COLOR = 'lightgray';
    const strokeWidth = size * 0.2; // Adjust this value to make the circle thinner

    const progress = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    }));

    const progressText = useDerivedValue(() => {
        return `${Math.floor(progress.value * count)}`;
    });

    useFocusEffect(
        React.useCallback(() => {
            // Start the animation when the screen is focused
            progress.value = 0; // reset progress to 0
            const animationDuration = 2000; // Modify this value to change the duration
            progress.value = withTiming(1, { duration: animationDuration, easing: Easing.out(Easing.exp) });
        }, [])
    );

    return (
        <Box w={width} h={height}>
            <Center flex={1} shadow="2">
                <ReText
                    style={{
                        zIndex: 1,
                        fontSize: fontSize,
                        fontWeight: '200',
                        color: stroke_color,
                        textAlign: 'center',
                        position: 'absolute',
                    }}
                    text={progressText}
                />
                <Svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    style={{ position: 'absolute' }}
                >
                    <Circle
                        cx={width / 2}
                        cy={height / 2}
                        r={R}
                        fill={innerColor} // Set the inner color here
                        stroke={BACKGROUND_STROKE_COLOR}
                        strokeWidth={strokeWidth}
                    />
                    <AnimatedCircle
                        cx={width / 2}
                        cy={height / 2}
                        r={R}
                        stroke={stroke_color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={CIRCLE_LENGTH}
                        animatedProps={animatedProps}
                        strokeLinecap={'round'}
                        fill={"transparent"} // Ensure this is transparent so the inner color shows through
                        transform={`rotate(-90 ${width / 2} ${height / 2})`}
                    />
                </Svg>
            </Center>
        </Box>
    );
}

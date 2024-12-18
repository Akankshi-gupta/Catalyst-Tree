// GradientBackground.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Ellipse } from 'react-native-svg';

const GradientBackground = () => {
    const renderEllipses = () => {
        const ellipses = [];
        const positions = [
            { cx: '0%', cy: '45%', rx: '55%', ry: '10%' },
            { cx: '100%', cy: '60%', rx: '40%', ry: '15%' },
            { cx: '50%', cy: '20%', rx: '60%', ry: '12%' },
            { cx: '0%', cy: '80%', rx: '50%', ry: '10%' },
            { cx: '100%', cy: '90%', rx: '45%', ry: '12%' },
        ];

        positions.forEach((pos, index) => {
            ellipses.push(
                <Svg
                    key={index}
                    style={StyleSheet.absoluteFill}
                >
                    <Defs>
                        <RadialGradient id={`grad${index}`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>
                    <Ellipse
                        cx={pos.cx}
                        cy={pos.cy}
                        rx={pos.rx}
                        ry={pos.ry}
                        fill={`url(#grad${index})`}
                    />
                </Svg>
            );
        });

        return ellipses;
    };

    return <View style={styles.container}>{renderEllipses()}</View>;
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
});

export default GradientBackground;

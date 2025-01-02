import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { View, Text, StyleSheet, Image, Easing, Animated  } from "react-native";
import { useWindowDimensions } from "react-native-web";
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText, Rect, Mask, ClipPath  } from "react-native-svg";
// import styles from "../screens/styles";

const InvestorServices = ({services,title}) => {
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;
    return (
        <View style={[styles.container,{paddingHorizontal:minWidth?10:25, marginBottom: '6%'}]}>
            <Text style={[styles.title, { fontSize:minWidth?35:48, textAlign: "center", fontWeight: 500 }]}>
                {title}
            </Text> 
            <View>
                {chunkArray(services, 4).map((row, rowIndex) => (
                    <View
                        key={rowIndex}
                        style={[styles.rowContainer,{flexDirection:minWidth?"column":"row",paddingTop:minWidth?5:25,paddingHorizontal:minWidth?10:25}]}
                        >
                        {row.map((service, index) => (
                            <Box key={index} no={service.no} text={service.text} />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

// Box component for individual boxes
const Box = ({ no, text }) => {
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;

    const [shineAnim] = useState(new Animated.Value(0));
    const [id, setId] = useState('');
    const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setId(uuidv4().toString());
    }, []);

    const startShine = () => {
        setIsHovered(true);
        shineAnim.setValue(0);
        Animated.timing(shineAnim, {
            toValue: 1,
            duration: 1200,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    const stopShine = () => {
        setIsHovered(false);
        Animated.timing(shineAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.ease, 
            useNativeDriver: true,
        }).start();
    };

    const translate = shineAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-1 * Math.max(boxDimensions.width * 1.5, boxDimensions.height * 1.5), Math.max(boxDimensions.width *1.5, boxDimensions.height *1.5)],
    });

    const svgSize = Math.min(width, height) * 0.40;

    return(
    <View style={[styles.box,{height:minWidth?"auto":250, width:minWidth?"100%":260, flexDirection:minWidth?"row":"column", justifyContent:minWidth?"flex-start":"space-between", alignContent:minWidth?"flex-start":"stretch", position: 'relative', overflow: 'hidden', borderColor: isHovered ? "rgba(255, 255, 255, 0.8)" : "#72CE63", borderWidth: isHovered ? 2 : 1,}]} onMouseEnter={startShine} onMouseLeave={stopShine} onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setBoxDimensions({ width, height });
    }}>
        <Text style={[styles.boxNumber,{fontSize:minWidth?25:48, paddingRight:minWidth?10:0 , textShadowColor: isHovered ? "rgba(255, 255, 255, 0.8)" : "transparent", textShadowOffset: { width: 1, height: 2 }, textShadowRadius: isHovered ? 4 : 0,}]}>{no}</Text>
        <Text style={[styles.boxText,{fontSize:minWidth?17:20,alignContent:"center", textShadowColor: isHovered ? "rgba(255, 255, 255, 0.8)" : "transparent", textShadowOffset: { width: 1, height: 2 }, textShadowRadius: isHovered ? 4 : 0,}]}>{text}</Text>

        <Animated.View
            style={[
            insiedestyles.shinyOverlay,
            {
                width: boxDimensions.width,
                height: boxDimensions.height,
                transform: [{ translateX: translate }, { translateY: translate }],
                backgroundColor: 'transparent'
            },
            ]}
        >
            <Svg height={svgSize} width={svgSize}>
            <Defs>
                <SvgLinearGradient id={`shine-${id}`} x1="0" y1="0" x2="1" y2="1">
                    <Stop offset="40%" stopColor="rgba(255, 255, 255, 0)" />
                    <Stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
                    <Stop offset="60%" stopColor="rgba(255, 255, 255, 0)" />
                </SvgLinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill={`url(#shine-${id})`} />
            </Svg>
        </Animated.View>
    </View>
    );
}

// Utility function to split array into chunks
const chunkArray = (array, size) => {
    return array.reduce((chunks, item, index) => {
        const chunkIndex = Math.floor(index / size);
        if (!chunks[chunkIndex]) {
            chunks[chunkIndex] = [];
        }
        chunks[chunkIndex].push(item);
        return chunks;
    }, []);
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 25,
    },
    title: {
        fontSize:60,
        fontWeight: "700",
        color:"white",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 25,
        paddingTop: 25,
    },
    box: {
        height: 250,
        width: 260,
        borderRadius: 20,
        // borderWidth: 1,
        justifyContent: "space-between",
        padding: 15,
        margin: 8,
    },
    boxNumber: {
        color:"white",
        fontSize: 48,
        fontWeight: "700",
    },
    boxText: {
        color:"white",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "left",
    },
});

const insiedestyles = StyleSheet.create({
    container: {
      width: '50%',
    //   flex: 1
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      margin: '2%',
      borderRadius: 12,
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 12,
    },
    shinyOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
});
  

export default InvestorServices;

import React from 'react';
import { View, Text, useWindowDimensions,Image } from 'react-native';
import styles from '../screens/styles';

const CatalystAdvantages = () => {
    // const {height,width} =useWindowDimensions();
    const {height, width } = useWindowDimensions();
    const minWidth = width<600;
    const advantages = [
        { no: "01", text: "Curated Startup Opportunities" },
        { no: "02", text: "Access startup across industries, geographies and stages with verified profiles" },
        { no: "03", text: "AI Powered Risk Scoring" },
        { no: "04", text: "Make Data Driven Investment Decisions with comprehensive Risk assessments and analytics" },
        { no: "05", text: "Transparent Process CS" },
        { no: "06", text: "Track deals, review documents, and close investment securely-all in one place" },
        { no: "07", text: "Diverse Investment Offers" },
        { no: "08", text: "Explore opportunities in debt, equity, and mergers & acquisitions" }
    ];

    return (
        <View style={{ marginBottom: '4%', padding: '7%', paddingTop: '4%' }}>
            <View>
                <Text style={[styles.title, { textAlign: minWidth?"center":'left', fontSize: 48, fontWeight: 500 , borderBottomColor: 'rgba(214, 214, 214, 1)', borderBottomWidth: 2, marginBottom: 0, paddingBottom: '6%'}]}>
                    Why Choose the {"\n"}The Catalyst Tree?
                </Text>
            </View>
            <View style={{justifyContent: 'flex-start',}}>
                {advantages.map((advantage, index) => (
                    <Col key={index} no={advantage.no} text={advantage.text} />
                ))}
            </View>
        </View>
    );
};

const Col = ({ no, text }) => {
    const {height, width } = useWindowDimensions();
    const minWidth = width<600;
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomColor: 'rgba(214, 214, 214, 1)', borderBottomWidth: 2, paddingVertical: '1%' }}>
                <Text style={{ color: "grey", fontSize:minWidth?22: 42, fontWeight: 500, alignContent: "center", paddingLeft: 10}}>
                    {no}
                </Text>
                <Text style={{ color: "white", fontSize:minWidth?18: 32, fontWeight: 400, width: width * 0.5}}>
                    {text}
                </Text>
            </View>
            {/* <View
                style={{
                    height: 5,
                    // width: width * 0.5,
                    backgroundColor: "grey",
                    marginVertical: 10,
                }}
            /> */}
        </View>
    );
};



export default CatalystAdvantages;

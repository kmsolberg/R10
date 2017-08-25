import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Animated } from 'react-native';

import { styles } from './styles';

class ConductItem extends Component {
    constructor() {
        super()

        this.state = {
            display: false,
            spin: new Animated.Value(0),
        }
    }

    spinPlus = () => {
        Animated.timing(
            this.state.spin,
            {
                toValue: 1,
                duration: 500
            }
        ).start();
    }

    onPress = () => {
        LayoutAnimation.easeInEaseOut();
        this.spinPlus()
        this.setState({ display: !this.state.display })
    }
    
    render() {
        let spinningPlus = this.state.spin.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        let animatedStyle = {
            transform: [
                { rotate: spinningPlus }
            ]
        }

        return (
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <View style={styles.aboutInfo}>
                        <Animated.Text style={[animatedStyle]}>{this.state.display ? '-' : '+'}
                        </Animated.Text>
                        <Text> {this.props.data.title}</Text>
                    </View>
                </TouchableOpacity>
                {this.state.display && <Text style={styles.item}>{this.props.data.description}</Text>}
            </View>
        )
    } 
}

export default ConductItem;
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation } from 'react-native';

import { styles } from './styles';

class ConductItem extends Component {
    constructor() {
        super()

        this.state = {
            display: false
        }
    }

    onPress = () => {
        LayoutAnimation.easeInEaseOut();

        this.setState({ display: !this.state.display })
    }
    
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <View>
                        <Text>{this.state.display ? '-' : '+'}</Text>
                        <Text style={styles.item}> {this.props.data.title}</Text>
                    </View>
                </TouchableOpacity>
                {this.state.display && <Text style={styles.item}>{this.props.data.description}</Text>}
            </View>
        )
    } 
}

export default ConductItem;
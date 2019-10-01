import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { RowRepository, Board } from '../../../components/DraggableBoard';

import { mockData } from './mockData';
import styles from './styles';

class Dashboard extends Component {
  state = {
    rowRepository: new RowRepository(mockData),
  };

  renderRow(item) {
    const style = [styles.item];
    // Just to show that other sizes works as well
    if (item.id == 2) {
      style.push({ height: 100 });
    }
    return (
      <View style={style}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  onOpen(item) {
    console.log('Opened!', item);
  }

  onDragEnd(srcColumnId, destColumnId, item) {
    console.log(
      `Dragged item ${item.id()} from column ${srcColumnId} to column ${destColumnId}`,
    );
  }

  renderColumnWrapper(column, index, columnComponent) {
    return (
      <View key={`column-${index}`} style={styles.column}>
        <Text style={styles.columnHeader}>{column.name}</Text>
        {columnComponent}
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Board
          style={styles.board}
          rowRepository={this.state.rowRepository}
          renderRow={this.renderRow.bind(this)}
          renderColumnWrapper={this.renderColumnWrapper.bind(this)}
          open={this.onOpen.bind(this)}
          onDragEnd={this.onDragEnd.bind(this)}
        />
      </SafeAreaView>
    );
  }
}

export default Dashboard;

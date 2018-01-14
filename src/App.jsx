import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Обозначь свои цели</h1>
        </header>
        <div className="page-wrapper">
          <p>Запланированные функции:</p>
          <ul>
            <li>визуализация целей, составление challange lists</li>
            <li>экспорт в png, pdf...</li>
            <li>добавление мотивационных цитат</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

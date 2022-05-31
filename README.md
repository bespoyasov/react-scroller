# React Scroller

React component wrapper for [Scroller](https://github.com/bespoyasov/scroller).

## Installation

Add the packages from npm:

```shell
npm install prokrutchik react-prokrutchik
```

## Usage

```js
import { Scroller } from "react-prokrutchik";
import "react-prokrutchik/styles.css";

function App() {
  return (
    <Scroller
      position="center"
      duration={500}
      scrollbar="hidden"
      scrollbar="hidden"
      align="start"
    >
      <div>Text...</div>
      <img src="example.png" alt="Images..." />
      {/* ...Or Other content */}
    </Scroller>
  );
}
```

## Configuration

For more configuration options, check out [Scroller settings](https://github.com/bespoyasov/scroller#configuration).

# React Scroller

Wrapper-component for [Scroller](https://github.com/bespoyasov/scroller).

## Installation

Add the package from npm:

```shell
npm install react-prokrutchik
```

## Usage

```js
import { Scroller } from "react-prokrutchik";
import "react-prokrutchik/styles.css";

function App() {
  const config = {
    scrollbar: "hidden",
    navigation: "visible",
    align: "start",
  };

  return (
    <Scroller position="center" config={config}>
      <div>Text...</div>
      <img src="example.png" alt="Images..." />
      {/* ...Or Other content */}
    </Scroller>
  );
}
```

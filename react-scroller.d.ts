declare module "react-prokrutchik" {
  import * as React from "react";
  import * as ScrollerBase from "prokrutchik";

  type ScrollerProps = React.PropsWithChildren<{
    position: ScrollerBase.ScrollDestination;
    config: ScrollerBase.ScrollerUpdateConfig;
  }>;

  export const Scroller: React.FunctionComponent<ScrollerProps>;
}

declare module "react-prokrutchik" {
  import * as React from "react";
  import * as ScrollerBase from "prokrutchik";

  type ScrollerProps = React.PropsWithChildren<{
    position: ScrollerBase.ScrollDestination;
    duration: ScrollerBase.MilliSecondsCount;

    scrollbar: ScrollerBase.ElementVisibility;
    navigation: ScrollerBase.ElementVisibility;
    align: ScrollerBase.ContentAlignment;

    onItemClick: (event: MouseEvent | TouchEvent) => void;
  }>;

  export const Scroller: React.FunctionComponent<ScrollerProps>;
}

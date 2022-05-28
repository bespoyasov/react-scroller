import React, { useEffect, useRef } from "react";
import { Scroller as ScrollerBase } from "prokrutchik";

export const Scroller = ({ children, position, config = {} }) => {
  const { scrollbar, navigation, align, onItemClick } = config;
  const childrenCount = React.Children.count(children);

  const node = useRef();
  const instance = useRef();

  useEffect(() => {
    instance.current ??= new ScrollerBase({
      element: node.current,
      useExternalLayout: true,

      scrollbar,
      navigation,
      align,
      onItemClick,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    instance.current?.update({ scrollbar, navigation, align, onItemClick });
  }, [scrollbar, navigation, align, onItemClick, childrenCount]);

  useEffect(() => {
    instance.current?.scrollTo(position);
  }, [position]);

  return (
    <article ref={node}>
      <div className="scroller-container">
        <ul className="scroller-content">
          {React.Children.map(children, (child) => {
            return <li className="scroller-item">{child}</li>;
          })}
        </ul>
      </div>
      <div className="scroller-scrollbar">
        <div className="scroller-handle"></div>
      </div>
      <footer className="scroller-navigation">
        {React.Children.map(children, (child) => {
          const id = child.props["data-anchor"];
          return id ? (
            <button className="scroller-button" data-id={id} type="button">
              {id}
            </button>
          ) : null;
        })}
      </footer>
    </article>
  );
};

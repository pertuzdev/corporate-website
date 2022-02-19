import React, { useState, useCallback } from "react";
import Select, { components as ReactSelectComponents } from "react-select";

/*
 * This component modifies React-Select so that when the React-Select dropdown is opened, it doesn't automatically select the first option.
 * See https://github.com/JedWatson/react-select/pull/4080 for context.
 */
export const SelectDoNotAutoselectFirstOption = React.memo((props) => {
  const { onKeyDown: originalOnKeyDown, onMenuClose: originalOnMenuClose } =
    props;

  // Begin code from https://github.com/JedWatson/react-select/pull/4080#issuecomment-944563481
  const [hasUserStartedSelectingOption, setHasUserStartedSelectingOption] =
    useState(props.value != null);

  const onKeyDown = useCallback(
    (e, ...otherArgs) => {
      if (
        (e.key === "ArrowDown" || e.key === "ArrowUp") &&
        !hasUserStartedSelectingOption
      ) {
        e.preventDefault();

        setHasUserStartedSelectingOption(true);
      }

      return originalOnKeyDown?.(e, ...otherArgs);
    },
    [
      originalOnKeyDown,
      hasUserStartedSelectingOption,
      setHasUserStartedSelectingOption,
    ]
  );

  const onMenuClose = useCallback(
    (...args) => {
      setHasUserStartedSelectingOption(false);

      return originalOnMenuClose?.(...args);
    },
    [originalOnMenuClose, setHasUserStartedSelectingOption]
  );
  // End code from https://github.com/JedWatson/react-select/pull/4080#issuecomment-944563481

  const originalOptionComponent =
    props.components?.Option ?? ReactSelectComponents.Option;

  const OptionComponent = useCallback(
    (props) => {
      return originalOptionComponent({
        ...props,
        innerProps: {
          ...props.innerProps,
          onMouseOver: (...args) => {
            setHasUserStartedSelectingOption(true);

            return props.innerProps.onMouseOver(...args);
          },
        },
      });
    },
    [originalOptionComponent, setHasUserStartedSelectingOption]
  );

  return (
    <Select
      {...props}
      components={{
        ...props.components,
        Option: OptionComponent,
      }}
      onKeyDown={onKeyDown}
      onMenuClose={onMenuClose}
      styles={{
        ...props.styles,
        // The base of this function is from https://github.com/JedWatson/react-select/pull/4080#issuecomment-944563481
        option: (provided, selectProps) => {
          console.log(provided[":active"], "aespa");
          const useUnselectedColors =
            selectProps.isFocused &&
            !selectProps.isSelected &&
            !hasUserStartedSelectingOption &&
            props.value == null;

          return {
            ...provided,
            ...props.styles.option(provided, selectProps),
            backgroundColor: useUnselectedColors
              ? "transparent"
              : props.styles?.option(provided, selectProps)?.backgroundColor ||
                provided.backgroundColor,

            // NOTE: You may also need to set 'color', etc.
            // Ideally we'd do something like this: `useUnselectedColors ? selectProps.getStyles('normal', ...) : selectProps.getStyles('hover', ...)`, but I'm not sure what to pass to `getStyles()`
          };
        },
        // End code from https://github.com/JedWatson/react-select/pull/4080#issuecomment-944563481
      }}
    />
  );
});

SelectDoNotAutoselectFirstOption.displayName =
  "SelectDoNotAutoselectFirstOption";

export default SelectDoNotAutoselectFirstOption;

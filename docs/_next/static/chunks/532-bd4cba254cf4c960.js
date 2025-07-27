"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[532],{

/***/ 33532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Autocomplete_Autocomplete)
});

// UNUSED EXPORTS: createFilterOptions

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useId/useId.js
var useId = __webpack_require__(70586);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useControlled/useControlled.js
var useControlled = __webpack_require__(84242);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
'use client';


const usePreviousProps = value => {
  const ref = react.useRef({});
  react.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
/* harmony default export */ const usePreviousProps_usePreviousProps = (usePreviousProps);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var useEventCallback = __webpack_require__(43804);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/setRef/setRef.js
var setRef = __webpack_require__(84714);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/useAutocomplete/useAutocomplete.js
/* __next_internal_client_entry_do_not_use__ createFilterOptions,default auto */ /* eslint-disable no-constant-condition */ 

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
function stripDiacritics(string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function createFilterOptions() {
    let config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { ignoreAccents = true, ignoreCase = true, limit, matchFrom = 'any', stringify, trim = false } = config;
    return (options, param)=>{
        let { inputValue, getOptionLabel } = param;
        let input = trim ? inputValue.trim() : inputValue;
        if (ignoreCase) {
            input = input.toLowerCase();
        }
        if (ignoreAccents) {
            input = stripDiacritics(input);
        }
        const filteredOptions = !input ? options : options.filter((option)=>{
            let candidate = (stringify || getOptionLabel)(option);
            if (ignoreCase) {
                candidate = candidate.toLowerCase();
            }
            if (ignoreAccents) {
                candidate = stripDiacritics(candidate);
            }
            return matchFrom === 'start' ? candidate.startsWith(input) : candidate.includes(input);
        });
        return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
    };
}
const defaultFilterOptions = createFilterOptions();
// Number of options to jump in list box when `Page Up` and `Page Down` keys are used.
const pageSize = 5;
const defaultIsActiveElementInListbox = (listboxRef)=>{
    var _listboxRef_current_parentElement;
    return listboxRef.current !== null && ((_listboxRef_current_parentElement = listboxRef.current.parentElement) === null || _listboxRef_current_parentElement === void 0 ? void 0 : _listboxRef_current_parentElement.contains(document.activeElement));
};
const MULTIPLE_DEFAULT_VALUE = [];
function getInputValue(value, multiple, getOptionLabel) {
    if (multiple || value == null) {
        return '';
    }
    const optionLabel = getOptionLabel(value);
    return typeof optionLabel === 'string' ? optionLabel : '';
}
function useAutocomplete(props) {
    const { // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox = defaultIsActiveElementInListbox, // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix = 'Mui', autoComplete = false, autoHighlight = false, autoSelect = false, blurOnSelect = false, clearOnBlur = !props.freeSolo, clearOnEscape = false, componentName = 'useAutocomplete', defaultValue = props.multiple ? MULTIPLE_DEFAULT_VALUE : null, disableClearable = false, disableCloseOnSelect = false, disabled: disabledProp, disabledItemsFocusable = false, disableListWrap = false, filterOptions = defaultFilterOptions, filterSelectedOptions = false, freeSolo = false, getOptionDisabled, getOptionKey, getOptionLabel: getOptionLabelProp = (option)=>{
        var _option_label;
        return (_option_label = option.label) !== null && _option_label !== void 0 ? _option_label : option;
    }, groupBy, handleHomeEndKeys = !props.freeSolo, id: idProp, includeInputInList = false, inputValue: inputValueProp, isOptionEqualToValue = (option, value)=>option === value, multiple = false, onChange, onClose, onHighlightChange, onInputChange, onOpen, open: openProp, openOnFocus = false, options, readOnly = false, selectOnFocus = !props.freeSolo, value: valueProp } = props;
    const id = (0,useId/* default */.A)(idProp);
    let getOptionLabel = getOptionLabelProp;
    getOptionLabel = (option)=>{
        const optionLabel = getOptionLabelProp(option);
        if (typeof optionLabel !== 'string') {
            if (false) {}
            return String(optionLabel);
        }
        return optionLabel;
    };
    const ignoreFocus = react.useRef(false);
    const firstFocus = react.useRef(true);
    const inputRef = react.useRef(null);
    const listboxRef = react.useRef(null);
    const [anchorEl, setAnchorEl] = react.useState(null);
    const [focusedTag, setFocusedTag] = react.useState(-1);
    const defaultHighlighted = autoHighlight ? 0 : -1;
    const highlightedIndexRef = react.useRef(defaultHighlighted);
    // Calculate the initial inputValue on mount only.
    // useRef ensures it doesn't update dynamically with defaultValue or value props.
    const initialInputValue = react.useRef(getInputValue(defaultValue !== null && defaultValue !== void 0 ? defaultValue : valueProp, multiple, getOptionLabel)).current;
    const [value, setValueState] = (0,useControlled/* default */.A)({
        controlled: valueProp,
        default: defaultValue,
        name: componentName
    });
    const [inputValue, setInputValueState] = (0,useControlled/* default */.A)({
        controlled: inputValueProp,
        default: initialInputValue,
        name: componentName,
        state: 'inputValue'
    });
    const [focused, setFocused] = react.useState(false);
    const resetInputValue = react.useCallback((event, newValue, reason)=>{
        // retain current `inputValue` if new option isn't selected and `clearOnBlur` is false
        // When `multiple` is enabled, `newValue` is an array of all selected items including the newly selected item
        const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;
        if (!isOptionSelected && !clearOnBlur) {
            return;
        }
        const newInputValue = getInputValue(newValue, multiple, getOptionLabel);
        if (inputValue === newInputValue) {
            return;
        }
        setInputValueState(newInputValue);
        if (onInputChange) {
            onInputChange(event, newInputValue, reason);
        }
    }, [
        getOptionLabel,
        inputValue,
        multiple,
        onInputChange,
        setInputValueState,
        clearOnBlur,
        value
    ]);
    const [open, setOpenState] = (0,useControlled/* default */.A)({
        controlled: openProp,
        default: false,
        name: componentName,
        state: 'open'
    });
    const [inputPristine, setInputPristine] = react.useState(true);
    const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
    const popupOpen = open && !readOnly;
    const filteredOptions = popupOpen ? filterOptions(options.filter((option)=>{
        if (filterSelectedOptions && (multiple ? value : [
            value
        ]).some((value2)=>value2 !== null && isOptionEqualToValue(option, value2))) {
            return false;
        }
        return true;
    }), // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
        inputValue: inputValueIsSelectedValue && inputPristine ? '' : inputValue,
        getOptionLabel
    }) : [];
    const previousProps = usePreviousProps_usePreviousProps({
        filteredOptions,
        value,
        inputValue
    });
    react.useEffect(()=>{
        const valueChange = value !== previousProps.value;
        if (focused && !valueChange) {
            return;
        }
        // Only reset the input's value when freeSolo if the component's value changes.
        if (freeSolo && !valueChange) {
            return;
        }
        resetInputValue(null, value, 'reset');
    }, [
        value,
        resetInputValue,
        focused,
        previousProps.value,
        freeSolo
    ]);
    const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
    const focusTag = (0,useEventCallback/* default */.A)((tagToFocus)=>{
        if (tagToFocus === -1) {
            inputRef.current.focus();
        } else {
            anchorEl.querySelector('[data-tag-index="'.concat(tagToFocus, '"]')).focus();
        }
    });
    // Ensure the focusedTag is never inconsistent
    react.useEffect(()=>{
        if (multiple && focusedTag > value.length - 1) {
            setFocusedTag(-1);
            focusTag(-1);
        }
    }, [
        value,
        multiple,
        focusedTag,
        focusTag
    ]);
    function validOptionIndex(index, direction) {
        if (!listboxRef.current || index < 0 || index >= filteredOptions.length) {
            return -1;
        }
        let nextFocus = index;
        while(true){
            const option = listboxRef.current.querySelector('[data-option-index="'.concat(nextFocus, '"]'));
            // Same logic as MenuList.js
            const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute('aria-disabled') === 'true';
            if (option && option.hasAttribute('tabindex') && !nextFocusDisabled) {
                // The next option is available
                return nextFocus;
            }
            // The next option is disabled, move to the next element.
            // with looped index
            if (direction === 'next') {
                nextFocus = (nextFocus + 1) % filteredOptions.length;
            } else {
                nextFocus = (nextFocus - 1 + filteredOptions.length) % filteredOptions.length;
            }
            // We end up with initial index, that means we don't have available options.
            // All of them are disabled
            if (nextFocus === index) {
                return -1;
            }
        }
    }
    const setHighlightedIndex = (0,useEventCallback/* default */.A)((param)=>{
        let { event, index, reason } = param;
        highlightedIndexRef.current = index;
        // does the index exist?
        if (index === -1) {
            inputRef.current.removeAttribute('aria-activedescendant');
        } else {
            inputRef.current.setAttribute('aria-activedescendant', "".concat(id, "-option-").concat(index));
        }
        if (onHighlightChange && [
            'mouse',
            'keyboard',
            'touch'
        ].includes(reason)) {
            onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
        }
        if (!listboxRef.current) {
            return;
        }
        const prev = listboxRef.current.querySelector('[role="option"].'.concat(unstable_classNamePrefix, "-focused"));
        if (prev) {
            prev.classList.remove("".concat(unstable_classNamePrefix, "-focused"));
            prev.classList.remove("".concat(unstable_classNamePrefix, "-focusVisible"));
        }
        let listboxNode = listboxRef.current;
        if (listboxRef.current.getAttribute('role') !== 'listbox') {
            listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]');
        }
        // "No results"
        if (!listboxNode) {
            return;
        }
        if (index === -1) {
            listboxNode.scrollTop = 0;
            return;
        }
        const option = listboxRef.current.querySelector('[data-option-index="'.concat(index, '"]'));
        if (!option) {
            return;
        }
        option.classList.add("".concat(unstable_classNamePrefix, "-focused"));
        if (reason === 'keyboard') {
            option.classList.add("".concat(unstable_classNamePrefix, "-focusVisible"));
        }
        // Scroll active descendant into view.
        // Logic copied from https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/combobox/examples/js/select-only.js
        // In case of mouse clicks and touch (in mobile devices) we avoid scrolling the element and keep both behaviors same.
        // Consider this API instead once it has a better browser support:
        // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });
        if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse' && reason !== 'touch') {
            const element = option;
            const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
            const elementBottom = element.offsetTop + element.offsetHeight;
            if (elementBottom > scrollBottom) {
                listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
            } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
                listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
            }
        }
    });
    const changeHighlightedIndex = (0,useEventCallback/* default */.A)((param)=>{
        let { event, diff, direction = 'next', reason } = param;
        if (!popupOpen) {
            return;
        }
        const getNextIndex = ()=>{
            const maxIndex = filteredOptions.length - 1;
            if (diff === 'reset') {
                return defaultHighlighted;
            }
            if (diff === 'start') {
                return 0;
            }
            if (diff === 'end') {
                return maxIndex;
            }
            const newIndex = highlightedIndexRef.current + diff;
            if (newIndex < 0) {
                if (newIndex === -1 && includeInputInList) {
                    return -1;
                }
                if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
                    return 0;
                }
                return maxIndex;
            }
            if (newIndex > maxIndex) {
                if (newIndex === maxIndex + 1 && includeInputInList) {
                    return -1;
                }
                if (disableListWrap || Math.abs(diff) > 1) {
                    return maxIndex;
                }
                return 0;
            }
            return newIndex;
        };
        const nextIndex = validOptionIndex(getNextIndex(), direction);
        setHighlightedIndex({
            index: nextIndex,
            reason,
            event
        });
        // Sync the content of the input with the highlighted option.
        if (autoComplete && diff !== 'reset') {
            if (nextIndex === -1) {
                inputRef.current.value = inputValue;
            } else {
                const option = getOptionLabel(filteredOptions[nextIndex]);
                inputRef.current.value = option;
                // The portion of the selected suggestion that has not been typed by the user,
                // a completion string, appears inline after the input cursor in the textbox.
                const index = option.toLowerCase().indexOf(inputValue.toLowerCase());
                if (index === 0 && inputValue.length > 0) {
                    inputRef.current.setSelectionRange(inputValue.length, option.length);
                }
            }
        }
    });
    const getPreviousHighlightedOptionIndex = ()=>{
        const isSameValue = (value1, value2)=>{
            const label1 = value1 ? getOptionLabel(value1) : '';
            const label2 = value2 ? getOptionLabel(value2) : '';
            return label1 === label2;
        };
        if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && previousProps.inputValue === inputValue && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i)=>getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
            const previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
            if (previousHighlightedOption) {
                return filteredOptions.findIndex((option)=>{
                    return getOptionLabel(option) === getOptionLabel(previousHighlightedOption);
                });
            }
        }
        return -1;
    };
    const syncHighlightedIndex = react.useCallback(()=>{
        if (!popupOpen) {
            return;
        }
        // Check if the previously highlighted option still exists in the updated filtered options list and if the value and inputValue haven't changed
        // If it exists and the value and the inputValue haven't changed, just update its index, otherwise continue execution
        const previousHighlightedOptionIndex = getPreviousHighlightedOptionIndex();
        if (previousHighlightedOptionIndex !== -1) {
            highlightedIndexRef.current = previousHighlightedOptionIndex;
            return;
        }
        const valueItem = multiple ? value[0] : value;
        // The popup is empty, reset
        if (filteredOptions.length === 0 || valueItem == null) {
            changeHighlightedIndex({
                diff: 'reset'
            });
            return;
        }
        if (!listboxRef.current) {
            return;
        }
        // Synchronize the value with the highlighted index
        if (valueItem != null) {
            const currentOption = filteredOptions[highlightedIndexRef.current];
            // Keep the current highlighted index if possible
            if (multiple && currentOption && value.findIndex((val)=>isOptionEqualToValue(currentOption, val)) !== -1) {
                return;
            }
            const itemIndex = filteredOptions.findIndex((optionItem)=>isOptionEqualToValue(optionItem, valueItem));
            if (itemIndex === -1) {
                changeHighlightedIndex({
                    diff: 'reset'
                });
            } else {
                setHighlightedIndex({
                    index: itemIndex
                });
            }
            return;
        }
        // Prevent the highlighted index to leak outside the boundaries.
        if (highlightedIndexRef.current >= filteredOptions.length - 1) {
            setHighlightedIndex({
                index: filteredOptions.length - 1
            });
            return;
        }
        // Restore the focus to the previous index.
        setHighlightedIndex({
            index: highlightedIndexRef.current
        });
    // Ignore filteredOptions (and options, isOptionEqualToValue, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        // Only sync the highlighted index when the option switch between empty and not
        filteredOptions.length,
        // Don't sync the highlighted index with the value when multiple
        // eslint-disable-next-line react-hooks/exhaustive-deps
        multiple ? false : value,
        filterSelectedOptions,
        changeHighlightedIndex,
        setHighlightedIndex,
        popupOpen,
        inputValue,
        multiple
    ]);
    const handleListboxRef = (0,useEventCallback/* default */.A)((node)=>{
        (0,setRef/* default */.A)(listboxRef, node);
        if (!node) {
            return;
        }
        syncHighlightedIndex();
    });
    if (false) {}
    react.useEffect(()=>{
        syncHighlightedIndex();
    }, [
        syncHighlightedIndex
    ]);
    const handleOpen = (event)=>{
        if (open) {
            return;
        }
        setOpenState(true);
        setInputPristine(true);
        if (onOpen) {
            onOpen(event);
        }
    };
    const handleClose = (event, reason)=>{
        if (!open) {
            return;
        }
        setOpenState(false);
        if (onClose) {
            onClose(event, reason);
        }
    };
    const handleValue = (event, newValue, reason, details)=>{
        if (multiple) {
            if (value.length === newValue.length && value.every((val, i)=>val === newValue[i])) {
                return;
            }
        } else if (value === newValue) {
            return;
        }
        if (onChange) {
            onChange(event, newValue, reason, details);
        }
        setValueState(newValue);
    };
    const isTouch = react.useRef(false);
    const selectNewValue = function(event, option) {
        let reasonProp = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'selectOption', origin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'options';
        let reason = reasonProp;
        let newValue = option;
        if (multiple) {
            newValue = Array.isArray(value) ? value.slice() : [];
            if (false) {}
            const itemIndex = newValue.findIndex((valueItem)=>isOptionEqualToValue(option, valueItem));
            if (itemIndex === -1) {
                newValue.push(option);
            } else if (origin !== 'freeSolo') {
                newValue.splice(itemIndex, 1);
                reason = 'removeOption';
            }
        }
        resetInputValue(event, newValue, reason);
        handleValue(event, newValue, reason, {
            option
        });
        if (!disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey)) {
            handleClose(event, reason);
        }
        if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
            inputRef.current.blur();
        }
    };
    function validTagIndex(index, direction) {
        if (index === -1) {
            return -1;
        }
        let nextFocus = index;
        while(true){
            // Out of range
            if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
                return -1;
            }
            const option = anchorEl.querySelector('[data-tag-index="'.concat(nextFocus, '"]'));
            // Same logic as MenuList.js
            if (!option || !option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true') {
                nextFocus += direction === 'next' ? 1 : -1;
            } else {
                return nextFocus;
            }
        }
    }
    const handleFocusTag = (event, direction)=>{
        if (!multiple) {
            return;
        }
        if (inputValue === '') {
            handleClose(event, 'toggleInput');
        }
        let nextTag = focusedTag;
        if (focusedTag === -1) {
            if (inputValue === '' && direction === 'previous') {
                nextTag = value.length - 1;
            }
        } else {
            nextTag += direction === 'next' ? 1 : -1;
            if (nextTag < 0) {
                nextTag = 0;
            }
            if (nextTag === value.length) {
                nextTag = -1;
            }
        }
        nextTag = validTagIndex(nextTag, direction);
        setFocusedTag(nextTag);
        focusTag(nextTag);
    };
    const handleClear = (event)=>{
        ignoreFocus.current = true;
        setInputValueState('');
        if (onInputChange) {
            onInputChange(event, '', 'clear');
        }
        handleValue(event, multiple ? [] : null, 'clear');
    };
    const handleKeyDown = (other)=>(event)=>{
            if (other.onKeyDown) {
                other.onKeyDown(event);
            }
            if (event.defaultMuiPrevented) {
                return;
            }
            if (focusedTag !== -1 && ![
                'ArrowLeft',
                'ArrowRight'
            ].includes(event.key)) {
                setFocusedTag(-1);
                focusTag(-1);
            }
            // Wait until IME is settled.
            if (event.which !== 229) {
                switch(event.key){
                    case 'Home':
                        if (popupOpen && handleHomeEndKeys) {
                            // Prevent scroll of the page
                            event.preventDefault();
                            changeHighlightedIndex({
                                diff: 'start',
                                direction: 'next',
                                reason: 'keyboard',
                                event
                            });
                        }
                        break;
                    case 'End':
                        if (popupOpen && handleHomeEndKeys) {
                            // Prevent scroll of the page
                            event.preventDefault();
                            changeHighlightedIndex({
                                diff: 'end',
                                direction: 'previous',
                                reason: 'keyboard',
                                event
                            });
                        }
                        break;
                    case 'PageUp':
                        // Prevent scroll of the page
                        event.preventDefault();
                        changeHighlightedIndex({
                            diff: -pageSize,
                            direction: 'previous',
                            reason: 'keyboard',
                            event
                        });
                        handleOpen(event);
                        break;
                    case 'PageDown':
                        // Prevent scroll of the page
                        event.preventDefault();
                        changeHighlightedIndex({
                            diff: pageSize,
                            direction: 'next',
                            reason: 'keyboard',
                            event
                        });
                        handleOpen(event);
                        break;
                    case 'ArrowDown':
                        // Prevent cursor move
                        event.preventDefault();
                        changeHighlightedIndex({
                            diff: 1,
                            direction: 'next',
                            reason: 'keyboard',
                            event
                        });
                        handleOpen(event);
                        break;
                    case 'ArrowUp':
                        // Prevent cursor move
                        event.preventDefault();
                        changeHighlightedIndex({
                            diff: -1,
                            direction: 'previous',
                            reason: 'keyboard',
                            event
                        });
                        handleOpen(event);
                        break;
                    case 'ArrowLeft':
                        handleFocusTag(event, 'previous');
                        break;
                    case 'ArrowRight':
                        handleFocusTag(event, 'next');
                        break;
                    case 'Enter':
                        if (highlightedIndexRef.current !== -1 && popupOpen) {
                            const option = filteredOptions[highlightedIndexRef.current];
                            const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
                            // Avoid early form validation, let the end-users continue filling the form.
                            event.preventDefault();
                            if (disabled) {
                                return;
                            }
                            selectNewValue(event, option, 'selectOption');
                            // Move the selection to the end.
                            if (autoComplete) {
                                inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
                            }
                        } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
                            if (multiple) {
                                // Allow people to add new values before they submit the form.
                                event.preventDefault();
                            }
                            selectNewValue(event, inputValue, 'createOption', 'freeSolo');
                        }
                        break;
                    case 'Escape':
                        if (popupOpen) {
                            // Avoid Opera to exit fullscreen mode.
                            event.preventDefault();
                            // Avoid the Modal to handle the event.
                            event.stopPropagation();
                            handleClose(event, 'escape');
                        } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
                            // Avoid Opera to exit fullscreen mode.
                            event.preventDefault();
                            // Avoid the Modal to handle the event.
                            event.stopPropagation();
                            handleClear(event);
                        }
                        break;
                    case 'Backspace':
                        // Remove the value on the left of the "cursor"
                        if (multiple && !readOnly && inputValue === '' && value.length > 0) {
                            const index = focusedTag === -1 ? value.length - 1 : focusedTag;
                            const newValue = value.slice();
                            newValue.splice(index, 1);
                            handleValue(event, newValue, 'removeOption', {
                                option: value[index]
                            });
                        }
                        break;
                    case 'Delete':
                        // Remove the value on the right of the "cursor"
                        if (multiple && !readOnly && inputValue === '' && value.length > 0 && focusedTag !== -1) {
                            const index = focusedTag;
                            const newValue = value.slice();
                            newValue.splice(index, 1);
                            handleValue(event, newValue, 'removeOption', {
                                option: value[index]
                            });
                        }
                        break;
                    default:
                }
            }
        };
    const handleFocus = (event)=>{
        setFocused(true);
        if (openOnFocus && !ignoreFocus.current) {
            handleOpen(event);
        }
    };
    const handleBlur = (event)=>{
        // Ignore the event when using the scrollbar with IE11
        if (unstable_isActiveElementInListbox(listboxRef)) {
            inputRef.current.focus();
            return;
        }
        setFocused(false);
        firstFocus.current = true;
        ignoreFocus.current = false;
        if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
            selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
        } else if (autoSelect && freeSolo && inputValue !== '') {
            selectNewValue(event, inputValue, 'blur', 'freeSolo');
        } else if (clearOnBlur) {
            resetInputValue(event, value, 'blur');
        }
        handleClose(event, 'blur');
    };
    const handleInputChange = (event)=>{
        const newValue = event.target.value;
        if (inputValue !== newValue) {
            setInputValueState(newValue);
            setInputPristine(false);
            if (onInputChange) {
                onInputChange(event, newValue, 'input');
            }
        }
        if (newValue === '') {
            if (!disableClearable && !multiple) {
                handleValue(event, null, 'clear');
            }
        } else {
            handleOpen(event);
        }
    };
    const handleOptionMouseMove = (event)=>{
        const index = Number(event.currentTarget.getAttribute('data-option-index'));
        if (highlightedIndexRef.current !== index) {
            setHighlightedIndex({
                event,
                index,
                reason: 'mouse'
            });
        }
    };
    const handleOptionTouchStart = (event)=>{
        setHighlightedIndex({
            event,
            index: Number(event.currentTarget.getAttribute('data-option-index')),
            reason: 'touch'
        });
        isTouch.current = true;
    };
    const handleOptionClick = (event)=>{
        const index = Number(event.currentTarget.getAttribute('data-option-index'));
        selectNewValue(event, filteredOptions[index], 'selectOption');
        isTouch.current = false;
    };
    const handleTagDelete = (index)=>(event)=>{
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'removeOption', {
                option: value[index]
            });
        };
    const handlePopupIndicator = (event)=>{
        if (open) {
            handleClose(event, 'toggleInput');
        } else {
            handleOpen(event);
        }
    };
    // Prevent input blur when interacting with the combobox
    const handleMouseDown = (event)=>{
        // Prevent focusing the input if click is anywhere outside the Autocomplete
        if (!event.currentTarget.contains(event.target)) {
            return;
        }
        if (event.target.getAttribute('id') !== id) {
            event.preventDefault();
        }
    };
    // Focus the input when interacting with the combobox
    const handleClick = (event)=>{
        // Prevent focusing the input if click is anywhere outside the Autocomplete
        if (!event.currentTarget.contains(event.target)) {
            return;
        }
        inputRef.current.focus();
        if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
            inputRef.current.select();
        }
        firstFocus.current = false;
    };
    const handleInputMouseDown = (event)=>{
        if (!disabledProp && (inputValue === '' || !open)) {
            handlePopupIndicator(event);
        }
    };
    let dirty = freeSolo && inputValue.length > 0;
    dirty = dirty || (multiple ? value.length > 0 : value !== null);
    let groupedOptions = filteredOptions;
    if (groupBy) {
        // used to keep track of key and indexes in the result array
        const indexBy = new Map();
        let warn = false;
        groupedOptions = filteredOptions.reduce((acc, option, index)=>{
            const group = groupBy(option);
            if (acc.length > 0 && acc[acc.length - 1].group === group) {
                acc[acc.length - 1].options.push(option);
            } else {
                if (false) {}
                acc.push({
                    key: index,
                    index,
                    group,
                    options: [
                        option
                    ]
                });
            }
            return acc;
        }, []);
    }
    if (disabledProp && focused) {
        handleBlur();
    }
    return {
        getRootProps: function() {
            let other = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return {
                ...other,
                onKeyDown: handleKeyDown(other),
                onMouseDown: handleMouseDown,
                onClick: handleClick
            };
        },
        getInputLabelProps: ()=>({
                id: "".concat(id, "-label"),
                htmlFor: id
            }),
        getInputProps: ()=>({
                id,
                value: inputValue,
                onBlur: handleBlur,
                onFocus: handleFocus,
                onChange: handleInputChange,
                onMouseDown: handleInputMouseDown,
                // if open then this is handled imperatively so don't let react override
                // only have an opinion about this when closed
                'aria-activedescendant': popupOpen ? '' : null,
                'aria-autocomplete': autoComplete ? 'both' : 'list',
                'aria-controls': listboxAvailable ? "".concat(id, "-listbox") : undefined,
                'aria-expanded': listboxAvailable,
                // Disable browser's suggestion that might overlap with the popup.
                // Handle autocomplete but not autofill.
                autoComplete: 'off',
                ref: inputRef,
                autoCapitalize: 'none',
                spellCheck: 'false',
                role: 'combobox',
                disabled: disabledProp
            }),
        getClearProps: ()=>({
                tabIndex: -1,
                type: 'button',
                onClick: handleClear
            }),
        getPopupIndicatorProps: ()=>({
                tabIndex: -1,
                type: 'button',
                onClick: handlePopupIndicator
            }),
        getTagProps: (param)=>{
            let { index } = param;
            return {
                key: index,
                'data-tag-index': index,
                tabIndex: -1,
                ...!readOnly && {
                    onDelete: handleTagDelete(index)
                }
            };
        },
        getListboxProps: ()=>({
                role: 'listbox',
                id: "".concat(id, "-listbox"),
                'aria-labelledby': "".concat(id, "-label"),
                ref: handleListboxRef,
                onMouseDown: (event)=>{
                    // Prevent blur
                    event.preventDefault();
                }
            }),
        getOptionProps: (param)=>{
            let { index, option } = param;
            const selected = (multiple ? value : [
                value
            ]).some((value2)=>value2 != null && isOptionEqualToValue(option, value2));
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
            var _getOptionKey;
            return {
                key: (_getOptionKey = getOptionKey === null || getOptionKey === void 0 ? void 0 : getOptionKey(option)) !== null && _getOptionKey !== void 0 ? _getOptionKey : getOptionLabel(option),
                tabIndex: -1,
                role: 'option',
                id: "".concat(id, "-option-").concat(index),
                onMouseMove: handleOptionMouseMove,
                onClick: handleOptionClick,
                onTouchStart: handleOptionTouchStart,
                'data-option-index': index,
                'aria-disabled': disabled,
                'aria-selected': selected
            };
        },
        id,
        inputValue,
        value,
        dirty,
        expanded: popupOpen && anchorEl,
        popupOpen,
        focused: focused || focusedTag !== -1,
        anchorEl,
        setAnchorEl,
        focusedTag,
        groupedOptions
    };
}
/* harmony default export */ const useAutocomplete_useAutocomplete = (useAutocomplete);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(93974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(16316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(51142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(48770);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js + 53 modules
var lib_popper = __webpack_require__(66293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(93430);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Portal/Portal.js
var Portal = __webpack_require__(19185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/popperClasses.js


function getPopperUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiPopper', slot);
}
const popperClasses = (0,generateUtilityClasses/* default */.A)('MuiPopper', [
    'root'
]);
/* harmony default export */ const Popper_popperClasses = ((/* unused pure expression or super */ null && (popperClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/BasePopper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








function flipPlacement(placement, direction) {
    if (direction === 'ltr') {
        return placement;
    }
    switch(placement){
        case 'bottom-end':
            return 'bottom-start';
        case 'bottom-start':
            return 'bottom-end';
        case 'top-end':
            return 'top-start';
        case 'top-start':
            return 'top-end';
        default:
            return placement;
    }
}
function resolveAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
    return element.nodeType !== undefined;
}
function isVirtualElement(element) {
    return !isHTMLElement(element);
}
const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/ react.forwardRef(function PopperTooltip(props, forwardedRef) {
    const { anchorEl, children, direction, disablePortal, modifiers, open, placement: initialPlacement, popperOptions, popperRef: popperRefProp, slotProps = {}, slots = {}, TransitionProps, // @ts-ignore internal logic
    ownerState: ownerStateProp, // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other } = props;
    const tooltipRef = react.useRef(null);
    const ownRef = (0,useForkRef/* default */.A)(tooltipRef, forwardedRef);
    const popperRef = react.useRef(null);
    const handlePopperRef = (0,useForkRef/* default */.A)(popperRef, popperRefProp);
    const handlePopperRefRef = react.useRef(handlePopperRef);
    (0,useEnhancedEffect/* default */.A)(()=>{
        handlePopperRefRef.current = handlePopperRef;
    }, [
        handlePopperRef
    ]);
    react.useImperativeHandle(popperRefProp, ()=>popperRef.current, []);
    const rtlPlacement = flipPlacement(initialPlacement, direction);
    /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */ const [placement, setPlacement] = react.useState(rtlPlacement);
    const [resolvedAnchorElement, setResolvedAnchorElement] = react.useState(resolveAnchorEl(anchorEl));
    react.useEffect(()=>{
        if (popperRef.current) {
            popperRef.current.forceUpdate();
        }
    });
    react.useEffect(()=>{
        if (anchorEl) {
            setResolvedAnchorElement(resolveAnchorEl(anchorEl));
        }
    }, [
        anchorEl
    ]);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (!resolvedAnchorElement || !open) {
            return undefined;
        }
        const handlePopperUpdate = (data)=>{
            setPlacement(data.placement);
        };
        if (false) {}
        let popperModifiers = [
            {
                name: 'preventOverflow',
                options: {
                    altBoundary: disablePortal
                }
            },
            {
                name: 'flip',
                options: {
                    altBoundary: disablePortal
                }
            },
            {
                name: 'onUpdate',
                enabled: true,
                phase: 'afterWrite',
                fn: (param)=>{
                    let { state } = param;
                    handlePopperUpdate(state);
                }
            }
        ];
        if (modifiers != null) {
            popperModifiers = popperModifiers.concat(modifiers);
        }
        if (popperOptions && popperOptions.modifiers != null) {
            popperModifiers = popperModifiers.concat(popperOptions.modifiers);
        }
        const popper = (0,lib_popper/* createPopper */.n4)(resolvedAnchorElement, tooltipRef.current, {
            placement: rtlPlacement,
            ...popperOptions,
            modifiers: popperModifiers
        });
        handlePopperRefRef.current(popper);
        return ()=>{
            popper.destroy();
            handlePopperRefRef.current(null);
        };
    }, [
        resolvedAnchorElement,
        disablePortal,
        modifiers,
        open,
        popperOptions,
        rtlPlacement
    ]);
    const childProps = {
        placement: placement
    };
    if (TransitionProps !== null) {
        childProps.TransitionProps = TransitionProps;
    }
    const classes = useUtilityClasses(props);
    var _slots_root;
    const Root = (_slots_root = slots.root) !== null && _slots_root !== void 0 ? _slots_root : 'div';
    const rootProps = (0,useSlotProps/* default */.A)({
        elementType: Root,
        externalSlotProps: slotProps.root,
        externalForwardedProps: other,
        additionalProps: {
            role: 'tooltip',
            ref: ownRef
        },
        ownerState: props,
        className: classes.root
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Root, {
        ...rootProps,
        children: typeof children === 'function' ? children(childProps) : children
    });
});
/**
 * @ignore - internal component.
 */ const Popper = /*#__PURE__*/ react.forwardRef(function Popper(props, forwardedRef) {
    const { anchorEl, children, container: containerProp, direction = 'ltr', disablePortal = false, keepMounted = false, modifiers, open, placement = 'bottom', popperOptions = defaultPopperOptions, popperRef, style, transition = false, slotProps = {}, slots = {}, ...other } = props;
    const [exited, setExited] = react.useState(true);
    const handleEnter = ()=>{
        setExited(false);
    };
    const handleExited = ()=>{
        setExited(true);
    };
    if (!keepMounted && !open && (!transition || exited)) {
        return null;
    }
    // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container
    let container;
    if (containerProp) {
        container = containerProp;
    } else if (anchorEl) {
        const resolvedAnchorEl = resolveAnchorEl(anchorEl);
        container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? (0,ownerDocument/* default */.A)(resolvedAnchorEl).body : (0,ownerDocument/* default */.A)(null).body;
    }
    const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
    const transitionProps = transition ? {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited
    } : undefined;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Portal/* default */.A, {
        disablePortal: disablePortal,
        container: container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperTooltip, {
            anchorEl: anchorEl,
            direction: direction,
            disablePortal: disablePortal,
            modifiers: modifiers,
            ref: forwardedRef,
            open: transition ? !exited : open,
            placement: placement,
            popperOptions: popperOptions,
            popperRef: popperRef,
            slotProps: slotProps,
            slots: slots,
            ...other,
            style: {
                // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
                position: 'fixed',
                // Fix Popper.js display issue
                top: 0,
                left: 0,
                display,
                ...style
            },
            TransitionProps: transitionProps,
            children: children
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const BasePopper = (Popper);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/Popper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const PopperRoot = (0,styled/* default */.Ay)(BasePopper, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({});
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://v6.mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://v6.mui.com/material-ui/react-menu/)
 * - [Popper](https://v6.mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://v6.mui.com/material-ui/api/popper/)
 */ const Popper_Popper = /*#__PURE__*/ react.forwardRef(function Popper(inProps, ref) {
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiPopper'
    });
    const { anchorEl, component, components, componentsProps, container, disablePortal, keepMounted, modifiers, open, placement, popperOptions, popperRef, transition, slots, slotProps, ...other } = props;
    var _slots_root;
    const RootComponent = (_slots_root = slots === null || slots === void 0 ? void 0 : slots.root) !== null && _slots_root !== void 0 ? _slots_root : components === null || components === void 0 ? void 0 : components.Root;
    const otherProps = {
        anchorEl,
        container,
        disablePortal,
        keepMounted,
        modifiers,
        open,
        placement,
        popperOptions,
        popperRef,
        transition,
        ...other
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperRoot, {
        as: component,
        direction: isRtl ? 'rtl' : 'ltr',
        slots: {
            root: RootComponent
        },
        slotProps: slotProps !== null && slotProps !== void 0 ? slotProps : componentsProps,
        ...otherProps,
        ref: ref
    });
});
 false ? 0 : void 0;
/* harmony default export */ const material_Popper_Popper = (Popper_Popper);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListSubheader/listSubheaderClasses.js


function getListSubheaderUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiListSubheader', slot);
}
const listSubheaderClasses = (0,generateUtilityClasses/* default */.A)('MuiListSubheader', [
    'root',
    'colorPrimary',
    'colorInherit',
    'gutters',
    'inset',
    'sticky'
]);
/* harmony default export */ const ListSubheader_listSubheaderClasses = ((/* unused pure expression or super */ null && (listSubheaderClasses)));

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListSubheader/ListSubheader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const ListSubheader_useUtilityClasses = (ownerState)=>{
    const { classes, color, disableGutters, inset, disableSticky } = ownerState;
    const slots = {
        root: [
            'root',
            color !== 'default' && "color".concat((0,capitalize/* default */.A)(color)),
            !disableGutters && 'gutters',
            inset && 'inset',
            !disableSticky && 'sticky'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getListSubheaderUtilityClass, classes);
};
const ListSubheaderRoot = (0,styled/* default */.Ay)('li', {
    name: 'MuiListSubheader',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            !ownerState.disableGutters && styles.gutters,
            ownerState.inset && styles.inset,
            !ownerState.disableSticky && styles.sticky
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        boxSizing: 'border-box',
        lineHeight: '48px',
        listStyle: 'none',
        color: (theme.vars || theme).palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(14),
        variants: [
            {
                props: {
                    color: 'primary'
                },
                style: {
                    color: (theme.vars || theme).palette.primary.main
                }
            },
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableGutters;
                },
                style: {
                    paddingLeft: 16,
                    paddingRight: 16
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.inset;
                },
                style: {
                    paddingLeft: 72
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableSticky;
                },
                style: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: (theme.vars || theme).palette.background.paper
                }
            }
        ]
    };
}));
const ListSubheader = /*#__PURE__*/ react.forwardRef(function ListSubheader(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiListSubheader'
    });
    const { className, color = 'default', component = 'li', disableGutters = false, disableSticky = false, inset = false, ...other } = props;
    const ownerState = {
        ...props,
        color,
        component,
        disableGutters,
        disableSticky,
        inset
    };
    const classes = ListSubheader_useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubheaderRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ownerState: ownerState,
        ...other
    });
});
if (ListSubheader) {
    ListSubheader.muiSkipListHighlight = true;
}
 false ? 0 : void 0;
/* harmony default export */ const ListSubheader_ListSubheader = (ListSubheader);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(59864);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/Cancel.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const Cancel = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var utils_useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 7 modules
var ButtonBase = __webpack_require__(83595);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/chipClasses.js


function getChipUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiChip', slot);
}
const chipClasses = (0,generateUtilityClasses/* default */.A)('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorDefault',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible'
]);
/* harmony default export */ const Chip_chipClasses = (chipClasses);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const Chip_useUtilityClasses = (ownerState)=>{
    const { classes, disabled, size, color, iconColor, onDelete, clickable, variant } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            disabled && 'disabled',
            "size".concat((0,capitalize/* default */.A)(size)),
            "color".concat((0,capitalize/* default */.A)(color)),
            clickable && 'clickable',
            clickable && "clickableColor".concat((0,capitalize/* default */.A)(color)),
            onDelete && 'deletable',
            onDelete && "deletableColor".concat((0,capitalize/* default */.A)(color)),
            "".concat(variant).concat((0,capitalize/* default */.A)(color))
        ],
        label: [
            'label',
            "label".concat((0,capitalize/* default */.A)(size))
        ],
        avatar: [
            'avatar',
            "avatar".concat((0,capitalize/* default */.A)(size)),
            "avatarColor".concat((0,capitalize/* default */.A)(color))
        ],
        icon: [
            'icon',
            "icon".concat((0,capitalize/* default */.A)(size)),
            "iconColor".concat((0,capitalize/* default */.A)(iconColor))
        ],
        deleteIcon: [
            'deleteIcon',
            "deleteIcon".concat((0,capitalize/* default */.A)(size)),
            "deleteIconColor".concat((0,capitalize/* default */.A)(color)),
            "deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getChipUtilityClass, classes);
};
const ChipRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { color, iconColor, clickable, onDelete, size, variant } = ownerState;
        return [
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles.avatar
            },
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles["avatar".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.avatar)]: styles["avatarColor".concat((0,capitalize/* default */.A)(color))]
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles.icon
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles["icon".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.icon)]: styles["iconColor".concat((0,capitalize/* default */.A)(iconColor))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles.deleteIcon
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIconColor".concat((0,capitalize/* default */.A)(color))]
            },
            {
                ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))]
            },
            styles.root,
            styles["size".concat((0,capitalize/* default */.A)(size))],
            styles["color".concat((0,capitalize/* default */.A)(color))],
            clickable && styles.clickable,
            clickable && color !== 'default' && styles["clickableColor".concat((0,capitalize/* default */.A)(color), ")")],
            onDelete && styles.deletable,
            onDelete && color !== 'default' && styles["deletableColor".concat((0,capitalize/* default */.A)(color))],
            styles[variant],
            styles["".concat(variant).concat((0,capitalize/* default */.A)(color))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
    return {
        maxWidth: '100%',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: (theme.vars || theme).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create([
            'background-color',
            'box-shadow'
        ]),
        // reset cursor explicitly in case ButtonBase is used
        cursor: 'unset',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        textDecoration: 'none',
        border: 0,
        // Remove `button` border
        padding: 0,
        // Remove `button` padding
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        ["&.".concat(Chip_chipClasses.disabled)]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity,
            pointerEvents: 'none'
        },
        ["& .".concat(Chip_chipClasses.avatar)]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
            fontSize: theme.typography.pxToRem(12)
        },
        ["& .".concat(Chip_chipClasses.avatarColorPrimary)]: {
            color: (theme.vars || theme).palette.primary.contrastText,
            backgroundColor: (theme.vars || theme).palette.primary.dark
        },
        ["& .".concat(Chip_chipClasses.avatarColorSecondary)]: {
            color: (theme.vars || theme).palette.secondary.contrastText,
            backgroundColor: (theme.vars || theme).palette.secondary.dark
        },
        ["& .".concat(Chip_chipClasses.avatarSmall)]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: theme.typography.pxToRem(10)
        },
        ["& .".concat(Chip_chipClasses.icon)]: {
            marginLeft: 5,
            marginRight: -6
        },
        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
            WebkitTapHighlightColor: 'transparent',
            color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.26)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.26),
            fontSize: 22,
            cursor: 'pointer',
            margin: '0 5px 0 -6px',
            '&:hover': {
                color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.4)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.4)
            }
        },
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    height: 24,
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        fontSize: 18,
                        marginLeft: 4,
                        marginRight: -4
                    },
                    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                        fontSize: 16,
                        marginRight: 4,
                        marginLeft: -4
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'contrastText'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: (theme.vars || theme).palette[color].main,
                        color: (theme.vars || theme).palette[color].contrastText,
                        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                            color: theme.vars ? "rgba(".concat(theme.vars.palette[color].contrastTextChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].contrastText, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].contrastText
                            }
                        }
                    }
                };
            }),
            {
                props: (props)=>props.iconColor === props.color,
                style: {
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
                    }
                }
            },
            {
                props: (props)=>props.iconColor === props.color && props.color !== 'default',
                style: {
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        color: 'inherit'
                    }
                }
            },
            {
                props: {
                    onDelete: true
                },
                style: {
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color,
                        onDelete: true
                    },
                    style: {
                        ["&.".concat(Chip_chipClasses.focusVisible)]: {
                            background: (theme.vars || theme).palette[color].dark
                        }
                    }
                };
            }),
            {
                props: {
                    clickable: true
                },
                style: {
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
                    },
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
                    },
                    '&:active': {
                        boxShadow: (theme.vars || theme).shadows[1]
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'dark'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color,
                        clickable: true
                    },
                    style: {
                        ["&:hover, &.".concat(Chip_chipClasses.focusVisible)]: {
                            backgroundColor: (theme.vars || theme).palette[color].dark
                        }
                    }
                };
            }),
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    backgroundColor: 'transparent',
                    border: theme.vars ? "1px solid ".concat(theme.vars.palette.Chip.defaultBorder) : "1px solid ".concat(theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]),
                    ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
                        backgroundColor: (theme.vars || theme).palette.action.hover
                    },
                    ["&.".concat(Chip_chipClasses.focusVisible)]: {
                        backgroundColor: (theme.vars || theme).palette.action.focus
                    },
                    ["& .".concat(Chip_chipClasses.avatar)]: {
                        marginLeft: 4
                    },
                    ["& .".concat(Chip_chipClasses.avatarSmall)]: {
                        marginLeft: 2
                    },
                    ["& .".concat(Chip_chipClasses.icon)]: {
                        marginLeft: 4
                    },
                    ["& .".concat(Chip_chipClasses.iconSmall)]: {
                        marginLeft: 2
                    },
                    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                        marginRight: 5
                    },
                    ["& .".concat(Chip_chipClasses.deleteIconSmall)]: {
                        marginRight: 3
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // no need to check for mainChannel as it's calculated from main
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        variant: 'outlined',
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main,
                        border: "1px solid ".concat(theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, 0.7)),
                        ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
                            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                        },
                        ["&.".concat(Chip_chipClasses.focusVisible)]: {
                            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.focusOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.focusOpacity)
                        },
                        ["& .".concat(Chip_chipClasses.deleteIcon)]: {
                            color: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, 0.7),
                            '&:hover, &:active': {
                                color: (theme.vars || theme).palette[color].main
                            }
                        }
                    }
                };
            })
        ]
    };
}));
const ChipLabel = (0,styled/* default */.Ay)('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { size } = ownerState;
        return [
            styles.label,
            styles["label".concat((0,capitalize/* default */.A)(size))]
        ];
    }
})({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap',
    variants: [
        {
            props: {
                variant: 'outlined'
            },
            style: {
                paddingLeft: 11,
                paddingRight: 11
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                paddingLeft: 8,
                paddingRight: 8
            }
        },
        {
            props: {
                size: 'small',
                variant: 'outlined'
            },
            style: {
                paddingLeft: 7,
                paddingRight: 7
            }
        }
    ]
});
function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */ const Chip = /*#__PURE__*/ react.forwardRef(function Chip(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiChip'
    });
    const { avatar: avatarProp, className, clickable: clickableProp, color = 'default', component: ComponentProp, deleteIcon: deleteIconProp, disabled = false, icon: iconProp, label, onClick, onDelete, onKeyDown, onKeyUp, size = 'medium', variant = 'filled', tabIndex, skipFocusWhenDisabled = false, // TODO v6: Rename to `focusableWhenDisabled`.
    ...other } = props;
    const chipRef = react.useRef(null);
    const handleRef = (0,utils_useForkRef/* default */.A)(chipRef, ref);
    const handleDeleteIconClick = (event)=>{
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation();
        if (onDelete) {
            onDelete(event);
        }
    };
    const handleKeyDown = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
            // Will be handled in keyUp, otherwise some browsers
            // might init navigation
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    const handleKeyUp = (event)=>{
        // Ignore events from children of `Chip`.
        if (event.currentTarget === event.target) {
            if (onDelete && isDeleteKeyboardEvent(event)) {
                onDelete(event);
            }
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
    };
    const clickable = clickableProp !== false && onClick ? true : clickableProp;
    const component = clickable || onDelete ? ButtonBase/* default */.A : ComponentProp || 'div';
    const ownerState = {
        ...props,
        component,
        disabled,
        size,
        color,
        iconColor: /*#__PURE__*/ react.isValidElement(iconProp) ? iconProp.props.color || color : color,
        onDelete: !!onDelete,
        clickable,
        variant
    };
    const classes = Chip_useUtilityClasses(ownerState);
    const moreProps = component === ButtonBase/* default */.A ? {
        component: ComponentProp || 'div',
        focusVisibleClassName: classes.focusVisible,
        ...onDelete && {
            disableRipple: true
        }
    } : {};
    let deleteIcon = null;
    if (onDelete) {
        deleteIcon = deleteIconProp && /*#__PURE__*/ react.isValidElement(deleteIconProp) ? /*#__PURE__*/ react.cloneElement(deleteIconProp, {
            className: (0,clsx/* default */.A)(deleteIconProp.props.className, classes.deleteIcon),
            onClick: handleDeleteIconClick
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Cancel, {
            className: (0,clsx/* default */.A)(classes.deleteIcon),
            onClick: handleDeleteIconClick
        });
    }
    let avatar = null;
    if (avatarProp && /*#__PURE__*/ react.isValidElement(avatarProp)) {
        avatar = /*#__PURE__*/ react.cloneElement(avatarProp, {
            className: (0,clsx/* default */.A)(classes.avatar, avatarProp.props.className)
        });
    }
    let icon = null;
    if (iconProp && /*#__PURE__*/ react.isValidElement(iconProp)) {
        icon = /*#__PURE__*/ react.cloneElement(iconProp, {
            className: (0,clsx/* default */.A)(classes.icon, iconProp.props.className)
        });
    }
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ChipRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        disabled: clickable && disabled ? true : undefined,
        onClick: onClick,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        ref: handleRef,
        tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
        ownerState: ownerState,
        ...moreProps,
        ...other,
        children: [
            avatar || icon,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ChipLabel, {
                className: (0,clsx/* default */.A)(classes.label),
                ownerState: ownerState,
                children: label
            }),
            deleteIcon
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Chip_Chip = (Chip);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Input/inputClasses.js
var inputClasses = __webpack_require__(26649);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputBase/inputBaseClasses.js
var inputBaseClasses = __webpack_require__(25245);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
var outlinedInputClasses = __webpack_require__(69901);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FilledInput/filledInputClasses.js
var filledInputClasses = __webpack_require__(32261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/Close.js
var Close = __webpack_require__(65840);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(55912);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Autocomplete/autocompleteClasses.js


function getAutocompleteUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiAutocomplete', slot);
}
const autocompleteClasses = (0,generateUtilityClasses/* default */.A)('MuiAutocomplete', [
    'root',
    'expanded',
    'fullWidth',
    'focused',
    'focusVisible',
    'tag',
    'tagSizeSmall',
    'tagSizeMedium',
    'hasPopupIcon',
    'hasClearIcon',
    'inputRoot',
    'input',
    'inputFocused',
    'endAdornment',
    'clearIndicator',
    'popupIndicator',
    'popupIndicatorOpen',
    'popper',
    'popperDisablePortal',
    'paper',
    'listbox',
    'loading',
    'noOptions',
    'option',
    'groupLabel',
    'groupUl'
]);
/* harmony default export */ const Autocomplete_autocompleteClasses = (autocompleteClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Autocomplete/Autocomplete.js
/* __next_internal_client_entry_do_not_use__ createFilterOptions,default auto */ var _ClearIcon, _ArrowDropDownIcon;


























const Autocomplete_useUtilityClasses = (ownerState)=>{
    const { classes, disablePortal, expanded, focused, fullWidth, hasClearIcon, hasPopupIcon, inputFocused, popupOpen, size } = ownerState;
    const slots = {
        root: [
            'root',
            expanded && 'expanded',
            focused && 'focused',
            fullWidth && 'fullWidth',
            hasClearIcon && 'hasClearIcon',
            hasPopupIcon && 'hasPopupIcon'
        ],
        inputRoot: [
            'inputRoot'
        ],
        input: [
            'input',
            inputFocused && 'inputFocused'
        ],
        tag: [
            'tag',
            "tagSize".concat((0,capitalize/* default */.A)(size))
        ],
        endAdornment: [
            'endAdornment'
        ],
        clearIndicator: [
            'clearIndicator'
        ],
        popupIndicator: [
            'popupIndicator',
            popupOpen && 'popupIndicatorOpen'
        ],
        popper: [
            'popper',
            disablePortal && 'popperDisablePortal'
        ],
        paper: [
            'paper'
        ],
        listbox: [
            'listbox'
        ],
        loading: [
            'loading'
        ],
        noOptions: [
            'noOptions'
        ],
        option: [
            'option'
        ],
        groupLabel: [
            'groupLabel'
        ],
        groupUl: [
            'groupUl'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getAutocompleteUtilityClass, classes);
};
const AutocompleteRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiAutocomplete',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        const { fullWidth, hasClearIcon, hasPopupIcon, inputFocused, size } = ownerState;
        return [
            {
                ["& .".concat(Autocomplete_autocompleteClasses.tag)]: styles.tag
            },
            {
                ["& .".concat(Autocomplete_autocompleteClasses.tag)]: styles["tagSize".concat((0,capitalize/* default */.A)(size))]
            },
            {
                ["& .".concat(Autocomplete_autocompleteClasses.inputRoot)]: styles.inputRoot
            },
            {
                ["& .".concat(Autocomplete_autocompleteClasses.input)]: styles.input
            },
            {
                ["& .".concat(Autocomplete_autocompleteClasses.input)]: inputFocused && styles.inputFocused
            },
            styles.root,
            fullWidth && styles.fullWidth,
            hasPopupIcon && styles.hasPopupIcon,
            hasClearIcon && styles.hasClearIcon
        ];
    }
})({
    ["&.".concat(Autocomplete_autocompleteClasses.focused, " .").concat(Autocomplete_autocompleteClasses.clearIndicator)]: {
        visibility: 'visible'
    },
    /* Avoid double tap issue on iOS */ '@media (pointer: fine)': {
        ["&:hover .".concat(Autocomplete_autocompleteClasses.clearIndicator)]: {
            visibility: 'visible'
        }
    },
    ["& .".concat(Autocomplete_autocompleteClasses.tag)]: {
        margin: 3,
        maxWidth: 'calc(100% - 6px)'
    },
    ["& .".concat(Autocomplete_autocompleteClasses.inputRoot)]: {
        [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, "&, .").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
            paddingRight: 26 + 4
        },
        [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, ".").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
            paddingRight: 52 + 4
        },
        ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
            width: 0,
            minWidth: 30
        }
    },
    ["& .".concat(inputClasses/* default */.A.root)]: {
        paddingBottom: 1,
        '& .MuiInput-input': {
            padding: '4px 4px 4px 0px'
        }
    },
    ["& .".concat(inputClasses/* default */.A.root, ".").concat(inputBaseClasses/* default */.A.sizeSmall)]: {
        ["& .".concat(inputClasses/* default */.A.input)]: {
            padding: '2px 4px 3px 0'
        }
    },
    ["& .".concat(outlinedInputClasses/* default */.A.root)]: {
        padding: 9,
        [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, "&, .").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
            paddingRight: 26 + 4 + 9
        },
        [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, ".").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
            paddingRight: 52 + 4 + 9
        },
        ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
            padding: '7.5px 4px 7.5px 5px'
        },
        ["& .".concat(Autocomplete_autocompleteClasses.endAdornment)]: {
            right: 9
        }
    },
    ["& .".concat(outlinedInputClasses/* default */.A.root, ".").concat(inputBaseClasses/* default */.A.sizeSmall)]: {
        // Don't specify paddingRight, as it overrides the default value set when there is only
        // one of the popup or clear icon as the specificity is equal so the latter one wins
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 6,
        ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
            padding: '2.5px 4px 2.5px 8px'
        }
    },
    ["& .".concat(filledInputClasses/* default */.A.root)]: {
        paddingTop: 19,
        paddingLeft: 8,
        [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, "&, .").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
            paddingRight: 26 + 4 + 9
        },
        [".".concat(Autocomplete_autocompleteClasses.hasPopupIcon, ".").concat(Autocomplete_autocompleteClasses.hasClearIcon, "&")]: {
            paddingRight: 52 + 4 + 9
        },
        ["& .".concat(filledInputClasses/* default */.A.input)]: {
            padding: '7px 4px'
        },
        ["& .".concat(Autocomplete_autocompleteClasses.endAdornment)]: {
            right: 9
        }
    },
    ["& .".concat(filledInputClasses/* default */.A.root, ".").concat(inputBaseClasses/* default */.A.sizeSmall)]: {
        paddingBottom: 1,
        ["& .".concat(filledInputClasses/* default */.A.input)]: {
            padding: '2.5px 4px'
        }
    },
    ["& .".concat(inputBaseClasses/* default */.A.hiddenLabel)]: {
        paddingTop: 8
    },
    ["& .".concat(filledInputClasses/* default */.A.root, ".").concat(inputBaseClasses/* default */.A.hiddenLabel)]: {
        paddingTop: 0,
        paddingBottom: 0,
        ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
            paddingTop: 16,
            paddingBottom: 17
        }
    },
    ["& .".concat(filledInputClasses/* default */.A.root, ".").concat(inputBaseClasses/* default */.A.hiddenLabel, ".").concat(inputBaseClasses/* default */.A.sizeSmall)]: {
        ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
            paddingTop: 8,
            paddingBottom: 9
        }
    },
    ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
        flexGrow: 1,
        textOverflow: 'ellipsis',
        opacity: 0
    },
    variants: [
        {
            props: {
                fullWidth: true
            },
            style: {
                width: '100%'
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                ["& .".concat(Autocomplete_autocompleteClasses.tag)]: {
                    margin: 2,
                    maxWidth: 'calc(100% - 4px)'
                }
            }
        },
        {
            props: {
                inputFocused: true
            },
            style: {
                ["& .".concat(Autocomplete_autocompleteClasses.input)]: {
                    opacity: 1
                }
            }
        },
        {
            props: {
                multiple: true
            },
            style: {
                ["& .".concat(Autocomplete_autocompleteClasses.inputRoot)]: {
                    flexWrap: 'wrap'
                }
            }
        }
    ]
});
const AutocompleteEndAdornment = (0,styled/* default */.Ay)('div', {
    name: 'MuiAutocomplete',
    slot: 'EndAdornment',
    overridesResolver: (props, styles)=>styles.endAdornment
})({
    // We use a position absolute to support wrapping tags.
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0, -50%)'
});
const AutocompleteClearIndicator = (0,styled/* default */.Ay)(IconButton/* default */.A, {
    name: 'MuiAutocomplete',
    slot: 'ClearIndicator',
    overridesResolver: (props, styles)=>styles.clearIndicator
})({
    marginRight: -2,
    padding: 4,
    visibility: 'hidden'
});
const AutocompletePopupIndicator = (0,styled/* default */.Ay)(IconButton/* default */.A, {
    name: 'MuiAutocomplete',
    slot: 'PopupIndicator',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.popupIndicator,
            ownerState.popupOpen && styles.popupIndicatorOpen
        ];
    }
})({
    padding: 2,
    marginRight: -2,
    variants: [
        {
            props: {
                popupOpen: true
            },
            style: {
                transform: 'rotate(180deg)'
            }
        }
    ]
});
const AutocompletePopper = (0,styled/* default */.Ay)(material_Popper_Popper, {
    name: 'MuiAutocomplete',
    slot: 'Popper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            {
                ["& .".concat(Autocomplete_autocompleteClasses.option)]: styles.option
            },
            styles.popper,
            ownerState.disablePortal && styles.popperDisablePortal
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        zIndex: (theme.vars || theme).zIndex.modal,
        variants: [
            {
                props: {
                    disablePortal: true
                },
                style: {
                    position: 'absolute'
                }
            }
        ]
    };
}));
const AutocompletePaper = (0,styled/* default */.Ay)(Paper/* default */.A, {
    name: 'MuiAutocomplete',
    slot: 'Paper',
    overridesResolver: (props, styles)=>styles.paper
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.body1,
        overflow: 'auto'
    };
}));
const AutocompleteLoading = (0,styled/* default */.Ay)('div', {
    name: 'MuiAutocomplete',
    slot: 'Loading',
    overridesResolver: (props, styles)=>styles.loading
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        color: (theme.vars || theme).palette.text.secondary,
        padding: '14px 16px'
    };
}));
const AutocompleteNoOptions = (0,styled/* default */.Ay)('div', {
    name: 'MuiAutocomplete',
    slot: 'NoOptions',
    overridesResolver: (props, styles)=>styles.noOptions
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        color: (theme.vars || theme).palette.text.secondary,
        padding: '14px 16px'
    };
}));
const AutocompleteListbox = (0,styled/* default */.Ay)('ul', {
    name: 'MuiAutocomplete',
    slot: 'Listbox',
    overridesResolver: (props, styles)=>styles.listbox
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        listStyle: 'none',
        margin: 0,
        padding: '8px 0',
        maxHeight: '40vh',
        overflow: 'auto',
        position: 'relative',
        ["& .".concat(Autocomplete_autocompleteClasses.option)]: {
            minHeight: 48,
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer',
            paddingTop: 6,
            boxSizing: 'border-box',
            outline: '0',
            WebkitTapHighlightColor: 'transparent',
            paddingBottom: 6,
            paddingLeft: 16,
            paddingRight: 16,
            [theme.breakpoints.up('sm')]: {
                minHeight: 'auto'
            },
            ["&.".concat(Autocomplete_autocompleteClasses.focused)]: {
                backgroundColor: (theme.vars || theme).palette.action.hover,
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: 'transparent'
                }
            },
            '&[aria-disabled="true"]': {
                opacity: (theme.vars || theme).palette.action.disabledOpacity,
                pointerEvents: 'none'
            },
            ["&.".concat(Autocomplete_autocompleteClasses.focusVisible)]: {
                backgroundColor: (theme.vars || theme).palette.action.focus
            },
            '&[aria-selected="true"]': {
                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
                ["&.".concat(Autocomplete_autocompleteClasses.focused)]: {
                    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        backgroundColor: (theme.vars || theme).palette.action.selected
                    }
                },
                ["&.".concat(Autocomplete_autocompleteClasses.focusVisible)]: {
                    backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
                }
            }
        }
    };
}));
const AutocompleteGroupLabel = (0,styled/* default */.Ay)(ListSubheader_ListSubheader, {
    name: 'MuiAutocomplete',
    slot: 'GroupLabel',
    overridesResolver: (props, styles)=>styles.groupLabel
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        backgroundColor: (theme.vars || theme).palette.background.paper,
        top: -8
    };
}));
const AutocompleteGroupUl = (0,styled/* default */.Ay)('ul', {
    name: 'MuiAutocomplete',
    slot: 'GroupUl',
    overridesResolver: (props, styles)=>styles.groupUl
})({
    padding: 0,
    ["& .".concat(Autocomplete_autocompleteClasses.option)]: {
        paddingLeft: 24
    }
});

const Autocomplete = /*#__PURE__*/ react.forwardRef(function Autocomplete(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiAutocomplete'
    });
    /* eslint-disable @typescript-eslint/no-unused-vars */ const { autoComplete = false, autoHighlight = false, autoSelect = false, blurOnSelect = false, ChipProps: ChipPropsProp, className, clearIcon = _ClearIcon || (_ClearIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {
        fontSize: "small"
    })), clearOnBlur = !props.freeSolo, clearOnEscape = false, clearText = 'Clear', closeText = 'Close', componentsProps, defaultValue = props.multiple ? [] : null, disableClearable = false, disableCloseOnSelect = false, disabled = false, disabledItemsFocusable = false, disableListWrap = false, disablePortal = false, filterOptions, filterSelectedOptions = false, forcePopupIcon = 'auto', freeSolo = false, fullWidth = false, getLimitTagsText = (more)=>"+".concat(more), getOptionDisabled, getOptionKey, getOptionLabel: getOptionLabelProp, isOptionEqualToValue, groupBy, handleHomeEndKeys = !props.freeSolo, id: idProp, includeInputInList = false, inputValue: inputValueProp, limitTags = -1, ListboxComponent: ListboxComponentProp, ListboxProps: ListboxPropsProp, loading = false, loadingText = 'Loading…', multiple = false, noOptionsText = 'No options', onChange, onClose, onHighlightChange, onInputChange, onOpen, open, openOnFocus = false, openText = 'Open', options, PaperComponent: PaperComponentProp, PopperComponent: PopperComponentProp, popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.A, {})), readOnly = false, renderGroup: renderGroupProp, renderInput, renderOption: renderOptionProp, renderTags, selectOnFocus = !props.freeSolo, size = 'medium', slots = {}, slotProps = {}, value: valueProp, ...other } = props;
    /* eslint-enable @typescript-eslint/no-unused-vars */ const { getRootProps, getInputProps, getInputLabelProps, getPopupIndicatorProps, getClearProps, getTagProps, getListboxProps, getOptionProps, value, dirty, expanded, id, popupOpen, focused, focusedTag, anchorEl, setAnchorEl, inputValue, groupedOptions } = useAutocomplete_useAutocomplete({
        ...props,
        componentName: 'Autocomplete'
    });
    const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
    const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
    const { onMouseDown: handleInputMouseDown } = getInputProps();
    const { ref: listboxRef, ...otherListboxProps } = getListboxProps();
    const defaultGetOptionLabel = (option)=>{
        var _option_label;
        return (_option_label = option.label) !== null && _option_label !== void 0 ? _option_label : option;
    };
    const getOptionLabel = getOptionLabelProp || defaultGetOptionLabel;
    // If you modify this, make sure to keep the `AutocompleteOwnerState` type in sync.
    const ownerState = {
        ...props,
        disablePortal,
        expanded,
        focused,
        fullWidth,
        getOptionLabel,
        hasClearIcon,
        hasPopupIcon,
        inputFocused: focusedTag === -1,
        popupOpen,
        size
    };
    const classes = Autocomplete_useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots: {
            paper: PaperComponentProp,
            popper: PopperComponentProp,
            ...slots
        },
        slotProps: {
            chip: ChipPropsProp,
            listbox: ListboxPropsProp,
            ...componentsProps,
            ...slotProps
        }
    };
    const [ListboxSlot, listboxProps] = (0,useSlot/* default */.A)('listbox', {
        elementType: AutocompleteListbox,
        externalForwardedProps,
        ownerState,
        className: classes.listbox,
        additionalProps: otherListboxProps,
        ref: listboxRef
    });
    const [PaperSlot, paperProps] = (0,useSlot/* default */.A)('paper', {
        elementType: Paper/* default */.A,
        externalForwardedProps,
        ownerState,
        className: classes.paper
    });
    const [PopperSlot, popperProps] = (0,useSlot/* default */.A)('popper', {
        elementType: material_Popper_Popper,
        externalForwardedProps,
        ownerState,
        className: classes.popper,
        additionalProps: {
            disablePortal,
            style: {
                width: anchorEl ? anchorEl.clientWidth : null
            },
            role: 'presentation',
            anchorEl,
            open: popupOpen
        }
    });
    let startAdornment;
    if (multiple && value.length > 0) {
        const getCustomizedTagProps = (params)=>({
                className: classes.tag,
                disabled,
                ...getTagProps(params)
            });
        if (renderTags) {
            startAdornment = renderTags(value, getCustomizedTagProps, ownerState);
        } else {
            startAdornment = value.map((option, index)=>{
                const { key, ...customTagProps } = getCustomizedTagProps({
                    index
                });
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip_Chip, {
                    label: getOptionLabel(option),
                    size: size,
                    ...customTagProps,
                    ...externalForwardedProps.slotProps.chip
                }, key);
            });
        }
    }
    if (limitTags > -1 && Array.isArray(startAdornment)) {
        const more = startAdornment.length - limitTags;
        if (!focused && more > 0) {
            startAdornment = startAdornment.splice(0, limitTags);
            startAdornment.push(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.tag,
                children: getLimitTagsText(more)
            }, startAdornment.length));
        }
    }
    const defaultRenderGroup = (params)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompleteGroupLabel, {
                    className: classes.groupLabel,
                    ownerState: ownerState,
                    component: "div",
                    children: params.group
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompleteGroupUl, {
                    className: classes.groupUl,
                    ownerState: ownerState,
                    children: params.children
                })
            ]
        }, params.key);
    const renderGroup = renderGroupProp || defaultRenderGroup;
    const defaultRenderOption = (props2, option)=>{
        // Need to clearly apply key because of https://github.com/vercel/next.js/issues/55642
        const { key, ...otherProps } = props2;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
            ...otherProps,
            children: getOptionLabel(option)
        }, key);
    };
    const renderOption = renderOptionProp || defaultRenderOption;
    const renderListOption = (option, index)=>{
        const optionProps = getOptionProps({
            option,
            index
        });
        return renderOption({
            ...optionProps,
            className: classes.option
        }, option, {
            selected: optionProps['aria-selected'],
            index,
            inputValue
        }, ownerState);
    };
    const clearIndicatorSlotProps = externalForwardedProps.slotProps.clearIndicator;
    const popupIndicatorSlotProps = externalForwardedProps.slotProps.popupIndicator;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompleteRoot, {
                ref: ref,
                className: (0,clsx/* default */.A)(classes.root, className),
                ownerState: ownerState,
                ...getRootProps(other),
                children: renderInput({
                    id,
                    disabled,
                    fullWidth: true,
                    size: size === 'small' ? 'small' : undefined,
                    InputLabelProps: getInputLabelProps(),
                    InputProps: {
                        ref: setAnchorEl,
                        className: classes.inputRoot,
                        startAdornment,
                        onMouseDown: (event)=>{
                            if (event.target === event.currentTarget) {
                                handleInputMouseDown(event);
                            }
                        },
                        ...(hasClearIcon || hasPopupIcon) && {
                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AutocompleteEndAdornment, {
                                className: classes.endAdornment,
                                ownerState: ownerState,
                                children: [
                                    hasClearIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompleteClearIndicator, {
                                        ...getClearProps(),
                                        "aria-label": clearText,
                                        title: clearText,
                                        ownerState: ownerState,
                                        ...clearIndicatorSlotProps,
                                        className: (0,clsx/* default */.A)(classes.clearIndicator, clearIndicatorSlotProps === null || clearIndicatorSlotProps === void 0 ? void 0 : clearIndicatorSlotProps.className),
                                        children: clearIcon
                                    }) : null,
                                    hasPopupIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompletePopupIndicator, {
                                        ...getPopupIndicatorProps(),
                                        disabled: disabled,
                                        "aria-label": popupOpen ? closeText : openText,
                                        title: popupOpen ? closeText : openText,
                                        ownerState: ownerState,
                                        ...popupIndicatorSlotProps,
                                        className: (0,clsx/* default */.A)(classes.popupIndicator, popupIndicatorSlotProps === null || popupIndicatorSlotProps === void 0 ? void 0 : popupIndicatorSlotProps.className),
                                        children: popupIcon
                                    }) : null
                                ]
                            })
                        }
                    },
                    inputProps: {
                        className: classes.input,
                        disabled,
                        readOnly,
                        ...getInputProps()
                    }
                })
            }),
            anchorEl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompletePopper, {
                as: PopperSlot,
                ...popperProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AutocompletePaper, {
                    as: PaperSlot,
                    ...paperProps,
                    children: [
                        loading && groupedOptions.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompleteLoading, {
                            className: classes.loading,
                            ownerState: ownerState,
                            children: loadingText
                        }) : null,
                        groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutocompleteNoOptions, {
                            className: classes.noOptions,
                            ownerState: ownerState,
                            role: "presentation",
                            onMouseDown: (event)=>{
                                // Prevent input blur when interacting with the "no options" content
                                event.preventDefault();
                            },
                            children: noOptionsText
                        }) : null,
                        groupedOptions.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListboxSlot, {
                            as: ListboxComponentProp,
                            ...listboxProps,
                            children: groupedOptions.map((option, index)=>{
                                if (groupBy) {
                                    return renderGroup({
                                        key: option.key,
                                        group: option.group,
                                        children: option.options.map((option2, index2)=>renderListOption(option2, option.index + index2))
                                    });
                                }
                                return renderListOption(option, index);
                            })
                        }) : null
                    ]
                })
            }) : null
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Autocomplete_Autocomplete = (Autocomplete);


/***/ })

}]);
//# sourceMappingURL=532-bd4cba254cf4c960.js.map
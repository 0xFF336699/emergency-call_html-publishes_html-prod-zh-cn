"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[124],{

/***/ 9431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), 'DragIndicator'));


/***/ }),

/***/ 22503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M8 5v14l11-7z"
}), 'PlayArrow'));


/***/ }),

/***/ 22800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JR: () => (/* binding */ sortableKeyboardCoordinates),
/* harmony export */   _G: () => (/* binding */ verticalListSortingStrategy),
/* harmony export */   be: () => (/* binding */ arrayMove),
/* harmony export */   gB: () => (/* binding */ SortableContext),
/* harmony export */   gl: () => (/* binding */ useSortable)
/* harmony export */ });
/* unused harmony exports arraySwap, defaultAnimateLayoutChanges, defaultNewIndexGetter, hasSortableData, horizontalListSortingStrategy, rectSortingStrategy, rectSwappingStrategy */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55047);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34826);




/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}

/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */
function arraySwap(array, from, to) {
  const newArray = array.slice();
  newArray[from] = array[to];
  newArray[to] = array[from];
  return newArray;
}

function getSortedRects(items, rects) {
  return items.reduce((accumulator, id, index) => {
    const rect = rects.get(id);

    if (rect) {
      accumulator[index] = rect;
    }

    return accumulator;
  }, Array(items.length));
}

function isValidIndex(index) {
  return index !== null && index >= 0;
}

function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function normalizeDisabled(disabled) {
  if (typeof disabled === 'boolean') {
    return {
      draggable: disabled,
      droppable: disabled
    };
  }

  return disabled;
}

// To-do: We should be calculating scale transformation
const defaultScale = {
  scaleX: 1,
  scaleY: 1
};
const horizontalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    rects,
    activeNodeRect: fallbackActiveRect,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  const itemGap = getItemGap(rects, index, activeIndex);

  if (index === activeIndex) {
    const newIndexRect = rects[overIndex];

    if (!newIndexRect) {
      return null;
    }

    return {
      x: activeIndex < overIndex ? newIndexRect.left + newIndexRect.width - (activeNodeRect.left + activeNodeRect.width) : newIndexRect.left - activeNodeRect.left,
      y: 0,
      ...defaultScale
    };
  }

  if (index > activeIndex && index <= overIndex) {
    return {
      x: -activeNodeRect.width - itemGap,
      y: 0,
      ...defaultScale
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: activeNodeRect.width + itemGap,
      y: 0,
      ...defaultScale
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale
  };
};

function getItemGap(rects, index, activeIndex) {
  const currentRect = rects[index];
  const previousRect = rects[index - 1];
  const nextRect = rects[index + 1];

  if (!currentRect || !previousRect && !nextRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.left - (previousRect.left + previousRect.width) : nextRect.left - (currentRect.left + currentRect.width);
  }

  return nextRect ? nextRect.left - (currentRect.left + currentRect.width) : currentRect.left - (previousRect.left + previousRect.width);
}

const rectSortingStrategy = _ref => {
  let {
    rects,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index];
  const newRect = newRects[index];

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

const rectSwappingStrategy = _ref => {
  let {
    activeIndex,
    index,
    rects,
    overIndex
  } = _ref;
  let oldRect;
  let newRect;

  if (index === activeIndex) {
    oldRect = rects[index];
    newRect = rects[overIndex];
  }

  if (index === overIndex) {
    oldRect = rects[index];
    newRect = rects[activeIndex];
  }

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

// To-do: We should be calculating scale transformation
const defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
const verticalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    activeIndex,
    activeNodeRect: fallbackActiveRect,
    index,
    rects,
    overIndex
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  if (index === activeIndex) {
    const overIndexRect = rects[overIndex];

    if (!overIndexRect) {
      return null;
    }

    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
      ...defaultScale$1
    };
  }

  const itemGap = getItemGap$1(rects, index, activeIndex);

  if (index > activeIndex && index <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};

function getItemGap$1(clientRects, index, activeIndex) {
  const currentRect = clientRects[index];
  const previousRect = clientRects[index - 1];
  const nextRect = clientRects[index + 1];

  if (!currentRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
  }

  return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}

const ID_PREFIX = 'Sortable';
const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  activeIndex: -1,
  containerId: ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .useDndContext */ .fF)();
  const containerId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .useUniqueId */ .YG)(ID_PREFIX, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => userDefinedItems.map(item => typeof item === 'object' && 'id' in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled = normalizeDisabled(disabledProp);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .useIsomorphicLayoutEffect */ .Es)(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    activeIndex,
    containerId,
    disabled,
    disableTransforms,
    items,
    overIndex,
    useDragOverlay,
    sortedRects: getSortedRects(items, droppableRects),
    strategy
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

const defaultNewIndexGetter = _ref => {
  let {
    id,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
const defaultAnimateLayoutChanges = _ref2 => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;

  if (!transition || !wasDragging) {
    return false;
  }

  if (previousItems !== items && index === newIndex) {
    return false;
  }

  if (isSorting) {
    return true;
  }

  return newIndex !== index && containerId === previousContainerId;
};
const defaultTransition = {
  duration: 200,
  easing: 'ease'
};
const transitionProperty = 'transform';
const disabledTransition = /*#__PURE__*/_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .CSS */ .Ks.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: 'linear'
});
const defaultAttributes = {
  roleDescription: 'sortable'
};

/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */

function useDerivedTransform(_ref) {
  let {
    disabled,
    index,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(index);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .useIsomorphicLayoutEffect */ .Es)(() => {
    if (!disabled && index !== previousIndex.current && node.current) {
      const initial = rect.current;

      if (initial) {
        const current = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .getClientRect */ .Sj)(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };

        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }

    if (index !== previousIndex.current) {
      previousIndex.current = index;
    }
  }, [disabled, index, node, rect]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}

function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = defaultTransition
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index = items.indexOf(id);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sortable: {
      containerId,
      index,
      items
    },
    ...customData
  }), [containerId, customData, index, items]);
  const itemsAfterCurrentSortable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => items.slice(items.indexOf(id)), [items, id]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .useDroppable */ .zM)({
    id,
    data,
    disabled: disabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .useDraggable */ .PM)({
    id,
    data,
    attributes: { ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled.draggable
  });
  const setNodeRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .useCombinedRefs */ .jn)(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id,
    items,
    activeIndex,
    overIndex
  }) : index;
  const activeId = active == null ? void 0 : active.id;
  const previous = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index,
    node,
    rect
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }

    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }

    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activeId === previous.current.activeId) {
      return;
    }

    if (activeId != null && previous.current.activeId == null) {
      previous.current.activeId = activeId;
      return;
    }

    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };

  function getTransition() {
    if ( // Temporarily disable transitions for a single frame to set up derived transforms
    derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
    itemsHaveChanged && previous.current.newIndex === index) {
      return disabledTransition;
    }

    if (shouldDisplaceDragSource && !(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .isKeyboardEvent */ .kx)(activatorEvent) || !transition) {
      return undefined;
    }

    if (isSorting || shouldAnimateLayoutChanges) {
      return _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .CSS */ .Ks.Transition.toString({ ...transition,
        property: transitionProperty
      });
    }

    return undefined;
  }
}

function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;

  if (typeof localDisabled === 'boolean') {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }

  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}

function hasSortableData(entry) {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data && 'sortable' in data && typeof data.sortable === 'object' && 'containerId' in data.sortable && 'items' in data.sortable && 'index' in data.sortable) {
    return true;
  }

  return false;
}

const directions = [_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Down, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Right, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Up, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Left];
const sortableKeyboardCoordinates = (event, _ref) => {
  let {
    context: {
      active,
      collisionRect,
      droppableRects,
      droppableContainers,
      over,
      scrollableAncestors
    }
  } = _ref;

  if (directions.includes(event.code)) {
    event.preventDefault();

    if (!active || !collisionRect) {
      return;
    }

    const filteredContainers = [];
    droppableContainers.getEnabled().forEach(entry => {
      if (!entry || entry != null && entry.disabled) {
        return;
      }

      const rect = droppableRects.get(entry.id);

      if (!rect) {
        return;
      }

      switch (event.code) {
        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Up:
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Left:
          if (collisionRect.left > rect.left) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .KeyboardCode */ .vL.Right:
          if (collisionRect.left < rect.left) {
            filteredContainers.push(entry);
          }

          break;
      }
    });
    const collisions = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .closestCorners */ .y$)({
      active,
      collisionRect: collisionRect,
      droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    });
    let closestId = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .getFirstCollision */ .Vy)(collisions, 'id');

    if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
      closestId = collisions[1].id;
    }

    if (closestId != null) {
      const activeDroppable = droppableContainers.get(active.id);
      const newDroppable = droppableContainers.get(closestId);
      const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
      const newNode = newDroppable == null ? void 0 : newDroppable.node.current;

      if (newNode && newRect && activeDroppable && newDroppable) {
        const newScrollAncestors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__/* .getScrollableAncestors */ .sl)(newNode);
        const hasDifferentScrollAncestors = newScrollAncestors.some((element, index) => scrollableAncestors[index] !== element);
        const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
        const isAfterActive = isAfter(activeDroppable, newDroppable);
        const offset = hasDifferentScrollAncestors || !hasSameContainer ? {
          x: 0,
          y: 0
        } : {
          x: isAfterActive ? collisionRect.width - newRect.width : 0,
          y: isAfterActive ? collisionRect.height - newRect.height : 0
        };
        const rectCoordinates = {
          x: newRect.left,
          y: newRect.top
        };
        const newCoordinates = offset.x && offset.y ? rectCoordinates : (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__/* .subtract */ .Re)(rectCoordinates, offset);
        return newCoordinates;
      }
    }
  }

  return undefined;
};

function isSameContainer(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
}

function isAfter(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  if (!isSameContainer(a, b)) {
    return false;
  }

  return a.data.current.sortable.index < b.data.current.sortable.index;
}


//# sourceMappingURL=sortable.esm.js.map


/***/ }),

/***/ 23134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M0 15h2V9H0zm3 2h2V7H3zm19-8v6h2V9zm-3 8h2V7h-2zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5M16 19H8V5h8z"
}), 'Vibration'));


/***/ }),

/***/ 30281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ FormControlLabel_FormControlLabel)
});

// UNUSED EXPORTS: FormControlLabelRoot

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(67286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(328);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js


function getFormControlLabelUtilityClasses(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiFormControlLabel', slot);
}
const formControlLabelClasses = (0,generateUtilityClasses/* default */.A)('MuiFormControlLabel', [
    'root',
    'labelPlacementStart',
    'labelPlacementTop',
    'labelPlacementBottom',
    'disabled',
    'label',
    'error',
    'required',
    'asterisk'
]);
/* harmony default export */ const FormControlLabel_formControlLabelClasses = (formControlLabelClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(65104);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
/* __next_internal_client_entry_do_not_use__ FormControlLabelRoot,default auto */ 














const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, labelPlacement, error, required } = ownerState;
    const slots = {
        root: [
            'root',
            disabled && 'disabled',
            "labelPlacement".concat((0,capitalize/* default */.A)(labelPlacement)),
            error && 'error',
            required && 'required'
        ],
        label: [
            'label',
            disabled && 'disabled'
        ],
        asterisk: [
            'asterisk',
            error && 'error'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = (0,styled/* default */.Ay)('label', {
    name: 'MuiFormControlLabel',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            {
                ["& .".concat(FormControlLabel_formControlLabelClasses.label)]: styles.label
            },
            styles.root,
            styles["labelPlacement".concat((0,capitalize/* default */.A)(ownerState.labelPlacement))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        // For correct alignment with the text.
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        marginLeft: -11,
        marginRight: 16,
        // used for row presentation of radio/checkbox
        ["&.".concat(FormControlLabel_formControlLabelClasses.disabled)]: {
            cursor: 'default'
        },
        ["& .".concat(FormControlLabel_formControlLabelClasses.label)]: {
            ["&.".concat(FormControlLabel_formControlLabelClasses.disabled)]: {
                color: (theme.vars || theme).palette.text.disabled
            }
        },
        variants: [
            {
                props: {
                    labelPlacement: 'start'
                },
                style: {
                    flexDirection: 'row-reverse',
                    marginRight: -11
                }
            },
            {
                props: {
                    labelPlacement: 'top'
                },
                style: {
                    flexDirection: 'column-reverse'
                }
            },
            {
                props: {
                    labelPlacement: 'bottom'
                },
                style: {
                    flexDirection: 'column'
                }
            },
            {
                props: (param)=>{
                    let { labelPlacement } = param;
                    return labelPlacement === 'start' || labelPlacement === 'top' || labelPlacement === 'bottom';
                },
                style: {
                    marginLeft: 16 // used for row presentation of radio/checkbox
                }
            }
        ]
    };
}));
const AsteriskComponent = (0,styled/* default */.Ay)('span', {
    name: 'MuiFormControlLabel',
    slot: 'Asterisk',
    overridesResolver: (props, styles)=>styles.asterisk
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ["&.".concat(FormControlLabel_formControlLabelClasses.error)]: {
            color: (theme.vars || theme).palette.error.main
        }
    };
}));
/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */ const FormControlLabel = /*#__PURE__*/ react.forwardRef(function FormControlLabel(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiFormControlLabel'
    });
    const { checked, className, componentsProps = {}, control, disabled: disabledProp, disableTypography, inputRef, label: labelProp, labelPlacement = 'end', name, onChange, required: requiredProp, slots = {}, slotProps = {}, value, ...other } = props;
    const muiFormControl = (0,useFormControl/* default */.A)();
    var _ref;
    const disabled = (_ref = disabledProp !== null && disabledProp !== void 0 ? disabledProp : control.props.disabled) !== null && _ref !== void 0 ? _ref : muiFormControl === null || muiFormControl === void 0 ? void 0 : muiFormControl.disabled;
    const required = requiredProp !== null && requiredProp !== void 0 ? requiredProp : control.props.required;
    const controlProps = {
        disabled,
        required
    };
    [
        'checked',
        'name',
        'onChange',
        'value',
        'inputRef'
    ].forEach((key)=>{
        if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
            controlProps[key] = props[key];
        }
    });
    const fcs = (0,formControlState/* default */.A)({
        props,
        muiFormControl,
        states: [
            'error'
        ]
    });
    const ownerState = {
        ...props,
        disabled,
        labelPlacement,
        required,
        error: fcs.error
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps: {
            ...componentsProps,
            ...slotProps
        }
    };
    const [TypographySlot, typographySlotProps] = (0,useSlot/* default */.A)('typography', {
        elementType: Typography/* default */.A,
        externalForwardedProps,
        ownerState
    });
    let label = labelProp;
    if (label != null && label.type !== Typography/* default */.A && !disableTypography) {
        label = /*#__PURE__*/ (0,jsx_runtime.jsx)(TypographySlot, {
            component: "span",
            ...typographySlotProps,
            className: (0,clsx/* default */.A)(classes.label, typographySlotProps === null || typographySlotProps === void 0 ? void 0 : typographySlotProps.className),
            children: label
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControlLabelRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other,
        children: [
            /*#__PURE__*/ react.cloneElement(control, controlProps),
            required ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    label,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AsteriskComponent, {
                        ownerState: ownerState,
                        "aria-hidden": true,
                        className: classes.asterisk,
                        children: [
                            "\u2009",
                            '*'
                        ]
                    })
                ]
            }) : label
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const FormControlLabel_FormControlLabel = (FormControlLabel);


/***/ }),

/***/ 32499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Collapse_Collapse)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-transition-group/esm/Transition.js + 2 modules
var Transition = __webpack_require__(73027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js + 1 modules
var useTimeout = __webpack_require__(45443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/createTransitions.js
var createTransitions = __webpack_require__(48045);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/transitions/utils.js
var utils = __webpack_require__(77810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Collapse/collapseClasses.js


function getCollapseUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCollapse', slot);
}
const collapseClasses = (0,generateUtilityClasses/* default */.A)('MuiCollapse', [
    'root',
    'horizontal',
    'vertical',
    'entered',
    'hidden',
    'wrapper',
    'wrapperInner'
]);
/* harmony default export */ const Collapse_collapseClasses = ((/* unused pure expression or super */ null && (collapseClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Collapse/Collapse.js
/* __next_internal_client_entry_do_not_use__ default auto */ 














const useUtilityClasses = (ownerState)=>{
    const { orientation, classes } = ownerState;
    const slots = {
        root: [
            'root',
            "".concat(orientation)
        ],
        entered: [
            'entered'
        ],
        hidden: [
            'hidden'
        ],
        wrapper: [
            'wrapper',
            "".concat(orientation)
        ],
        wrapperInner: [
            'wrapperInner',
            "".concat(orientation)
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getCollapseUtilityClass, classes);
};
const CollapseRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiCollapse',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.orientation],
            ownerState.state === 'entered' && styles.entered,
            ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && styles.hidden
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        height: 0,
        overflow: 'hidden',
        transition: theme.transitions.create('height'),
        variants: [
            {
                props: {
                    orientation: 'horizontal'
                },
                style: {
                    height: 'auto',
                    width: 0,
                    transition: theme.transitions.create('width')
                }
            },
            {
                props: {
                    state: 'entered'
                },
                style: {
                    height: 'auto',
                    overflow: 'visible'
                }
            },
            {
                props: {
                    state: 'entered',
                    orientation: 'horizontal'
                },
                style: {
                    width: 'auto'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px';
                },
                style: {
                    visibility: 'hidden'
                }
            }
        ]
    };
}));
const CollapseWrapper = (0,styled/* default */.Ay)('div', {
    name: 'MuiCollapse',
    slot: 'Wrapper',
    overridesResolver: (props, styles)=>styles.wrapper
})({
    // Hack to get children with a negative margin to not falsify the height computation.
    display: 'flex',
    width: '100%',
    variants: [
        {
            props: {
                orientation: 'horizontal'
            },
            style: {
                width: 'auto',
                height: '100%'
            }
        }
    ]
});
const CollapseWrapperInner = (0,styled/* default */.Ay)('div', {
    name: 'MuiCollapse',
    slot: 'WrapperInner',
    overridesResolver: (props, styles)=>styles.wrapperInner
})({
    width: '100%',
    variants: [
        {
            props: {
                orientation: 'horizontal'
            },
            style: {
                width: 'auto',
                height: '100%'
            }
        }
    ]
});
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/material-ui/react-stepper/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */ const Collapse = /*#__PURE__*/ react.forwardRef(function Collapse(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCollapse'
    });
    const { addEndListener, children, className, collapsedSize: collapsedSizeProp = '0px', component, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, orientation = 'vertical', style, timeout = createTransitions/* duration */.p0.standard, // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition/* default */.Ay, ...other } = props;
    const ownerState = {
        ...props,
        orientation,
        collapsedSize: collapsedSizeProp
    };
    const classes = useUtilityClasses(ownerState);
    const theme = (0,useTheme/* default */.A)();
    const timer = (0,useTimeout/* default */.A)();
    const wrapperRef = react.useRef(null);
    const autoTransitionDuration = react.useRef();
    const collapsedSize = typeof collapsedSizeProp === 'number' ? "".concat(collapsedSizeProp, "px") : collapsedSizeProp;
    const isHorizontal = orientation === 'horizontal';
    const size = isHorizontal ? 'width' : 'height';
    const nodeRef = react.useRef(null);
    const handleRef = (0,useForkRef/* default */.A)(ref, nodeRef);
    const normalizedTransitionCallback = (callback)=>(maybeIsAppearing)=>{
            if (callback) {
                const node = nodeRef.current;
                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (maybeIsAppearing === undefined) {
                    callback(node);
                } else {
                    callback(node, maybeIsAppearing);
                }
            }
        };
    const getWrapperSize = ()=>wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;
    const handleEnter = normalizedTransitionCallback((node, isAppearing)=>{
        if (wrapperRef.current && isHorizontal) {
            // Set absolute position to get the size of collapsed content
            wrapperRef.current.style.position = 'absolute';
        }
        node.style[size] = collapsedSize;
        if (onEnter) {
            onEnter(node, isAppearing);
        }
    });
    const handleEntering = normalizedTransitionCallback((node, isAppearing)=>{
        const wrapperSize = getWrapperSize();
        if (wrapperRef.current && isHorizontal) {
            // After the size is read reset the position back to default
            wrapperRef.current.style.position = '';
        }
        const { duration: transitionDuration, easing: transitionTimingFunction } = (0,utils/* getTransitionProps */.c)({
            style,
            timeout,
            easing
        }, {
            mode: 'enter'
        });
        if (timeout === 'auto') {
            const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
            node.style.transitionDuration = "".concat(duration2, "ms");
            autoTransitionDuration.current = duration2;
        } else {
            node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
        }
        node.style[size] = "".concat(wrapperSize, "px");
        node.style.transitionTimingFunction = transitionTimingFunction;
        if (onEntering) {
            onEntering(node, isAppearing);
        }
    });
    const handleEntered = normalizedTransitionCallback((node, isAppearing)=>{
        node.style[size] = 'auto';
        if (onEntered) {
            onEntered(node, isAppearing);
        }
    });
    const handleExit = normalizedTransitionCallback((node)=>{
        node.style[size] = "".concat(getWrapperSize(), "px");
        if (onExit) {
            onExit(node);
        }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleExiting = normalizedTransitionCallback((node)=>{
        const wrapperSize = getWrapperSize();
        const { duration: transitionDuration, easing: transitionTimingFunction } = (0,utils/* getTransitionProps */.c)({
            style,
            timeout,
            easing
        }, {
            mode: 'exit'
        });
        if (timeout === 'auto') {
            // TODO: rename getAutoHeightDuration to something more generic (width support)
            // Actually it just calculates animation duration based on size
            const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
            node.style.transitionDuration = "".concat(duration2, "ms");
            autoTransitionDuration.current = duration2;
        } else {
            node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
        }
        node.style[size] = collapsedSize;
        node.style.transitionTimingFunction = transitionTimingFunction;
        if (onExiting) {
            onExiting(node);
        }
    });
    const handleAddEndListener = (next)=>{
        if (timeout === 'auto') {
            timer.start(autoTransitionDuration.current || 0, next);
        }
        if (addEndListener) {
            // Old call signature before `react-transition-group` implemented `nodeRef`
            addEndListener(nodeRef.current, next);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionComponent, {
        in: inProp,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef: nodeRef,
        timeout: timeout === 'auto' ? null : timeout,
        ...other,
        children: (state, param)=>{
            let { ownerState: incomingOwnerState, ...restChildProps } = param;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollapseRoot, {
                as: component,
                className: (0,clsx/* default */.A)(classes.root, className, {
                    'entered': classes.entered,
                    'exited': !inProp && collapsedSize === '0px' && classes.hidden
                }[state]),
                style: {
                    [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize,
                    ...style
                },
                ref: handleRef,
                ownerState: {
                    ...ownerState,
                    state
                },
                ...restChildProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollapseWrapper, {
                    ownerState: {
                        ...ownerState,
                        state
                    },
                    className: classes.wrapper,
                    ref: wrapperRef,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollapseWrapperInner, {
                        ownerState: {
                            ...ownerState,
                            state
                        },
                        className: classes.wrapperInner,
                        children: children
                    })
                })
            });
        }
    });
});
 false ? 0 : void 0;
if (Collapse) {
    Collapse.muiSupportAuto = true;
}
/* harmony default export */ const Collapse_Collapse = (Collapse);


/***/ }),

/***/ 34826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* binding */ useInterval),
/* harmony export */   Es: () => (/* binding */ useIsomorphicLayoutEffect),
/* harmony export */   KG: () => (/* binding */ useLazyMemo),
/* harmony export */   Ks: () => (/* binding */ CSS),
/* harmony export */   Ll: () => (/* binding */ isNode),
/* harmony export */   Re: () => (/* binding */ subtract),
/* harmony export */   Sw: () => (/* binding */ canUseDOM),
/* harmony export */   TW: () => (/* binding */ getOwnerDocument),
/* harmony export */   WQ: () => (/* binding */ add),
/* harmony export */   YG: () => (/* binding */ useUniqueId),
/* harmony export */   YN: () => (/* binding */ useLatestValue),
/* harmony export */   ZC: () => (/* binding */ usePrevious),
/* harmony export */   _q: () => (/* binding */ useEvent),
/* harmony export */   ag: () => (/* binding */ findFirstFocusableNode),
/* harmony export */   e_: () => (/* binding */ getEventCoordinates),
/* harmony export */   jn: () => (/* binding */ useCombinedRefs),
/* harmony export */   kx: () => (/* binding */ isKeyboardEvent),
/* harmony export */   l6: () => (/* binding */ isWindow),
/* harmony export */   lk: () => (/* binding */ useNodeRef),
/* harmony export */   sb: () => (/* binding */ isHTMLElement),
/* harmony export */   wz: () => (/* binding */ isDocument),
/* harmony export */   xZ: () => (/* binding */ isSVGElement),
/* harmony export */   zk: () => (/* binding */ getWindow)
/* harmony export */ });
/* unused harmony exports hasViewportRelativeCoordinates, isTouchEvent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);


function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => node => {
    refs.forEach(ref => ref(node));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  refs);
}

// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === '[object Window]' || // In Electron context the Window object serializes to [object global]
  elementString === '[object global]';
}

function isNode(node) {
  return 'nodeType' in node;
}

function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;

  if (!target) {
    return window;
  }

  if (isWindow(target)) {
    return target;
  }

  if (!isNode(target)) {
    return window;
  }

  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}

function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}

function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }

  return node instanceof getWindow(node).HTMLElement;
}

function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}

function getOwnerDocument(target) {
  if (!target) {
    return document;
  }

  if (isWindow(target)) {
    return target.document;
  }

  if (!isNode(target)) {
    return document;
  }

  if (isDocument(target)) {
    return target;
  }

  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }

  return document;
}

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */

const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useEvent(handler) {
  const handlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}

function useInterval() {
  const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}

function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }

  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}

function useLazyMemo(callback, dependencies) {
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const newValue = callback(valueRef.current);
    valueRef.current = newValue;
    return newValue;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [...dependencies]);
}

function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const setNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (element !== node.current) {
      onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
    }

    node.current = element;
  }, //eslint-disable-next-line
  []);
  return [node, setNodeRef];
}

function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

let ids = {};
function useUniqueId(prefix, value) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (value) {
      return value;
    }

    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}

function createAdjustmentFn(modifier) {
  return function (object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);

      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];

        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }

      return accumulator;
    }, { ...object
    });
  };
}

const add = /*#__PURE__*/createAdjustmentFn(1);
const subtract = /*#__PURE__*/createAdjustmentFn(-1);

function hasViewportRelativeCoordinates(event) {
  return 'clientX' in event && 'clientY' in event;
}

function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }

  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}

function isTouchEvent(event) {
  if (!event) {
    return false;
  }

  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */

function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }

  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  return null;
}

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});

const SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }

  return element.querySelector(SELECTOR);
}


//# sourceMappingURL=utilities.esm.js.map


/***/ }),

/***/ 36994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tooltip_Tooltip)
});

// UNUSED EXPORTS: testReset

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js + 1 modules
var useTimeout = __webpack_require__(45443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(93974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
var isFocusVisible = __webpack_require__(86012);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(43552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(38443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(11999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/Popper.js + 2 modules
var Popper = __webpack_require__(48247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(37976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(14036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(45183);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/tooltipClasses.js


function getTooltipUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTooltip', slot);
}
const tooltipClasses = (0,generateUtilityClasses/* default */.A)('MuiTooltip', [
    'popper',
    'popperInteractive',
    'popperArrow',
    'popperClose',
    'tooltip',
    'tooltipArrow',
    'touch',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
    'tooltipPlacementBottom',
    'arrow'
]);
/* harmony default export */ const Tooltip_tooltipClasses = (tooltipClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js
/* __next_internal_client_entry_do_not_use__ testReset,default auto */ 






















function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
const useUtilityClasses = (ownerState)=>{
    const { classes, disableInteractive, arrow, touch, placement } = ownerState;
    const slots = {
        popper: [
            'popper',
            !disableInteractive && 'popperInteractive',
            arrow && 'popperArrow'
        ],
        tooltip: [
            'tooltip',
            arrow && 'tooltipArrow',
            touch && 'touch',
            "tooltipPlacement".concat((0,capitalize/* default */.A)(placement.split('-')[0]))
        ],
        arrow: [
            'arrow'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = (0,styled/* default */.Ay)(Popper/* default */.A, {
    name: 'MuiTooltip',
    slot: 'Popper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.popper,
            !ownerState.disableInteractive && styles.popperInteractive,
            ownerState.arrow && styles.popperArrow,
            !ownerState.open && styles.popperClose
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        zIndex: (theme.vars || theme).zIndex.tooltip,
        pointerEvents: 'none',
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableInteractive;
                },
                style: {
                    pointerEvents: 'auto'
                }
            },
            {
                props: (param)=>{
                    let { open } = param;
                    return !open;
                },
                style: {
                    pointerEvents: 'none'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow;
                },
                style: {
                    ['&[data-popper-placement*="bottom"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        top: 0,
                        marginTop: '-0.71em',
                        '&::before': {
                            transformOrigin: '0 100%'
                        }
                    },
                    ['&[data-popper-placement*="top"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        bottom: 0,
                        marginBottom: '-0.71em',
                        '&::before': {
                            transformOrigin: '100% 0'
                        }
                    },
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        height: '1em',
                        width: '0.71em',
                        '&::before': {
                            transformOrigin: '100% 100%'
                        }
                    },
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        height: '1em',
                        width: '0.71em',
                        '&::before': {
                            transformOrigin: '0 0'
                        }
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        left: 0,
                        marginLeft: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !!ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="right"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        right: 0,
                        marginRight: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        right: 0,
                        marginRight: '-0.71em'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow && !!ownerState.isRtl;
                },
                style: {
                    ['&[data-popper-placement*="left"] .'.concat(Tooltip_tooltipClasses.arrow)]: {
                        left: 0,
                        marginLeft: '-0.71em'
                    }
                }
            }
        ]
    };
}));
const TooltipTooltip = (0,styled/* default */.Ay)('div', {
    name: 'MuiTooltip',
    slot: 'Tooltip',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.tooltip,
            ownerState.touch && styles.touch,
            ownerState.arrow && styles.tooltipArrow,
            styles["tooltipPlacement".concat((0,capitalize/* default */.A)(ownerState.placement.split('-')[0]))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.92),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        color: (theme.vars || theme).palette.common.white,
        fontFamily: theme.typography.fontFamily,
        padding: '4px 8px',
        fontSize: theme.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: 'break-word',
        fontWeight: theme.typography.fontWeightMedium,
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
            transformOrigin: 'right center'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
            transformOrigin: 'left center'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="top"] &')]: {
            transformOrigin: 'center bottom',
            marginBottom: '14px'
        },
        [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="bottom"] &')]: {
            transformOrigin: 'center top',
            marginTop: '14px'
        },
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.arrow;
                },
                style: {
                    position: 'relative',
                    margin: 0
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    padding: '8px 16px',
                    fontSize: theme.typography.pxToRem(14),
                    lineHeight: "".concat(round(16 / 14), "em"),
                    fontWeight: theme.typography.fontWeightRegular
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.isRtl;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginRight: '14px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginLeft: '14px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.isRtl && ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginRight: '24px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginLeft: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.isRtl;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginLeft: '14px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginRight: '14px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.isRtl && ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="left"] &')]: {
                        marginLeft: '24px'
                    },
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="right"] &')]: {
                        marginRight: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="top"] &')]: {
                        marginBottom: '24px'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.touch;
                },
                style: {
                    [".".concat(Tooltip_tooltipClasses.popper, '[data-popper-placement*="bottom"] &')]: {
                        marginTop: '24px'
                    }
                }
            }
        ]
    };
}));
const TooltipArrow = (0,styled/* default */.Ay)('span', {
    name: 'MuiTooltip',
    slot: 'Arrow',
    overridesResolver: (props, styles)=>styles.arrow
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        overflow: 'hidden',
        position: 'absolute',
        width: '1em',
        height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */ ,
        boxSizing: 'border-box',
        color: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.9),
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundColor: 'currentColor',
            transform: 'rotate(45deg)'
        }
    };
}));
let hystersisOpen = false;
const hystersisTimer = new useTimeout/* Timeout */.E();
let cursorPosition = {
    x: 0,
    y: 0
};
function testReset() {
    hystersisOpen = false;
    hystersisTimer.clear();
}
function composeEventHandler(handler, eventHandler) {
    return function(event) {
        for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            params[_key - 1] = arguments[_key];
        }
        if (eventHandler) {
            eventHandler(event, ...params);
        }
        handler(event, ...params);
    };
}
// TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.
const Tooltip = /*#__PURE__*/ react.forwardRef(function Tooltip(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTooltip'
    });
    const { arrow = false, children: childrenProp, classes: classesProp, components = {}, componentsProps = {}, describeChild = false, disableFocusListener = false, disableHoverListener = false, disableInteractive: disableInteractiveProp = false, disableTouchListener = false, enterDelay = 100, enterNextDelay = 0, enterTouchDelay = 700, followCursor = false, id: idProp, leaveDelay = 0, leaveTouchDelay = 1500, onClose, onOpen, open: openProp, placement = 'bottom', PopperComponent: PopperComponentProp, PopperProps = {}, slotProps = {}, slots = {}, title, TransitionComponent: TransitionComponentProp, TransitionProps, ...other } = props;
    // to prevent runtime errors, developers will need to provide a child as a React element anyway.
    const children = /*#__PURE__*/ react.isValidElement(childrenProp) ? childrenProp : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: childrenProp
    });
    const theme = (0,useTheme/* default */.A)();
    const isRtl = (0,RtlProvider/* useRtl */.I)();
    const [childNode, setChildNode] = react.useState();
    const [arrowRef, setArrowRef] = react.useState(null);
    const ignoreNonTouchEvents = react.useRef(false);
    const disableInteractive = disableInteractiveProp || followCursor;
    const closeTimer = (0,useTimeout/* default */.A)();
    const enterTimer = (0,useTimeout/* default */.A)();
    const leaveTimer = (0,useTimeout/* default */.A)();
    const touchTimer = (0,useTimeout/* default */.A)();
    const [openState, setOpenState] = (0,useControlled/* default */.A)({
        controlled: openProp,
        default: false,
        name: 'Tooltip',
        state: 'open'
    });
    let open = openState;
    if (false) {}
    const id = (0,useId/* default */.A)(idProp);
    const prevUserSelect = react.useRef();
    const stopTouchInteraction = (0,useEventCallback/* default */.A)(()=>{
        if (prevUserSelect.current !== undefined) {
            document.body.style.WebkitUserSelect = prevUserSelect.current;
            prevUserSelect.current = undefined;
        }
        touchTimer.clear();
    });
    react.useEffect(()=>stopTouchInteraction, [
        stopTouchInteraction
    ]);
    const handleOpen = (event)=>{
        hystersisTimer.clear();
        hystersisOpen = true;
        // The mouseover event will trigger for every nested element in the tooltip.
        // We can skip rerendering when the tooltip is already open.
        // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
        setOpenState(true);
        if (onOpen && !open) {
            onOpen(event);
        }
    };
    const handleClose = (0,useEventCallback/* default */.A)(/**
   * @param {React.SyntheticEvent | Event} event
   */ (event)=>{
        hystersisTimer.start(800 + leaveDelay, ()=>{
            hystersisOpen = false;
        });
        setOpenState(false);
        if (onClose && open) {
            onClose(event);
        }
        closeTimer.start(theme.transitions.duration.shortest, ()=>{
            ignoreNonTouchEvents.current = false;
        });
    });
    const handleMouseOver = (event)=>{
        if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
            return;
        }
        // Remove the title ahead of time.
        // We don't want to wait for the next render commit.
        // We would risk displaying two tooltips at the same time (native + this one).
        if (childNode) {
            childNode.removeAttribute('title');
        }
        enterTimer.clear();
        leaveTimer.clear();
        if (enterDelay || hystersisOpen && enterNextDelay) {
            enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, ()=>{
                handleOpen(event);
            });
        } else {
            handleOpen(event);
        }
    };
    const handleMouseLeave = (event)=>{
        enterTimer.clear();
        leaveTimer.start(leaveDelay, ()=>{
            handleClose(event);
        });
    };
    const [, setChildIsFocusVisible] = react.useState(false);
    const handleBlur = (event)=>{
        if (!(0,isFocusVisible/* default */.A)(event.target)) {
            setChildIsFocusVisible(false);
            handleMouseLeave(event);
        }
    };
    const handleFocus = (event)=>{
        // Workaround for https://github.com/facebook/react/issues/7769
        // The autoFocus of React might trigger the event before the componentDidMount.
        // We need to account for this eventuality.
        if (!childNode) {
            setChildNode(event.currentTarget);
        }
        if ((0,isFocusVisible/* default */.A)(event.target)) {
            setChildIsFocusVisible(true);
            handleMouseOver(event);
        }
    };
    const detectTouchStart = (event)=>{
        ignoreNonTouchEvents.current = true;
        const childrenProps = children.props;
        if (childrenProps.onTouchStart) {
            childrenProps.onTouchStart(event);
        }
    };
    const handleTouchStart = (event)=>{
        detectTouchStart(event);
        leaveTimer.clear();
        closeTimer.clear();
        stopTouchInteraction();
        prevUserSelect.current = document.body.style.WebkitUserSelect;
        // Prevent iOS text selection on long-tap.
        document.body.style.WebkitUserSelect = 'none';
        touchTimer.start(enterTouchDelay, ()=>{
            document.body.style.WebkitUserSelect = prevUserSelect.current;
            handleMouseOver(event);
        });
    };
    const handleTouchEnd = (event)=>{
        if (children.props.onTouchEnd) {
            children.props.onTouchEnd(event);
        }
        stopTouchInteraction();
        leaveTimer.start(leaveTouchDelay, ()=>{
            handleClose(event);
        });
    };
    react.useEffect(()=>{
        if (!open) {
            return undefined;
        }
        /**
     * @param {KeyboardEvent} nativeEvent
     */ function handleKeyDown(nativeEvent) {
            if (nativeEvent.key === 'Escape') {
                handleClose(nativeEvent);
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        handleClose,
        open
    ]);
    const handleRef = (0,useForkRef/* default */.A)((0,getReactElementRef/* default */.A)(children), setChildNode, ref);
    // There is no point in displaying an empty tooltip.
    // So we exclude all falsy values, except 0, which is valid.
    if (!title && title !== 0) {
        open = false;
    }
    const popperRef = react.useRef();
    const handleMouseMove = (event)=>{
        const childrenProps = children.props;
        if (childrenProps.onMouseMove) {
            childrenProps.onMouseMove(event);
        }
        cursorPosition = {
            x: event.clientX,
            y: event.clientY
        };
        if (popperRef.current) {
            popperRef.current.update();
        }
    };
    const nameOrDescProps = {};
    const titleIsString = typeof title === 'string';
    if (describeChild) {
        nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
        nameOrDescProps['aria-describedby'] = open ? id : null;
    } else {
        nameOrDescProps['aria-label'] = titleIsString ? title : null;
        nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
    }
    const childrenProps = {
        ...nameOrDescProps,
        ...other,
        ...children.props,
        className: (0,clsx/* default */.A)(other.className, children.props.className),
        onTouchStart: detectTouchStart,
        ref: handleRef,
        ...followCursor ? {
            onMouseMove: handleMouseMove
        } : {}
    };
    if (false) {}
    const interactiveWrapperListeners = {};
    if (!disableTouchListener) {
        childrenProps.onTouchStart = handleTouchStart;
        childrenProps.onTouchEnd = handleTouchEnd;
    }
    if (!disableHoverListener) {
        childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
        childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
        if (!disableInteractive) {
            interactiveWrapperListeners.onMouseOver = handleMouseOver;
            interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
        }
    }
    if (!disableFocusListener) {
        childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
        childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
        if (!disableInteractive) {
            interactiveWrapperListeners.onFocus = handleFocus;
            interactiveWrapperListeners.onBlur = handleBlur;
        }
    }
    if (false) {}
    const ownerState = {
        ...props,
        isRtl,
        arrow,
        disableInteractive,
        placement,
        PopperComponentProp,
        touch: ignoreNonTouchEvents.current
    };
    const resolvedPopperProps = typeof slotProps.popper === 'function' ? slotProps.popper(ownerState) : slotProps.popper;
    const popperOptions = react.useMemo(()=>{
        var _PopperProps_popperOptions, _resolvedPopperProps_popperOptions;
        let tooltipModifiers = [
            {
                name: 'arrow',
                enabled: Boolean(arrowRef),
                options: {
                    element: arrowRef,
                    padding: 4
                }
            }
        ];
        if ((_PopperProps_popperOptions = PopperProps.popperOptions) === null || _PopperProps_popperOptions === void 0 ? void 0 : _PopperProps_popperOptions.modifiers) {
            tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
        }
        if (resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : (_resolvedPopperProps_popperOptions = resolvedPopperProps.popperOptions) === null || _resolvedPopperProps_popperOptions === void 0 ? void 0 : _resolvedPopperProps_popperOptions.modifiers) {
            tooltipModifiers = tooltipModifiers.concat(resolvedPopperProps.popperOptions.modifiers);
        }
        return {
            ...PopperProps.popperOptions,
            ...resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : resolvedPopperProps.popperOptions,
            modifiers: tooltipModifiers
        };
    }, [
        arrowRef,
        PopperProps.popperOptions,
        resolvedPopperProps === null || resolvedPopperProps === void 0 ? void 0 : resolvedPopperProps.popperOptions
    ]);
    const classes = useUtilityClasses(ownerState);
    const resolvedTransitionProps = typeof slotProps.transition === 'function' ? slotProps.transition(ownerState) : slotProps.transition;
    var _components_Transition, _slotProps_arrow, _slotProps_tooltip;
    const externalForwardedProps = {
        slots: {
            popper: components.Popper,
            transition: (_components_Transition = components.Transition) !== null && _components_Transition !== void 0 ? _components_Transition : TransitionComponentProp,
            tooltip: components.Tooltip,
            arrow: components.Arrow,
            ...slots
        },
        slotProps: {
            arrow: (_slotProps_arrow = slotProps.arrow) !== null && _slotProps_arrow !== void 0 ? _slotProps_arrow : componentsProps.arrow,
            popper: {
                ...PopperProps,
                ...resolvedPopperProps !== null && resolvedPopperProps !== void 0 ? resolvedPopperProps : componentsProps.popper
            },
            // resolvedPopperProps can be spread because it's already an object
            tooltip: (_slotProps_tooltip = slotProps.tooltip) !== null && _slotProps_tooltip !== void 0 ? _slotProps_tooltip : componentsProps.tooltip,
            transition: {
                ...TransitionProps,
                ...resolvedTransitionProps !== null && resolvedTransitionProps !== void 0 ? resolvedTransitionProps : componentsProps.transition
            }
        }
    };
    const [PopperSlot, popperSlotProps] = (0,useSlot/* default */.A)('popper', {
        elementType: TooltipPopper,
        externalForwardedProps,
        ownerState,
        className: (0,clsx/* default */.A)(classes.popper, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className)
    });
    const [TransitionSlot, transitionSlotProps] = (0,useSlot/* default */.A)('transition', {
        elementType: Grow/* default */.A,
        externalForwardedProps,
        ownerState
    });
    const [TooltipSlot, tooltipSlotProps] = (0,useSlot/* default */.A)('tooltip', {
        elementType: TooltipTooltip,
        className: classes.tooltip,
        externalForwardedProps,
        ownerState
    });
    const [ArrowSlot, arrowSlotProps] = (0,useSlot/* default */.A)('arrow', {
        elementType: TooltipArrow,
        className: classes.arrow,
        externalForwardedProps,
        ownerState,
        ref: setArrowRef
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ react.cloneElement(children, childrenProps),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PopperSlot, {
                as: PopperComponentProp !== null && PopperComponentProp !== void 0 ? PopperComponentProp : Popper/* default */.A,
                placement: placement,
                anchorEl: followCursor ? {
                    getBoundingClientRect: ()=>({
                            top: cursorPosition.y,
                            left: cursorPosition.x,
                            right: cursorPosition.x,
                            bottom: cursorPosition.y,
                            width: 0,
                            height: 0
                        })
                } : childNode,
                popperRef: popperRef,
                open: childNode ? open : false,
                id: id,
                transition: true,
                ...interactiveWrapperListeners,
                ...popperSlotProps,
                popperOptions: popperOptions,
                children: (param)=>{
                    let { TransitionProps: TransitionPropsInner } = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionSlot, {
                        timeout: theme.transitions.duration.shorter,
                        ...TransitionPropsInner,
                        ...transitionSlotProps,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TooltipSlot, {
                            ...tooltipSlotProps,
                            children: [
                                title,
                                arrow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowSlot, {
                                    ...arrowSlotProps
                                }) : null
                            ]
                        })
                    });
                }
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Tooltip_Tooltip = (Tooltip);


/***/ }),

/***/ 39089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess'));


/***/ }),

/***/ 41264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"
}), 'Notifications'));


/***/ }),

/***/ 44817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Switch_Switch)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(84044);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(45183);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(67286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.A)('PrivateSwitchBase', [
    'root',
    'checked',
    'disabled',
    'input',
    'edgeStart',
    'edgeEnd'
]);
/* harmony default export */ const internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/SwitchBase.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const useUtilityClasses = (ownerState)=>{
    const { classes, checked, disabled, edge } = ownerState;
    const slots = {
        root: [
            'root',
            checked && 'checked',
            disabled && 'disabled',
            edge && "edge".concat((0,capitalize/* default */.A)(edge))
        ],
        input: [
            'input'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A)({
    padding: 9,
    borderRadius: '50%',
    variants: [
        {
            props: {
                edge: 'start',
                size: 'small'
            },
            style: {
                marginLeft: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'start' && ownerState.size !== 'small';
            },
            style: {
                marginLeft: -12
            }
        },
        {
            props: {
                edge: 'end',
                size: 'small'
            },
            style: {
                marginRight: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'end' && ownerState.size !== 'small';
            },
            style: {
                marginRight: -12
            }
        }
    ]
});
const SwitchBaseInput = (0,styled/* default */.Ay)('input', {
    shouldForwardProp: rootShouldForwardProp/* default */.A
})({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
});
/**
 * @ignore - internal component.
 */ const SwitchBase = /*#__PURE__*/ react.forwardRef(function SwitchBase(props, ref) {
    const { autoFocus, checked: checkedProp, checkedIcon, defaultChecked, disabled: disabledProp, disableFocusRipple = false, edge = false, icon, id, inputProps, inputRef, name, onBlur, onChange, onFocus, readOnly, required = false, tabIndex, type, value, slots = {}, slotProps = {}, ...other } = props;
    const [checked, setCheckedState] = (0,useControlled/* default */.A)({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: 'SwitchBase',
        state: 'checked'
    });
    const muiFormControl = (0,useFormControl/* default */.A)();
    const handleFocus = (event)=>{
        if (onFocus) {
            onFocus(event);
        }
        if (muiFormControl && muiFormControl.onFocus) {
            muiFormControl.onFocus(event);
        }
    };
    const handleBlur = (event)=>{
        if (onBlur) {
            onBlur(event);
        }
        if (muiFormControl && muiFormControl.onBlur) {
            muiFormControl.onBlur(event);
        }
    };
    const handleInputChange = (event)=>{
        // Workaround for https://github.com/facebook/react/issues/9023
        if (event.nativeEvent.defaultPrevented) {
            return;
        }
        const newChecked = event.target.checked;
        setCheckedState(newChecked);
        if (onChange) {
            // TODO v6: remove the second argument.
            onChange(event, newChecked);
        }
    };
    let disabled = disabledProp;
    if (muiFormControl) {
        if (typeof disabled === 'undefined') {
            disabled = muiFormControl.disabled;
        }
    }
    const hasLabelFor = type === 'checkbox' || type === 'radio';
    const ownerState = {
        ...props,
        checked,
        disabled,
        disableFocusRipple,
        edge
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps: {
            input: inputProps,
            ...slotProps
        }
    };
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        ref,
        elementType: SwitchBaseRoot,
        className: classes.root,
        shouldForwardComponentProp: true,
        externalForwardedProps: {
            ...externalForwardedProps,
            component: 'span',
            ...other
        },
        getSlotProps: (handlers)=>({
                ...handlers,
                onFocus: (event)=>{
                    var _handlers_onFocus;
                    (_handlers_onFocus = handlers.onFocus) === null || _handlers_onFocus === void 0 ? void 0 : _handlers_onFocus.call(handlers, event);
                    handleFocus(event);
                },
                onBlur: (event)=>{
                    var _handlers_onBlur;
                    (_handlers_onBlur = handlers.onBlur) === null || _handlers_onBlur === void 0 ? void 0 : _handlers_onBlur.call(handlers, event);
                    handleBlur(event);
                }
            }),
        ownerState,
        additionalProps: {
            centerRipple: true,
            focusRipple: !disableFocusRipple,
            disabled,
            role: undefined,
            tabIndex: null
        }
    });
    const [InputSlot, inputSlotProps] = (0,useSlot/* default */.A)('input', {
        ref: inputRef,
        elementType: SwitchBaseInput,
        className: classes.input,
        externalForwardedProps,
        getSlotProps: (handlers)=>({
                onChange: (event)=>{
                    var _handlers_onChange;
                    (_handlers_onChange = handlers.onChange) === null || _handlers_onChange === void 0 ? void 0 : _handlers_onChange.call(handlers, event);
                    handleInputChange(event);
                }
            }),
        ownerState,
        additionalProps: {
            autoFocus,
            checked: checkedProp,
            defaultChecked,
            disabled,
            id: hasLabelFor ? id : undefined,
            name,
            readOnly,
            required,
            tabIndex,
            type,
            ...type === 'checkbox' && value === undefined ? {} : {
                value
            }
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputSlot, {
                ...inputSlotProps
            }),
            checked ? checkedIcon : icon
        ]
    });
});
// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ const internal_SwitchBase = (SwitchBase);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/switchClasses.js


function getSwitchUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiSwitch', slot);
}
const switchClasses = (0,generateUtilityClasses/* default */.A)('MuiSwitch', [
    'root',
    'edgeStart',
    'edgeEnd',
    'switchBase',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium',
    'checked',
    'disabled',
    'input',
    'thumb',
    'track'
]);
/* harmony default export */ const Switch_switchClasses = (switchClasses);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js
/* __next_internal_client_entry_do_not_use__ default auto */ // @inheritedComponent IconButton















const Switch_useUtilityClasses = (ownerState)=>{
    const { classes, edge, size, color, checked, disabled } = ownerState;
    const slots = {
        root: [
            'root',
            edge && "edge".concat((0,capitalize/* default */.A)(edge)),
            "size".concat((0,capitalize/* default */.A)(size))
        ],
        switchBase: [
            'switchBase',
            "color".concat((0,capitalize/* default */.A)(color)),
            checked && 'checked',
            disabled && 'disabled'
        ],
        thumb: [
            'thumb'
        ],
        track: [
            'track'
        ],
        input: [
            'input'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getSwitchUtilityClass, classes);
    return {
        ...classes,
        // forward the disabled and checked classes to the SwitchBase
        ...composedClasses
    };
};
const SwitchRoot = (0,styled/* default */.Ay)('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})({
    display: 'inline-flex',
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: 0,
    zIndex: 0,
    // Reset the stacking context.
    verticalAlign: 'middle',
    // For correct alignment with the text.
    '@media print': {
        colorAdjust: 'exact'
    },
    variants: [
        {
            props: {
                edge: 'start'
            },
            style: {
                marginLeft: -8
            }
        },
        {
            props: {
                edge: 'end'
            },
            style: {
                marginRight: -8
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                width: 40,
                height: 24,
                padding: 7,
                ["& .".concat(Switch_switchClasses.thumb)]: {
                    width: 16,
                    height: 16
                },
                ["& .".concat(Switch_switchClasses.switchBase)]: {
                    padding: 4,
                    ["&.".concat(Switch_switchClasses.checked)]: {
                        transform: 'translateX(16px)'
                    }
                }
            }
        }
    ]
});
const SwitchSwitchBase = (0,styled/* default */.Ay)(internal_SwitchBase, {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.switchBase,
            {
                ["& .".concat(Switch_switchClasses.input)]: styles.input
            },
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        // Render above the focus ripple.
        color: theme.vars ? theme.vars.palette.Switch.defaultColor : "".concat(theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]),
        transition: theme.transitions.create([
            'left',
            'transform'
        ], {
            duration: theme.transitions.duration.shortest
        }),
        ["&.".concat(Switch_switchClasses.checked)]: {
            transform: 'translateX(20px)'
        },
        ["&.".concat(Switch_switchClasses.disabled)]: {
            color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : "".concat(theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600])
        },
        ["&.".concat(Switch_switchClasses.checked, " + .").concat(Switch_switchClasses.track)]: {
            opacity: 0.5
        },
        ["&.".concat(Switch_switchClasses.disabled, " + .").concat(Switch_switchClasses.track)]: {
            opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : "".concat(theme.palette.mode === 'light' ? 0.12 : 0.2)
        },
        ["& .".concat(Switch_switchClasses.input)]: {
            left: '-100%',
            width: '300%'
        }
    };
}), (0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        '&:hover': {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        variants: [
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'light'
            ])) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        ["&.".concat(Switch_switchClasses.checked)]: {
                            color: (theme.vars || theme).palette[color].main,
                            '&:hover': {
                                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity),
                                '@media (hover: none)': {
                                    backgroundColor: 'transparent'
                                }
                            },
                            ["&.".concat(Switch_switchClasses.disabled)]: {
                                color: theme.vars ? theme.vars.palette.Switch["".concat(color, "DisabledColor")] : "".concat(theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.a)(theme.palette[color].main, 0.62) : (0,colorManipulator/* darken */.e$)(theme.palette[color].main, 0.55))
                            }
                        },
                        ["&.".concat(Switch_switchClasses.checked, " + .").concat(Switch_switchClasses.track)]: {
                            backgroundColor: (theme.vars || theme).palette[color].main
                        }
                    }
                };
            })
        ]
    };
}));
const SwitchTrack = (0,styled/* default */.Ay)('span', {
    name: 'MuiSwitch',
    slot: 'Track',
    overridesResolver: (props, styles)=>styles.track
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        height: '100%',
        width: '100%',
        borderRadius: 14 / 2,
        zIndex: -1,
        transition: theme.transitions.create([
            'opacity',
            'background-color'
        ], {
            duration: theme.transitions.duration.shortest
        }),
        backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : "".concat(theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white),
        opacity: theme.vars ? theme.vars.opacity.switchTrack : "".concat(theme.palette.mode === 'light' ? 0.38 : 0.3)
    };
}));
const SwitchThumb = (0,styled/* default */.Ay)('span', {
    name: 'MuiSwitch',
    slot: 'Thumb',
    overridesResolver: (props, styles)=>styles.thumb
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        boxShadow: (theme.vars || theme).shadows[1],
        backgroundColor: 'currentColor',
        width: 20,
        height: 20,
        borderRadius: '50%'
    };
}));
const Switch = /*#__PURE__*/ react.forwardRef(function Switch(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiSwitch'
    });
    const { className, color = 'primary', edge = false, size = 'medium', sx, slots = {}, slotProps = {}, ...other } = props;
    const ownerState = {
        ...props,
        color,
        edge,
        size
    };
    const classes = Switch_useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps
    };
    const [RootSlot, rootSlotProps] = (0,useSlot/* default */.A)('root', {
        className: (0,clsx/* default */.A)(classes.root, className),
        elementType: SwitchRoot,
        externalForwardedProps,
        ownerState,
        additionalProps: {
            sx
        }
    });
    const [ThumbSlot, thumbSlotProps] = (0,useSlot/* default */.A)('thumb', {
        className: classes.thumb,
        elementType: SwitchThumb,
        externalForwardedProps,
        ownerState
    });
    const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(ThumbSlot, {
        ...thumbSlotProps
    });
    const [TrackSlot, trackSlotProps] = (0,useSlot/* default */.A)('track', {
        className: classes.track,
        elementType: SwitchTrack,
        externalForwardedProps,
        ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootSlotProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchSwitchBase, {
                type: "checkbox",
                icon: icon,
                checkedIcon: icon,
                ref: ref,
                ownerState: ownerState,
                ...other,
                classes: {
                    ...classes,
                    root: classes.switchBase
                },
                slots: {
                    ...slots.switchBase && {
                        root: slots.switchBase
                    },
                    ...slots.input && {
                        input: slots.input
                    }
                },
                slotProps: {
                    ...slotProps.switchBase && {
                        root: typeof slotProps.switchBase === 'function' ? slotProps.switchBase(ownerState) : slotProps.switchBase
                    },
                    ...slotProps.input && {
                        input: typeof slotProps.input === 'function' ? slotProps.input(ownerState) : slotProps.input
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TrackSlot, {
                ...trackSlotProps
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Switch_Switch = (Switch);


/***/ }),

/***/ 48247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ material_Popper_Popper)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(93974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(16316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(51142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(48770);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js + 53 modules
var lib_popper = __webpack_require__(66293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
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


/***/ }),

/***/ 50807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), 'Delete'));


/***/ }),

/***/ 55047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Mp: () => (/* binding */ DndContext),
  vL: () => (/* binding */ KeyboardCode),
  uN: () => (/* binding */ KeyboardSensor),
  AN: () => (/* binding */ PointerSensor),
  fp: () => (/* binding */ closestCenter),
  y$: () => (/* binding */ closestCorners),
  Sj: () => (/* binding */ getClientRect),
  Vy: () => (/* binding */ getFirstCollision),
  sl: () => (/* binding */ getScrollableAncestors),
  fF: () => (/* binding */ useDndContext),
  PM: () => (/* binding */ useDraggable),
  zM: () => (/* binding */ useDroppable),
  MS: () => (/* binding */ useSensor),
  FR: () => (/* binding */ useSensors)
});

// UNUSED EXPORTS: AutoScrollActivator, DragOverlay, MeasuringFrequency, MeasuringStrategy, MouseSensor, TouchSensor, TraversalOrder, applyModifiers, defaultAnnouncements, defaultCoordinates, defaultDropAnimation, defaultDropAnimationSideEffects, defaultKeyboardCoordinateGetter, defaultScreenReaderInstructions, pointerWithin, rectIntersection, useDndMonitor

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(95088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@19.1.0/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(34826);
;// ../../node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@19.1.0/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js


const hiddenStyles = {
  display: 'none'
};
function HiddenText(_ref) {
  let {
    id,
    value
  } = _ref;
  return react.createElement("div", {
    id: id,
    style: hiddenStyles
  }, value);
}

function LiveRegion(_ref) {
  let {
    id,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  // Hide element visually but keep it readable by screen readers
  const visuallyHidden = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    whiteSpace: 'nowrap'
  };
  return react.createElement("div", {
    id: id,
    style: visuallyHidden,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}

function useAnnouncement() {
  const [announcement, setAnnouncement] = (0,react.useState)('');
  const announce = (0,react.useCallback)(value => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}


//# sourceMappingURL=accessibility.esm.js.map

;// ../../node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@dnd-kit/core/dist/core.esm.js





const DndMonitorContext = /*#__PURE__*/(0,react.createContext)(null);

function useDndMonitor(listener) {
  const registerListener = (0,react.useContext)(DndMonitorContext);
  (0,react.useEffect)(() => {
    if (!registerListener) {
      throw new Error('useDndMonitor must be used within a children of <DndContext>');
    }

    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}

function useDndMonitorProvider() {
  const [listeners] = (0,react.useState)(() => new Set());
  const registerListener = (0,react.useCallback)(listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch = (0,react.useCallback)(_ref => {
    let {
      type,
      event
    } = _ref;
    listeners.forEach(listener => {
      var _listener$type;

      return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch, registerListener];
}

const defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },

  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;

    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }

    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },

  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;

    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }

    return "Draggable item " + active.id + " was dropped.";
  },

  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }

};

function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = useAnnouncement();
  const liveRegionId = (0,utilities_esm/* useUniqueId */.YG)("DndLiveRegion");
  const [mounted, setMounted] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setMounted(true);
  }, []);
  useDndMonitor((0,react.useMemo)(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },

    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;

      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },

    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },

    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },

    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }

  }), [announce, announcements]));

  if (!mounted) {
    return null;
  }

  const markup = react.createElement(react.Fragment, null, react.createElement(HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), react.createElement(LiveRegion, {
    id: liveRegionId,
    announcement: announcement
  }));
  return container ? (0,react_dom.createPortal)(markup, container) : markup;
}

var Action;

(function (Action) {
  Action["DragStart"] = "dragStart";
  Action["DragMove"] = "dragMove";
  Action["DragEnd"] = "dragEnd";
  Action["DragCancel"] = "dragCancel";
  Action["DragOver"] = "dragOver";
  Action["RegisterDroppable"] = "registerDroppable";
  Action["SetDroppableDisabled"] = "setDroppableDisabled";
  Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));

function noop() {}

function useSensor(sensor, options) {
  return (0,react.useMemo)(() => ({
    sensor,
    options: options != null ? options : {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [sensor, options]);
}

function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }

  return (0,react.useMemo)(() => [...sensors].filter(sensor => sensor != null), // eslint-disable-next-line react-hooks/exhaustive-deps
  [...sensors]);
}

const defaultCoordinates = /*#__PURE__*/Object.freeze({
  x: 0,
  y: 0
});

/**
 * Returns the distance between two points
 */
function distanceBetween(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function getRelativeTransformOrigin(event, rect) {
  const eventCoordinates = getEventCoordinates(event);

  if (!eventCoordinates) {
    return '0 0';
  }

  const transformOrigin = {
    x: (eventCoordinates.x - rect.left) / rect.width * 100,
    y: (eventCoordinates.y - rect.top) / rect.height * 100
  };
  return transformOrigin.x + "% " + transformOrigin.y + "%";
}

/**
 * Sort collisions from smallest to greatest value
 */
function sortCollisionsAsc(_ref, _ref2) {
  let {
    data: {
      value: a
    }
  } = _ref;
  let {
    data: {
      value: b
    }
  } = _ref2;
  return a - b;
}
/**
 * Sort collisions from greatest to smallest value
 */

function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */

function cornersOfRectangle(_ref5) {
  let {
    left,
    top,
    height,
    width
  } = _ref5;
  return [{
    x: left,
    y: top
  }, {
    x: left + width,
    y: top
  }, {
    x: left,
    y: top + height
  }, {
    x: left + width,
    y: top + height
  }];
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }

  const [firstCollision] = collisions;
  return property ? firstCollision[property] : firstCollision;
}

/**
 * Returns the coordinates of the center of a given ClientRect
 */

function centerOfRectangle(rect, left, top) {
  if (left === void 0) {
    left = rect.left;
  }

  if (top === void 0) {
    top = rect.top;
  }

  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5
  };
}
/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */


const closestCenter = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: distBetween
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */

const closestCorners = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const corners = cornersOfRectangle(collisionRect);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const rectCorners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner, index) => {
        return accumulator + distanceBetween(rectCorners[index], corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the intersecting rectangle area between two rectangles
 */

function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;

  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)


  return 0;
}
/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */

const rectIntersection = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }

  return collisions.sort(sortCollisionsDesc);
};

/**
 * Check if a given point is contained within a bounding rectangle
 */

function isPointWithinRect(point, rect) {
  const {
    top,
    left,
    bottom,
    right
  } = rect;
  return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
}
/**
 * Returns the rectangles that the pointer is hovering over
 */


const pointerWithin = _ref => {
  let {
    droppableContainers,
    droppableRects,
    pointerCoordinates
  } = _ref;

  if (!pointerCoordinates) {
    return [];
  }

  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect && isPointWithinRect(pointerCoordinates, rect)) {
      /* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */
      const corners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner) => {
        return accumulator + distanceBetween(pointerCoordinates, corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

function adjustScale(transform, rect1, rect2) {
  return { ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}

function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}

function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((acc, adjustment) => ({ ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), { ...rect
    });
  };
}
const getAdjustedRect = /*#__PURE__*/createRectAdjustmentFn(1);

function parseTransform(transform) {
  if (transform.startsWith('matrix3d(')) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith('matrix(')) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }

  return null;
}

function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);

  if (!parsedTransform) {
    return rect;
  }

  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}

const defaultOptions = {
  ignoreTransform: false
};
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */

function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  let rect = element.getBoundingClientRect();

  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = (0,utilities_esm/* getWindow */.zk)(element).getComputedStyle(element);

    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }

  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */

function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}

function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}

function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = (0,utilities_esm/* getWindow */.zk)(node).getComputedStyle(node);
  }

  return computedStyle.position === 'fixed';
}

function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = (0,utilities_esm/* getWindow */.zk)(element).getComputedStyle(element);
  }

  const overflowRegex = /(auto|scroll|overlay)/;
  const properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.some(property => {
    const value = computedStyle[property];
    return typeof value === 'string' ? overflowRegex.test(value) : false;
  });
}

function getScrollableAncestors(element, limit) {
  const scrollParents = [];

  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }

    if (!node) {
      return scrollParents;
    }

    if ((0,utilities_esm/* isDocument */.wz)(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }

    if (!(0,utilities_esm/* isHTMLElement */.sb)(node) || (0,utilities_esm/* isSVGElement */.xZ)(node)) {
      return scrollParents;
    }

    if (scrollParents.includes(node)) {
      return scrollParents;
    }

    const computedStyle = (0,utilities_esm/* getWindow */.zk)(element).getComputedStyle(node);

    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }

    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }

    return findScrollableAncestors(node.parentNode);
  }

  if (!element) {
    return scrollParents;
  }

  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}

function getScrollableElement(element) {
  if (!utilities_esm/* canUseDOM */.Sw || !element) {
    return null;
  }

  if ((0,utilities_esm/* isWindow */.l6)(element)) {
    return element;
  }

  if (!(0,utilities_esm/* isNode */.Ll)(element)) {
    return null;
  }

  if ((0,utilities_esm/* isDocument */.wz)(element) || element === (0,utilities_esm/* getOwnerDocument */.TW)(element).scrollingElement) {
    return window;
  }

  if ((0,utilities_esm/* isHTMLElement */.sb)(element)) {
    return element;
  }

  return null;
}

function getScrollXCoordinate(element) {
  if ((0,utilities_esm/* isWindow */.l6)(element)) {
    return element.scrollX;
  }

  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if ((0,utilities_esm/* isWindow */.l6)(element)) {
    return element.scrollY;
  }

  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}

var Direction;

(function (Direction) {
  Direction[Direction["Forward"] = 1] = "Forward";
  Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

function isDocumentScrollingElement(element) {
  if (!utilities_esm/* canUseDOM */.Sw || !element) {
    return false;
  }

  return element === document.scrollingElement;
}

function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}

const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;

  if (acceleration === void 0) {
    acceleration = 10;
  }

  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }

  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };

  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    // Scroll Up
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    // Scroll Down
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }

  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    // Scroll Right
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    // Scroll Left
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }

  return {
    direction,
    speed
  };
}

function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }

  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return (0,utilities_esm/* add */.WQ)(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}

function scrollIntoViewIfNeeded(element, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  if (!element) {
    return;
  }

  const {
    top,
    left,
    bottom,
    right
  } = measure(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);

  if (!firstScrollableAncestor) {
    return;
  }

  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  }
}

const properties = [['x', ['left', 'right'], getScrollXOffset], ['y', ['top', 'bottom'], getScrollYOffset]];
class Rect {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = { ...rect
    };
    this.width = rect.width;
    this.height = rect.height;

    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }

    Object.defineProperty(this, 'rect', {
      enumerable: false
    });
  }

}

class Listeners {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];

    this.removeAll = () => {
      this.listeners.forEach(listener => {
        var _this$target;

        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };

    this.target = target;
  }

  add(eventName, handler, options) {
    var _this$target2;

    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }

}

function getEventListenerTarget(target) {
  // If the `event.target` element is removed from the document events will still be targeted
  // at it, and hence won't always bubble up to the window or document anymore.
  // If there is any risk of an element being removed while it is being dragged,
  // the best practice is to attach the event listeners directly to the target.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
  const {
    EventTarget
  } = (0,utilities_esm/* getWindow */.zk)(target);
  return target instanceof EventTarget ? target : (0,utilities_esm/* getOwnerDocument */.TW)(target);
}

function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);

  if (typeof measurement === 'number') {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }

  if ('x' in measurement && 'y' in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }

  if ('x' in measurement) {
    return dx > measurement.x;
  }

  if ('y' in measurement) {
    return dy > measurement.y;
  }

  return false;
}

var EventName;

(function (EventName) {
  EventName["Click"] = "click";
  EventName["DragStart"] = "dragstart";
  EventName["Keydown"] = "keydown";
  EventName["ContextMenu"] = "contextmenu";
  EventName["Resize"] = "resize";
  EventName["SelectionChange"] = "selectionchange";
  EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));

function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}

var KeyboardCode;

(function (KeyboardCode) {
  KeyboardCode["Space"] = "Space";
  KeyboardCode["Down"] = "ArrowDown";
  KeyboardCode["Right"] = "ArrowRight";
  KeyboardCode["Left"] = "ArrowLeft";
  KeyboardCode["Up"] = "ArrowUp";
  KeyboardCode["Esc"] = "Escape";
  KeyboardCode["Enter"] = "Enter";
  KeyboardCode["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));

const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter, KeyboardCode.Tab]
};
const defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;

  switch (event.code) {
    case KeyboardCode.Right:
      return { ...currentCoordinates,
        x: currentCoordinates.x + 25
      };

    case KeyboardCode.Left:
      return { ...currentCoordinates,
        x: currentCoordinates.x - 25
      };

    case KeyboardCode.Down:
      return { ...currentCoordinates,
        y: currentCoordinates.y + 25
      };

    case KeyboardCode.Up:
      return { ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }

  return undefined;
};

class KeyboardSensor {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners((0,utilities_esm/* getOwnerDocument */.TW)(target));
    this.windowListeners = new Listeners((0,utilities_esm/* getWindow */.zk)(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }

  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }

  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;

    if (node) {
      scrollIntoViewIfNeeded(node);
    }

    onStart(defaultCoordinates);
  }

  handleKeyDown(event) {
    if ((0,utilities_esm/* isKeyboardEvent */.kx)(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = 'smooth'
      } = options;
      const {
        code
      } = event;

      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }

      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }

      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;

      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }

      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });

      if (newCoordinates) {
        const coordinatesDelta = (0,utilities_esm/* subtract */.Re)(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;

        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;

          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;

            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }

            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }

            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;

            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }

            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }

            break;
          }
        }

        this.handleMove(event, (0,utilities_esm/* add */.WQ)((0,utilities_esm/* subtract */.Re)(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }

  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }

  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }

  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }

}
KeyboardSensor.activators = [{
  eventName: 'onKeyDown',
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;

    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;

      if (activator && event.target !== activator) {
        return false;
      }

      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }

    return false;
  }
}];

function isDistanceConstraint(constraint) {
  return Boolean(constraint && 'distance' in constraint);
}

function isDelayConstraint(constraint) {
  return Boolean(constraint && 'delay' in constraint);
}

class AbstractPointerSensor {
  constructor(props, events, listenerTarget) {
    var _getEventCoordinates;

    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }

    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events;
    this.document = (0,utilities_esm/* getOwnerDocument */.TW)(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners((0,utilities_esm/* getWindow */.zk)(target));
    this.initialCoordinates = (_getEventCoordinates = (0,utilities_esm/* getEventCoordinates */.e_)(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }

  attach() {
    const {
      events,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events.end.name, this.handleEnd);

    if (events.cancel) {
      this.listeners.add(events.cancel.name, this.handleCancel);
    }

    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }

      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        this.handlePending(activationConstraint);
        return;
      }

      if (isDistanceConstraint(activationConstraint)) {
        this.handlePending(activationConstraint);
        return;
      }
    }

    this.handleStart();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
    // This is necessary because we listen for `click` and `selection` events on the document

    setTimeout(this.documentListeners.removeAll, 50);

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  handlePending(constraint, offset) {
    const {
      active,
      onPending
    } = this.props;
    onPending(active, constraint, this.initialCoordinates, offset);
  }

  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;

    if (initialCoordinates) {
      this.activated = true; // Stop propagation of click events once activation constraints are met

      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      }); // Remove any text selection from the document

      this.removeTextSelection(); // Prevent further text selection while dragging

      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }

  handleMove(event) {
    var _getEventCoordinates2;

    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;

    if (!initialCoordinates) {
      return;
    }

    const coordinates = (_getEventCoordinates2 = (0,utilities_esm/* getEventCoordinates */.e_)(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = (0,utilities_esm/* subtract */.Re)(initialCoordinates, coordinates); // Constraint validation

    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }

      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }

      this.handlePending(activationConstraint, delta);
      return;
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    onMove(coordinates);
  }

  handleEnd() {
    const {
      onAbort,
      onEnd
    } = this.props;
    this.detach();

    if (!this.activated) {
      onAbort(this.props.active);
    }

    onEnd();
  }

  handleCancel() {
    const {
      onAbort,
      onCancel
    } = this.props;
    this.detach();

    if (!this.activated) {
      onAbort(this.props.active);
    }

    onCancel();
  }

  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }

  removeTextSelection() {
    var _this$document$getSel;

    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }

}

const events = {
  cancel: {
    name: 'pointercancel'
  },
  move: {
    name: 'pointermove'
  },
  end: {
    name: 'pointerup'
  }
};
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props; // Pointer events stop firing if the target is unmounted while dragging
    // Therefore we attach listeners to the owner document instead

    const listenerTarget = (0,utilities_esm/* getOwnerDocument */.TW)(event.target);
    super(props, events, listenerTarget);
  }

}
PointerSensor.activators = [{
  eventName: 'onPointerDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (!event.isPrimary || event.button !== 0) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$1 = {
  move: {
    name: 'mousemove'
  },
  end: {
    name: 'mouseup'
  }
};
var MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));

class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, (0,utilities_esm/* getOwnerDocument */.TW)(props.event.target));
  }

}
MouseSensor.activators = [{
  eventName: 'onMouseDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (event.button === MouseButton.RightClick) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$2 = {
  cancel: {
    name: 'touchcancel'
  },
  move: {
    name: 'touchmove'
  },
  end: {
    name: 'touchend'
  }
};
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }

  static setup() {
    // Adding a non-capture and non-passive `touchmove` listener in order
    // to force `event.preventDefault()` calls to work in dynamically added
    // touchmove event handlers. This is required for iOS Safari.
    window.addEventListener(events$2.move.name, noop, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop);
    }; // We create a new handler because the teardown function of another sensor
    // could remove our event listener if we use a referentially equal listener.

    function noop() {}
  }

}
TouchSensor.activators = [{
  eventName: 'onTouchStart',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;

    if (touches.length > 1) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

var AutoScrollActivator;

(function (AutoScrollActivator) {
  AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
  AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));

var TraversalOrder;

(function (TraversalOrder) {
  TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));

function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = (0,utilities_esm/* useInterval */.$$)();
  const scrollSpeed = (0,react.useRef)({
    x: 0,
    y: 0
  });
  const scrollDirection = (0,react.useRef)({
    x: 0,
    y: 0
  });
  const rect = (0,react.useMemo)(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;

      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = (0,react.useRef)(null);
  const autoScroll = (0,react.useCallback)(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = (0,react.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  (0,react.useEffect)(() => {
    if (!enabled || !scrollableAncestors.length || !rect) {
      clearAutoScrollInterval();
      return;
    }

    for (const scrollContainer of sortedScrollableAncestors) {
      if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
        continue;
      }

      const index = scrollableAncestors.indexOf(scrollContainer);
      const scrollContainerRect = scrollableAncestorRects[index];

      if (!scrollContainerRect) {
        continue;
      }

      const {
        direction,
        speed
      } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);

      for (const axis of ['x', 'y']) {
        if (!scrollIntent[axis][direction[axis]]) {
          speed[axis] = 0;
          direction[axis] = 0;
        }
      }

      if (speed.x > 0 || speed.y > 0) {
        clearAutoScrollInterval();
        scrollContainerRef.current = scrollContainer;
        setAutoScrollInterval(autoScroll, interval);
        scrollSpeed.current = speed;
        scrollDirection.current = direction;
        return;
      }
    }

    scrollSpeed.current = {
      x: 0,
      y: 0
    };
    scrollDirection.current = {
      x: 0,
      y: 0
    };
    clearAutoScrollInterval();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [acceleration, autoScroll, canScroll, clearAutoScrollInterval, enabled, interval, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(rect), // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(scrollIntent), setAutoScrollInterval, scrollableAncestors, sortedScrollableAncestors, scrollableAncestorRects, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(threshold)]);
}
const defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};

function useScrollIntent(_ref2) {
  let {
    delta,
    disabled
  } = _ref2;
  const previousDelta = (0,utilities_esm/* usePrevious */.ZC)(delta);
  return (0,utilities_esm/* useLazyMemo */.KG)(previousIntent => {
    if (disabled || !previousDelta || !previousIntent) {
      // Reset scroll intent tracking when auto-scrolling is disabled
      return defaultScrollIntent;
    }

    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    }; // Keep track of the user intent to scroll in each direction for both axis

    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled, delta, previousDelta]);
}

function useCachedNode(draggableNodes, id) {
  const draggableNode = id != null ? draggableNodes.get(id) : undefined;
  const node = draggableNode ? draggableNode.node.current : null;
  return (0,utilities_esm/* useLazyMemo */.KG)(cachedNode => {
    var _ref;

    if (id == null) {
      return null;
    } // In some cases, the draggable node can unmount while dragging
    // This is the case for virtualized lists. In those situations,
    // we fall back to the last known value for that node.


    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}

function useCombineActivators(sensors, getSyntheticHandler) {
  return (0,react.useMemo)(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map(activator => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}

var MeasuringStrategy;

(function (MeasuringStrategy) {
  MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
  MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));

var MeasuringFrequency;

(function (MeasuringFrequency) {
  MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));

const defaultValue = /*#__PURE__*/new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = (0,react.useState)(null);
  const {
    frequency,
    measure,
    strategy
  } = config;
  const containersRef = (0,react.useRef)(containers);
  const disabled = isDisabled();
  const disabledRef = (0,utilities_esm/* useLatestValue */.YN)(disabled);
  const measureDroppableContainers = (0,react.useCallback)(function (ids) {
    if (ids === void 0) {
      ids = [];
    }

    if (disabledRef.current) {
      return;
    }

    setQueue(value => {
      if (value === null) {
        return ids;
      }

      return value.concat(ids.filter(id => !value.includes(id)));
    });
  }, [disabledRef]);
  const timeoutId = (0,react.useRef)(null);
  const droppableRects = (0,utilities_esm/* useLazyMemo */.KG)(previousValue => {
    if (disabled && !dragging) {
      return defaultValue;
    }

    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = new Map();

      for (let container of containers) {
        if (!container) {
          continue;
        }

        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          // This container does not need to be re-measured
          map.set(container.id, container.rect.current);
          continue;
        }

        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;

        if (rect) {
          map.set(container.id, rect);
        }
      }

      return map;
    }

    return previousValue;
  }, [containers, queue, dragging, disabled, measure]);
  (0,react.useEffect)(() => {
    containersRef.current = containers;
  }, [containers]);
  (0,react.useEffect)(() => {
    if (disabled) {
      return;
    }

    measureDroppableContainers();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [dragging, disabled]);
  (0,react.useEffect)(() => {
    if (queue && queue.length > 0) {
      setQueue(null);
    }
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [JSON.stringify(queue)]);
  (0,react.useEffect)(() => {
    if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
      return;
    }

    timeoutId.current = setTimeout(() => {
      measureDroppableContainers();
      timeoutId.current = null;
    }, frequency);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [frequency, disabled, measureDroppableContainers, ...dependencies]);
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };

  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;

      case MeasuringStrategy.BeforeDragging:
        return dragging;

      default:
        return !dragging;
    }
  }
}

function useInitialValue(value, computeFn) {
  return (0,utilities_esm/* useLazyMemo */.KG)(previousValue => {
    if (!value) {
      return null;
    }

    if (previousValue) {
      return previousValue;
    }

    return typeof computeFn === 'function' ? computeFn(value) : value;
  }, [computeFn, value]);
}

function useInitialRect(node, measure) {
  return useInitialValue(node, measure);
}

/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */

function useMutationObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleMutations = (0,utilities_esm/* useEvent */._q)(callback);
  const mutationObserver = (0,react.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.MutationObserver === 'undefined') {
      return undefined;
    }

    const {
      MutationObserver
    } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  (0,react.useEffect)(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}

/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */

function useResizeObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleResize = (0,utilities_esm/* useEvent */._q)(callback);
  const resizeObserver = (0,react.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
      return undefined;
    }

    const {
      ResizeObserver
    } = window;
    return new ResizeObserver(handleResize);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [disabled]);
  (0,react.useEffect)(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}

function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}

function useRect(element, measure, fallbackRect) {
  if (measure === void 0) {
    measure = defaultMeasure;
  }

  const [rect, setRect] = (0,react.useState)(null);

  function measureRect() {
    setRect(currentRect => {
      if (!element) {
        return null;
      }

      if (element.isConnected === false) {
        var _ref;

        // Fall back to last rect we measured if the element is
        // no longer connected to the DOM.
        return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
      }

      const newRect = measure(element);

      if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
        return currentRect;
      }

      return newRect;
    });
  }

  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }

      for (const record of records) {
        const {
          type,
          target
        } = record;

        if (type === 'childList' && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }

  });
  const resizeObserver = useResizeObserver({
    callback: measureRect
  });
  (0,utilities_esm/* useIsomorphicLayoutEffect */.Es)(() => {
    measureRect();

    if (element) {
      resizeObserver == null ? void 0 : resizeObserver.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;
}

function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}

const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = (0,react.useRef)(node);
  const ancestors = (0,utilities_esm/* useLazyMemo */.KG)(previousValue => {
    if (!node) {
      return defaultValue$1;
    }

    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }

    return getScrollableAncestors(node);
  }, [node]);
  (0,react.useEffect)(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}

function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = (0,react.useState)(null);
  const prevElements = (0,react.useRef)(elements); // To-do: Throttle the handleScroll callback

  const handleScroll = (0,react.useCallback)(event => {
    const scrollingElement = getScrollableElement(event.target);

    if (!scrollingElement) {
      return;
    }

    setScrollCoordinates(scrollCoordinates => {
      if (!scrollCoordinates) {
        return null;
      }

      scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates);
    });
  }, []);
  (0,react.useEffect)(() => {
    const previousElements = prevElements.current;

    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map(element => {
        const scrollableElement = getScrollableElement(element);

        if (scrollableElement) {
          scrollableElement.addEventListener('scroll', handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }

        return null;
      }).filter(entry => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }

    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };

    function cleanup(elements) {
      elements.forEach(element => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return (0,react.useMemo)(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => (0,utilities_esm/* add */.WQ)(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }

    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}

function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }

  const initialScrollOffsets = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    initialScrollOffsets.current = null;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  dependencies);
  (0,react.useEffect)(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;

    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }

    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? (0,utilities_esm/* subtract */.Re)(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}

function useSensorSetup(sensors) {
  (0,react.useEffect)(() => {
    if (!utilities_esm/* canUseDOM */.Sw) {
      return;
    }

    const teardownFns = sensors.map(_ref => {
      let {
        sensor
      } = _ref;
      return sensor.setup == null ? void 0 : sensor.setup();
    });
    return () => {
      for (const teardown of teardownFns) {
        teardown == null ? void 0 : teardown();
      }
    };
  }, // TO-DO: Sensors length could theoretically change which would not be a valid dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  sensors.map(_ref2 => {
    let {
      sensor
    } = _ref2;
    return sensor;
  }));
}

function useSyntheticListeners(listeners, id) {
  return (0,react.useMemo)(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;

      acc[eventName] = event => {
        handler(event, id);
      };

      return acc;
    }, {});
  }, [listeners, id]);
}

function useWindowRect(element) {
  return (0,react.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}

const defaultValue$2 = [];
function useRects(elements, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? (0,utilities_esm/* getWindow */.zk)(firstElement) : null);
  const [rects, setRects] = (0,react.useState)(defaultValue$2);

  function measureRects() {
    setRects(() => {
      if (!elements.length) {
        return defaultValue$2;
      }

      return elements.map(element => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
    });
  }

  const resizeObserver = useResizeObserver({
    callback: measureRects
  });
  (0,utilities_esm/* useIsomorphicLayoutEffect */.Es)(() => {
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    measureRects();
    elements.forEach(element => resizeObserver == null ? void 0 : resizeObserver.observe(element));
  }, [elements]);
  return rects;
}

function getMeasurableNode(node) {
  if (!node) {
    return null;
  }

  if (node.children.length > 1) {
    return node;
  }

  const firstChild = node.children[0];
  return (0,utilities_esm/* isHTMLElement */.sb)(firstChild) ? firstChild : node;
}

function useDragOverlayMeasuring(_ref) {
  let {
    measure
  } = _ref;
  const [rect, setRect] = (0,react.useState)(null);
  const handleResize = (0,react.useCallback)(entries => {
    for (const {
      target
    } of entries) {
      if ((0,utilities_esm/* isHTMLElement */.sb)(target)) {
        setRect(rect => {
          const newRect = measure(target);
          return rect ? { ...rect,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = (0,react.useCallback)(element => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();

    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }

    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = (0,utilities_esm/* useNodeRef */.lk)(handleNodeChange);
  return (0,react.useMemo)(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}

const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};

class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;

    return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
  }

  toArray() {
    return Array.from(this.values());
  }

  getEnabled() {
    return this.toArray().filter(_ref => {
      let {
        disabled
      } = _ref;
      return !disabled;
    });
  }

  getNodeFor(id) {
    var _this$get$node$curren, _this$get;

    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
  }

}

const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /*#__PURE__*/new Map(),
  droppableRects: /*#__PURE__*/new Map(),
  droppableContainers: /*#__PURE__*/new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ''
  },
  dispatch: noop,
  draggableNodes: /*#__PURE__*/new Map(),
  over: null,
  measureDroppableContainers: noop
};
const InternalContext = /*#__PURE__*/(0,react.createContext)(defaultInternalContext);
const PublicContext = /*#__PURE__*/(0,react.createContext)(defaultPublicContext);

function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return { ...state,
        draggable: { ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };

    case Action.DragMove:
      if (state.draggable.active == null) {
        return state;
      }

      return { ...state,
        draggable: { ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };

    case Action.DragEnd:
    case Action.DragCancel:
      return { ...state,
        draggable: { ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };

    case Action.RegisterDroppable:
      {
        const {
          element
        } = action;
        const {
          id
        } = element;
        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, element);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.SetDroppableDisabled:
      {
        const {
          id,
          key,
          disabled
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, { ...element,
          disabled
        });
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.UnregisterDroppable:
      {
        const {
          id,
          key
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.delete(id);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    default:
      {
        return state;
      }
  }
}

function RestoreFocus(_ref) {
  let {
    disabled
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = (0,react.useContext)(InternalContext);
  const previousActivatorEvent = (0,utilities_esm/* usePrevious */.ZC)(activatorEvent);
  const previousActiveId = (0,utilities_esm/* usePrevious */.ZC)(active == null ? void 0 : active.id); // Restore keyboard focus on the activator node

  (0,react.useEffect)(() => {
    if (disabled) {
      return;
    }

    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!(0,utilities_esm/* isKeyboardEvent */.kx)(previousActivatorEvent)) {
        return;
      }

      if (document.activeElement === previousActivatorEvent.target) {
        // No need to restore focus
        return;
      }

      const draggableNode = draggableNodes.get(previousActiveId);

      if (!draggableNode) {
        return;
      }

      const {
        activatorNode,
        node
      } = draggableNode;

      if (!activatorNode.current && !node.current) {
        return;
      }

      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }

          const focusableNode = (0,utilities_esm/* findFirstFocusableNode */.ag)(element);

          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}

function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}

function useMeasuringConfiguration(config) {
  return (0,react.useMemo)(() => ({
    draggable: { ...defaultMeasuringConfiguration.draggable,
      ...(config == null ? void 0 : config.draggable)
    },
    droppable: { ...defaultMeasuringConfiguration.droppable,
      ...(config == null ? void 0 : config.droppable)
    },
    dragOverlay: { ...defaultMeasuringConfiguration.dragOverlay,
      ...(config == null ? void 0 : config.dragOverlay)
    }
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]);
}

function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure,
    initialRect,
    config = true
  } = _ref;
  const initialized = (0,react.useRef)(false);
  const {
    x,
    y
  } = typeof config === 'boolean' ? {
    x: config,
    y: config
  } : config;
  (0,utilities_esm/* useIsomorphicLayoutEffect */.Es)(() => {
    const disabled = !x && !y;

    if (disabled || !activeNode) {
      initialized.current = false;
      return;
    }

    if (initialized.current || !initialRect) {
      // Return early if layout shift scroll compensation was already attempted
      // or if there is no initialRect to compare to.
      return;
    } // Get the most up to date node ref for the active draggable


    const node = activeNode == null ? void 0 : activeNode.node.current;

    if (!node || node.isConnected === false) {
      // Return early if there is no attached node ref or if the node is
      // disconnected from the document.
      return;
    }

    const rect = measure(node);
    const rectDelta = getRectDelta(rect, initialRect);

    if (!x) {
      rectDelta.x = 0;
    }

    if (!y) {
      rectDelta.y = 0;
    } // Only perform layout shift scroll compensation once


    initialized.current = true;

    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);

      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure]);
}

const ActiveDraggableContext = /*#__PURE__*/(0,react.createContext)({ ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;

(function (Status) {
  Status[Status["Uninitialized"] = 0] = "Uninitialized";
  Status[Status["Initializing"] = 1] = "Initializing";
  Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));

const DndContext = /*#__PURE__*/(0,react.memo)(function DndContext(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;

  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = (0,react.useReducer)(reducer, undefined, getInitialState);
  const [state, dispatch] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = (0,react.useState)(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId != null ? draggableNodes.get(activeId) : null;
  const activeRects = (0,react.useRef)({
    initial: null,
    translated: null
  });
  const active = (0,react.useMemo)(() => {
    var _node$data;

    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = (0,react.useRef)(null);
  const [activeSensor, setActiveSensor] = (0,react.useState)(null);
  const [activatorEvent, setActivatorEvent] = (0,react.useState)(null);
  const latestProps = (0,utilities_esm/* useLatestValue */.YN)(props, Object.values(props));
  const draggableDescribedById = (0,utilities_esm/* useUniqueId */.YG)("DndDescribedBy", id);
  const enabledDroppableContainers = (0,react.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = (0,react.useMemo)(() => activatorEvent ? (0,utilities_esm/* getEventCoordinates */.e_)(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId != null ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = (0,react.useRef)({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  }); // Use the rect of the drag overlay if it is mounted

  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect); // The delta between the previous and new position of the draggable node
  // is only relevant when there is no drag overlay

  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect); // Get the window rect of the dragging node

  const windowRect = useWindowRect(draggingNode ? (0,utilities_esm/* getWindow */.zk)(draggingNode) : null); // Get scrollable ancestors of the dragging node

  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors); // Apply modifiers

  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? (0,utilities_esm/* add */.WQ)(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors); // Represents the scroll delta since dragging was initiated

  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets); // Represents the scroll delta since the last time the active node rect was measured

  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = (0,utilities_esm/* add */.WQ)(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, 'id');
  const [over, setOver] = (0,react.useState)(null); // When there is no drag overlay used, we need to account for the
  // window scroll delta

  const appliedTranslate = usesDragOverlay ? modifiedTranslate : (0,utilities_esm/* add */.WQ)(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const activeSensorRef = (0,react.useRef)(null);
  const instantiateSensor = (0,react.useCallback)((event, _ref2) => {
    let {
      sensor: Sensor,
      options
    } = _ref2;

    if (activeRef.current == null) {
      return;
    }

    const activeNode = draggableNodes.get(activeRef.current);

    if (!activeNode) {
      return;
    }

    const activatorEvent = event.nativeEvent;
    const sensorInstance = new Sensor({
      active: activeRef.current,
      activeNode,
      event: activatorEvent,
      options,
      // Sensors need to be instantiated with refs for arguments that change over time
      // otherwise they are frozen in time with the stale arguments
      context: sensorContext,

      onAbort(id) {
        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragAbort
        } = latestProps.current;
        const event = {
          id
        };
        onDragAbort == null ? void 0 : onDragAbort(event);
        dispatchMonitorEvent({
          type: 'onDragAbort',
          event
        });
      },

      onPending(id, constraint, initialCoordinates, offset) {
        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragPending
        } = latestProps.current;
        const event = {
          id,
          constraint,
          initialCoordinates,
          offset
        };
        onDragPending == null ? void 0 : onDragPending(event);
        dispatchMonitorEvent({
          type: 'onDragPending',
          event
        });
      },

      onStart(initialCoordinates) {
        const id = activeRef.current;

        if (id == null) {
          return;
        }

        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragStart
        } = latestProps.current;
        const event = {
          activatorEvent,
          active: {
            id,
            data: draggableNode.data,
            rect: activeRects
          }
        };
        (0,react_dom.unstable_batchedUpdates)(() => {
          onDragStart == null ? void 0 : onDragStart(event);
          setStatus(Status.Initializing);
          dispatch({
            type: Action.DragStart,
            initialCoordinates,
            active: id
          });
          dispatchMonitorEvent({
            type: 'onDragStart',
            event
          });
          setActiveSensor(activeSensorRef.current);
          setActivatorEvent(activatorEvent);
        });
      },

      onMove(coordinates) {
        dispatch({
          type: Action.DragMove,
          coordinates
        });
      },

      onEnd: createHandler(Action.DragEnd),
      onCancel: createHandler(Action.DragCancel)
    });
    activeSensorRef.current = sensorInstance;

    function createHandler(type) {
      return async function handler() {
        const {
          active,
          collisions,
          over,
          scrollAdjustedTranslate
        } = sensorContext.current;
        let event = null;

        if (active && scrollAdjustedTranslate) {
          const {
            cancelDrop
          } = latestProps.current;
          event = {
            activatorEvent,
            active: active,
            collisions,
            delta: scrollAdjustedTranslate,
            over
          };

          if (type === Action.DragEnd && typeof cancelDrop === 'function') {
            const shouldCancel = await Promise.resolve(cancelDrop(event));

            if (shouldCancel) {
              type = Action.DragCancel;
            }
          }
        }

        activeRef.current = null;
        (0,react_dom.unstable_batchedUpdates)(() => {
          dispatch({
            type
          });
          setStatus(Status.Uninitialized);
          setOver(null);
          setActiveSensor(null);
          setActivatorEvent(null);
          activeSensorRef.current = null;
          const eventName = type === Action.DragEnd ? 'onDragEnd' : 'onDragCancel';

          if (event) {
            const handler = latestProps.current[eventName];
            handler == null ? void 0 : handler(event);
            dispatchMonitorEvent({
              type: eventName,
              event
            });
          }
        });
      };
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes]);
  const bindActivatorToSensorInstantiator = (0,react.useCallback)((handler, sensor) => {
    return (event, active) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active);

      if ( // Another sensor is already instantiating
      activeRef.current !== null || // No active draggable
      !activeDraggableNode || // Event has already been captured
      nativeEvent.dndKit || nativeEvent.defaultPrevented) {
        return;
      }

      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);

      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  (0,utilities_esm/* useIsomorphicLayoutEffect */.Es)(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  (0,react.useEffect)(() => {
    const {
      onDragMove
    } = latestProps.current;
    const {
      active,
      activatorEvent,
      collisions,
      over
    } = sensorContext.current;

    if (!active || !activatorEvent) {
      return;
    }

    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,react_dom.unstable_batchedUpdates)(() => {
      onDragMove == null ? void 0 : onDragMove(event);
      dispatchMonitorEvent({
        type: 'onDragMove',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  (0,react.useEffect)(() => {
    const {
      active,
      activatorEvent,
      collisions,
      droppableContainers,
      scrollAdjustedTranslate
    } = sensorContext.current;

    if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) {
      return;
    }

    const {
      onDragOver
    } = latestProps.current;
    const overContainer = droppableContainers.get(overId);
    const over = overContainer && overContainer.rect.current ? {
      id: overContainer.id,
      rect: overContainer.rect.current,
      data: overContainer.data,
      disabled: overContainer.disabled
    } : null;
    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,react_dom.unstable_batchedUpdates)(() => {
      setOver(over);
      onDragOver == null ? void 0 : onDragOver(event);
      dispatchMonitorEvent({
        type: 'onDragOver',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [overId]);
  (0,utilities_esm/* useIsomorphicLayoutEffect */.Es)(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({ ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = (0,react.useMemo)(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = (0,react.useMemo)(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return react.createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, react.createElement(InternalContext.Provider, {
    value: internalContext
  }, react.createElement(PublicContext.Provider, {
    value: publicContext
  }, react.createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), react.createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), react.createElement(Accessibility, { ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));

  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;

    if (typeof autoScroll === 'object') {
      return { ...autoScroll,
        enabled
      };
    }

    return {
      enabled
    };
  }
});

const NullContext = /*#__PURE__*/(0,react.createContext)(null);
const defaultRole = 'button';
const ID_PREFIX = 'Draggable';
function useDraggable(_ref) {
  let {
    id,
    data,
    disabled = false,
    attributes
  } = _ref;
  const key = (0,utilities_esm/* useUniqueId */.YG)(ID_PREFIX);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = (0,react.useContext)(InternalContext);
  const {
    role = defaultRole,
    roleDescription = 'draggable',
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = (0,react.useContext)(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = (0,utilities_esm/* useNodeRef */.lk)();
  const [activatorNode, setActivatorNodeRef] = (0,utilities_esm/* useNodeRef */.lk)();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = (0,utilities_esm/* useLatestValue */.YN)(data);
  (0,utilities_esm/* useIsomorphicLayoutEffect */.Es)(() => {
    draggableNodes.set(id, {
      id,
      key,
      node,
      activatorNode,
      data: dataRef
    });
    return () => {
      const node = draggableNodes.get(id);

      if (node && node.key === key) {
        draggableNodes.delete(id);
      }
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes, id]);
  const memoizedAttributes = (0,react.useMemo)(() => ({
    role,
    tabIndex,
    'aria-disabled': disabled,
    'aria-pressed': isDragging && role === defaultRole ? true : undefined,
    'aria-roledescription': roleDescription,
    'aria-describedby': ariaDescribedById.draggable
  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? undefined : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}

function useDndContext() {
  return (0,react.useContext)(PublicContext);
}

const ID_PREFIX$1 = 'Droppable';
const defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled = false,
    id,
    resizeObserverConfig
  } = _ref;
  const key = (0,utilities_esm/* useUniqueId */.YG)(ID_PREFIX$1);
  const {
    active,
    dispatch,
    over,
    measureDroppableContainers
  } = (0,react.useContext)(InternalContext);
  const previous = (0,react.useRef)({
    disabled
  });
  const resizeObserverConnected = (0,react.useRef)(false);
  const rect = (0,react.useRef)(null);
  const callbackId = (0,react.useRef)(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = { ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids = (0,utilities_esm/* useLatestValue */.YN)(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  const handleResize = (0,react.useCallback)(() => {
    if (!resizeObserverConnected.current) {
      // ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
      // assuming the element is rendered and displayed.
      resizeObserverConnected.current = true;
      return;
    }

    if (callbackId.current != null) {
      clearTimeout(callbackId.current);
    }

    callbackId.current = setTimeout(() => {
      measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
      callbackId.current = null;
    }, resizeObserverTimeout);
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [resizeObserverTimeout]);
  const resizeObserver = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = (0,react.useCallback)((newElement, previousElement) => {
    if (!resizeObserver) {
      return;
    }

    if (previousElement) {
      resizeObserver.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }

    if (newElement) {
      resizeObserver.observe(newElement);
    }
  }, [resizeObserver]);
  const [nodeRef, setNodeRef] = (0,utilities_esm/* useNodeRef */.lk)(handleNodeChange);
  const dataRef = (0,utilities_esm/* useLatestValue */.YN)(data);
  (0,react.useEffect)(() => {
    if (!resizeObserver || !nodeRef.current) {
      return;
    }

    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  (0,react.useEffect)(() => {
    dispatch({
      type: Action.RegisterDroppable,
      element: {
        id,
        key,
        disabled,
        node: nodeRef,
        rect,
        data: dataRef
      }
    });
    return () => dispatch({
      type: Action.UnregisterDroppable,
      key,
      id
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [id]);
  (0,react.useEffect)(() => {
    if (disabled !== previous.current.disabled) {
      dispatch({
        type: Action.SetDroppableDisabled,
        id,
        key,
        disabled
      });
      previous.current.disabled = disabled;
    }
  }, [id, key, disabled, dispatch]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}

function AnimationManager(_ref) {
  let {
    animation,
    children
  } = _ref;
  const [clonedChildren, setClonedChildren] = useState(null);
  const [element, setElement] = useState(null);
  const previousChildren = usePrevious(children);

  if (!children && !clonedChildren && previousChildren) {
    setClonedChildren(previousChildren);
  }

  useIsomorphicLayoutEffect(() => {
    if (!element) {
      return;
    }

    const key = clonedChildren == null ? void 0 : clonedChildren.key;
    const id = clonedChildren == null ? void 0 : clonedChildren.props.id;

    if (key == null || id == null) {
      setClonedChildren(null);
      return;
    }

    Promise.resolve(animation(id, element)).then(() => {
      setClonedChildren(null);
    });
  }, [animation, clonedChildren, element]);
  return React.createElement(React.Fragment, null, children, clonedChildren ? cloneElement(clonedChildren, {
    ref: setElement
  }) : null);
}

const defaultTransform = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function NullifiedContextProvider(_ref) {
  let {
    children
  } = _ref;
  return React.createElement(InternalContext.Provider, {
    value: defaultInternalContext
  }, React.createElement(ActiveDraggableContext.Provider, {
    value: defaultTransform
  }, children));
}

const baseStyles = {
  position: 'fixed',
  touchAction: 'none'
};

const defaultTransition = activatorEvent => {
  const isKeyboardActivator = isKeyboardEvent(activatorEvent);
  return isKeyboardActivator ? 'transform 250ms ease' : undefined;
};

const PositionedOverlay = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef((_ref, ref) => {
  let {
    as,
    activatorEvent,
    adjustScale,
    children,
    className,
    rect,
    style,
    transform,
    transition = defaultTransition
  } = _ref;

  if (!rect) {
    return null;
  }

  const scaleAdjustedTransform = adjustScale ? transform : { ...transform,
    scaleX: 1,
    scaleY: 1
  };
  const styles = { ...baseStyles,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    transform: CSS.Transform.toString(scaleAdjustedTransform),
    transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : undefined,
    transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
    ...style
  };
  return React.createElement(as, {
    className,
    style: styles,
    ref
  }, children);
})));

const defaultDropAnimationSideEffects = options => _ref => {
  let {
    active,
    dragOverlay
  } = _ref;
  const originalStyles = {};
  const {
    styles,
    className
  } = options;

  if (styles != null && styles.active) {
    for (const [key, value] of Object.entries(styles.active)) {
      if (value === undefined) {
        continue;
      }

      originalStyles[key] = active.node.style.getPropertyValue(key);
      active.node.style.setProperty(key, value);
    }
  }

  if (styles != null && styles.dragOverlay) {
    for (const [key, value] of Object.entries(styles.dragOverlay)) {
      if (value === undefined) {
        continue;
      }

      dragOverlay.node.style.setProperty(key, value);
    }
  }

  if (className != null && className.active) {
    active.node.classList.add(className.active);
  }

  if (className != null && className.dragOverlay) {
    dragOverlay.node.classList.add(className.dragOverlay);
  }

  return function cleanup() {
    for (const [key, value] of Object.entries(originalStyles)) {
      active.node.style.setProperty(key, value);
    }

    if (className != null && className.active) {
      active.node.classList.remove(className.active);
    }
  };
};

const defaultKeyframeResolver = _ref2 => {
  let {
    transform: {
      initial,
      final
    }
  } = _ref2;
  return [{
    transform: utilities_esm/* CSS */.Ks.Transform.toString(initial)
  }, {
    transform: utilities_esm/* CSS */.Ks.Transform.toString(final)
  }];
};

const defaultDropAnimationConfiguration = {
  duration: 250,
  easing: 'ease',
  keyframes: defaultKeyframeResolver,
  sideEffects: /*#__PURE__*/defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0'
      }
    }
  })
};
function useDropAnimation(_ref3) {
  let {
    config,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  } = _ref3;
  return useEvent((id, node) => {
    if (config === null) {
      return;
    }

    const activeDraggable = draggableNodes.get(id);

    if (!activeDraggable) {
      return;
    }

    const activeNode = activeDraggable.node.current;

    if (!activeNode) {
      return;
    }

    const measurableNode = getMeasurableNode(node);

    if (!measurableNode) {
      return;
    }

    const {
      transform
    } = getWindow(node).getComputedStyle(node);
    const parsedTransform = parseTransform(transform);

    if (!parsedTransform) {
      return;
    }

    const animation = typeof config === 'function' ? config : createDefaultDropAnimation(config);
    scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
    return animation({
      active: {
        id,
        data: activeDraggable.data,
        node: activeNode,
        rect: measuringConfiguration.draggable.measure(activeNode)
      },
      draggableNodes,
      dragOverlay: {
        node,
        rect: measuringConfiguration.dragOverlay.measure(measurableNode)
      },
      droppableContainers,
      measuringConfiguration,
      transform: parsedTransform
    });
  });
}

function createDefaultDropAnimation(options) {
  const {
    duration,
    easing,
    sideEffects,
    keyframes
  } = { ...defaultDropAnimationConfiguration,
    ...options
  };
  return _ref4 => {
    let {
      active,
      dragOverlay,
      transform,
      ...rest
    } = _ref4;

    if (!duration) {
      // Do not animate if animation duration is zero.
      return;
    }

    const delta = {
      x: dragOverlay.rect.left - active.rect.left,
      y: dragOverlay.rect.top - active.rect.top
    };
    const scale = {
      scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
      scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
    };
    const finalTransform = {
      x: transform.x - delta.x,
      y: transform.y - delta.y,
      ...scale
    };
    const animationKeyframes = keyframes({ ...rest,
      active,
      dragOverlay,
      transform: {
        initial: transform,
        final: finalTransform
      }
    });
    const [firstKeyframe] = animationKeyframes;
    const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];

    if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
      // The start and end keyframes are the same, infer that there is no animation needed.
      return;
    }

    const cleanup = sideEffects == null ? void 0 : sideEffects({
      active,
      dragOverlay,
      ...rest
    });
    const animation = dragOverlay.node.animate(animationKeyframes, {
      duration,
      easing,
      fill: 'forwards'
    });
    return new Promise(resolve => {
      animation.onfinish = () => {
        cleanup == null ? void 0 : cleanup();
        resolve();
      };
    });
  };
}

let key = 0;
function useKey(id) {
  return useMemo(() => {
    if (id == null) {
      return;
    }

    key++;
    return key;
  }, [id]);
}

const DragOverlay = /*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(_ref => {
  let {
    adjustScale = false,
    children,
    dropAnimation: dropAnimationConfig,
    style,
    transition,
    modifiers,
    wrapperElement = 'div',
    className,
    zIndex = 999
  } = _ref;
  const {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggableNodes,
    droppableContainers,
    dragOverlay,
    over,
    measuringConfiguration,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  } = useDndContext();
  const transform = useContext(ActiveDraggableContext);
  const key = useKey(active == null ? void 0 : active.id);
  const modifiedTransform = applyModifiers(modifiers, {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform,
    windowRect
  });
  const initialRect = useInitialValue(activeNodeRect);
  const dropAnimation = useDropAnimation({
    config: dropAnimationConfig,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  }); // We need to wait for the active node to be measured before connecting the drag overlay ref
  // otherwise collisions can be computed against a mispositioned drag overlay

  const ref = initialRect ? dragOverlay.setRef : undefined;
  return React.createElement(NullifiedContextProvider, null, React.createElement(AnimationManager, {
    animation: dropAnimation
  }, active && key ? React.createElement(PositionedOverlay, {
    key: key,
    id: active.id,
    ref: ref,
    as: wrapperElement,
    activatorEvent: activatorEvent,
    adjustScale: adjustScale,
    className: className,
    transition: transition,
    rect: initialRect,
    style: {
      zIndex,
      ...style
    },
    transform: modifiedTransform
  }, children) : null));
})));


//# sourceMappingURL=core.esm.js.map


/***/ }),

/***/ 56575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3638);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95116);
/* harmony import */ var _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21567);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64624);
/* harmony import */ var _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10355);
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79209);
/* harmony import */ var _dividerClasses_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70745);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { absolute, children, classes, flexItem, light, orientation, textAlign, variant } = ownerState;
    const slots = {
        root: [
            'root',
            absolute && 'absolute',
            variant,
            light && 'light',
            orientation === 'vertical' && 'vertical',
            flexItem && 'flexItem',
            children && 'withChildren',
            children && orientation === 'vertical' && 'withChildrenVertical',
            textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight',
            textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'
        ],
        wrapper: [
            'wrapper',
            orientation === 'vertical' && 'wrapperVertical'
        ]
    };
    return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(slots, _dividerClasses_js__WEBPACK_IMPORTED_MODULE_3__/* .getDividerUtilityClass */ .K, classes);
};
const DividerRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.absolute && styles.absolute,
            styles[ownerState.variant],
            ownerState.light && styles.light,
            ownerState.orientation === 'vertical' && styles.vertical,
            ownerState.flexItem && styles.flexItem,
            ownerState.children && styles.withChildren,
            ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical,
            ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight,
            ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft
        ];
    }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)((param)=>{
    let { theme } = param;
    return {
        margin: 0,
        // Reset browser default style.
        flexShrink: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: (theme.vars || theme).palette.divider,
        borderBottomWidth: 'thin',
        variants: [
            {
                props: {
                    absolute: true
                },
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%'
                }
            },
            {
                props: {
                    light: true
                },
                style: {
                    borderColor: theme.vars ? "rgba(".concat(theme.vars.palette.dividerChannel, " / 0.08)") : (0,_mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_6__/* .alpha */ .X4)(theme.palette.divider, 0.08)
                }
            },
            {
                props: {
                    variant: 'inset'
                },
                style: {
                    marginLeft: 72
                }
            },
            {
                props: {
                    variant: 'middle',
                    orientation: 'horizontal'
                },
                style: {
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2)
                }
            },
            {
                props: {
                    variant: 'middle',
                    orientation: 'vertical'
                },
                style: {
                    marginTop: theme.spacing(1),
                    marginBottom: theme.spacing(1)
                }
            },
            {
                props: {
                    orientation: 'vertical'
                },
                style: {
                    height: '100%',
                    borderBottomWidth: 0,
                    borderRightWidth: 'thin'
                }
            },
            {
                props: {
                    flexItem: true
                },
                style: {
                    alignSelf: 'stretch',
                    height: 'auto'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !!ownerState.children;
                },
                style: {
                    display: 'flex',
                    textAlign: 'center',
                    border: 0,
                    borderTopStyle: 'solid',
                    borderLeftStyle: 'solid',
                    '&::before, &::after': {
                        content: '""',
                        alignSelf: 'center'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.children && ownerState.orientation !== 'vertical';
                },
                style: {
                    '&::before, &::after': {
                        width: '100%',
                        borderTop: "thin solid ".concat((theme.vars || theme).palette.divider),
                        borderTopStyle: 'inherit'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.orientation === 'vertical' && ownerState.children;
                },
                style: {
                    flexDirection: 'column',
                    '&::before, &::after': {
                        height: '100%',
                        borderLeft: "thin solid ".concat((theme.vars || theme).palette.divider),
                        borderLeftStyle: 'inherit'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical';
                },
                style: {
                    '&::before': {
                        width: '90%'
                    },
                    '&::after': {
                        width: '10%'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical';
                },
                style: {
                    '&::before': {
                        width: '10%'
                    },
                    '&::after': {
                        width: '90%'
                    }
                }
            }
        ]
    };
}));
const DividerWrapper = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.wrapper,
            ownerState.orientation === 'vertical' && styles.wrapperVertical
        ];
    }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)((param)=>{
    let { theme } = param;
    return {
        display: 'inline-block',
        paddingLeft: "calc(".concat(theme.spacing(1), " * 1.2)"),
        paddingRight: "calc(".concat(theme.spacing(1), " * 1.2)"),
        whiteSpace: 'nowrap',
        variants: [
            {
                props: {
                    orientation: 'vertical'
                },
                style: {
                    paddingTop: "calc(".concat(theme.spacing(1), " * 1.2)"),
                    paddingBottom: "calc(".concat(theme.spacing(1), " * 1.2)")
                }
            }
        ]
    };
}));
const Divider = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Divider(inProps, ref) {
    const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__/* .useDefaultProps */ .b)({
        props: inProps,
        name: 'MuiDivider'
    });
    const { absolute = false, children, className, orientation = 'horizontal', component = children || orientation === 'vertical' ? 'div' : 'hr', flexItem = false, light = false, role = component !== 'hr' ? 'separator' : undefined, textAlign = 'center', variant = 'fullWidth', ...other } = props;
    const ownerState = {
        ...props,
        absolute,
        component,
        flexItem,
        light,
        orientation,
        role,
        textAlign,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerRoot, {
        as: component,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(classes.root, className),
        role: role,
        ref: ref,
        ownerState: ownerState,
        "aria-orientation": role === 'separator' && (component !== 'hr' || orientation === 'vertical') ? orientation : undefined,
        ...other,
        children: children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerWrapper, {
            className: classes.wrapper,
            ownerState: ownerState,
            children: children
        }) : null
    });
});
/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */ if (Divider) {
    Divider.muiSkipListHighlight = true;
}
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ 65555:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Popper/Popper.js + 2 modules
var Popper = __webpack_require__(48247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListSubheader/ListSubheader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
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
    const classes = useUtilityClasses(ownerState);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
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
const AutocompletePopper = (0,styled/* default */.Ay)(Popper/* default */.A, {
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
        elementType: Popper/* default */.A,
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
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
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


/***/ }),

/***/ 70745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   K: () => (/* binding */ getDividerUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getDividerUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiDivider', slot);
}
const dividerClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dividerClasses);


/***/ }),

/***/ 83816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MenuItem_MenuItem)
});

// UNUSED EXPORTS: overridesResolver

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(84044);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(5368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 5 modules
var ButtonBase = __webpack_require__(42932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(34486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/dividerClasses.js
var dividerClasses = __webpack_require__(70745);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemIcon/listItemIconClasses.js


function getListItemIconUtilityClass(slot) {
    return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,generateUtilityClasses/* default */.A)('MuiListItemIcon', [
    'root',
    'alignItemsFlexStart'
]);
/* harmony default export */ const ListItemIcon_listItemIconClasses = (listItemIconClasses);

;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/listItemTextClasses.js


function getListItemTextUtilityClass(slot) {
    return generateUtilityClass('MuiListItemText', slot);
}
const listItemTextClasses = (0,generateUtilityClasses/* default */.A)('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary'
]);
/* harmony default export */ const ListItemText_listItemTextClasses = (listItemTextClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass_generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/menuItemClasses.js


function getMenuItemUtilityClass(slot) {
    return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiMenuItem', slot);
}
const menuItemClasses = (0,generateUtilityClasses/* default */.A)('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected'
]);
/* harmony default export */ const MenuItem_menuItemClasses = (menuItemClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js
/* __next_internal_client_entry_do_not_use__ overridesResolver,default auto */ 

















const overridesResolver = (props, styles)=>{
    const { ownerState } = props;
    return [
        styles.root,
        ownerState.dense && styles.dense,
        ownerState.divider && styles.divider,
        !ownerState.disableGutters && styles.gutters
    ];
};
const useUtilityClasses = (ownerState)=>{
    const { disabled, dense, divider, disableGutters, selected, classes } = ownerState;
    const slots = {
        root: [
            'root',
            dense && 'dense',
            disabled && 'disabled',
            !disableGutters && 'gutters',
            divider && 'divider',
            selected && 'selected'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getMenuItemUtilityClass, classes);
    return {
        ...classes,
        ...composedClasses
    };
};
const MenuItemRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    shouldForwardProp: (prop)=>(0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.body1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: (theme.vars || theme).palette.action.hover,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.selected)]: {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            ["&.".concat(MenuItem_menuItemClasses.focusVisible)]: {
                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.selected, ":hover")]: {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.focusVisible)]: {
            backgroundColor: (theme.vars || theme).palette.action.focus
        },
        ["&.".concat(MenuItem_menuItemClasses.disabled)]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
        },
        ["& + .".concat(dividerClasses/* default */.A.root)]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        ["& + .".concat(dividerClasses/* default */.A.inset)]: {
            marginLeft: 52
        },
        ["& .".concat(ListItemText_listItemTextClasses.root)]: {
            marginTop: 0,
            marginBottom: 0
        },
        ["& .".concat(ListItemText_listItemTextClasses.inset)]: {
            paddingLeft: 36
        },
        ["& .".concat(ListItemIcon_listItemIconClasses.root)]: {
            minWidth: 36
        },
        variants: [
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
                    return ownerState.divider;
                },
                style: {
                    borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider),
                    backgroundClip: 'padding-box'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.dense;
                },
                style: {
                    [theme.breakpoints.up('sm')]: {
                        minHeight: 'auto'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.dense;
                },
                style: {
                    minHeight: 32,
                    // https://m2.material.io/components/menus#specs > Dense
                    paddingTop: 4,
                    paddingBottom: 4,
                    ...theme.typography.body2,
                    ["& .".concat(ListItemIcon_listItemIconClasses.root, " svg")]: {
                        fontSize: '1.25rem'
                    }
                }
            }
        ]
    };
}));
const MenuItem = /*#__PURE__*/ react.forwardRef(function MenuItem(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiMenuItem'
    });
    const { autoFocus = false, component = 'li', dense = false, divider = false, disableGutters = false, focusVisibleClassName, role = 'menuitem', tabIndex: tabIndexProp, className, ...other } = props;
    const context = react.useContext(ListContext/* default */.A);
    const childContext = react.useMemo(()=>({
            dense: dense || context.dense || false,
            disableGutters
        }), [
        context.dense,
        dense,
        disableGutters
    ]);
    const menuItemRef = react.useRef(null);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (autoFocus) {
            if (menuItemRef.current) {
                menuItemRef.current.focus();
            } else if (false) {}
        }
    }, [
        autoFocus
    ]);
    const ownerState = {
        ...props,
        dense: childContext.dense,
        divider,
        disableGutters
    };
    const classes = useUtilityClasses(props);
    const handleRef = (0,useForkRef/* default */.A)(menuItemRef, ref);
    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListContext/* default */.A.Provider, {
        value: childContext,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItemRoot, {
            ref: handleRef,
            role: role,
            tabIndex: tabIndex,
            component: component,
            focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
            className: (0,clsx/* default */.A)(classes.root, className),
            ...other,
            ownerState: ownerState,
            classes: classes
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const MenuItem_MenuItem = (MenuItem);


/***/ }),

/***/ 93803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"
}), 'VolumeUp'));


/***/ })

}]);
//# sourceMappingURL=124-f457b27ba19a5634.js.map
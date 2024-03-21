import React, {
    useRef,
    useMemo,
    useState,
    useEffect,
    useCallback,
    forwardRef,
    HTMLProps,
    MutableRefObject,
} from "react";
import {dequal} from "dequal";
import { cloneDeep } from 'lodash';

/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
function useDeepCompareMemoize<T>(value: T): T {
    const ref = useRef<T>(value);
    const signalRef = useRef<number>(0);

    if (!dequal(value, ref.current)) {
        ref.current = value;
        signalRef.current += 1;
    }

    return useMemo(() => ref.current, [signalRef.current]);
}

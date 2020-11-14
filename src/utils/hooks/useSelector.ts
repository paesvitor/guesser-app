import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { IAppRootState } from '../../store/rootTypes';

export const useSelector: TypedUseSelectorHook<IAppRootState> = useReduxSelector;

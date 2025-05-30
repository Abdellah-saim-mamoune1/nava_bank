import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState,AppDispatch } from './EStore';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.UI].city;
export const getActiveSortType = (state) => state[NameSpace.UI].activeSortType;
export const getHasPostedComment = (state) => state[NameSpace.UI].hasPostedComment;

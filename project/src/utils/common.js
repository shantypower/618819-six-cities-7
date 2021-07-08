import dayjs from 'dayjs';
import {AuthorizationStatus} from '../const';

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
export const formatDate = (date) => dayjs(date).format('MMMM YYYY');

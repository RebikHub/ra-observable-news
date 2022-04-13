import { ofType } from "redux-observable";
import {
  FETCH_GET_REQUEST,
} from '../store/actions';
import { fetchGetSuccess } from "../store/actions";
import { map, mergeMap } from "rxjs";
import { ajax } from "rxjs/ajax";

export const getNewsEpic = (action$) => action$.pipe(
  ofType(FETCH_GET_REQUEST),
  mergeMap(() => ajax.getJSON(process.env.REACT_APP_NEWS_URL).pipe(
    map((o) => fetchGetSuccess(o))
  ))
)
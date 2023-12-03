import { Route, Link } from 'react-router-dom';

import styles from './ui-lib.module.css';

/* eslint-disable-next-line */
export interface UiLibProps {}

export function UiLib(props: UiLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiLib!</h1>

      <ul>
        <li>
          <Link to="/">ui-lib/src/lib/ui-lib root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the ui-lib/src/lib/ui-lib root route.</div>}
      />
    </div>
  );
}

export default UiLib;

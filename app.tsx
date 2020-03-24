import { h, VNode, render } from 'preact'
import { MyComponent } from './component';

function MyApp(): VNode {
  const state = useMemo(() => 'Hello', []);
  return <MyComponent value={state}></MyComponent>;
}

render(<MyApp />, document.body);

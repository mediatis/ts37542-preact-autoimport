import { h, VNode } from 'preact';
import { useEffect } from 'preact/hooks';

export function MyComponent(props: {value: number}): VNode {
  useEffect(() => console.log('mounted'), []);
  return <div>{props.value}</div>;
}

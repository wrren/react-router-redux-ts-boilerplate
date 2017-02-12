import * as React from 'react'

export interface ChecklistProps {
  children: React.Component<any, any>[]
}

const Checklist = (props: ChecklistProps) => 
  <div>
    <h1>Hello World</h1>
    {props.children}
  </div>;

export default Checklist
import * as React from 'react'
import NavigationContainer  from './navigation/NavigationContainer'

export interface ChecklistProps {
  children: React.Component<any, any>[]
}

const Checklist = (props: ChecklistProps) => 
  <div>
    <h1>Hello World</h1>
    <NavigationContainer />
    {props.children}
  </div>;

export default Checklist
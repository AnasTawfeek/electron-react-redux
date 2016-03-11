import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import MultipleMonitors from 'redux-devtools-multiple-monitors';


// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               changeMonitorKey='ctrl-m'
               defaultIsVisible={true}
               defaultSize='1'
               fluid={true}
               >
    <MultipleMonitors>
      <LogMonitor theme='tomorrow' />
      <Dispatcher />
    </MultipleMonitors>
  </DockMonitor>
);

export default DevTools;
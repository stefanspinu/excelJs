import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  // before init
  prepare() {
    
  }
  // returns component's layout 
  toHTML() {
    return ''
  }

  // anounce listeners about events
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // subscribe to event
  $on (event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // initialize component 
  // add dom listeneres
  init() {
    this.initDOMListeners()
  }

  // delete component
  // clear listeners
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach( unsub => unsub())
  }
}
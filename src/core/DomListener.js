import { capitalize } from "@core/utils"

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners () {
    this.listeners.forEach(listener => {
      const method = getMethodeName(listener)
      if(!this[method]) {
        // I let this here for future, to show how to confront with eslint
        const name = this.name || ''
        throw new Error(`
          Method ${method} is not implemented in ${name} Compononet`
        )
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodeName(listener)
      this.$root.off(listener, this[method])
    })
  }

}

function getMethodeName(eventName) {
  return 'on' + capitalize(eventName)
}
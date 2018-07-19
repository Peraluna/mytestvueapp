<template>
  <div>
    <child-component>
   
       <div  slot="bottom">
        <h5>This text is injected to slot named : "bottom"</h5>
      </div>
      <div  slot="top">
        <h5>This text is injected to slot named : "top"</h5>
      </div>
      <div> 
        <p>This text is an injected content from the parent to the unnamed slot tag</p>
        <p>Data in the parent's scope: 
          <strong> {{myVariable}} </strong> 
        </p>
      </div>
    </child-component>
    <br>
    <br>
    <p>THIS IS PARENT TEXT, and it does not send and DOM elements to child</p>
    <child-component></child-component>

  </div>
</template>

<script>
import ChildComponent from './AppSlotChild.vue'

export default {
  components: {
    ChildComponent
  },

  data () {
    return {
      myVariable: `This variable is passed from Parent.`
    }
  }
}
</script>

SLOT EXPLANATION: 
Oftentimes you will need to allow your parent Vue components to embed arbitrary content 
inside of child components. Vue provides an easy way to do this via slot

To allow a parent component to pass DOM elements into a child component, 
provide a <slot></slot> element inside the child component.
You can then populate the elements in that slot 
with <child-component><p>MyParagraph</p></child-component>
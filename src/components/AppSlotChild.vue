<template>
  <div>
    <p>I'm the child component!</p>
    <!-- Content from the parent gets rendered here. -->
    <slot>
      <p>The Parent does not inject any DOM elements here...</p>
    </slot>
    <p>Now I'll provide named slots :</p>
    <slot name="top">Top slot is now waiting for injection from parent</slot>
    <p></p>
    <slot name="bottom">Bottom slot is now waiting for injection from parent</slot>
   
    
  </div>
</template>
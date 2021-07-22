<template>
  <div class="vc-rating">
    <div class="rating">
      <div class="rating-header"><h5 class="ml-2">Reviews:</h5></div>
      <div class="rating-body">
        <fontawesomeicon icon="star" class="ml-2" />
        <fontawesomeicon icon="star" class="ml-2" />
        <fontawesomeicon icon="star" class="ml-2" />
        <fontawesomeicon icon="star" class="ml-2" />
        <fontawesomeicon :icon="['far', 'star']" class="ml-2" />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.rating {
  border: 1px solid black;
  width: auto;

  .rating-header {
  }
}
</style>

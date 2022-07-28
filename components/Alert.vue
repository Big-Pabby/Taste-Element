<template>
  <div v-if="errorAlert" class="alert">
    <Icon icon="ci:notification-dot" />
    <div class="msg">{{msg}}</div>
  </div>
  <div v-else class="alert alert-green">
    <Icon icon="ci:notification-dot" />
    <div class="msg">{{msg}}</div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    props: ['msg', 'successAlert', 'errorAlert'],
    components: {
		Icon,
	},
}
</script>

<style scoped>
    .alert {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        top: 30px;
        z-index: 100;
        color: #fff;
        background: red;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 18px
    }

    .alert-green {
      background: #23a74f;
    }

    .msg {
        font-size: 14px;
    }
</style>
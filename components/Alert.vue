<template>
  <div class="alert">
    <Icon icon="ci:notification-dot" />
    <div class="msg">{{msg}}</div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    props: ['msg'],
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
        background: var(--color-bg-primary);
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 18px
    }

    .msg {
        font-size: 14px;
    }
</style>
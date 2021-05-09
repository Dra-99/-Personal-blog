<template>
  <div class="test-container">
      <right-list :list="list" @selectedEvent="handleEvent"></right-list>
  </div>
</template>

<script>
import RightList from './RightList'

export default {
    components: {
        RightList,
    },
    methods: {
        handleEvent(item) {
            console.log(item);
        }
    },
    data() {
        return {
            list: [
            {
                name: 'a',
                selected: false
            },
            {
                name: 'b',
                selected: true,
                child: [
                    {
                        name: 'b-1',
                        selected: false
                    },
                    {
                        name: 'b-2',
                        selected: false
                    }
                ] 
            },
            {
                name: 'c',
                selected: false,
                child: [
                    {
                        name: 'c-1',
                        selected: false
                    },
                    {
                        name: 'c-2',
                        selected: false,
                        child: [
                            {
                                name: 'c-2-1',
                                selected: false
                            }
                        ]
                    }
                ] 
            }
        ]
        }
    }
}
</script>

<style>

</style>